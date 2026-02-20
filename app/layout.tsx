import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import Starfield from "@/app/ui/starfield";
import favicon from "@/app/favicon.ico"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Mateo GUIDI's Portfolio",
  description: "The portfolio of Mateo GUIDI",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-P48WN69R');`}
        </script>
        <script id="sw-register" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js').then(function(registration) {
                  console.log('ServiceWorker registration successful with scope: ', registration.scope);
                }, function(err) {
                  console.log('ServiceWorker registration failed: ', err);
                });
              });
            }
          `}
        </script>
        <title></title>
        <link rel="icon" href={favicon.src} sizes="any" />
        <meta property="og:title" content="Mateo GUIDI's Portfolio" />
        <meta property="og:description" content="Take a look on all my skills and my projects." />
        <meta property="og:url" content="https://mateoguidi.fr" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Take a look on all Mateo's skills and projects." />
        <meta name="keywords" content="portfolio, dev, mateo, mateo guidi, matéo guidi, french, videogame, unity, gamedev" />
        <link rel="canonical" href="https://mateoguidi.fr" />
        <meta name="robots" content="index, follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mateo GUIDI's Portfolio" />
        <meta name="twitter:description" content="Take a look on all my skills and my projects." />
        <meta name="theme-color" content="#000" />
      </head>
      <body
        className={`${geistSans.variable} antialiased container font-(family-name:--font-geist-sans) text-gray-300 mx-auto max-w-4xl bg-gray-950`}
      >
        <Starfield
            starCount={1000}
            starColor={[255, 255, 255]}
            speedFactor={0.01}
        />
        {children}
      </body>
    </html>
  )
}
