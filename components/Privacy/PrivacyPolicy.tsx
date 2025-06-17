import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6', gap: 10, display: 'flex', flexDirection: 'column' }}>
      <h1>Privacy Policy</h1>
      <p><strong>Last Updated:</strong> May 7, 2025</p>

      <section>
        <h2>1. Introduction</h2>
        <p>
          Fleetbold LLC ("we", "our", "us") respects your privacy. This Privacy Policy describes how we collect, use, 
          and protect your personal information when you visit our website 
          <a href="http://www.fleetbold.com" target="_blank" rel="noopener noreferrer"> www.fleetbold.com </a>  
          and use our services.
        </p>
      </section>

      <section>
        <h2>2. Information We Collect</h2>
        <p><strong>Personal Information:</strong> We collect personal details such as your name, email address, phone number, and vehicle data when you register or contact us.</p>
        <p><strong>Automatically Collected Data:</strong> We collect information through cookies and tracking technologies, including IP addresses, browser types, device identifiers, pages visited, and usage patterns.</p>
        <p><strong>Google User Data:</strong> When you authorize our application to access your Google data (such as Gmail), we collect only the specific information necessary to provide our service features. This includes email metadata and content when you explicitly grant us permission to do so.</p>
      </section>

      <section>
        <h2>3. Use of Information</h2>
        <p>
          We use your personal information to provide and improve our services, respond to inquiries, and communicate with you about updates or changes. Automatically collected data helps us understand how users interact with our Site, 
          enabling us to enhance user experience and maintain security.
        </p>
        <p>
          <strong>Use of Google User Data:</strong> We only access and use your Google data for the specific features that you've authorized, and only in ways that are disclosed in this Privacy Policy. We do not use your Google user data for advertising purposes, sell it to third parties, or use it for any purpose other than providing our core service features.
        </p>
      </section>

      <section>
        <h2>4. Cookies and Tracking Technologies</h2>
        <p><strong>Purpose of Cookies:</strong> Cookies help us remember your preferences, analyze site traffic, and improve the functionality of our Site.</p>
        <p><strong>Managing Cookies:</strong> Most browsers allow you to manage or disable cookies through their settings. Please note that 
        disabling cookies may affect your experience on our Site.</p>
        <p>
          We use web beacons, pixels, and scripts to collect information about your interactions with our Site.
        </p>
      </section>

      <section>
        <h2>5. Data Sharing and Disclosure</h2>
        <p>
          We <strong>do not share, sell, or rent</strong> your personal information to third parties, except as necessary to respond to 
          legal processes or protect our rights. We may share data with trusted service providers who assist us in operating our website 
          and services, but only to the extent necessary and under strict confidentiality agreements.
        </p>
        <p>
          <strong>Google User Data:</strong> The use of information received from Google APIs will adhere to the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer">Google API Services User Data Policy</a>, including the Limited Use requirements. We specifically do not transfer or sell your Google user data to third parties like advertising platforms, data brokers, or information resellers.
        </p>
      </section>

      <section>
        <h2>6. Data Security</h2>
        <p>
          We implement security measures to protect your personal data from unauthorized access, alteration, or destruction. 
          However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <section>
        <h2>7. Your Rights</h2>
        <p>
          Depending on your jurisdiction, you may have certain rights regarding your personal information, such as the right to 
          access, correct, or delete data we hold about you. To exercise these rights, please contact us at 
          <a href="mailto:support@fleetbold.com"> support@fleetbold.com</a>.
        </p>
        <p>
          <strong>Google Account Permissions:</strong> You can review and revoke the access permissions you've granted to our application at any time through your <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">Google Account settings</a>.
        </p>
      </section>

      <section>
        <h2>8. Children's Privacy</h2>
        <p>
          Our Site is not intended for children under the age of 13. We do not knowingly collect personal information from children 
          under 13. If you believe we have inadvertently collected such information, please contact us.
        </p>
      </section>

      <section>
        <h2>9. Updates to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date. 
          Your continued use of the Site after changes are posted constitutes your acceptance of the updated policy.
        </p>
        <p>
          If we make significant changes to how we handle Google user data, we will provide notice and obtain consent as required by Google's policies and applicable law.
        </p>
      </section>

      <section>
        <h2>10. Protection Mechanisms for Sensitive Data</h2>
        <div>
          <h3>Technical Security Measures:</h3>
          <ul>
            <li>We implement data encryption both in transit and at rest for all information obtained through Google APIs and other services.</li>
            <li>We use secure protocols (HTTPS/TLS) for all data transfers.</li>
            <li>We employ two-factor authentication for access to systems that process user data.</li>
            <li>We apply restrictive access policies based on the principle of least privilege.</li>
          </ul>
          
          <h3>Access Control:</h3>
          <ul>
            <li>Access to sensitive data is limited only to authorized personnel who need to know it to perform their functions.</li>
            <li>We maintain detailed logs of all access to sensitive data.</li>
            <li>We conduct periodic reviews of access permissions.</li>
          </ul>
          
          <h3>Storage and Retention:</h3>
          <ul>
            <li>We store sensitive data only for the time necessary to provide our services.</li>
            <li>We implement a secure data deletion process when data is no longer needed.</li>
          </ul>
          
          <h3>Protection in Gmail Integration:</h3>
          <ul>
            <li>When accessing email content through the Gmail API, we only process the minimum information necessary to provide the requested functionality.</li>
            <li>We do not permanently store complete email content.</li>
            <li>We apply the data minimization principle to limit collection only to strictly necessary data.</li>
            <li>We use the most limited scopes possible for each functionality, following Google's recommended best practices.</li>
          </ul>
          
          <h3>Breach Notification:</h3>
          <ul>
            <li>We have procedures in place to detect, report, and respond to security incidents.</li>
            <li>We will notify affected users without undue delay in the event of a security breach that compromises their personal data.</li>
          </ul>
          
          <h3>Continuous Evaluation and Improvement:</h3>
          <ul>
            <li>We conduct regular security audits to identify and address vulnerabilities.</li>
            <li>We continuously update our systems and procedures to maintain the best security practices.</li>
          </ul>
        </div>
        <p>
          If you have additional questions about how we protect your sensitive data, please contact us at <a href="mailto:support@fleetbold.com">support@fleetbold.com</a>.
        </p>
      </section>

      <section>
        <h2>11. Limited Use Disclosure and AI/ML Policy</h2>
     
        <p>
          Our use of information received from Google APIs will adhere to the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer">Google API Services User Data Policy</a>, including the Limited Use requirements. Specifically:
        </p>
        <br></br>
        <ul>
      
          <li>We will only use access to read, write, modify, or control Gmail message bodies (including attachments), metadata, headers, or settings to provide a web email client that allows users to compose, send, read, and process emails within our application and in accordance with the Gmail API Terms of Service.</li>
          <li>We will not transfer or sell the data to advertisers or data brokers.</li>
          <li>We will not use the data for advertising purposes.</li>
          <li>We will not allow humans to read the data unless:
            <ul>
          
              <li>It is necessary for security purposes (such as investigating abuse)</li>
              <li>It is necessary to comply with applicable law</li>
              <li>You have given your explicit consent</li>
            </ul>
          </li>
        </ul>
        <br></br>
        <h3>Google Workspace Data and AI/ML Models:</h3>
        <ul>
          <li><strong>We do not use data obtained through Google Workspace APIs to develop, improve, or train generalized AI and/or ML models.</strong> We explicitly affirm that any data accessed through Google Workspace APIs is not used for developing, improving, or training any generalized/non-personalized artificial intelligence or machine learning models.</li>
          <li>Our application does not use Google user data for developing, improving, or training any AI and/or ML models, whether personalized or generalized.</li>
          <li>We do not transfer any Google user data to third-party AI tools or services for any AI/ML model development, improvement, or training purposes.</li>
        </ul>
      </section>

      <section>
        <h2>12. Contact Information</h2>
        <p>
          If you have any questions about these Terms of Use or the Privacy Policy, please contact us at:
        </p>
        <address>
          Fleetbold LLC<br />
          300 El Camino Real Suite 120<br />
          Menlo Park, CA 94025, USA<br />
          Email: <a href="mailto:support@fleetbold.com">support@fleetbold.com</a><br />
          Phone: <a href="tel:+14084007678">+1 (408) 400-7678</a>
        </address>
      </section>
    </div>
  );
};

export default PrivacyPolicy;