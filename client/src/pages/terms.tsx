import HeadTags from "@/components/seo/head-tags";

const Terms = () => {
  return (
    <>
      <HeadTags
        title="Terms of Service | Haydeen Technologies"
        description="Terms of service for Haydeen Technologies products and services."
        canonical="https://haydeentechnologies.com/terms"
      />

      <section className="bg-gradient-to-br from-[#0a3d62] via-[#0a2742] to-[#041425] text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold">Terms of Service</h1>
          <p className="text-white/70 mt-2">Last updated: 17 July 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container max-w-3xl">
          <div className="prose prose-neutral max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the services of Haydeen Technologies Ventures ("Haydeen
              Technologies", "we", "us") of BW 14 Benz Road, Effiduase, Ashanti Region, Ghana —
              including GhEHR, MedPal, AgriConnect, and our website design services — you agree
              to be bound by these Terms of Service.
            </p>

            <h2>2. Description of Services</h2>
            <p>Haydeen Technologies provides:</p>
            <ul>
              <li><strong>GhEHR:</strong> Electronic health record system for healthcare providers in Ghana, provided to facilities under a written Hospital Service Agreement and Data Processing Agreement</li>
              <li><strong>MedPal:</strong> Clinical decision support for healthcare professionals, grounded in the Ghana Standard Treatment Guidelines, subject to its own Terms of Service published at medpal.ghehrhealth.com</li>
              <li><strong>AgriConnect:</strong> Agricultural marketplace connecting farmers with buyers (in development)</li>
              <li><strong>Website Design:</strong> Professional web development services</li>
              <li><strong>Custom Software:</strong> Tailored software solutions for businesses</li>
            </ul>
            <p>
              GhEHR and MedPal are clinical documentation and decision-support tools. They do not
              provide medical advice, and all clinical decisions remain the sole responsibility of
              qualified healthcare professionals.
            </p>

            <h2>3. User Responsibilities</h2>
            <p>You agree to:</p>
            <ul>
              <li>Provide accurate information when creating accounts or contacting us</li>
              <li>Maintain the security of your account credentials</li>
              <li>Use our services in compliance with applicable laws</li>
              <li>Not misuse or attempt to compromise our systems</li>
            </ul>

            <h2>4. Intellectual Property</h2>
            <p>
              All content, software, and materials provided through our services are the property 
              of Haydeen Technologies or our licensors. You may not copy, modify, or distribute 
              our materials without permission.
            </p>

            <h2>5. Data and Healthcare Information</h2>
            <p>
              For GhEHR users: Healthcare data entered into our system remains the property of 
              the healthcare provider. We act as a data processor and comply with the Ghana 
              Data Protection Act and applicable healthcare regulations.
            </p>

            <h2>6. Service Availability</h2>
            <p>
              We strive to maintain high availability of our services. However, we do not guarantee 
              uninterrupted access. Services may be temporarily unavailable for maintenance or 
              due to circumstances beyond our control.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Haydeen Technologies shall not be liable for 
              any indirect, incidental, or consequential damages arising from your use of our services.
            </p>

            <h2>8. Changes to Terms</h2>
            <p>
              We may update these Terms of Service from time to time. We will notify users of 
              significant changes via email or through our services.
            </p>

            <h2>9. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the
              Republic of Ghana.
            </p>

            <h2>10. Contact</h2>
            <p>
              For questions about these Terms, contact us at:
            </p>
            <p>
              <strong>Email:</strong> info@haydeentechnologies.com<br />
              <strong>Address:</strong> BW 14 Benz Road, Effiduase, Ashanti Region, Ghana
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Terms;
