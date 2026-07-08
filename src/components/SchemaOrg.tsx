import type { ReactElement } from 'react'

const SITE_URL = 'https://mvnic44.github.io/react_native'

const SchemaOrg = (): ReactElement => {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${SITE_URL}/#person`,
        name: 'Mayur Varshney',
        url: `${SITE_URL}/`,
        image: `${SITE_URL}/og-cover.png`,
        jobTitle: 'Senior React Native Application Developer',
        description:
          'Senior React Native Application Developer specializing in the Expo Ecosystem, TypeScript, Native Bridges/Modules, JSI-level performance engineering, and end-to-end iOS/Android store deployments.',
        email: 'mailto:mvnic.44@gmail.com',
        telephone: '+918077970650',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Noida',
          addressCountry: 'India',
        },
        sameAs: [
          'https://www.linkedin.com/in/mayurvarshney/',
          'https://github.com/mvnic44',
        ],
        knowsAbout: [
          'React Native',
          'Expo Ecosystem',
          'TypeScript',
          'Native Modules',
          'Native Bridges',
          'JSI (JavaScript Interface)',
          'Mobile Performance Optimization',
          '60 FPS Rendering',
          'iOS App Store Deployment',
          'Google Play Store Deployment',
          'Node.js',
          'React',
        ],
        hasOccupation: {
          '@type': 'Occupation',
          name: 'React Native Application Developer',
          skills:
            'React Native, Expo, TypeScript, JSI, Native Modules, Performance Optimization, iOS/Android Deployment',
        },
      },
      {
        '@type': 'ProfilePage',
        '@id': `${SITE_URL}/#profilepage`,
        mainEntity: { '@id': `${SITE_URL}/#person` },
        url: `${SITE_URL}/`,
        name: 'Mayur Varshney — React Native Developer Portfolio',
        inLanguage: 'en-US',
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: 'Mayur Varshney | React Native Developer Portfolio',
        publisher: { '@id': `${SITE_URL}/#person` },
        inLanguage: 'en-US',
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
    />
  )
}

export default SchemaOrg
