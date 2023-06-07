import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
	title: 'Gin Clandestino - Secretly Distilled',
	description: 'Gin Clandestino - Secretly Distilled',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
