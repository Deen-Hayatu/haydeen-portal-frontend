import HeadTags from "@/components/seo/head-tags";

const Privacy = () => {
  return (
    <>
      <HeadTags
        title="Privacy Policy | Haydeen Technologies"
        description="Privacy policy for Haydeen Technologies. Learn how we collect, use, and protect your data."
        canonical="https://haydeentechnologies.com/privacy"
      />

      <section className="bg-gradient-to-br from-[#0a3d62] via-[#0a2742] to-[#041425] text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          <p className="text-white/70 mt-2">Last updated: 17 July 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container max-w-3xl">
          <div className="prose prose-neutral max-w-none">
            <h2>1. Introduction</h2>
            <p>
              Haydeen Technologies Ventures ("we", "our", "us") of BW 14 Benz Road, Effiduase,
              Ashanti Region, Ghana is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, and safeguard your information when you use this
              website and our services. We process personal data in accordance with Ghana's Data
              Protection Act, 2012 (Act 843).
            </p>
            <p>
              Our products GhEHR (ghehrhealth.com) and MedPal (medpal.ghehrhealth.com) have their
              own service terms; patient data processed in GhEHR is governed by each healthcare
              facility's Data Processing Agreement, and MedPal accounts are governed by the MedPal
              Privacy Policy published on the MedPal site.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We may collect the following types of information through this website:</p>
            <ul>
              <li><strong>Contact information:</strong> Name, email address, phone number, and company when you contact us, request a demo, or sign up for beta access.</li>
              <li><strong>Job application data:</strong> If you apply for a position via our careers page, we collect your name, email, phone, location, educational background, motivation, and your CV file. Applications are reviewed internally and retained for up to 12 months after a decision, then deleted.</li>
              <li><strong>Newsletter data:</strong> Your email address when you subscribe. Every newsletter email includes a signed one-click unsubscribe link, and we retain your address only until you unsubscribe.</li>
              <li><strong>Usage data:</strong> Information about how you use our website and platforms, including GhEHR, MedPal, and AgriConnect, collected via Google Analytics subject to your cookie choices.</li>
              <li><strong>Device information:</strong> Browser type, operating system, and device identifiers.</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and improve our services</li>
              <li>Communicate with you about your account or our services</li>
              <li>Respond to your inquiries and support requests</li>
              <li>Assess job applications</li>
              <li>Analyze usage patterns to improve our platforms</li>
            </ul>
            <p>
              We do not sell personal data and do not use it for third-party advertising. Our
              public forms include automated spam protection; submissions identified as automated
              are discarded without being stored.
            </p>

            <h2>4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your
              personal information against unauthorized access, alteration, disclosure, or
              destruction. This includes:
            </p>
            <ul>
              <li>Encryption in transit (TLS) and AES-256 encryption at rest</li>
              <li>Role-based access controls</li>
              <li>Regular security audits</li>
            </ul>

            <h2>5. Data Storage and Processors</h2>
            <p>
              Website and product data is hosted on Amazon Web Services in the European Union,
              with transactional email delivered via AWS in South Africa. For GhEHR healthcare
              data, we act as data processor for each healthcare facility and comply with the
              Ghana Data Protection Act; details are set out in the Data Processing Agreement each
              facility signs.
            </p>

            <h2>6. Your Rights</h2>
            <p>Under Act 843 you have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data (where applicable)</li>
              <li>Withdraw consent for data processing</li>
              <li>Lodge a complaint with Ghana's Data Protection Commission</li>
            </ul>

            <h2>7. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:
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

export default Privacy;
