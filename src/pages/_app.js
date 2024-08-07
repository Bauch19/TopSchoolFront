// src/pages/_app.js
import './globals.css'; // Importa el CSS global aquí

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
