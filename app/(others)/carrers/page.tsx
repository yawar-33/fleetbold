'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import NavbarAltV2 from '@/components/Navbar/NavbarAltV2';
import Footer from '@/components/Footer/Footer';

const CareersPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const jobCategories = {
    'Engineering & Development': [
      { id: 1, title: 'Senior Full-Stack Engineer (React, Node.js, Prisma)', department: 'Engineering & Development', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'senior-full-stack-engineer' },
      { id: 2, title: 'Frontend Developer (React, TypeScript, Tailwind CSS)', department: 'Engineering & Development', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'frontend-developer' },
      { id: 3, title: 'Backend Developer (Node.js, PostgreSQL, MongoDB)', department: 'Engineering & Development', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'backend-developer' },
      { id: 4, title: 'Mobile App Developer (React Native, iOS/Android)', department: 'Engineering & Development', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'mobile-app-developer' },
      { id: 5, title: 'API Integration Engineer (Tesla, SmartCar, BYD, etc.)', department: 'Engineering & Development', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'api-integration-engineer' },
      { id: 6, title: 'OAuth & Authentication Developer', department: 'Engineering & Development', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'oauth-authentication-developer' },
      { id: 7, title: 'GraphQL/REST API Developer', department: 'Engineering & Development', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'graphql-rest-api-developer' },
      { id: 8, title: 'Software Architect (Scalable Fleet Systems)', department: 'Engineering & Development', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'software-architect' },
      { id: 9, title: 'DevOps Engineer (AWS, Docker, CI/CD)', department: 'Engineering & Development', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'devops-engineer' },
      { id: 10, title: 'Cloud Infrastructure Engineer (S3, Serverless, Lambda)', department: 'Engineering & Development', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'cloud-infrastructure-engineer' },
    ],
    'Quality Assurance': [
      { id: 11, title: 'QA Automation Engineer (Playwright, Cypress, Selenium)', department: 'Quality Assurance', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'qa-automation-engineer' },
      { id: 12, title: 'Manual QA Tester (Mobile & Web)', department: 'Quality Assurance', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'manual-qa-tester' },
    ],
    'Hardware & Embedded': [
      { id: 13, title: 'Telematics Engineer (OBD-II, GPS protocols, CAN bus)', department: 'Hardware & Embedded', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'telematics-engineer' },
      { id: 14, title: 'Embedded Firmware Engineer (C/C++, GPS trackers)', department: 'Hardware & Embedded', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'embedded-firmware-engineer' },
      { id: 15, title: 'Embedded Linux Developer (IoT firmware customization)', department: 'Hardware & Embedded', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'embedded-linux-developer' },
      { id: 16, title: 'RF Engineer (Signal processing, LoRa/NB-IoT/LTE-M)', department: 'Hardware & Embedded', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'rf-engineer' },
      { id: 17, title: 'Hardware Testing Engineer (GPS signal integrity, shielding)', department: 'Hardware & Embedded', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'hardware-testing-engineer' },
      { id: 18, title: 'Device Compliance & Certification Specialist (FCC, CE, PTCRB)', department: 'Hardware & Embedded', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'device-compliance-certification-specialist' },
      { id: 19, title: 'Connectivity Systems Engineer (Bluetooth, Wi-Fi, LTE fallback)', department: 'Hardware & Embedded', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'connectivity-systems-engineer' },
    ],
    'Data & Analytics': [
      { id: 20, title: 'Data Engineer (Telemetry ETL pipelines, analytics)', department: 'Data & Analytics', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'data-engineer' },
      { id: 21, title: 'Machine Learning Engineer (Fleet Behavior AI)', department: 'Data & Analytics', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'machine-learning-engineer' },
      { id: 29, title: 'Data Analyst (User Behavior & Growth Metrics)', department: 'Data & Analytics', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'data-analyst' },
    ],
    'Design & UX': [
      { id: 22, title: 'UI/UX Designer (Fleet Dashboard Tools)', department: 'Design & UX', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'ui-ux-designer' },
      { id: 23, title: 'Visual Designer (Marketing & Product Imagery)', department: 'Design & UX', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'visual-designer' },
      { id: 34, title: 'Motion Designer (Short-form Videos)', department: 'Design & UX', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'motion-designer' },
    ],
    'Product & Marketing': [
      { id: 24, title: 'Product Manager (Connected Devices)', department: 'Product & Marketing', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'product-manager' },
      { id: 25, title: 'Content Writer (Technical & Marketing)', department: 'Product & Marketing', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'content-writer' },
      { id: 26, title: 'Email Marketing Specialist (Automation & Segmentation)', department: 'Product & Marketing', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'email-marketing-specialist' },
      { id: 27, title: 'Community Manager (Fleet Hosts & Owners)', department: 'Product & Marketing', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'community-manager' },
      { id: 30, title: 'Copywriter (Brand & Product Voice)', department: 'Product & Marketing', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'copywriter' },
      { id: 32, title: 'Community Strategist (Growth & Engagement)', department: 'Product & Marketing', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'community-strategist' },
      { id: 33, title: 'Social Media Manager (Content + Strategy)', department: 'Product & Marketing', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'social-media-manager' },
      { id: 35, title: 'CRM Manager (User Segments + Retention)', department: 'Product & Marketing', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'crm-manager' },
      { id: 36, title: 'Digital Ads Specialist (Apple Store, Meta, Google)', department: 'Product & Marketing', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'digital-ads-specialist' },
      { id: 37, title: 'Influencer Partnership Lead (Fleet & Auto Niche)', department: 'Product & Marketing', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'influencer-partnership-lead' },
      { id: 38, title: 'Localization Manager (International Expansion)', department: 'Product & Marketing', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'localization-manager' },
    ],
    'Customer Success & Support': [
      { id: 28, title: 'Customer Success Manager (Onboarding & Support)', department: 'Customer Success & Support', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'customer-success-manager' },
      { id: 31, title: 'Technical Support Engineer (Telematics & Devices)', department: 'Customer Success & Support', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'technical-support-engineer' },
      { id: 53, title: 'Customer Success Manager (B2B Fleets & SaaS)', department: 'Customer Success & Support', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'customer-success-manager-b2b' },
      { id: 54, title: 'Help Center Content Writer (Docs & FAQs)', department: 'Customer Success & Support', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'help-center-content-writer' },
    ],
    'Business Operations': [
      { id: 40, title: 'Revenue Operations Lead (Pricing, CRM, Analytics)', department: 'Business Operations', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'revenue-operations-lead' },
      { id: 41, title: 'Partnerships Manager (OEMs, Platforms, APIs)', department: 'Business Operations', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'partnerships-manager' },
      { id: 42, title: 'Technical Documentation Writer (API, Devices, Onboarding)', department: 'Business Operations', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'technical-documentation-writer' },
    ],
    'Legal & Compliance': [
      { id: 43, title: 'Legal Counsel (Tech & Privacy Law)', department: 'Legal & Compliance', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'legal-counsel' },
      { id: 44, title: 'Regulatory Affairs Analyst (Mobility & Telematics)', department: 'Legal & Compliance', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'regulatory-affairs-analyst' },
      { id: 45, title: 'Compliance Officer (Internal Policies & Audits)', department: 'Legal & Compliance', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'compliance-officer' },
    ],
    'Finance & Accounting': [
      { id: 46, title: 'Finance Manager (Budgeting & Forecasting)', department: 'Finance & Accounting', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'finance-manager' },
      { id: 47, title: 'Accountant (Invoicing, Expenses, Taxes)', department: 'Finance & Accounting', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'accountant' },
      { id: 48, title: 'Bookkeeper (Day-to-Day Financials)', department: 'Finance & Accounting', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'bookkeeper' },
    ],
    'People & Operations': [
      { id: 49, title: 'Recruiter (Tech + Global Talent)', department: 'People & Operations', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'recruiter' },
      { id: 50, title: 'People Operations Lead (Culture & Growth)', department: 'People & Operations', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'people-operations-lead' },
      { id: 51, title: 'Executive Assistant (Ops + Calendar + Comms)', department: 'People & Operations', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'executive-assistant' },
      { id: 52, title: 'Office Manager (Virtual Admin, Docs, Scheduling)', department: 'People & Operations', location: 'Remote — Work from Anywhere', type: 'Full-time', slug: 'office-manager' },
    ],
  };

  // Flatten all jobs for filtering
  const allJobs = Object.values(jobCategories).flat();

  // Filter jobs based on department and search term
  const filteredJobs = allJobs.filter(job => {
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDepartment && matchesSearch;
  });

  const departments = ['All', ...Object.keys(jobCategories)];

  const handleViewDetails = (slug) => {
    router.push(`/carrers/${slug}`);
  };

  const handleApplyNow = (jobTitle) => {
    const subject = encodeURIComponent(`Application for ${jobTitle}`);
    window.open(`mailto:careers@fleetbold.com?subject=${subject}`);
  };

  return (
    <> <NavbarAltV2 />
    <div className="careers-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Join the FleetBold Team</h1>
          <p className="hero-description">
            We're building the future of intelligent fleet tracking and connected vehicle management. 
            Join a team that values innovation, autonomy, and real impact.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">53+</span>
              <span className="stat-label">Open Positions</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Remote Work</span>
            </div>
            <div className="stat">
              <span className="stat-number">Global</span>
              <span className="stat-label">Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="filters-section">
        <div className="filters-container">
          <div className="search-bar">
            <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <input
              type="text"
              placeholder="Search by role, department, or keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="department-filters">
            {departments.map(dept => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`filter-button ${selectedDepartment === dept ? 'active' : ''}`}
              >
                {dept}
                {dept !== 'All' && (
                  <span className="job-count">
                    {jobCategories[dept]?.length || 0}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="jobs-section">
        <div className="jobs-container">
          <div className="jobs-header">
            <h2 className="jobs-title">
              {selectedDepartment === 'All' ? 'All Open Positions' : selectedDepartment}
            </h2>
            <p className="jobs-count">
              {filteredJobs.length} position{filteredJobs.length !== 1 ? 's' : ''} available
            </p>
          </div>

          <div className="jobs-grid">
            {filteredJobs.map(job => (
              <div key={job.id} className="job-card">
                <div className="job-header">
                  <h3 className="job-title">{job.title}</h3>
                  <span className="job-type">{job.type}</span>
                </div>
                <div className="job-meta">
                  <span className="job-department">{job.department}</span>
                  <span className="job-location">
                    <svg className="location-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    {job.location}
                  </span>
                </div>
                <div className="job-actions">
                  <button 
                    className="view-details-btn"
                    onClick={() => handleViewDetails(job.slug)}
                  >
                    View Details
                  </button>
                  <button 
                    className="apply-btn"
                    onClick={() => handleApplyNow(job.title)}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="no-results">
              <div className="no-results-content">
                <h3>No positions found</h3>
                <p>Try adjusting your search criteria or check back later for new opportunities.</p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedDepartment('All');
                  }}
                  className="reset-filters-btn"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Why FleetBold Section */}
      <section className="why-fleetbold-section">
        <div className="why-content">
          <h2 className="section-title">Why FleetBold?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🌍</div>
              <h3 className="benefit-title">100% Remote</h3>
              <p className="benefit-description">
                Work from anywhere in the world with full schedule flexibility and async collaboration.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h3 className="benefit-title">Move Fast</h3>
              <p className="benefit-description">
                No endless meetings or pointless approvals. Just real work and real results.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💡</div>
              <h3 className="benefit-title">Best Idea Wins</h3>
              <p className="benefit-description">
                Every voice is heard. The best idea wins, no matter where it comes from.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🚀</div>
              <h3 className="benefit-title">Real Impact</h3>
              <p className="benefit-description">
                Build tools that impact real businesses across countries and thousands of vehicles.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔬</div>
              <h3 className="benefit-title">Innovation Freedom</h3>
              <p className="benefit-description">
                Freedom to explore new technologies and launch your ideas with founder support.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🤝</div>
              <h3 className="benefit-title">Direct Access</h3>
              <p className="benefit-description">
                Work directly with founders and decision-makers. No corporate layers or bureaucracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Build the Future?</h2>
          <p className="cta-description">
            Join a team that's reshaping fleet management and vehicle connectivity globally.
          </p>
          <div className="cta-actions">
            <button className="cta-primary">
              View All Positions
            </button>
            <button className="cta-secondary">
              Join Our Talent Network
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        .careers-page {
          min-height: 100vh;
          background: linear-gradient(135deg, rgb(13, 13, 13) 0%, rgb(23, 23, 23) 100%);
          color: rgb(255, 255, 255);
          font-family: "Outfit", sans-serif;
        }

        /* Hero Section */
        .hero-section {
          padding: 120px 32px 80px;
          text-align: center;
          background: radial-gradient(circle at center, rgba(0, 134, 255, 0.1) 0%, transparent 70%);
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .hero-title {
          font-size: 48px;
          font-weight: 700;
          margin: 0 0 24px;
        color:blue;
        }

        .hero-description {
          font-size: 20px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
          margin: 0 0 48px;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 48px;
          margin-top: 48px;
        }

        .stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .stat-number {
          font-size: 36px;
          font-weight: 700;
          color: #0086FF;
        }

        .stat-label {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Filters Section */
        .filters-section {
          padding: 0 32px 40px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .filters-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .search-bar {
          position: relative;
          max-width: 500px;
          margin: 0 auto 32px;
        }

        .search-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: rgba(255, 255, 255, 0.5);
        }

        .search-input {
          width: 100%;
          padding: 16px 16px 16px 48px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          color: rgb(255, 255, 255);
          font-size: 16px;
          font-family: "Outfit", sans-serif;
          transition: all 0.2s ease;
        }

        .search-input:focus {
          outline: none;
          border-color: #0086FF;
          box-shadow: 0 0 0 3px rgba(0, 134, 255, 0.2);
        }

        .search-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .department-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
        }

        .filter-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          color: rgba(255, 255, 255, 0.8);
          font-size: 14px;
          font-family: "Outfit", sans-serif;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-button:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .filter-button.active {
          background: #0086FF;
          border-color: #0086FF;
          color: rgb(13, 13, 13);
          font-weight: 600;
        }

        .job-count {
          background: rgba(255, 255, 255, 0.2);
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 600;
        }

        .filter-button.active .job-count {
          background: rgba(13, 13, 13, 0.2);
          color: rgb(13, 13, 13);
        }

        /* Jobs Section */
        .jobs-section {
          padding: 60px 32px;
        }

        .jobs-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .jobs-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .jobs-title {
          font-size: 32px;
          font-weight: 600;
          margin: 0 0 8px;
        }

        .jobs-count {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
        }

        .jobs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
          gap: 24px;
        }

        .job-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 24px;
          transition: all 0.2s ease;
        }

        .job-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(0, 134, 255, 0.3);
          transform: translateY(-2px);
        }

        .job-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 16px;
        }

        .job-title {
          font-size: 18px;
          font-weight: 600;
          margin: 0;
          line-height: 1.3;
          flex: 1;
        }

        .job-type {
          background: rgba(0, 134, 255, 0.2);
          color: #0086FF;
          padding: 4px 8px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
          white-space: nowrap;
        }

        .job-meta {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 20px;
        }

        .job-department {
          color: rgba(255, 255, 255, 0.8);
          font-size: 14px;
          font-weight: 500;
        }

        .job-location {
          display: flex;
          align-items: center;
          gap: 6px;
          color: rgba(255, 255, 255, 0.6);
          font-size: 14px;
        }

        .location-icon {
          color: rgba(255, 255, 255, 0.5);
        }

        .job-actions {
          display: flex;
          gap: 12px;
        }

        .view-details-btn {
          flex: 1;
          padding: 12px 16px;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 8px;
          color: rgba(255, 255, 255, 0.8);
          font-size: 14px;
          font-family: "Outfit", sans-serif;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .view-details-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.5);
        }

        .apply-btn {
          flex: 1;
          padding: 12px 16px;
          background: #0086FF;
          border: 1px solid #0086FF;
          border-radius: 8px;
          color: rgb(255, 255, 255);
          font-size: 14px;
          font-weight: 600;
          font-family: "Outfit", sans-serif;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .apply-btn:hover {
          background: #0070D9;
          border-color: #0070D9;
          transform: translateY(-1px);
        }

        /* No Results */
        .no-results {
          text-align: center;
          padding: 80px 32px;
        }

        .no-results-content h3 {
          font-size: 24px;
          margin: 0 0 12px;
        }

        .no-results-content p {
          color: rgba(255, 255, 255, 0.7);
          margin: 0 0 24px;
        }

        .reset-filters-btn {
          padding: 12px 24px;
          background: #0086FF;
          border: none;
          border-radius: 8px;
          color: rgb(255, 255, 255);
          font-weight: 600;
          font-family: "Outfit", sans-serif;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .reset-filters-btn:hover {
          background: #0070D9;
        }

        /* Why FleetBold Section */
        .why-fleetbold-section {
          padding: 80px 32px;
          background: rgba(255, 255, 255, 0.02);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .why-content {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }

        .section-title {
          font-size: 36px;
          font-weight: 600;
          margin: 0 0 48px;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
        }

        .benefit-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 32px 24px;
          text-align: center;
        }

        .benefit-icon {
          font-size: 48px;
          margin-bottom: 20px;
        }

        .benefit-title {
          font-size: 20px;
          font-weight: 600;
          margin: 0 0 12px;
        }

        .benefit-description {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          margin: 0;
        }

        /* CTA Section */
        .cta-section {
          padding: 80px 32px;
          text-align: center;
          background: radial-gradient(circle at center, rgba(0, 134, 255, 0.1) 0%, transparent 70%);
        }

        .cta-content {
          max-width: 600px;
          margin: 0 auto;
        }

        .cta-title {
          font-size: 36px;
          font-weight: 600;
          margin: 0 0 16px;
        }

        .cta-description {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.8);
          margin: 0 0 32px;
        }

        .cta-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
        }

        .cta-primary, .cta-secondary {
          padding: 16px 32px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          font-family: "Outfit", sans-serif;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .cta-primary {
          background: #0086FF;
          border: 1px solid #0086FF;
          color: rgb(255, 255, 255);
        }

        .cta-primary:hover {
          background: #0070D9;
          transform: translateY(-2px);
        }

        .cta-secondary {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: rgba(255, 255, 255, 0.9);
        }

        .cta-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.5);
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .hero-section {
            padding: 80px 20px 60px;
          }

          .hero-title {
            font-size: 36px;
          }

          .hero-description {
            font-size: 18px;
          }

          .hero-stats {
            flex-direction: column;
            gap: 24px;
          }

          .filters-section {
            padding: 0 20px 32px;
          }

          .department-filters {
            justify-content: flex-start;
            overflow-x: auto;
            padding-bottom: 8px;
          }

          .jobs-section {
            padding: 40px 20px;
          }

          .jobs-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .job-card {
            padding: 20px;
          }

          .job-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }

          .job-actions {
            flex-direction: column;
          }

          .why-fleetbold-section {
            padding: 60px 20px;
          }

          .section-title {
            font-size: 28px;
          }

          .benefits-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .cta-section {
            padding: 60px 20px;
          }

          .cta-title {
            font-size: 28px;
          }

          .cta-actions {
            flex-direction: column;
            align-items: center;
          }

          .cta-primary, .cta-secondary {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>

      <Footer />
    </div>
    </>
    
  );
};

export default CareersPage;