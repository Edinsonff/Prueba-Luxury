import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

const navigationLinks = [
  { href: "/", text: "Home" },
  { href: "/", text: "Privacy Policy" },
  { href: "/", text: "Contact Us" },
  { href: "/", text: "About Us" },
  { href: "/", text: "AA Meetings Near Me" },
  { href: "/", text: "Therapist Near Me" },
  { href: "/", text: "Rehabs Near Me" },
  { href: "/", text: "Halfway House Near Me" },
];

const websiteUrl = "https://www.recoveryrehab.co";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-teal-900 py-12 text-white" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-8">
          <nav 
            className="grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:justify-center sm:gap-x-6 sm:gap-y-3"
            aria-label="Footer navigation"
          >
            {navigationLinks.map((link) => (
              <Link
                key={link.text}
                href={link.href}
                className="group relative text-sm text-gray-300 transition-colors hover:text-blue-400"
              >
                <span className="relative">
                  {link.text}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-400 transition-all duration-300 group-hover:w-full" />
                </span>
              </Link>
            ))}
          </nav>

          <div className="space-y-4 text-sm text-gray-300 flex flex-col items-center">
            <p className="max-w-3xl">
              <Link
                href={websiteUrl}
                className="group inline-flex items-center gap-1 text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.recoveryrehab.co
                <ExternalLink className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
              </Link>
              {' '}aims to provide information about addiction, alcoholism, and the
              importance of rehabilitation to overcome drug addiction and to
              manage a sober life for those who are struggling with substance
              abuse disorders and mental health problems.
            </p>
            
            <div className="max-w-3xl rounded-lg bg-teal-800/50 p-4">
              <p className="font-medium">
                <strong className="text-yellow-300">Medical Disclaimer:</strong>{' '}
                The information we provide is not intended to be a substitute for
                professional medical advice. Always seek the advice of your
                physician or other qualified health providers with any questions you
                may have regarding a mental health condition.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 border-t border-teal-800 pt-6 text-sm text-gray-400">
            <p>
              &copy; {currentYear} All Rights Reserved{' '}
              <Link
                href={websiteUrl}
                className="text-blue-400 transition-colors hover:text-blue-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.recoveryrehab.co
              </Link>
            </p>
            
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'Organization',
                  name: 'Recovery Rehab',
                  url: websiteUrl,
                  description: 'Information about addiction, alcoholism, and rehabilitation.',
                  sameAs: [
                    // Add your social media URLs here
                  ]
                })
              }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}