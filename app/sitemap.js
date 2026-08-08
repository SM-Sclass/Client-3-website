export default function sitemap() {
  const baseUrl = 'https://checkmatepdi.com';

  const corridors = [
    '/car-inspection-south-mumbai',
    '/car-inspection-bandra-andheri',
    '/car-inspection-goregaon-borivali',
    '/car-inspection-mira-virar',
    '/car-inspection-thane',
    '/car-inspection-kalyan-dombivli',
  ];

  const corridorEntries = corridors.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    ...corridorEntries,
  ];
}
