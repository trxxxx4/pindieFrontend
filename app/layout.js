
import "./globals.css";
import { App } from "./App";

export const metadata = {
  title: 'Pindie',
  description: 'Портал инди-игр от студентов Яндекс Практикума',
}


export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link type="image/svg" rel="icon" href="./images/logo.svg"></link>
      <body>
      
        
      <App>{children}</App>
        
        
      

        </body>
    </html>
  );
}
