import RootLayout from "@/app/RooLayout";
import { Suspense } from 'react';
import Image from "next/image";
import data from "@/app/utils/data";
import Title from "@/app/components/Title";
import { Info, Award, CheckCircle } from 'lucide-react';
import { PageHeader } from "@/app/components/pageHeader";
import { generateMetadata as createPageMetadata } from "@/app/utils/metaData";

export async function generateMetadata({ params }) {
  const recoveryData = data.find((card) => card.id === params.id);
  if (!recoveryData) {
    return {
      title: "Page Not Found",
      description: "The page you are looking for does not exist.",
    };
  }
  return createPageMetadata({
    title: recoveryData.title,
    description: recoveryData.description || "Detailed information about this rehab center.",
    path: `/luxury-rehab-centers/${params.id}`,
    image: recoveryData.images?.[0] || "/default-og.jpg",
  });
}

const GalleryImage = ({ src, index, alt }) => (
  <div className="relative aspect-video w-full overflow-hidden rounded-lg">
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover transition-transform hover:scale-105"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      priority={index === 0}
    />
  </div>
);

const IconListItem = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-4 text-sm">
    <Icon className="h-5 w-5 text-primary flex-shrink-0" />
    <span className="font-semibold">{label}:</span>
    <span>{value}</span>
  </div>
);

const FeatureList = ({ items, title }) => (
  <section aria-labelledby={title.toLowerCase().replace(/\s+/g, '-')}>
    <Title
      title={title}
      id={title.toLowerCase().replace(/\s+/g, '-')}
    />
    <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {items?.map((item, index) => (
        <li key={index} className="flex items-center gap-2">
          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default function RecoveryDetails({ params }) {
  const { id } = params;
  const recoveryData = data.find((card) => card.id === id);

  if (!recoveryData) {
    return (
      <RootLayout>
        <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center" role="alert">
          <h1 className="text-3xl font-bold text-colorText">Page Not Found</h1>
          <p className="text-colorTitle">The page you are looking for does not exist.</p>
        </div>
      </RootLayout>
    );
  }

  return (
    <RootLayout>
      <main className="container mx-auto px-4 py-8 text-colorText">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <PageHeader
              backgroundImage={recoveryData.images?.[0]}
              title={recoveryData.title}
              subtitle={`Luxury Drug and Alcohol Rehab Center in ${recoveryData.location}`}
              lastUpdated="May 13, 2024"
            />
            <article className="bg-white p-6 rounded-lg shadow-sm">

              <h1 className="text-3xl font-bold mb-4">{recoveryData.title}</h1>

              <div className="relative aspect-video w-full mb-6 overflow-hidden rounded-lg">
                <Image
                  src={recoveryData.images?.[0]}
                  alt={`Main image of ${recoveryData.title}`}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1200px) 100vw, 66vw"
                />
              </div>

              <section aria-labelledby="general-info">
                <Title title="General Info" id="general-info" />
                <div className="mt-4 space-y-4">
                  <IconListItem
                    icon={Info}
                    label="Services"
                    value={recoveryData.generalInfo?.services}
                  />
                  <IconListItem
                    icon={Award}
                    label="Accreditations"
                    value={recoveryData.generalInfo?.accreditations?.join(", ")}
                  />
                </div>
              </section>

              <section aria-labelledby="highlights" className="mt-6">
                <Title title="Highlights" id="highlights" />
                <ul className="list-disc list-inside mt-4 space-y-2">
                  {recoveryData.generalInfo?.highlights?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>

              <FeatureList
                title="Treatment Programs and Services"
                items={recoveryData.treatmentProgramsAndServices}
              />

              <FeatureList
                title="What we treat"
                items={recoveryData.whatWeTreat}
              />

              <section aria-labelledby="about" className="mt-6">
                <Title title="About" id="about" />
                <p className="mt-4">{recoveryData.about}</p>
              </section>

              <section aria-labelledby="insurance" className="mt-6">
                <Title title="Insurance" id="insurance" />
                <p className="mt-4">{recoveryData.insurance}</p>
              </section>
            </article>
          </div>


          <aside className="space-y-8">
            <div className="hidden bg-gray-200 rounded-lg shadow-lg aspect-square lg:flex items-center justify-center">
              <p>Map Placeholder</p>
            </div>

            <Suspense fallback={<div className="animate-pulse bg-gray-200 h-64 rounded-lg" />}>
              <div className="space-y-4">
                {recoveryData.images?.map((image, index) => (
                  <GalleryImage
                    key={index}
                    src={image}
                    index={index}
                    alt={`Gallery image ${index + 1} of ${recoveryData.title}`}
                  />
                ))}
              </div>
            </Suspense>
          </aside>
        </div>
      </main>
    </RootLayout>
  );
}