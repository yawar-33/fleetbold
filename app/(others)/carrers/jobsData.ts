export interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  slug: string;
  description: string;
  aboutRole: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

export const jobCategories = {
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

export const jobDetailData: Record<string, Job> = {
  'senior-full-stack-engineer': {
    id: 1,
    title: 'Senior Full-Stack Engineer (React, Node.js, Prisma)',
    department: 'Engineering & Development',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'senior-full-stack-engineer',
    description: `FleetBold is a fast-growing tech company on a mission to reshape fleet management, vehicle connectivity, and real-time telematics. From Tesla integrations to GPS tracking systems, we build powerful tools that make mobility smarter, more secure, and easier to manage—globally.`,
    aboutRole: `We're looking for a product-minded Senior Full-Stack Engineer who loves turning ideas into fast, scalable, and intuitive experiences. You'll work directly with our founding team to design and build core features of our platform used by real fleets every day.

This is a fully remote position open to candidates from anywhere in the world.`,
    responsibilities: [
      'Design, build, and maintain full-stack features using React, Node.js, and Prisma.',
      'Own architecture decisions that impact performance, security, and scalability.',
      'Work closely with product, design, and data teams to deliver high-impact solutions.',
      'Review code, mentor team members, and push for best practices.',
      'Ship fast, test thoroughly, and iterate based on user feedback.'
    ],
    requirements: [
      '4+ years of experience building full-stack applications.',
      'Strong expertise with React, Node.js, and Prisma.',
      'Solid knowledge of relational databases (PostgreSQL), and optionally MongoDB.',
      'Experience working with RESTful APIs and/or GraphQL.',
      'Excellent communication skills and the ability to work independently.',
      'Git, testing, and clean code practices are second nature to you.'
    ],
    benefits: [
      'We\'re not your typical "suit and tie" company.',
      'No endless meetings, no pointless approvals — just real work and real results.',
      'We listen to every voice: the best idea wins, no matter where it comes from.',
      '100% remote work with full schedule flexibility.',
      'Direct access to the founders and decision-making.',
      'A chance to build tools that impact real businesses across countries.',
      'Freedom to explore new technologies and launch your ideas.'
    ]
  },
  'frontend-developer': {
    id: 2,
    title: 'Frontend Developer (React, TypeScript, Tailwind CSS)',
    department: 'Engineering & Development',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'frontend-developer',
    description: `FleetBold is building the future of intelligent fleet tracking and connected vehicle management. We integrate directly with platforms like Tesla and GPS providers to offer a clean, modern interface that puts powerful data in the hands of fleet owners worldwide.`,
    aboutRole: `As a Frontend Developer, you'll shape the visual language of our app and help create the kind of user experience people actually enjoy using. You'll work closely with product and backend teams to bring clean UI, speed, and usability to life in every feature.

This role is fully remote and open to applicants globally.`,
    responsibilities: [
      'Build and maintain core UI components using React and Tailwind CSS.',
      'Turn wireframes and product specs into sleek, responsive interfaces.',
      'Optimize the frontend for performance, accessibility, and mobile usage.',
      'Collaborate with designers, backend developers, and product managers.',
      'Keep the UI consistent, scalable, and easy to maintain.',
      'Push UX standards forward — we want bold ideas, not just safe ones.'
    ],
    requirements: [
      '3+ years of experience working with React and TypeScript.',
      'Experience with Tailwind CSS or other utility-first frameworks.',
      'A strong eye for detail and design — pixel perfection isn\'t just a phrase to you.',
      'Ability to write clean, maintainable, component-based code.',
      'Comfortable working with APIs, Git, and agile tools.',
      'You care about speed, UX, and how it all feels in real use.'
    ],
    benefits: [
      'We\'re not a traditional "suit and tie" company with layers of approval and process.',
      'We move fast, we test, we learn, we ship.',
      'Every team member\'s idea is heard — the best idea wins, no matter your title.',
      '100% remote work, with flexible hours and total autonomy.',
      'Direct collaboration with a design-driven team and founder involvement.',
      'A chance to shape the visual identity of one of the most advanced fleet platforms out there.'
    ]
  },
  'backend-developer': {
    id: 3,
    title: 'Backend Developer (Node.js, PostgreSQL, MongoDB)',
    department: 'Engineering & Development',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'backend-developer',
    description: `FleetBold is building the operating system for connected fleets. From Tesla data pipelines to hardwired GPS integrations, our backend is the engine behind real-time alerts, smart automation, and fleet intelligence used by businesses across the U.S. and beyond.`,
    aboutRole: `We're looking for a sharp, thoughtful Backend Developer who thrives in fast-moving environments and loves designing clean, modular systems. In this role, you'll focus on scalable backend services, database design, and powering the intelligence behind our platform.

This is a fully remote position open to global candidates.`,
    responsibilities: [
      'Build, scale, and maintain APIs and services using Node.js.',
      'Design and manage schemas in PostgreSQL and MongoDB.',
      'Collaborate with the frontend, product, and telematics teams to deliver new features.',
      'Write clean, efficient, and testable backend code.',
      'Own and improve systems related to device data, user behavior, and booking sync.',
      'Help shape technical decisions, workflows, and internal documentation.'
    ],
    requirements: [
      '3+ years of experience building backend systems using Node.js.',
      'Strong skills in working with PostgreSQL and/or MongoDB.',
      'Experience designing RESTful APIs (GraphQL a plus).',
      'A solid understanding of async workflows, authentication, and data security.',
      'Familiarity with version control, code reviews, and CI pipelines.',
      'Ability to think in systems and design for long-term maintainability.'
    ],
    benefits: [
      'A no-nonsense environment where what matters is impact — not formality.',
      'We don\'t care if you code in pajamas — we care that you ship clean, scalable work.',
      'You\'ll be part of a flat team where the best idea wins, regardless of role or seniority.',
      '100% remote with flexible hours and full trust.',
      'Work with experienced engineers and real-world data streams.',
      'Build tools that matter for thousands of vehicles in motion.'
    ]
  },
  'mobile-app-developer': {
    id: 4,
    title: 'Mobile App Developer (React Native, iOS/Android)',
    department: 'Engineering & Development',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'mobile-app-developer',
    description: `FleetBold helps rental hosts and fleet managers stay connected to their vehicles in real-time. From Tesla keyless access to instant GPS alerts, our mobile experience is the heartbeat of the entire platform.`,
    aboutRole: `We're hiring a Mobile App Developer to lead the evolution of our iOS and Android apps. You'll be responsible for building a seamless experience that gives users everything they need — from setup to smart alerts — in the palm of their hand.`,
    responsibilities: [
      'Build and maintain our React Native mobile app for iOS and Android.',
      'Implement features like real-time vehicle updates, notifications, and booking sync.',
      'Work closely with product and backend teams to define the mobile experience.',
      'Ensure smooth performance, native feel, and bug-free releases.',
      'Continuously improve UI/UX and app responsiveness.',
      'Push updates fast using OTA tools like Expo or CodePush.'
    ],
    requirements: [
      '3+ years of mobile app development experience.',
      'Proficiency in React Native and the mobile app release process (App Store / Play Store).',
      'Experience working with APIs, push notifications, and local storage.',
      'Knowledge of mobile design best practices and performance optimization.',
      'Strong attention to detail and a passion for smooth, fast apps.'
    ],
    benefits: [
      'We\'re not your typical corporate setup — no red tape, no fluff.',
      'You\'ll have real impact from day one.',
      'Every idea is welcome — the best idea wins, no matter where it comes from.',
      '100% remote work, full flexibility, real ownership.',
      'Help define the mobile future of one of the most advanced fleet tools in the industry.'
    ]
  },
  'api-integration-engineer': {
    id: 5,
    title: 'API Integration Engineer (Tesla, SmartCar, BYD, etc.)',
    department: 'Engineering & Development',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'api-integration-engineer',
    description: `FleetBold connects with smart vehicles and GPS devices through custom-built APIs. Our platform supports real-time integrations with Tesla, SmartCar, and other providers — and we're just getting started.`,
    aboutRole: `We're looking for an API Integration Engineer to help us connect FleetBold to more devices, automakers, and platforms. You'll design reliable, scalable integrations and work closely with our backend and data teams to keep the system humming.`,
    responsibilities: [
      'Develop and maintain integrations with 3rd-party APIs (Tesla, SmartCar, etc.).',
      'Troubleshoot API connection issues and ensure long-term reliability.',
      'Work with auth systems like OAuth2 and secure token storage.',
      'Monitor and improve sync speed, error handling, and data flow consistency.',
      'Help us expand to new platforms (BYD, Ford, GM, etc.).'
    ],
    requirements: [
      'Experience working with APIs and cloud-based integration flows.',
      'Familiarity with OAuth2, rate limits, and API best practices.',
      'Solid understanding of asynchronous workflows and retries.',
      'Ability to debug quickly and communicate across teams.',
      'Bonus: experience with vehicle APIs or telematics platforms.'
    ],
    benefits: [
      'Autonomy, ownership, and zero bureaucracy.',
      'We move fast and iterate with purpose.',
      'Every integration you build opens new markets.',
      'The best idea wins — no matter your title.',
      'Remote-first culture, async-friendly, flexible hours.'
    ]
  },
  'oauth-authentication-developer': {
    id: 6,
    title: 'OAuth & Authentication Developer',
    department: 'Engineering & Development',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'oauth-authentication-developer',
    description: `FleetBold handles sensitive data — vehicle locations, trip histories, and account credentials — so authentication and privacy are top priorities. We integrate with Gmail, Tesla, and other services that require robust, secure auth systems.`,
    aboutRole: `As an OAuth & Authentication Developer, you'll take the lead on secure logins, permissions, and identity flows. You'll help build a seamless, secure, and scalable system that connects users to their data without friction.`,
    responsibilities: [
      'Implement and maintain OAuth2-based login and token systems.',
      'Build secure flows for Google, Tesla, SmartCar, and other auth providers.',
      'Manage scopes, refresh tokens, and revoke logic safely and efficiently.',
      'Prevent auth-related vulnerabilities (token leaks, insecure redirects).',
      'Work closely with backend and legal/compliance to stay ahead of changes.'
    ],
    requirements: [
      'Deep experience with OAuth2 and secure authentication flows.',
      'Understanding of token lifecycles, consent screens, and app verification.',
      'Comfortable working with secrets, scopes, and multi-account linking.',
      'Knowledge of identity standards like OpenID Connect is a big plus.'
    ],
    benefits: [
      'High-impact role in a security-first environment.',
      'No bureaucracy — just focus, autonomy, and results.',
      'Your code protects real users and real vehicles.',
      'Remote and async-friendly.',
      'The best idea wins — always.'
    ]
  },
  'graphql-rest-api-developer': {
    id: 7,
    title: 'GraphQL/REST API Developer',
    department: 'Engineering & Development',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'graphql-rest-api-developer',
    description: `Our APIs power dashboards, apps, and integrations that keep fleet managers connected to their vehicles 24/7. We don't just need endpoints — we need fast, consistent, and developer-friendly APIs.`,
    aboutRole: `We're hiring an API Developer with experience in GraphQL and/or REST to help design and maintain our public and private endpoints. You'll focus on performance, consistency, and documentation as you build the bridge between backend systems and the rest of the product.`,
    responsibilities: [
      'Build and maintain GraphQL and REST endpoints.',
      'Structure schemas and payloads for performance and clarity.',
      'Collaborate with frontend/mobile teams for real-world use cases.',
      'Monitor API performance and improve response times.',
      'Maintain detailed API documentation and versioning practices.'
    ],
    requirements: [
      '2+ years working with GraphQL or RESTful APIs.',
      'Experience structuring APIs that scale with usage.',
      'Familiarity with tools like Postman, Swagger, or GraphQL Playground.',
      'Strong understanding of JSON, rate limits, and API security.',
      'Bonus: experience with real-time data or subscriptions.'
    ],
    benefits: [
      'A backend-driven role with lots of product input.',
      'Real ownership over API architecture.',
      'Work with a global team — fully remote.',
      'No rigid processes — just the best idea wins.',
      'A chance to impact multiple layers of the platform.'
    ]
  },
  'software-architect': {
    id: 8,
    title: 'Software Architect (Scalable Fleet Systems)',
    department: 'Engineering & Development',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'software-architect',
    description: `We're building a system that can handle thousands of vehicles, real-time updates, and hardware integrations — all at once. Our architecture needs to be reliable, modular, and ready to scale.`,
    aboutRole: `As a Software Architect, you'll own the high-level structure of FleetBold's platform. You'll help us move fast without breaking things — balancing flexibility with rock-solid foundations.`,
    responsibilities: [
      'Design scalable architectures for our core platform (web, mobile, APIs).',
      'Define best practices, internal standards, and code structure.',
      'Work with all teams to align backend, frontend, and infrastructure efforts.',
      'Analyze tradeoffs in system design and performance.',
      'Help review code and guide technical decisions at scale.'
    ],
    requirements: [
      '5+ years of software engineering experience, with system design leadership.',
      'Deep understanding of distributed systems, queues, caching, and microservices.',
      'Experience with AWS, Node.js, PostgreSQL, and real-time data preferred.',
      'Strong communicator and team collaborator.',
      'Passion for building tools that last and scale.'
    ],
    benefits: [
      'A leadership role without the management layers.',
      'Impact decisions that shape the product from the ground up.',
      '100% remote and async-friendly.',
      'No bureaucracy. No ego. Best idea wins.',
      'Real challenges, real scale, and real users.'
    ]
  },
  'devops-engineer': {
    id: 9,
    title: 'DevOps Engineer (AWS, Docker, CI/CD)',
    department: 'Engineering & Development',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'devops-engineer',
    description: `FleetBold relies on solid infrastructure. Behind every live GPS update or Tesla command is a system that needs to be secure, reliable, and fast — all day, every day.`,
    aboutRole: `We're hiring a DevOps Engineer to help us automate, monitor, and scale. You'll work closely with engineering to streamline development and ensure smooth, reliable deployments.`,
    responsibilities: [
      'Manage CI/CD pipelines and deployment workflows.',
      'Automate infrastructure using tools like Terraform or CloudFormation.',
      'Monitor performance and uptime across services.',
      'Improve incident response, backups, and failover systems.',
      'Optimize AWS usage and cost efficiency.'
    ],
    requirements: [
      '3+ years of experience in DevOps or infrastructure engineering.',
      'Strong knowledge of AWS, Docker, CI/CD, and monitoring tools.',
      'Experience with IaC (Terraform preferred).',
      'Comfort with logs, dashboards, and root cause analysis.',
      'Passion for automation and scalable infrastructure.'
    ],
    benefits: [
      'Total freedom to improve how we ship and scale.',
      'No bottlenecks — just fast decisions and faster feedback loops.',
      'Remote culture, async collaboration, full ownership.',
      'The best idea wins, and your input matters.'
    ]
  },
  'cloud-infrastructure-engineer': {
    id: 10,
    title: 'Cloud Infrastructure Engineer (S3, Serverless, Lambda)',
    department: 'Engineering & Development',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'cloud-infrastructure-engineer',
    description: `FleetBold runs on the cloud — and we're scaling fast. From storing telemetry data to running instant vehicle alerts, our infrastructure handles millions of requests and events every day.`,
    aboutRole: `As a Cloud Infrastructure Engineer, you'll be in charge of the systems powering FleetBold behind the scenes. You'll design and optimize cloud services that are robust, scalable, and efficient.`,
    responsibilities: [
      'Design cloud-native services using S3, Lambda, and other AWS tools.',
      'Optimize for performance, scalability, and cost-efficiency.',
      'Support high-availability systems and global deployments.',
      'Automate infrastructure processes and alerts.',
      'Collaborate with backend and data teams for usage-heavy flows.'
    ],
    requirements: [
      '3+ years of experience managing cloud infrastructure.',
      'Deep experience with AWS (S3, Lambda, CloudWatch, etc.).',
      'Understanding of event-driven architecture and microservices.',
      'Experience with cost monitoring and optimization.',
      'Bonus: experience in telemetry or IoT data management.'
    ],
    benefits: [
      'Real ownership of core infrastructure.',
      'Total freedom to suggest tools and improve systems.',
      'Zero politics, full transparency.',
      'A team where your idea can ship next week, not next year.'
    ]
  },
  'qa-automation-engineer': {
    id: 11,
    title: 'QA Automation Engineer (Playwright, Cypress, Selenium)',
    department: 'Quality Assurance',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'qa-automation-engineer',
    description: `FleetBold connects hardware and software to power smarter fleets. Every feature we launch needs to work flawlessly in real-world conditions — and QA is at the heart of that promise.`,
    aboutRole: `We're looking for a QA Automation Engineer to help us test smarter, not harder. You'll write automated tests, break things before users do, and work closely with developers to raise the quality bar across the board.`,
    responsibilities: [
      'Build and maintain automated end-to-end and integration tests.',
      'Use tools like Playwright, Cypress, or Selenium.',
      'Write clean, reliable test scripts that catch real issues.',
      'Work closely with developers to create testable features.',
      'Help manage test environments and reporting systems.'
    ],
    requirements: [
      '2+ years experience with test automation frameworks.',
      'Familiarity with CI pipelines and cross-browser testing.',
      'Experience in bug tracking and reporting.',
      'Comfortable writing tests for APIs and UIs.',
      'Bonus: experience in fleet, GPS, or vehicle-related software.'
    ],
    benefits: [
      'No silos: QA is part of every decision.',
      'Remote-first, async-friendly workflow.',
      'Ship better features, faster.',
      '"Best idea wins" culture with direct access to product.'
    ]
  },
  'manual-qa-tester': {
    id: 12,
    title: 'Manual QA Tester (Mobile & Web)',
    department: 'Quality Assurance',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'manual-qa-tester',
    description: `We move fast and release often, so QA is a vital layer of our quality process. At FleetBold, manual testers are the last line of defense between bugs and users.`,
    aboutRole: `As a Manual QA Tester, you'll explore our platform like a real user would. You'll catch unexpected behavior, identify edge cases, and help ensure we deliver polished, intuitive experiences every time.`,
    responsibilities: [
      'Manually test features on web and mobile platforms.',
      'Reproduce and document bugs clearly.',
      'Verify bug fixes and app behavior after each deploy.',
      'Test various devices, browsers, and usage scenarios.',
      'Help maintain testing documentation and test cases.'
    ],
    requirements: [
      '1-2 years of manual QA experience.',
      'Good instincts for usability and user expectations.',
      'Comfortable using Android, iOS, and browser dev tools.',
      'Highly organized, detail-oriented, and persistent.'
    ],
    benefits: [
      'A QA culture that values real-world testing.',
      'Collaboration with product, design, and dev teams.',
      '100% remote flexibility.',
      'A place where curiosity and thoroughness are prized.'
    ]
  },
  'telematics-engineer': {
    id: 13,
    title: 'Telematics Engineer (OBD-II, GPS protocols, CAN bus)',
    department: 'Hardware & Embedded',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'telematics-engineer',
    description: `FleetBold connects deeply with vehicles through OBD-II, GPS, and CAN data. We turn raw telematics into smart actions for car rental hosts and fleet operators.`,
    aboutRole: `We're hiring a Telematics Engineer to help us read, decode, and transform vehicle data into real-time insights. If you love working with protocols and devices, this one's for you.`,
    responsibilities: [
      'Work with OBD-II and CAN data protocols.',
      'Decode PIDs and translate raw data into usable values.',
      'Collaborate with backend engineers on data ingestion.',
      'Validate signal accuracy with real-world testing.',
      'Assist in GPS device integration and signal stability.'
    ],
    requirements: [
      'Experience with telematics devices or auto diagnostics.',
      'Familiarity with vehicle data standards (SAE J1979, CAN).',
      'Strong troubleshooting and analysis skills.',
      'Bonus: experience in reverse engineering or hardware debugging.'
    ],
    benefits: [
      'Hardware + software collaboration at its best.',
      'No corporate red tape — just real engineering.',
      'Remote, flexible, hands-on work.',
      'Build tech that talks to real vehicles.'
    ]
  },
  'embedded-firmware-engineer': {
    id: 14,
    title: 'Embedded Firmware Engineer (C/C++, GPS trackers)',
    department: 'Hardware & Embedded',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'embedded-firmware-engineer',
    description: `We work with custom GPS trackers that power the FleetBold experience. Our firmware team brings those devices to life.`,
    aboutRole: `We're seeking an Embedded Firmware Engineer to help us optimize and evolve the software running on GPS tracking hardware. You'll work closely with our hardware vendors and cloud backend to bridge the gap between device and platform.`,
    responsibilities: [
      'Develop and maintain firmware for GPS and telematics devices.',
      'Work in C/C++ with real-time constraints and limited resources.',
      'Optimize data transmission and battery performance.',
      'Debug hardware-level issues in lab and field environments.',
      'Collaborate with cloud and API teams for data integration.'
    ],
    requirements: [
      'Proficiency in embedded C/C++.',
      'Experience working with GSM, GNSS, or IoT devices.',
      'Familiarity with low-power systems and RTOS.',
      'Comfort working close to the hardware.'
    ],
    benefits: [
      'Total ownership of firmware decisions.',
      'Device-focused work that directly impacts users.',
      'Remote-friendly, R&D-style environment.',
      'Room to innovate with new chips and tools.'
    ]
  },
  'embedded-linux-developer': {
    id: 15,
    title: 'Embedded Linux Developer (IoT firmware customization)',
    department: 'Hardware & Embedded',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'embedded-linux-developer',
    description: `FleetBold is evolving beyond standard GPS. We're integrating smarter devices and need flexible, secure embedded systems at the edge.`,
    aboutRole: `We're hiring an Embedded Linux Developer to help us build and maintain embedded OS platforms for our hardware line. You'll work with device drivers, remote updates, and system-level optimization.`,
    responsibilities: [
      'Customize and maintain Linux-based IoT firmware.',
      'Configure bootloaders, drivers, and kernel modules.',
      'Build scripts for OTA updates and remote config.',
      'Optimize devices for performance, size, and reliability.',
      'Debug in both virtual and hardware environments.'
    ],
    requirements: [
      'Proficiency with Linux internals and Yocto/OpenWRT.',
      'Strong Bash/Python and embedded scripting skills.',
      'Familiarity with cross-compiling and secure OTA.',
      'Experience with GPS or automotive firmware is a plus.'
    ],
    benefits: [
      'Low-level control, high-level impact.',
      'Work that connects hardware to the real world.',
      'Remote collaboration with embedded and cloud teams.',
      'No fluff, just focused engineering.'
    ]
  },
  'rf-engineer': {
    id: 16,
    title: 'RF Engineer (Signal processing, LoRa/NB-IoT/LTE-M)',
    department: 'Hardware & Embedded',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'rf-engineer',
    description: `FleetBold builds and sources its own hardware to ensure full coverage, even in low-signal areas. Our RF team is the frontline of reliable connectivity.`,
    aboutRole: `We're hiring an RF Engineer to help us optimize GPS and cellular signal quality. From antenna tuning to RF shielding, your work ensures our devices stay connected.`,
    responsibilities: [
      'Design and validate RF chains for GPS, LTE-M, NB-IoT.',
      'Optimize antenna placement and shielding in enclosures.',
      'Conduct lab and field tests for signal reliability.',
      'Collaborate with hardware, firmware, and compliance teams.',
      'Investigate interference and real-world signal issues.'
    ],
    requirements: [
      'Experience in RF design and testing.',
      'Familiarity with signal analyzers and simulation tools.',
      'Understanding of LTE bands and GNSS principles.',
      'Bonus: automotive-grade antenna experience.'
    ],
    benefits: [
      'Real impact on product connectivity.',
      'End-to-end RF ownership.',
      'Flexible, remote hardware team.',
      'Field testing and R&D opportunities.'
    ]
  },
  'hardware-testing-engineer': {
    id: 17,
    title: 'Hardware Testing Engineer (GPS signal integrity, shielding)',
    department: 'Hardware & Embedded',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'hardware-testing-engineer',
    description: `Every FleetBold device must perform in the wild. That means testing matters — in the lab, on the road, and everywhere in between.`,
    aboutRole: `We're hiring a Hardware Testing Engineer to validate our GPS hardware and uncover edge cases that only happen in the real world. If you're obsessed with finding what others miss, this is for you.`,
    responsibilities: [
      'Conduct environmental, signal, and performance tests.',
      'Build test plans to simulate real-world usage.',
      'Identify firmware/hardware boundary issues.',
      'Help improve antenna and shielding design.',
      'Report bugs, findings, and improvement areas.'
    ],
    requirements: [
      'Hands-on experience testing GPS or wireless devices.',
      'Comfort with test tools and RF environments.',
      'Strong documentation and observation skills.',
      'Passion for reliability and product excellence.'
    ],
    benefits: [
      'Build the products you\'d want to use.',
      'Hands-on, field-driven testing.',
      'No layers of approval — just real results.',
      '100% remote work (lab gear provided).'
    ]
  },
  'device-compliance-certification-specialist': {
    id: 18,
    title: 'Device Compliance & Certification Specialist (FCC, CE, PTCRB)',
    department: 'Hardware & Embedded',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'device-compliance-certification-specialist',
    description: `FleetBold ships devices globally. That means every piece of hardware must pass rigorous regulatory requirements across markets.`,
    aboutRole: `We're looking for a Compliance & Certification Specialist to lead FCC, CE, and PTCRB certification processes. You'll work closely with hardware and legal teams to ensure all devices meet local standards.`,
    responsibilities: [
      'Coordinate lab testing for RF and electrical compliance.',
      'Prepare and manage documentation for certifications.',
      'Liaise with regulatory bodies and test labs.',
      'Track country-specific import/export requirements.',
      'Advise design team on compliance risks early.'
    ],
    requirements: [
      'Experience with FCC, CE, or PTCRB processes.',
      'Familiarity with RF test setups and documentation.',
      'Highly organized and detail-focused.',
      'Bonus: experience with GPS or telematics devices.'
    ],
    benefits: [
      'Lead compliance from concept to market.',
      'Remote work with global scope.',
      'Real ownership and no corporate blockers.',
      'Access to test labs and support resources.'
    ]
  },
  'connectivity-systems-engineer': {
    id: 19,
    title: 'Connectivity Systems Engineer (Bluetooth, Wi-Fi, LTE fallback)',
    department: 'Hardware & Embedded',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'connectivity-systems-engineer',
    description: `Vehicle connectivity is complex — Bluetooth, Wi-Fi, cellular fallback, and firmware updates must all work together. At FleetBold, connectivity is a core feature, not an afterthought.`,
    aboutRole: `We're hiring a Connectivity Systems Engineer to own how our devices stay online. You'll troubleshoot edge cases, optimize fallback logic, and guide how different radios interact.`,
    responsibilities: [
      'Design and validate connectivity flows across protocols.',
      'Troubleshoot field issues with multi-radio hardware.',
      'Optimize firmware connection handling and retries.',
      'Collaborate on OTA update processes.',
      'Contribute to connectivity roadmap and firmware planning.'
    ],
    requirements: [
      'Experience with Bluetooth, Wi-Fi, and LTE systems.',
      'Familiarity with embedded connectivity stacks.',
      'Strong debugging and logging skills.',
      'Bonus: experience in automotive or IoT connectivity.'
    ],
    benefits: [
      'Own the logic that keeps devices alive.',
      'No busywork — real responsibility from day one.',
      'Remote, async, global team.',
      'Space to innovate and improve connectivity architecture.'
    ]
  },
  'data-engineer': {
    id: 20,
    title: 'Data Engineer (Telemetry ETL pipelines, analytics)',
    department: 'Data & Analytics',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'data-engineer',
    description: `FleetBold turns real-time vehicle data into alerts, reports, and insights. That means our data pipelines must be strong, fast, and trustworthy.`,
    aboutRole: `We're looking for a Data Engineer to help us design and scale our data systems. You'll manage ingestion, transformation, and analytics pipelines that power everything from in-app alerts to performance dashboards.`,
    responsibilities: [
      'Design and maintain ETL pipelines for telemetry data.',
      'Work with real-time and batch processing frameworks.',
      'Collaborate with backend and product teams.',
      'Build scalable analytics models and storage.',
      'Monitor data quality, latency, and reliability.'
    ],
    requirements: [
      '3+ years in data engineering or analytics engineering.',
      'Proficiency in Python, SQL, and cloud-based data tools.',
      'Experience with time-series or streaming data.',
      'Bonus: fleet, IoT, or telemetry data background.'
    ],
    benefits: [
      'Data with real-world purpose and urgency.',
      'Freedom to choose tools and workflows.',
      'A supportive, async-first culture.',
      'Your pipelines = real insights, fast decisions.'
    ]
  },
  'machine-learning-engineer': {
    id: 21,
    title: 'Machine Learning Engineer (Fleet Behavior AI)',
    department: 'Data & Analytics',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'machine-learning-engineer',
    description: `FleetBold uses real-time data to detect patterns, predict risks, and automate smarter fleet operations. We're investing in AI to help our customers make better decisions, faster.`,
    aboutRole: `We're hiring a Machine Learning Engineer to lead our AI efforts around fleet behavior, route optimization, and predictive maintenance. You'll work with huge datasets and real-world outcomes to build models that matter.`,
    responsibilities: [
      'Design and train machine learning models for vehicle and driver behavior.',
      'Work with time-series, GPS, and booking data.',
      'Collaborate with data and backend teams on deployment.',
      'Monitor model performance and retrain as needed.',
      'Help shape FleetBold\'s long-term AI roadmap.'
    ],
    requirements: [
      'Experience with Python, TensorFlow/PyTorch, and ML Ops.',
      'Strong background in predictive modeling and anomaly detection.',
      'Familiarity with real-time data ingestion and scoring.',
      'Bonus: experience in telematics or IoT data.'
    ],
    benefits: [
      'AI with direct, daily business impact.',
      'Real data, real scale, real use.',
      'Remote-first team and async collaboration.',
      'No fluff — we build and ship.'
    ]
  },
  'ui-ux-designer': {
    id: 22,
    title: 'UI/UX Designer (Fleet Dashboard Tools)',
    department: 'Design & UX',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'ui-ux-designer',
    description: `FleetBold builds tools that fleet managers depend on — and that means the interface has to be intuitive, beautiful, and fast.`,
    aboutRole: `We're hiring a UI/UX Designer to own the look and feel of our dashboard and mobile app experiences. You'll create flows that simplify complex data and make smart decisions easier.`,
    responsibilities: [
      'Design flows, wireframes, and high-fidelity mockups.',
      'Collaborate closely with frontend and product teams.',
      'Run usability tests and iterate quickly.',
      'Create design systems and reusable components.',
      'Help evolve the FleetBold brand visually.'
    ],
    requirements: [
      '3+ years designing digital products.',
      'Proficiency in Figma or equivalent.',
      'Strong portfolio of intuitive dashboards or B2B tools.',
      'Bonus: experience with automotive or telematics UI.'
    ],
    benefits: [
      'Full creative ownership and flexibility.',
      '100% remote work with async-friendly collaboration.',
      'A product-first company that values design input.'
    ]
  },
  'visual-designer': {
    id: 23,
    title: 'Visual Designer (Marketing & Product Imagery)',
    department: 'Design & UX',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'visual-designer',
    description: `We believe fleet software should look as good as it works. Our brand is minimal, high-tech, and professional — and our design reflects that.`,
    aboutRole: `We're looking for a Visual Designer to support both product and marketing teams with assets that feel elevated and cohesive. You'll work across landing pages, app stores, decks, and more.`,
    responsibilities: [
      'Design high-quality visuals for web, social, and app store.',
      'Collaborate on branding and style guides.',
      'Work with product screenshots and mockups.',
      'Help build a recognizable, beautiful brand.'
    ],
    requirements: [
      'Strong skills in layout, typography, and composition.',
      'Proficiency in Figma, Illustrator, or Photoshop.',
      'Experience designing for SaaS or high-tech brands.',
      'Bonus: motion or 3D design skills.'
    ],
    benefits: [
      'A brand-driven, clean aesthetic.',
      'Creative ownership and flexibility.',
      'Remote-first environment.'
    ]
  },
  'product-manager': {
    id: 24,
    title: 'Product Manager (Connected Devices)',
    department: 'Product & Marketing',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'product-manager',
    description: `Our platform connects vehicles, devices, and users in real time. We build tools that let hosts run fleets without friction.`,
    aboutRole: `As a Product Manager, you'll help define and prioritize what we build next. You'll translate user needs into roadmap priorities and work closely with every team to deliver high-impact features.`,
    responsibilities: [
      'Define product goals and success metrics.',
      'Work with design and engineering to ship features.',
      'Prioritize bugs, feedback, and roadmap items.',
      'Own product documentation and spec writing.'
    ],
    requirements: [
      '2+ years in product management.',
      'Great communicator, both written and visual.',
      'Experience in SaaS or connected devices is a plus.',
      'Detail-oriented but strategic thinker.'
    ],
    benefits: [
      'Full access to users and real-world feedback.',
      'Ship fast, iterate faster.',
      'Collaborative, idea-first culture.',
      '100% remote with global teammates.'
    ]
  },
  'content-writer': {
    id: 25,
    title: 'Content Writer (Technical & Marketing)',
    department: 'Product & Marketing',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'content-writer',
    description: `FleetBold serves tech-savvy users and newcomers alike. Clear, compelling communication is how we earn trust.`,
    aboutRole: `We're hiring a Content Writer who can write crisp, useful, and engaging content across our help center, marketing pages, and emails.`,
    responsibilities: [
      'Write blog posts, FAQs, help articles, and landing pages.',
      'Craft in-app and email copy for new features.',
      'Work with designers on visuals and copy hierarchy.',
      'Maintain consistent voice and tone.'
    ],
    requirements: [
      '2+ years writing in a tech or SaaS environment.',
      'Strong editor with a clear, modern style.',
      'Bonus: experience with SEO, analytics, or product copy.'
    ],
    benefits: [
      'A fast-paced brand with lots of content needs.',
      'Autonomy over writing style and output.',
      'No corporate tone — real voice, real people.'
    ]
  },
  'email-marketing-specialist': {
    id: 26,
    title: 'Email Marketing Specialist (Automation & Segmentation)',
    department: 'Product & Marketing',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'email-marketing-specialist',
    description: `FleetBold communicates with thousands of users across onboarding, retention, and lifecycle journeys. Smart email is core to that.`,
    aboutRole: `We're looking for an Email Marketing Specialist to manage our MailChimp/SendGrid flows. From welcome sequences to reactivation — your job is to send the right message at the right time.`,
    responsibilities: [
      'Build email journeys for different user segments.',
      'Optimize subject lines, open rates, and CTAs.',
      'Run A/B tests and monitor analytics.',
      'Keep content fresh, helpful, and brand-aligned.'
    ],
    requirements: [
      'Experience in email marketing platforms (Mailchimp, Klaviyo, etc.).',
      'Understanding of deliverability, timing, and personalization.',
      'Bonus: technical understanding of fleet or mobility space.'
    ],
    benefits: [
      'Full ownership of email lifecycle.',
      'Flexible work, no red tape.',
      'Room to innovate with copy and flows.'
    ]
  },
  'community-manager': {
    id: 27,
    title: 'Community Manager (Fleet Hosts & Owners)',
    department: 'Product & Marketing',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'community-manager',
    description: `Our users are car rental hosts, fleet operators, and enthusiasts — and they talk. We want to build a strong, supportive community around them.`,
    aboutRole: `We're hiring a Community Manager to engage with Facebook groups, help centers, and social forums. You'll answer questions, spark discussions, and turn customers into superfans.`,
    responsibilities: [
      'Monitor and reply in groups and support forums.',
      'Run polls, events, and engagement posts.',
      'Turn feedback into product insights.',
      'Manage tone, response time, and brand voice.'
    ],
    requirements: [
      'Excellent communicator with social media savvy.',
      'Empathy for users and passion for helpful content.',
      'Bonus: experience in mobility or fleet spaces.'
    ],
    benefits: [
      'A voice in shaping user relationships.',
      'Real conversations, not canned replies.',
      'Remote-first, async culture.'
    ]
  },
  'customer-success-manager': {
    id: 28,
    title: 'Customer Success Manager (Onboarding & Support)',
    department: 'Customer Success & Support',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'customer-success-manager',
    description: `FleetBold helps customers succeed with tools they depend on. Onboarding and ongoing support are key to retention.`,
    aboutRole: `We're hiring a Customer Success Manager to guide new users, troubleshoot issues, and make sure every customer gets maximum value.`,
    responsibilities: [
      'Host onboarding calls and answer live chat questions.',
      'Track common issues and build support docs.',
      'Relay user feedback to product and engineering.',
      'Help customers upgrade and explore new features.'
    ],
    requirements: [
      'Customer-first attitude with tech fluency.',
      'Clear writing and problem-solving skills.',
      'Bonus: experience with Turo or car rental platforms.'
    ],
    benefits: [
      'No call scripts — real conversations only.',
      'Empowerment to help and innovate.',
      'Remote work, global users.'
    ]
  },
  'data-analyst': {
    id: 29,
    title: 'Data Analyst (User Behavior & Growth Metrics)',
    department: 'Data & Analytics',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'data-analyst',
    description: `We're a data-powered company. From bookings to usage trends, we need clarity to move fast and build the right things.`,
    aboutRole: `As a Data Analyst, you'll help track key metrics, build dashboards, and find patterns in how users interact with our platform.`,
    responsibilities: [
      'Build dashboards using tools like Metabase or Looker.',
      'Analyze user funnels and behavior.',
      'Support product and marketing with insights.',
      'Create ad-hoc reports and track KPIs.'
    ],
    requirements: [
      'Strong SQL skills and analytics mindset.',
      'Comfort with data visualization tools.',
      'Bonus: fleet or SaaS background.'
    ],
    benefits: [
      'Access to full data stack.',
      'Real questions, real answers, real impact.',
      'Remote + async-friendly environment.'
    ]
  },
  'copywriter': {
    id: 30,
    title: 'Copywriter (Brand & Product Voice)',
    department: 'Product & Marketing',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'copywriter',
    description: `Words matter — especially when simplifying tech. At FleetBold, we use language to stand out, explain, and convert.`,
    aboutRole: `We're hiring a Copywriter to define how FleetBold sounds across our site, emails, ads, and in-app messages.`,
    responsibilities: [
      'Write conversion-optimized landing pages.',
      'Create product announcements and release notes.',
      'Help with naming, CTAs, and onboarding text.',
      'Work closely with product and marketing.'
    ],
    requirements: [
      'Clean, modern writing style.',
      'Experience writing for tech or mobility brands.',
      'Bonus: UX writing background.'
    ],
    benefits: [
      'A brand-first approach to writing.',
      'Room to push tone and style.',
      'Fast-paced, async-friendly team.'
    ]
  },
  'technical-support-engineer': {
    id: 31,
    title: 'Technical Support Engineer (Telematics & Devices)',
    department: 'Customer Success & Support',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'technical-support-engineer',
    description: `FleetBold powers fleets through hardware integrations and real-time tracking. Our support needs to match the reliability we promise.`,
    aboutRole: `We're hiring a Technical Support Engineer to troubleshoot, debug, and guide customers using our GPS devices, Tesla integrations, and fleet APIs.`,
    responsibilities: [
      'Handle Tier 2+ technical issues.',
      'Investigate bugs and device connectivity problems.',
      'Collaborate with engineering on fixes and docs.',
      'Own the feedback loop between support and product.'
    ],
    requirements: [
      'Strong troubleshooting and communication skills.',
      'Familiarity with GPS, IoT, or automotive telematics.',
      'Bonus: API or backend experience.'
    ],
    benefits: [
      'Direct access to dev team.',
      'A role that blends tech with people.',
      'Remote, flexible schedule.'
    ]
  },
  'community-strategist': {
    id: 32,
    title: 'Community Strategist (Growth & Engagement)',
    department: 'Product & Marketing',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'community-strategist',
    description: `FleetBold is growing fast. Our user base is active, opinionated, and passionate — and we want to build a real community around that.`,
    aboutRole: `As Community Strategist, you'll lead community-driven growth. You'll shape how we show up in Facebook groups, forums, events, and meetups.`,
    responsibilities: [
      'Design and execute community growth plans.',
      'Partner with influencers and advocates.',
      'Coordinate giveaways, challenges, or AMAs.',
      'Track sentiment and user insights.'
    ],
    requirements: [
      'You love online communities.',
      'Clear communicator with creative campaign ideas.',
      'Bonus: fleet, EV, or SaaS audience background.'
    ],
    benefits: [
      'Ownership of our most passionate channel.',
      'Chance to shape voice and tone.',
      'Remote freedom + async tools.'
    ]
  },
  'social-media-manager': {
    id: 33,
    title: 'Social Media Manager (Content + Strategy)',
    department: 'Product & Marketing',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'social-media-manager',
    description: `FleetBold helps car rental pros stay ahead. Our brand lives online, especially in the platforms our users hang out on.`,
    aboutRole: `We're hiring a Social Media Manager to create posts, grow engagement, and turn updates into moments. You'll work with design, product, and community to bring it all to life.`,
    responsibilities: [
      'Plan and publish posts across platforms.',
      'Monitor comments, DMs, and mentions.',
      'Track reach, growth, and engagement.',
      'Spot trends and test creative angles.'
    ],
    requirements: [
      'Creative + organized social media pro.',
      'Strong writing and basic design skills.',
      'Bonus: short-form video editing or TikTok know-how.'
    ],
    benefits: [
      'Flexible calendar with autonomy.',
      'A brand with lots to say and show.',
      'Remote, async culture.'
    ]
  },
  'motion-designer': {
    id: 34,
    title: 'Motion Designer (Short-form Videos)',
    department: 'Design & UX',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'motion-designer',
    description: `FleetBold wants to be understood fast. Motion design helps explain features, highlight updates, and excite new users.`,
    aboutRole: `We're looking for a Motion Designer to create reels, walkthroughs, and UI demos. Think animations that feel sleek and helpful, not just pretty.`,
    responsibilities: [
      'Animate product features and user flows.',
      'Build motion graphics for social posts.',
      'Work with marketing and product to tell visual stories.'
    ],
    requirements: [
      'Motion design skills for SaaS or tech.',
      'Familiarity with tools like After Effects or Lottie.',
      'Bonus: UI/UX background or fleet interest.'
    ],
    benefits: [
      'Full creative freedom.',
      'Tight feedback loops.',
      'Real product storytelling.'
    ]
  },
  'crm-manager': {
    id: 35,
    title: 'CRM Manager (User Segments + Retention)',
    department: 'Product & Marketing',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'crm-manager',
    description: `With thousands of users, each one at a different stage, FleetBold needs smart CRM logic to guide their journey.`,
    aboutRole: `We're hiring a CRM Manager to manage contact strategies, build segments, and drive engagement across email, in-app, and push.`,
    responsibilities: [
      'Define segments and lifecycle stages.',
      'Create journeys and messaging logic.',
      'Work with support and marketing on campaign timing.'
    ],
    requirements: [
      'CRM experience in B2B or SaaS.',
      'Familiar with email/push tools (Mailchimp, OneSignal, etc.).',
      'Bonus: SQL or analytics skills.'
    ],
    benefits: [
      'Clear KPIs and measurable success.',
      'Lots of user data to work with.',
      'Remote team with async rhythm.'
    ]
  },
  'digital-ads-specialist': {
    id: 36,
    title: 'Digital Ads Specialist (Apple Store, Meta, Google)',
    department: 'Product & Marketing',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'digital-ads-specialist',
    description: `FleetBold competes in a fast-moving space — and performance marketing is our sharpest tool.`,
    aboutRole: `We're hiring a Digital Ads Specialist to manage Apple Search Ads, Google Ads, and Meta campaigns. You'll manage budgets, creatives, and A/B tests.`,
    responsibilities: [
      'Launch and monitor paid campaigns.',
      'Optimize targeting and bidding strategies.',
      'Collaborate with design for ad assets.',
      'Report on ROI and LTV per channel.'
    ],
    requirements: [
      'Paid ads background with mobile app focus.',
      'Comfortable in dashboards and ad managers.',
      'Bonus: experience with fleet/auto products.'
    ],
    benefits: [
      'Budget ownership.',
      'Performance-based decision making.',
      '100% remote.'
    ]
  },
  'influencer-partnership-lead': {
    id: 37,
    title: 'Influencer Partnership Lead (Fleet & Auto Niche)',
    department: 'Product & Marketing',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'influencer-partnership-lead',
    description: `We're building a trusted brand in a niche space — and creators are key to that.`,
    aboutRole: `FleetBold seeks an Influencer Lead to identify, recruit, and activate creators across YouTube, TikTok, and IG who reach rental hosts, Tesla owners, or tech-forward car users.`,
    responsibilities: [
      'Source and vet potential partners.',
      'Negotiate deals and campaigns.',
      'Track affiliate links and content ROI.',
      'Work with marketing on co-branded material.'
    ],
    requirements: [
      'Fluent in influencer and creator culture.',
      'Organized, persuasive, and brand-aligned.',
      'Bonus: fleet or mobility space experience.'
    ],
    benefits: [
      'Freedom to find your own tactics.',
      'Measurable success and growth.',
      'Remote-first mindset.'
    ]
  },
  'localization-manager': {
    id: 38,
    title: 'Localization Manager (International Expansion)',
    department: 'Product & Marketing',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'localization-manager',
    description: `As FleetBold expands beyond North America, localized content matters.`,
    aboutRole: `We're hiring a Localization Manager to manage translation workflows, market adaptations, and region-specific updates across the product and marketing.`,
    responsibilities: [
      'Coordinate with freelance/local translators.',
      'Ensure tone, legality, and accuracy.',
      'Build glossaries and maintain consistency.',
      'Support country-specific onboarding.'
    ],
    requirements: [
      'Experience with multilingual SaaS or apps.',
      'Process-oriented with a love for words.',
      'Bonus: experience localizing mobility tech.'
    ],
    benefits: [
      'Expand a global brand.',
      'High autonomy and ownership.',
      'Remote-first, async communication.'
    ]
  },
  'revenue-operations-lead': {
    id: 40,
    title: 'Revenue Operations Lead (Pricing, CRM, Analytics)',
    department: 'Business Operations',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'revenue-operations-lead',
    description: `FleetBold's revenue strategy is evolving — subscriptions, upsells, and partnerships. Ops is what keeps it clean and clear.`,
    aboutRole: `We're looking for a Revenue Operations Lead to help align GTM tools, improve pricing logic, and track performance across the funnel.`,
    responsibilities: [
      'Manage CRM hygiene and logic.',
      'Align marketing and sales reporting.',
      'Model pricing and upsell flows.',
      'Optimize conversions at each stage.'
    ],
    requirements: [
      'RevOps experience in SaaS or high-volume apps.',
      'Strong Excel / dashboard / analysis skills.',
      'Bonus: subscription models or car tech background.'
    ],
    benefits: [
      'Clear performance metrics.',
      'Autonomy + tools access.',
      'Fully remote.'
    ]
  },
  'partnerships-manager': {
    id: 41,
    title: 'Partnerships Manager (OEMs, Platforms, APIs)',
    department: 'Business Operations',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'partnerships-manager',
    description: `From Tesla to SmartCar, we integrate with the best. Partnerships are our API to the world.`,
    aboutRole: `We're hiring a Partnerships Manager to drive OEM, API, and integration relationships. You'll help bring new data into FleetBold and position us as a tech-forward partner.`,
    responsibilities: [
      'Identify and approach potential integration partners.',
      'Negotiate terms, timelines, and outcomes.',
      'Maintain partner relationships over time.',
      'Collaborate with tech and legal teams.'
    ],
    requirements: [
      'Experience managing B2B partnerships.',
      'Excellent negotiation and communication skills.',
      'Bonus: connected car, telematics, or API background.'
    ],
    benefits: [
      'Real tech influence.',
      'Strategic ownership of growth levers.',
      'Fully remote team.'
    ]
  },
  'technical-documentation-writer': {
    id: 42,
    title: 'Technical Documentation Writer (API, Devices, Onboarding)',
    department: 'Business Operations',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'technical-documentation-writer',
    description: `FleetBold thrives when users and developers understand what's possible — clearly and quickly.`,
    aboutRole: `We're hiring a Technical Writer to create clear documentation for APIs, devices, and fleet setup. From how-to guides to error explanations, your words will empower users.`,
    responsibilities: [
      'Create and maintain API and device documentation.',
      'Collaborate with developers and support to gather info.',
      'Write clear onboarding guides and help center content.',
      'Organize docs for easy access and use.'
    ],
    requirements: [
      'Experience writing technical content.',
      'Excellent written English and structure skills.',
      'Bonus: experience in mobility or telematics docs.'
    ],
    benefits: [
      'Full ownership of FleetBold\'s knowledge layer.',
      'Continuous collaboration with product and devs.',
      'Remote, async work style.'
    ]
  },
  'legal-counsel': {
    id: 43,
    title: 'Legal Counsel (Tech & Privacy Law)',
    department: 'Legal & Compliance',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'legal-counsel',
    description: `FleetBold handles real-time GPS, vehicle data, and user behavior — legal compliance is non-negotiable.`,
    aboutRole: `We're hiring a Legal Counsel to help us stay ahead of regulatory curves, data laws, and commercial agreements.`,
    responsibilities: [
      'Draft and review contracts and partnerships.',
      'Ensure compliance with privacy regulations (CCPA, GDPR).',
      'Advise on API/data access risk.',
      'Support product and leadership teams on legal issues.'
    ],
    requirements: [
      'Experience with SaaS, mobility, or data regulation.',
      'Licensed attorney in any jurisdiction.',
      'Bonus: cross-border law or IP licensing.'
    ],
    benefits: [
      'Autonomy and leadership trust.',
      'Global impact through policy guidance.',
      'Remote, async collaboration.'
    ]
  },
  'regulatory-affairs-analyst': {
    id: 44,
    title: 'Regulatory Affairs Analyst (Mobility & Telematics)',
    department: 'Legal & Compliance',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'regulatory-affairs-analyst',
    description: `FleetBold operates in a regulated environment — from GPS laws to connectivity restrictions.`,
    aboutRole: `We're hiring a Regulatory Analyst to monitor, interpret, and advise us on industry rules that affect our product, devices, and market entry.`,
    responsibilities: [
      'Track telematics and GPS regulations globally.',
      'Report on upcoming changes affecting business.',
      'Coordinate with legal and engineering teams.',
      'Maintain compliance documentation.'
    ],
    requirements: [
      'Legal or policy background.',
      'Experience in IoT, mobility, or vehicle tech.',
      'Bonus: bilingual or regulatory writing experience.'
    ],
    benefits: [
      'Influence how we go to market.',
      'Research + product impact blend.',
      'Fully remote role.'
    ]
  },
  'compliance-officer': {
    id: 45,
    title: 'Compliance Officer (Internal Policies & Audits)',
    department: 'Legal & Compliance',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'compliance-officer',
    description: `FleetBold handles sensitive data and hardware — we take internal control seriously.`,
    aboutRole: `We're hiring a Compliance Officer to ensure that our internal operations meet our own standards and external obligations.`,
    responsibilities: [
      'Maintain and update security/compliance policies.',
      'Audit internal systems for gaps or risks.',
      'Train teams on compliance best practices.',
      'Support audits and certification processes.'
    ],
    requirements: [
      'Background in compliance or audit.',
      'Familiarity with SOC2, ISO 27001, or similar.',
      'Bonus: experience in software startups.'
    ],
    benefits: [
      'A seat at the table for major decisions.',
      'Chance to build processes from scratch.',
      'Remote + asynchronous tools.'
    ]
  },
  'finance-manager': {
    id: 46,
    title: 'Finance Manager (Budgeting & Forecasting)',
    department: 'Finance & Accounting',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'finance-manager',
    description: `FleetBold is growing fast — and growth needs financial discipline.`,
    aboutRole: `We're hiring a Finance Manager to track revenue, optimize budgets, and forecast future expansion across teams and departments.`,
    responsibilities: [
      'Oversee financial modeling and planning.',
      'Collaborate on hiring and budget decisions.',
      'Track KPIs and report to leadership.',
      'Prepare financial summaries for stakeholders.'
    ],
    requirements: [
      'Finance or accounting background.',
      'Excel wizard or financial tools expert.',
      'Bonus: SaaS or marketplace model experience.'
    ],
    benefits: [
      'Strategic insight role.',
      'Work that informs key decisions.',
      '100% remote.'
    ]
  },
  'accountant': {
    id: 47,
    title: 'Accountant (Invoicing, Expenses, Taxes)',
    department: 'Finance & Accounting',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'accountant',
    description: `As a global company, we deal with a complex mix of invoices, software payments, and compliance requirements.`,
    aboutRole: `We're hiring an Accountant to handle our books, tax prep support, and recurring financial tasks.`,
    responsibilities: [
      'Manage invoices, reimbursements, and expenses.',
      'Work with finance on reporting.',
      'Handle tax forms and basic filings.',
      'Maintain clean and auditable records.'
    ],
    requirements: [
      'Experience with SaaS or global remote companies.',
      'Familiar with QuickBooks or similar tools.',
      'Bonus: experience with Stripe or payment gateways.'
    ],
    benefits: [
      'Role with clear structure and routines.',
      'Work-life balance and async flexibility.',
      'Fully remote.'
    ]
  },
  'bookkeeper': {
    id: 48,
    title: 'Bookkeeper (Day-to-Day Financials)',
    department: 'Finance & Accounting',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'bookkeeper',
    description: `FleetBold has lots of small transactions — and every dollar needs tracking.`,
    aboutRole: `We're looking for a Bookkeeper to own the daily financial workflow: logging payments, matching invoices, and keeping the books up to date.`,
    responsibilities: [
      'Reconcile transactions weekly.',
      'Enter receipts and payments.',
      'Flag inconsistencies or missing records.',
      'Prepare monthly summaries.'
    ],
    requirements: [
      'Detail-oriented with financial discipline.',
      'Comfortable with spreadsheets and accounting tools.',
      'Bonus: bilingual or international experience.'
    ],
    benefits: [
      'A clear scope and task-driven flow.',
      'Remote flexibility.',
      'Opportunity to scale with us.'
    ]
  },
  'recruiter': {
    id: 49,
    title: 'Recruiter (Tech + Global Talent)',
    department: 'People & Operations',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'recruiter',
    description: `Our team is remote and global — and we're just getting started.`,
    aboutRole: `FleetBold is hiring a Recruiter to help us find, vet, and onboard exceptional talent across engineering, design, product, and support.`,
    responsibilities: [
      'Source and screen global candidates.',
      'Coordinate interviews and offer letters.',
      'Maintain applicant tracking systems.',
      'Help shape onboarding.'
    ],
    requirements: [
      'Recruiting or people ops experience.',
      'Tech hiring background a plus.',
      'Bonus: async or startup hiring experience.'
    ],
    benefits: [
      'Autonomy in hiring strategy.',
      'Remote role with global scope.',
      'A mission-led product to attract talent.'
    ]
  },
  'people-operations-lead': {
    id: 50,
    title: 'People Operations Lead (Culture & Growth)',
    department: 'People & Operations',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'people-operations-lead',
    description: `FleetBold is people-first — and we want our operations to reflect that.`,
    aboutRole: `We're hiring a People Ops Lead to build processes, support performance reviews, and shape internal rituals that keep our team strong.`,
    responsibilities: [
      'Design internal workflows and documentation.',
      'Coordinate benefits, time-off, and team support.',
      'Help manage culture-building events.',
      'Track team satisfaction and retention.'
    ],
    requirements: [
      'HR or People Ops background.',
      'Experience in remote-first companies.',
      'Bonus: tech or fleet industry culture knowledge.'
    ],
    benefits: [
      'High impact on team health.',
      'Creative freedom with rituals and processes.',
      'Remote team, async rhythm.'
    ]
  },
  'executive-assistant': {
    id: 51,
    title: 'Executive Assistant (Ops + Calendar + Comms)',
    department: 'People & Operations',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'executive-assistant',
    description: `FleetBold's founders are deeply involved in product and ops. They need help to stay organized and focused.`,
    aboutRole: `We're looking for an Executive Assistant to support our leadership with scheduling, communication, and light ops support.`,
    responsibilities: [
      'Manage calendars and meeting prep.',
      'Filter communications and follow-ups.',
      'Help coordinate key cross-functional tasks.',
      'Keep leaders focused and moving.'
    ],
    requirements: [
      'Executive support or project coordination experience.',
      'High organizational and communication skills.',
      'Bonus: startup or tech support background.'
    ],
    benefits: [
      'Direct access to strategic decisions.',
      'Remote work with flexible hours.',
      'Clarity and structure with room to grow.'
    ]
  },
  'office-manager': {
    id: 52,
    title: 'Office Manager (Virtual Admin, Docs, Scheduling)',
    department: 'People & Operations',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'office-manager',
    description: `Even in a remote company, someone needs to keep us running smoothly.`,
    aboutRole: `We're hiring a Virtual Office Manager to organize documents, coordinate team logistics, and support internal systems.`,
    responsibilities: [
      'Maintain company records and folder structure.',
      'Coordinate digital tools, permissions, and licenses.',
      'Help with scheduling and team support.',
      'Keep virtual operations smooth and efficient.'
    ],
    requirements: [
      'Experience managing remote tools and systems.',
      'Organized, proactive, and self-sufficient.',
      'Bonus: operations or admin background in tech.'
    ],
    benefits: [
      'Calm, clear workflows.',
      'Room to improve and document processes.',
      'Fully remote setup.'
    ]
  },
  'customer-success-manager-b2b': {
    id: 53,
    title: 'Customer Success Manager (B2B Fleets & SaaS)',
    department: 'Customer Success & Support',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'customer-success-manager-b2b',
    description: `FleetBold works best when our customers use it to the fullest — and that's where you come in.`,
    aboutRole: `We're hiring a Customer Success Manager to onboard, educate, and support our B2B clients — especially fleet operators and car rental hosts.`,
    responsibilities: [
      'Guide new users through setup and activation.',
      'Identify growth opportunities within accounts.',
      'Create resources (videos, docs, webinars).',
      'Monitor satisfaction and usage metrics.'
    ],
    requirements: [
      'SaaS or fleet operations experience.',
      'Clear communicator who loves helping people.',
      'Bonus: bilingual or customer training background.'
    ],
    benefits: [
      'Deep connection with our power users.',
      'Influence over the customer experience.',
      'Remote work, async communication.'
    ]
  },
  'help-center-content-writer': {
    id: 54,
    title: 'Help Center Content Writer (Docs & FAQs)',
    department: 'Customer Success & Support',
    location: 'Remote — Work from Anywhere',
    type: 'Full-time',
    slug: 'help-center-content-writer',
    description: `FleetBold's power features need clear, simple explanations. Our users don't have time for fluff.`,
    aboutRole: `We're hiring a Help Center Content Writer to create and maintain articles, step-by-step guides, FAQs, and microcopy for the app and support center.`,
    responsibilities: [
      'Write new articles based on support questions.',
      'Update and refine existing help docs.',
      'Work with product and support for accuracy.',
      'Keep tone helpful, fast, and simple.'
    ],
    requirements: [
      'Strong writing skills in English.',
      'Experience in technical writing or support content.',
      'Bonus: SaaS or automotive background.'
    ],
    benefits: [
      'Full control of knowledge base voice.',
      'High-impact work that reduces support tickets.',
      'Flexible, remote role.'
    ]
  }
};

export function getAllJobs() {
  return Object.values(jobCategories).flat();
}

export function getJobBySlug(slug: string): Job | null {
  return jobDetailData[slug] || null;
}

export function getAllJobSlugs(): string[] {
  return Object.keys(jobDetailData);
}