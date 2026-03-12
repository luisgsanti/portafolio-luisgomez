# Portafolio Luis Gomez

Portafolio profesional desarrollado con Angular y Tailwind CSS para presentar perfil, experiencia, proyectos y un formulario de contacto funcional.

## Demo

- Produccion: [https://portafolio-luisgomez.web.app/](https://portafolio-luisgomez.web.app/)

## Caracteristicas principales

- Diseno moderno, responsivo y consistente en todas las secciones.
- Navegacion fija con scroll suave entre secciones.
- Secciones: Inicio, Sobre mi, Experiencia, Proyectos, Contacto y Footer.
- Carrusel de proyectos con controles y barra de progreso.
- Formulario de contacto con validaciones y envio directo por EmailJS.
- Microinteracciones y animaciones para mejorar experiencia de usuario.

## Stack tecnologico

- Angular 18 (standalone components)
- TypeScript
- Tailwind CSS
- Font Awesome
- Firebase Hosting (deploy)
- EmailJS (envio de mensajes desde formulario)

## Instalacion y ejecucion local

1. Clona el repositorio:

```bash
git clone https://github.com/luisgsanti/portafolio-luisgomez.git
cd portafolio-luisgomez
```

2. Instala dependencias:

```bash
npm install
```

3. Ejecuta en modo desarrollo:

```bash
npm start
```

4. Abre en navegador:

```txt
http://localhost:4200
```

## Scripts disponibles

- `npm start`: inicia servidor de desarrollo.
- `npm run build`: genera build de produccion.
- `npm run watch`: build continuo en modo desarrollo.
- `npm test`: ejecuta pruebas unitarias.

## Configuracion de contacto (EmailJS)

El componente de contacto usa configuracion desde `environment`:

- `src/environments/environment.ts`
- `src/environments/environment.development.ts`

Campos requeridos:

- `serviceId`
- `templateId`
- `publicKey`
- `allowedDomains`
- `emailDestino`

### Recomendaciones de seguridad

- Restringe los dominios permitidos en el panel de EmailJS.
- Manten `localhost` solo para desarrollo.
- Para produccion, permite unicamente tu dominio final.

## Estructura base del proyecto

```txt
src/
  app/
    components/
      home/
      perfil/
      experiencia/
      proyectos/
      contacto/
      navbar/
      footer/
  environments/
  styles.css
  index.html
```

## Roadmap corto

- Mejorar README con capturas o GIF del sitio.
- Ajustar pruebas unitarias a comportamiento real del portafolio.
- Seguir optimizando SEO tecnico y accesibilidad.

## Autor

Luis Eduardo Gomez Santiago  
Ingeniero de Sistemas - Desarrollador Full Stack
https://portafolio-luisgomez.web.app/
# PortafolioLuisgomez

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
