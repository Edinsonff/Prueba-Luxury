import '../app/styles/globals.css'
import Footer from './components/Footer';
import Header from './components/Header';
import TopBar from './components/TopBar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
        id="light-favicon"
        rel="icon"
        href="https://img.icons8.com/?size=100&id=8jtWwDnLbewm&format=png&color=000000"
        type="image/png"
      />
      </head>
      <body className='bg-gray-100'>
        <TopBar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}