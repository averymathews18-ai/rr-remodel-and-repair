import type { Metadata } from "next";
import { site } from "@/lib/site";
import { LegalPage, LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms for using the R & R Remodel and Repair website, including how estimates work, what the project photos show, and the law that governs these terms.",
  alternates: { canonical: "/terms/" },
};

export default function Terms() {
  return (
    <LegalPage
      title="Terms of Use"
      intro={`The rules for using this website, operated by ${site.legal.entity}.`}
    >
      <LegalSection heading="Using this site">
        <p>
          By using this website you accept these terms. If you do not agree with them,
          please do not use the site.
        </p>
      </LegalSection>

      <LegalSection heading="This site is information, not a contract">
        <p>
          The pages here describe the kind of work we do. Nothing on this website is an
          offer to perform work at a particular price, and sending us a form or calling
          us does not create a contract between us.
        </p>
      </LegalSection>

      <LegalSection heading="Estimates">
        <p>
          Estimates are free and come with no obligation. An estimate is based on what we
          can see and what you tell us at the time. Work begins only once we and you have
          agreed in writing on the scope and the price, and that written agreement, not
          this website, governs the job. Conditions found after work starts, such as
          damage hidden behind a wall or under a floor, can change the price, and we will
          talk to you before doing anything that does.
        </p>
      </LegalSection>

      <LegalSection heading="Project photographs">
        <p>
          The before, during and after photographs on this site are of real projects
          performed by {site.legal.entity}. They are shown as examples of our work. Every
          home and every job is different, and the photographs are not a promise that
          your project will look the same, cost the same or take the same amount of time.
        </p>
        <p>
          The photographs, the logo and the text on this site belong to us. Please do not
          copy or republish them without our written permission.
        </p>
      </LegalSection>

      <LegalSection heading="Accuracy">
        <p>
          We try to keep this site correct and current, but we do not promise it is free
          of errors. Prices, availability, services and the contents of these pages can
          change without notice.
        </p>
      </LegalSection>

      <LegalSection heading="Limits on our responsibility">
        <p>
          This website is provided as it is. To the extent the law allows, we are not
          responsible for loss or damage arising from your use of this website, or from
          relying on information on it, as distinct from the work we actually contract to
          perform for you. Any workmanship commitment is the one written into your
          project agreement.
        </p>
        <p>
          Nothing here limits any right you have that cannot be limited by law.
        </p>
      </LegalSection>

      <LegalSection heading="Links to other sites">
        <p>
          If this site ever links to another company&apos;s website, we are not
          responsible for that site&apos;s content or its privacy practices.
        </p>
      </LegalSection>

      <LegalSection heading="Governing law">
        <p>
          These terms are governed by the laws of the State of {site.legal.state}, and
          any dispute about this website will be handled in the courts of that state.
        </p>
      </LegalSection>

      <LegalSection heading="Questions">
        <p>
          Call{" "}
          <a className="font-medium text-brass-deep underline" href={site.phoneHref}>
            {site.phoneDisplay}
          </a>{" "}
          or email{" "}
          <a className="font-medium text-brass-deep underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
