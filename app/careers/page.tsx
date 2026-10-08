import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import Sec from "../components/Sec";
import EmailIcon from "../components/EmailIcon";
import { SITE_URL, EMAIL, SIGNUP_URL, socials } from "@/lib/site";
import { motion } from "framer-motion";

// Metadata for the careers page
export const metadata = {
  title: "Careers at Kayven",
  description: "Current job openings and how to join the Kayven team."
};

export default function CareersPage() {
  return (
    <>
      {/* Page Hero */}
      <PageHero
        label="Careers"
        headline="Careers at Kayven"
        intro="Honest empty state: There are no open roles right now."
      />

      {/* Content Sections */}
      <section className="pb-20">
        <Sec
          id="careers"
          n="36"
          label="CAREERS"
          title="Careers at Kayven"
        >
          <div className="border border-black p-8 text-center">
            <p className="lbl mb-4">There are no open roles right now.</p>
            <div className="mt-6 flex justify-center space-x-4">
              <a
                href="mailto:shiva@kayven.in?subject=Careers"
                className="btn"
              >
                Introduce yourself
              </a>
            </div>
            <p className="mt-6 text-base">
              Kayven is an AI-native personalised health platform that brings nutrition, fitness, progress tracking and intelligent guidance into one ecosystem. We help people understand their health, track what matters, and receive personalised recommendations across nutrition, fitness and everyday health behaviour.
            </p>
          </div>
        </Sec>
      </section>

      {/* CTA Band */}
      <CtaBand headline="Start your health journey today" />
    </>
  );
}