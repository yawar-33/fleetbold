'use client';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useParams } from 'next/navigation';
import { jobDetailData } from '../jobsData';
import NavbarAltV2 from '@/components/Navbar/NavbarAltV2';


export default function JobDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const job = jobDetailData[slug as keyof typeof jobDetailData];

  if (!job) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Job Not Found</h1>
          <p className="text-gray-400 mb-8">Sorry, we couldn't find that job posting.</p>
          <Link 
            href="/careers" 
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Back to Careers
          </Link>
        </div>
      </div>
    );
  }

  const handleApplyNow = () => {
    const subject = encodeURIComponent(`Application for ${job.title}`);
    const body = encodeURIComponent(`Dear FleetBold Team,

I am interested in applying for the ${job.title} position. I believe my skills and experience align well with the requirements outlined in the job description.

Please find my resume attached or let me know if you need any additional information.

Best regards,
[Your Name]`);
    
    window.open(`mailto:careers@fleetbold.com?subject=${subject}&body=${body}`);
  };

  return (
    <div className="job-detail-page">
      {/* Navigation */}
      <nav className="job-nav">
        <div className="nav-container">
          <Link href="/carrers" className="back-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to All Jobs
          </Link>
        </div>
      </nav>

      {/* Job Header */}
      <section className="job-header-section">
        <div className="job-header-container">
          <div className="job-badge">
            <span className="department-badge">{job.department}</span>
            <span className="type-badge">{job.type}</span>
          </div>
          
          <h1 className="job-title">{job.title}</h1>
          
          <div className="job-meta">
            <div className="meta-item">
              <svg className="meta-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span>{job.location}</span>
            </div>
            
            <div className="meta-item">
              <svg className="meta-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2"/>
                <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2"/>
                <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span>Posted Today</span>
            </div>
          </div>

          <button className="apply-cta-btn" onClick={handleApplyNow}>
            Apply for This Position
          </button>
        </div>
      </section>

      {/* Job Content */}
      <section className="job-content-section">
        <div className="job-content-container">
          <div className="job-content">
            {/* About Us */}
            <div className="content-block">
              <div className="block-header">
                <span className="block-emoji">🚀</span>
                <h2 className="block-title">About Us</h2>
              </div>
              <p className="block-description">{job.description}</p>
            </div>

            {/* About the Role */}
            <div className="content-block">
              <div className="block-header">
                <span className="block-emoji">💡</span>
                <h2 className="block-title">About the Role</h2>
              </div>
              <div className="block-description">
                {job.aboutRole.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* What You'll Do */}
            <div className="content-block">
              <div className="block-header">
                <span className="block-emoji">🎯</span>
                <h2 className="block-title">What You'll Do</h2>
              </div>
              <ul className="responsibility-list">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>

            {/* What We're Looking For */}
            <div className="content-block">
              <div className="block-header">
                <span className="block-emoji">🧠</span>
                <h2 className="block-title">What We're Looking For</h2>
              </div>
              <ul className="requirement-list">
                {job.requirements.map((requirement, index) => (
                  <li key={index}>{requirement}</li>
                ))}
              </ul>
            </div>

            {/* What We Offer */}
            <div className="content-block">
              <div className="block-header">
                <span className="block-emoji">✨</span>
                <h2 className="block-title">What We Offer</h2>
              </div>
              <ul className="benefit-list">
                {job.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>

            {/* Location */}
            <div className="content-block">
              <div className="block-header">
                <span className="block-emoji">🌍</span>
                <h2 className="block-title">Location</h2>
              </div>
              <p className="block-description">
                {job.location} — open to applicants worldwide. All you need is talent, accountability, and a solid internet connection.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="job-sidebar">
            <div className="sidebar-card">
              <h3 className="sidebar-title">Ready to Apply?</h3>
              <p className="sidebar-description">
                Join a team that's reshaping fleet management and vehicle connectivity globally.
              </p>
              <button className="sidebar-apply-btn" onClick={handleApplyNow}>
                Apply Now
              </button>
              
              <div className="sidebar-meta">
                <div className="sidebar-meta-item">
                  <strong>Department:</strong>
                  <span>{job.department}</span>
                </div>
                <div className="sidebar-meta-item">
                  <strong>Type:</strong>
                  <span>{job.type}</span>
                </div>
                <div className="sidebar-meta-item">
                  <strong>Location:</strong>
                  <span>{job.location}</span>
                </div>
              </div>
            </div>

            <div className="sidebar-card">
              <h3 className="sidebar-title">Questions?</h3>
              <p className="sidebar-description">
                Have questions about this role or FleetBold? We'd love to hear from you.
              </p>
              <a 
                href="mailto:careers@fleetbold.com" 
                className="sidebar-contact-btn"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .job-detail-page {
          min-height: 100vh;
          background: linear-gradient(135deg, rgb(13, 13, 13) 0%, rgb(23, 23, 23) 100%);
          color: rgb(255, 255, 255);
          font-family: "Outfit", sans-serif;
        }

        /* Navigation */
        .job-nav {
          padding: 24px 32px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 14px;
          transition: color 0.2s ease;
        }

        .back-link:hover {
          color: #0086FF;
        }

        /* Job Header */
        .job-header-section {
          padding: 60px 32px;
          text-align: center;
          background: radial-gradient(circle at center, rgba(0, 134, 255, 0.1) 0%, transparent 70%);
        }

        .job-header-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .job-badge {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .department-badge {
          background: rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.8);
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
        }

        .type-badge {
          background: rgba(0, 134, 255, 0.2);
          color: #0086FF;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
        }

        .job-title {
          font-size: 42px;
          font-weight: 700;
          margin: 0 0 32px;
          line-height: 1.2;
          background: linear-gradient(135deg, rgb(255, 255, 255) 0%, #0086FF 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .job-meta {
          display: flex;
          justify-content: center;
          gap: 32px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
        }

        .meta-icon {
          color: rgba(255, 255, 255, 0.5);
        }

        .apply-cta-btn {
          background: #0086FF;
          color: rgb(255, 255, 255);
          border: none;
          padding: 16px 32px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          font-family: "Outfit", sans-serif;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .apply-cta-btn:hover {
          background: #0070D9;
          transform: translateY(-2px);
        }

        /* Job Content */
        .job-content-section {
          padding: 80px 32px;
        }

        .job-content-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 60px;
        }

        .job-content {
          max-width: none;
        }

        .content-block {
          margin-bottom: 48px;
        }

        .block-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .block-emoji {
          font-size: 24px;
        }

        .block-title {
          font-size: 24px;
          font-weight: 600;
          margin: 0;
        }

        .block-description {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.7;
          font-size: 16px;
          margin: 0;
        }

        .block-description p {
          margin: 0 0 16px;
        }

        .block-description p:last-child {
          margin-bottom: 0;
        }

        .responsibility-list,
        .requirement-list,
        .benefit-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .responsibility-list li,
        .requirement-list li,
        .benefit-list li {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.7;
          margin-bottom: 12px;
          padding-left: 24px;
          position: relative;
        }

        .responsibility-list li::before {
          content: "→";
          position: absolute;
          left: 0;
          color: #0086FF;
          font-weight: 600;
        }

        .requirement-list li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #00C851;
          font-weight: 600;
        }

        .benefit-list li::before {
          content: "★";
          position: absolute;
          left: 0;
          color: #FFD700;
          font-weight: 600;
        }

        /* Sidebar */
        .job-sidebar {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .sidebar-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 24px;
        }

        .sidebar-title {
          font-size: 18px;
          font-weight: 600;
          margin: 0 0 12px;
        }

        .sidebar-description {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          margin: 0 0 20px;
          font-size: 14px;
        }

        .sidebar-apply-btn {
          width: 100%;
          background: #0086FF;
          color: rgb(255, 255, 255);
          border: none;
          padding: 12px 20px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          font-family: "Outfit", sans-serif;
          cursor: pointer;
          transition: all 0.2s ease;
          margin-bottom: 20px;
        }

        .sidebar-apply-btn:hover {
          background: #0070D9;
        }

        .sidebar-contact-btn {
          display: block;
          width: 100%;
          background: transparent;
          color: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.3);
          padding: 12px 20px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          font-family: "Outfit", sans-serif;
          text-decoration: none;
          text-align: center;
          transition: all 0.2s ease;
        }

        .sidebar-contact-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.5);
        }

        .sidebar-meta {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 16px;
        }

        .sidebar-meta-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
          font-size: 14px;
        }

        .sidebar-meta-item strong {
          color: rgba(255, 255, 255, 0.9);
        }

        .sidebar-meta-item span {
          color: rgba(255, 255, 255, 0.7);
        }

        /* Mobile Responsiveness */
        @media (max-width: 1024px) {
          .job-content-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .job-sidebar {
            order: -1;
          }
        }

        @media (max-width: 768px) {
          .job-nav {
            padding: 16px 20px;
          }

          .job-header-section {
            padding: 40px 20px;
          }

          .job-title {
            font-size: 32px;
          }

          .job-meta {
            flex-direction: column;
            gap: 16px;
          }

          .job-content-section {
            padding: 40px 20px;
          }

          .job-content-container {
            gap: 32px;
          }

          .content-block {
            margin-bottom: 32px;
          }

          .block-title {
            font-size: 20px;
          }

          .sidebar-card {
            padding: 20px;
          }
        }
      `}</style>
      <NavbarAltV2 />
    </div>
  );
}