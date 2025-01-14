import PropTypes from 'prop-types';
import Link from 'next/link';

import Image from "next/image";

export function HeroHeader({ title, subtitle, lastUpdated = '', backgroundImage }) {
  return (
    <header className="relative text-white mb-8">
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
            className="z-0"
          />
          <div
            className="absolute inset-0 transition-all duration-300"
            style={{
              backgroundColor: "transparent",
              backgroundImage: "linear-gradient(70deg, #0A454D 100%, #01D6A300 36%)",
              opacity: 0.8,
            }}
            aria-hidden="true"
          />
        </div>
      )}
      <div className="relative z-10 container mx-auto lg:max-w-5xl p-10">
        <h1 className="text-xl font-bold mb-1">{title}</h1>
        <p className="text-[11px] text-slate-300 mb-1">{subtitle}</p>
        <hr className="border-gray-400 mb-1" />
        {lastUpdated && (
          <p className="text-[10px] text-lastUpdated">
            Last Updated On: <span>{lastUpdated}</span>
          </p>
        )}
      </div>
    </header>
  );
}



export function InfoBanner({ phone = '1-800-123-4567' }) {
  return (
    <div className="border-2 border-customColor flex flex-col md:flex-row items-stretch">
      <div className="flex items-center justify-center bg-white px-4 py-2 w-full">
        <p className="text-customColor text-lg font-medium text-center">
          For More Information On Drug & Alcohol Rehabilitation Call:
        </p>
      </div>
      <Link
        href={`tel:${phone.replace(/\D/g, '')}`}
        className="bg-customColor text-white text-xl font-bold flex items-center justify-center px-6 py-2 whitespace-nowrap transition-all"
      >
        {phone}
      </Link>
    </div>
  );
}

export function PageHeader({ title, subtitle, lastUpdated, phone, backgroundImage }) {
  return (
    <div className="mb-8">
      <HeroHeader
        title={title}
        subtitle={subtitle}
        lastUpdated={lastUpdated}
        backgroundImage={backgroundImage}

      />
      <InfoBanner phone={phone} />
    </div>
  );
}

HeroHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  lastUpdated: PropTypes.string,
};

InfoBanner.propTypes = {
  phone: PropTypes.string.isRequired,
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  lastUpdated: PropTypes.string,
  phone: PropTypes.string.isRequired,
};