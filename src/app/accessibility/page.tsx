import type { Metadata } from "next";
import { site } from "@/lib/site";
import { LegalPage, LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "How the R & R Remodel and Repair website is built to be usable with a keyboard, a screen reader or reduced motion, what we have tested, and how to report a problem.",
  alternates: { canonical: "/accessibility/" },
};

export default function Accessibility() {
  return (
    <LegalPage
      title="Accessibility Statement"
      intro="We want this site to work for everyone, including people using a keyboard, a screen reader, or a phone with motion turned down."
    >
      <LegalSection heading="What we aim for">
        <p>
          We build to the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA. That
          is a standard, not a certificate, and we treat it as something to keep working
          at rather than something finished.
        </p>
      </LegalSection>

      <LegalSection heading="What this site does">
        <ul className="list-disc space-y-2 pl-5">
          <li>Every control, including the before and after slider, can be reached and operated with a keyboard.</li>
          <li>The slider also responds to the arrow keys, Home and End, and reports its position to screen readers.</li>
          <li>Photographs that carry meaning have written descriptions. Decorative images are hidden from screen readers so they do not add noise.</li>
          <li>If your device is set to reduce motion, the animations do not run.</li>
          <li>If JavaScript does not load, the content still appears rather than staying invisible.</li>
          <li>The navigation works at every screen size, and the menu can be opened and closed on a phone.</li>
          <li>Text reflows without sideways scrolling down to a 320 pixel wide screen.</li>
          <li>Buttons and links are sized for a fingertip, and the call button stays within thumb reach on a phone.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="Known limitations">
        <p>
          The before and after slider is a visual comparison. The written description of
          each photograph tells you what changed, but the drag interaction itself does not
          convey anything extra to a screen reader beyond that description.
        </p>
        <p>
          We have not had this site audited by an independent accessibility specialist.
          Our checks are our own.
        </p>
      </LegalSection>

      <LegalSection heading="Tell us if something does not work">
        <p>
          If any part of this site is hard to use, we want to hear about it, and we will
          fix what we can. Call{" "}
          <a className="font-medium text-brass-deep underline" href={site.phoneHref}>
            {site.phoneDisplay}
          </a>{" "}
          or email{" "}
          <a className="font-medium text-brass-deep underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          . Please tell us the page and what happened, and we will reply.
        </p>
        <p>
          If you would rather not use the website at all, call us and we will handle your
          estimate over the phone.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
