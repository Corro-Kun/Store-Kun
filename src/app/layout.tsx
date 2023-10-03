import "./global.css"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Store-Kun",
  description: "Tienda de software originales de código abierto.",
};

export default function RootLayout({children,}:{children: React.ReactNode;}){
  return (
    <html lang="es" >
      <body>
        {children}
      </body>
    </html>
  );
}
