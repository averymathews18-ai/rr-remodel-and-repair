import type { Metadata } from "next";
import { site } from "@/lib/site";
import { LegalPage, LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "What R & R Remodel and Repair collects when you ask for an estimate, how it is used, and how to have it deleted. This site sets no cookies and runs no tracking.",
  alternates: { canonical: "/privacy/" },
};

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro={`How ${site.legal.entity} handles information from this website.`}
    >
      <LegalSection heading="The short version">
        <p>
          We do not run analytics, advertising pixels or tracking of any kind on this
          site. It sets no cookies. The only information we ever receive from this
          website is what you choose to type into the estimate form, and we use that
          only to get back to you about your project. We do not sell it.
        </p>
      </LegalSection>

      <LegalSection heading="Who we are">
        <p>
          {site.legal.entity}, a remodeling and home repair company serving Southwest
          Florida. You can reach us by phone at{" "}
          <a className="font-medium text-brass-deep underline" href={site.phoneHref}>
            {site.phoneDisplay}
          </a>{" "}
          or by email at{" "}
          <a className="font-medium text-brass-deep underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection heading="What the estimate form collects">
        <p>
          If you send us a request through the form, we receive the name, phone number,
          email address, project type, budget range and message you enter. We ask for
          these so we can understand the job and call or email you back about it.
        </p>
        <p className="rounded-xl border border-line bg-bone/70 p-4 text-sm">
          <strong className="font-semibold text-ink">Current status:</strong> the form on
          this site is not connected to a mail service yet, so nothing typed into it is
          transmitted or stored anywhere at this time. Please call or email us instead.
          We will update this page on the day the form goes live.
        </p>
      </LegalSection>

      <LegalSection heading="How we use it, and what we never do">
        <p>
          We use what you send to respond to your request, prepare an estimate, and carry
          out work you hire us for. We do not sell your information, rent it, or share it
          with advertisers. We may share it with a person or company helping us deliver
          your project, such as a supplier or subcontractor, and only the part of it they
          need.
        </p>
        <p>
          If you give us permission to text you, we use your number only to reach you
          about your own project. You can withdraw that permission at any time by telling
          us, by replying STOP to a text, or by calling the number above.
        </p>
      </LegalSection>

      <LegalSection heading="Cookies and tracking">
        <p>
          This site sets no cookies and loads no third party scripts, fonts, maps, chat
          widgets or advertising pixels. Everything it needs is served from the site
          itself. Nothing follows you to other websites. If that ever changes, this page
          will say so before the change goes live.
        </p>
        <p>
          Our hosting provider keeps standard server logs, which can include your IP
          address and browser type, for security and reliability. We do not use those
          logs to build a profile of you.
        </p>
      </LegalSection>

      <LegalSection heading="How long we keep it">
        <p>
          We keep estimate requests and project records for as long as we are working
          with you and afterwards for as long as we may need them for warranty, tax or
          legal reasons. If you ask us to delete yours and we are not required to keep
          it, we will.
        </p>
      </LegalSection>

      <LegalSection heading="Your choices">
        <p>
          You can ask us what we hold about you, ask us to correct it, or ask us to
          delete it. Call{" "}
          <a className="font-medium text-brass-deep underline" href={site.phoneHref}>
            {site.phoneDisplay}
          </a>{" "}
          or email{" "}
          <a className="font-medium text-brass-deep underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>{" "}
          and tell us what you want done. We will confirm when it is handled.
        </p>
      </LegalSection>

      <LegalSection heading="Children">
        <p>
          This site is meant for adults hiring a contractor. It is not directed at
          children under 13 and we do not knowingly collect their information. If you
          believe a child sent us something, contact us and we will delete it.
        </p>
      </LegalSection>

      <LegalSection heading="Changes to this policy">
        <p>
          If we change how this site handles information, we will update this page and
          change the date at the top.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
