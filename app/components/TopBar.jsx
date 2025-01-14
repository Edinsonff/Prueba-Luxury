import Link from 'next/link';
import { Mail, HelpCircle, ExternalLink } from 'lucide-react';

const contactLinks = [
  {
    href: '/news-blog',
    label: 'News & Blog'
  },
  {
    href: '/get-listed',
    label: 'Get Listed'
  }
];

export default function TopBar() {
  const email = 'contact@recoveryrehab.co';

  return (
    <div className="bg-teal-800 py-2 text-white" role="banner">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <HelpCircle className="h-4 w-4 text-red-400" aria-hidden="true" />
              <span className="text-sm hover:text-blue-200 transition-colors duration-200">
                Have any questions?
              </span>
            </div>

            <div 
              className="hidden sm:block text-gray-400" 
              aria-hidden="true"
            >
              |
            </div>

            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-red-400" aria-hidden="true" />
              <a
                href={`mailto:${email}`}
                className="group flex items-center gap-1 text-sm hover:text-blue-200 transition-colors duration-200"
                aria-label={`Send email to ${email}`}
              >
                {email}
                <ExternalLink 
                  className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" 
                  aria-hidden="true" 
                />
              </a>
            </div>
          </div>

          <nav 
            className="flex items-center gap-6" 
            aria-label="Top bar navigation"
          >
            {contactLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="group relative text-sm font-medium text-white"
              >
                <span className="relative">
                  {label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-200 transition-all duration-200 group-hover:w-full" />
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}