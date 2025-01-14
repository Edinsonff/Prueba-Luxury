import Image from "next/image";
import Link from "next/link";
import { CalendarDays } from "lucide-react";
import PropTypes from "prop-types";

export default function Card({ id, image, title, description, date }) {
  return (
    <article className="group relative flex h-full flex-col rounded-lg bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image}
          alt={`Featured image for ${title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority={false}
        />
        <div 
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-0"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <Link 
          href={`/luxury-rehab-centers/${id}`}
          className="group/link outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <h2 className="text-lg font-semibold text-colorTitle transition-colors group-hover/link:text-primary">
            {title}
          </h2>
        </Link>

        <p className="mt-2 flex-1 text-base text-gray-600">
          {description}
        </p>
      </div>

      <div className="border-t border-gray-100 px-5 py-3">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <CalendarDays className="h-4 w-4" aria-hidden="true" />
          <time dateTime={new Date(date).toISOString()}>
            {date}
          </time>
        </div>
      </div>
    </article>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};