import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import Sec from "../components/Sec";
import { SITE_URL, EMAIL, SIGNUP_URL, socials } from "@/lib/site";
import LinkedInIcon from "../components/LinkedInIcon";
import InstagramIcon from "../components/InstagramIcon";
import EmailIcon from "../components/EmailIcon";
import { motion } from "framer-motion";

// Metadata for the team page
export const metadata = {
  title: "Team, Kayven",
  description: "Meet the founders of Kayven."
};

export default function TeamPage() {
  return (
    <>
      {/* Page Hero */}
      <PageHero
        label="Team"
        headline="Team, Kayven"
        intro="Get to know the founders behind Kayven."
      />

      {/* Content Sections */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
            {/* Shiva Kumar */}
            <div className="border border-black rounded-lg p-6">
              <div className="flex flex-col items-start">
                {/* Initials */}
                <div className="w-16 h-16 flex items-center justify-center bg-black text-white text-2xl font-bold mb-4">
                  SK
                </div>
                <h2 className="text-2xl font-bold mb-2">Shiva Kumar</h2>
                <h3 className="text-lg font-medium text-black mb-4">Founder & CEO</h3>
                <p className="mb-4">
                  Shiva Kumar is the founder of Kayven and leads product, technology, strategy and company building.
                </p>
                <p className="font-semibold mb-2">Background:</p>
                <ul className="list-disc list-inside space-y-1 mb-4 text-base">
                  <li>BTech CSE — AI</li>
                  <li>Dr. M.G.R. Educational and Research Institute</li>
                  <li>Chennai, India</li>
                </ul>
                <div className="flex space-x-4 mt-6">
                  <a
                    href={socials.shivaKumar.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Opens Shiva Kumar's LinkedIn in a new tab"
                    className="flex items-center space-x-2 text-black hover:underline"
                  >
                    <LinkedInIcon className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={socials.shivaKumar.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Opens Shiva Kumar's Instagram in a new tab"
                    className="flex items-center space-x-2 text-black hover:underline"
                  >
                    <InstagramIcon className="w-5 h-5" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href={`mailto:${socials.shivaKumar.email}`}
                    aria-label="Email Shiva Kumar"
                    className="flex items-center space-x-2 text-black hover:underline"
                  >
                    <EmailIcon className="w-5 h-5" />
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Nikita Soni */}
            <div className="border border-black rounded-lg p-6">
              <div className="flex flex-col items-start">
                {/* Initials */}
                <div className="w-16 h-16 flex items-center justify-center bg-black text-white text-2xl font-bold mb-4">
                  NS
                </div>
                <h2 className="text-2xl font-bold mb-2">Nikita Soni</h2>
                <h3 className="text-lg font-medium text-black mb-4">Co-founder & Head of Operations</h3>
                <p className="mb-4">
                  Nikita leads operations and supports company execution, coordination and business development.
                </p>
                <p className="font-semibold mb-2">Background:</p>
                <ul className="list-disc list-inside space-y-1 mb-4 text-base">
                  <li>Details from master doc section 33</li>
                  {/* We don't have specific background for Nikita in the master doc beyond what's in the team section, but we can leave it as is or note that it's from the doc. */}
                </ul>
                <div className="flex space-x-4 mt-6">
                  <a
                    href={socials.nikitaSoni.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Opens Nikita Soni's LinkedIn in a new tab"
                    className="flex items-center space-x-2 text-black hover:underline"
                  >
                    <LinkedInIcon className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={socials.nikitaSoni.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Opens Nikita Soni's Instagram in a new tab"
                    className="flex items-center space-x-2 text-black hover:underline"
                  >
                    <InstagramIcon className="w-5 h-5" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href={`mailto:${socials.nikitaSoni.email}`}
                    aria-label="Email Nikita Soni"
                    className="flex items-center space-x-2 text-black hover:underline"
                  >
                    <EmailIcon className="w-5 h-5" />
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand headline="Start your health journey today" />
    </>
  );
}