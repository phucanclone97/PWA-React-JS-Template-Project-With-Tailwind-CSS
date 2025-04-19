# Personal Information Form - Progressive Web App

### Features

- **Multi-language Support**: Vietnamese and English localization using react-i18next
- **Form Validation**: Complete field validation using react-hook-form
- **Progressive Web App**: Offline capability, installable on mobile devices
- **Responsive Design**: Built with Tailwind CSS for a mobile-first experience
- **Component Architecture**: Modular and reusable components
- **Icon System**: SVG icons in a dedicated icons directory

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/phucanclone97/PWA-React-JS-Template-Project-With-Tailwind-CSS.git
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

Your app will be running at `http://localhost:3000`. Open your browser to view the project.

## Project Structure

```
src/
├── components/       # UI components
│   ├── FormField.jsx # Reusable form field component
│   └── PersonalInfoForm.jsx # Main form component
├── icons/            # SVG icon components
├── locales/          # Translation files
│   ├── en/           # English translations
│   └── vi/           # Vietnamese translations
└── i18n.js           # i18n configuration
```

## Building for Production

Create a production-ready build with:

```bash
npm run build
```

The optimized files will be in the `build` directory. This build includes service worker registration for PWA functionality.

## PWA Features

This application includes:

- **Offline Support**: Core app functionality works without an internet connection
- **Installable**: Can be added to home screen on mobile devices
- **App Manifest**: Configured with appropriate icons and theme colors
- **Caching Strategies**: Uses a combination of precaching and runtime caching

## Testing the PWA

To test PWA functionality:

1. Build the application: `npm run build`
2. Serve the build folder: `serve -s build`
3. Access the application via the provided URL
4. Check the "Application" tab in browser DevTools to verify service worker and manifest

---

Built with React, Tailwind CSS, and react-hook-form.
