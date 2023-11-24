'use clinet';

import '../globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LangProvider from '@/components/LangProvider'; 
import { ReactNode } from 'react';
import { useTranslation } from '../i18n';

export interface RootLayoutProps {
  children: ReactNode;
  params: {
    lng: string;
  };
}

export async function generateStaticParams() {
  return "/";
}

const RootLayout: React.FC<RootLayoutProps> = async ({ children, params: { lng } }) => {
  return useTranslation(lng).then((res) => {
    const t = res.t;
  return (
    <html lang={lng} className='scroll-smooth'>
      <head>

      <title>{t('metaData.title')}</title>
      <link rel="icon" href="/assets/favicon.ico"/>
      <link rel="manifest" href="/assets/manifest.json" />
      <meta name="description" content={t('metaData.description')}/>
      <meta property='og:url' content='https://wedding-guide-app.vercel.app/en'/>
      <meta property='og:type' content='website'/>
      <meta property='og:title' content={t('metaData.title')}/>
      <meta property='og:description' content={t('metaData.description')}/>
      <meta property='og:image' content='https://i.ibb.co/Ss3fTq6/Wedding-Georgia.jpg'/>
      <meta name='theme-color' content='#fffff'/>      
      <meta property='color-scheme' content='white only'/>
      <meta property='twitter:url' content='https://wedding-guide-app.vercel.app/en'/>
      <meta name="twitter:description"  content={t('metaData.description')}/>
      <meta name='twitter:card' content='summary_large_image'/>
      <meta name='twitter:image' content='https://i.ibb.co/Ss3fTq6/Wedding-Georgia.jpg'/>
      <link rel="alternate" href="https://marriageg.com/en" hrefLang="x-default"/>
      <link rel="alternate" href="https://marriageg.com/ka" hrefLang="ka"/>
      <link rel="alternate" href="https://marriageg.com/ru" hrefLang="ru"/>
      <link rel="alternate" href="https://marriageg.com/de" hrefLang="de"/>
      <link rel="alternate" href="https://marriageg.com/ar" hrefLang="ar"/>
      <link rel="alternate" href="https://marriageg.com/zh" hrefLang="zh"/>
      {/* icons */}
      </head>
      <body className='scrollbar-thin scrollbar-thumb-green-50 scrollbar-track-gray-10'>
        <LangProvider params={{lng}}>
            <Navbar />
            <main className='relative overflow-hidden'>
              {children}          
            </main>
            <Footer />
        </LangProvider>
        <script src="/assets/js/main.js" async defer></script>
      </body>
    </html>
    )
  })
}

export default RootLayout;


