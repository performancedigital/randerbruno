import type { Metadata } from 'next';
import { Montserrat, Inter } from 'next/font/google';
import { SEO } from '@/lib/constants';
import StickyMobileCTA from '@/components/ui/StickyMobileCTA';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: SEO.title,
  description: SEO.description,
  keywords: SEO.keywords,
  robots: 'index, follow',
  openGraph: {
    title: SEO.title,
    description: SEO.description,
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO.title,
    description: SEO.description,
    images: ['/images/og-image.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'Person',
                name: 'Rander Bruno',
                jobTitle: 'Engenheiro Civil',
                sameAs: [
                  'https://instagram.com/eng.rander',
                  'https://instagram.com/randerbruno.eng',
                ],
              },
              {
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'RS Engenharia',
                founder: { '@type': 'Person', name: 'Rander Bruno' },
              },
            ]),
          }}
        />
      </head>
      <body className="pb-16 md:pb-0">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-gold focus:text-black focus:rounded">
          Pular para o conteúdo
        </a>
        <main id="main-content">{children}</main>
        <StickyMobileCTA />
      </body>
    </html>
  );
}
