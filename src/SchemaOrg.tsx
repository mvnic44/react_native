const SITE_URL = "https://yourdomain.com";

const SchemaOrg = (): React.ReactElement => {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "Mayur Varshney",
        url: SITE_URL,
        jobTitle: "Senior React Native Application Developer",
        description:
          "Senior React Native Developer specializing in Expo, TypeScript, Native Modules, JSI, and iOS/Android deployments.",
        sameAs: ["https://www.linkedin.com/in/mayurvarshney"],
        knowsAbout: [
          "React Native",
          "Expo",
          "TypeScript",
          "JSI",
          "Native Modules",
          "Performance Optimization",
          "iOS Deployment",
          "Android Deployment",
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
    />
  );
};

export default SchemaOrg;
