import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);

  emailDestino = 'luisgsanti11@gmail.com';
  // Configuración de EmailJS (https://dashboard.emailjs.com/)
  emailJsServiceId = 'service_qc4n23g';
  emailJsTemplateId = 'template_dgkf4nj';
  emailJsPublicKey = 'W-whQh0xoL0OrqWv0';

  formSubmitted = false;
  isSending = false;
  sendSuccess = false;
  sendError = '';

  contactForm = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    asunto: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(120)]],
    mensaje: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1500)]],
  });

  get f() {
    return this.contactForm.controls;
  }

  async enviarCorreo(): Promise<void> {
    this.formSubmitted = true;
    this.sendSuccess = false;
    this.sendError = '';

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    if (
      this.emailJsServiceId.startsWith('TU_') ||
      this.emailJsTemplateId.startsWith('TU_') ||
      this.emailJsPublicKey.startsWith('TU_')
    ) {
      this.sendError = 'Configura EmailJS (service ID, template ID y public key) para habilitar el envío.';
      return;
    }

    const { nombre, email, asunto, mensaje } = this.contactForm.getRawValue();
    const payload = {
      service_id: this.emailJsServiceId,
      template_id: this.emailJsTemplateId,
      user_id: this.emailJsPublicKey,
      template_params: {
        to_email: this.emailDestino,
        from_name: nombre ?? '',
        from_email: email ?? '',
        subject: asunto ?? 'Contacto desde portafolio',
        message: mensaje ?? '',
      },
    };

    this.isSending = true;

    try {
      await firstValueFrom(
        this.http.post('https://api.emailjs.com/api/v1.0/email/send', payload, {
          responseType: 'text',
        })
      );

      this.sendSuccess = true;
      this.contactForm.reset();
      this.formSubmitted = false;
    } catch {
      this.sendError = 'No se pudo enviar el mensaje. Intenta nuevamente en unos segundos.';
    } finally {
      this.isSending = false;
    }
  }
}
