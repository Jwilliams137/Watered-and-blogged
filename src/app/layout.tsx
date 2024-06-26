import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import styles from './layout.module.css'
import Footer from '../../components/Footer/Footer'
import Nav from '../../components/Nav/Nav'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Watered & blogged",
  description: "A blog for the love of plants",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Open+Sans:wght@400;600&family=Pacifico&display=swap"
        />
        <style>{inter.className}</style>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Watered & Blogged" />
        <meta name="twitter:description" content="A blog for the love of plants" />
        <meta name="twitter:image" content="https://watered-and-blogged.netlify.app/twitter-image.jpg" />
        <meta name="twitter:image:type" content="image/jpeg" />
        <meta name="twitter:image:width" content="1194" />
        <meta name="twitter:image:height" content="630" />
        <meta property="og:url" content="https://watered-and-blogged.netlify.app/" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1194" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image" content="https://watered-and-blogged.netlify.app/opengraph-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Watered & Blogged" />
        <meta property="og:description" content="A blog for the love of plants" />        
      </head>
      <body className={styles.wrapper}>
        <Nav />
        
        <div className={styles.children_container}>
          {children}
        </div>
        <footer className={styles.footer}>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
