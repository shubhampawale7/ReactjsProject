
import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <title>To-Do-App</title>
      <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
