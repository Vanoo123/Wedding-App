"use client"
import { RootLayoutProps } from '@/app/[lng]/layout';
import { useTranslation } from '@/app/i18n';
import { usePathname } from 'next/navigation'

const Metadatacomp: React.FC<RootLayoutProps> = async ({ children, params: { lng } }) => {
    const pathname = usePathname()

    return useTranslation(lng).then((res) => {
        const t = res.t;
       return ( <head>
                    <title>{t('metaData.title')}</title>
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
                    <link rel="shortcut icon" href="/favicon.ico" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                    <link rel="apple-touch-icon" sizes="57x57" href="/assets/apple-icon-57x57.png"/>
                    <link rel="apple-touch-icon" sizes="60x60" href="/assets/apple-icon-60x60.png"/>
                    <link rel="apple-touch-icon" sizes="72x72" href="/assets/apple-icon-72x72.png"/>
                    <link rel="apple-touch-icon" sizes="76x76" href="/assets/apple-icon-76x76.png"/>
                    <link rel="apple-touch-icon" sizes="114x114" href="/assets/apple-icon-114x114.png"/>
                    <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
                    <link rel="apple-touch-icon" sizes="144x144" href="/assets/apple-icon-144x144.png"/>
                    <link rel="apple-touch-icon" sizes="152x152" href="/assets/apple-icon-152x152.png"/>
                    <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-icon-180x180.png"/>
                    <link rel="icon" type="image/png" sizes="192x192"  href="/assets/android-icon-192x192.png"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="96x96" href="/assets/favicon-96x96.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png"/>
                    <link rel="icon" type="image/svg+xml" href="/favicon.svg" sizes="120x120"/>
                    <link rel="icon" type="image/svg+xml" href="/favicon.svg" sizes="32x32"/>
                    <link rel="icon" type="image/svg+xml" href="/favicon.svg" sizes="16x16"/>
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
                    <meta name="msapplication-TileColor" content="#da532c"/>
                    <meta name="msapplication-TileImage" content="/assets/ms-icon-144x144.png"/>
                    <link rel="manifest" href="/assets/manifest.json" />
                    <meta name="description" content={t('metaData.description')}/>
                    <meta name='google-site-verification' content='PUy3W-uUr3Rz0eMwYpPe5-8THu0lWbvXWAmYl_5wjDc'/>
                    <meta name="author" content="Marriage" />
                    <meta name="publisher" content="I_T" />
                    <meta property='og:url' content='https://marriageg.com/en'/>
                    <meta property='og:type' content='website'/>
                    <meta property='og:title' content={t('metaData.title')}/>
                    <meta property='og:description' content={t('metaData.description')}/>
                    <meta property='og:image' content='https://i.ibb.co/HP0SV4d/wedding.png'/>
                    <meta name='theme-color' content='#fffff'/>      
                    <meta property='color-scheme' content='white only'/>
                    <meta property='twitter:url' content='https://marriageg.com/en'/>
                    <meta name='twitter:site' content='MarriageG.com'/>
                    <meta name='twitter:title' content={t('metaData.title')}/>
                    <meta name="twitter:description"  content={t('metaData.description')}/>
                    <meta name='twitter:card' content='summary_large_image'/>
                    <meta name='twitter:image' content='https://i.ibb.co/HP0SV4d/wedding.png'/>
                    <link rel="canonical" href={`https://marriageg.com${pathname}`}/>
                    <link rel="alternate" href="https://marriageg.com/ka" hrefLang="ka"/>
                    <link rel="alternate" href="https://marriageg.com/ru" hrefLang="ru"/>
                    <link rel="alternate" href="https://marriageg.com/de" hrefLang="de"/>
                    <link rel="alternate" href="https://marriageg.com/ar" hrefLang="ar"/>
                    <link rel="alternate" href="https://marriageg.com/zh" hrefLang="zh"/>
                    <script type="application/ld+json" dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": t('faq.question1'),
                                    "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": t('faq.answer1')
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": t('faq.question2'),
                                    "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": t('faq.answer2')
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": t('faq.question3'),
                                    "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": t('faq.answer3')
                                    }
                                },
                            ]
                        })
                    }} />
                </head>
            )
    })
}

export default Metadatacomp