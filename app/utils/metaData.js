// utils/metadata.js
export function generateMetadata({ 
    title, 
    description, 
    path, 
    image = '/default-og.jpg' 
  }) {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.recoveryrehab.co';
  
    return {
      title: `${title} | Nombre de tu sitio`,
      description,
      metadataBase: new URL(baseUrl),
      openGraph: {
        title,
        description,
        url: `${baseUrl}${path}`,
        type: 'website',
        images: [{ url: `${baseUrl}${image}` }],
      },
      twitter: {
        card: 'summary_large_image',
        site: '@tu_usuario',
        title,
        description,
        images: [`${baseUrl}${image}`],
      },
      alternates: {
        canonical: `${baseUrl}${path}`,
      },
    };
  }
  