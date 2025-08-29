export const services = [
  {
    id: 1,
    imageSrc: "/assets/img/icon/serviceIcon1_3.png",
    title: "Web Development",
    description: "High‑performance, SEO‑ready websites and web apps built with Next.js that drive traffic, leads, and revenue.",
    overview: [
      "We design and engineer fast, secure, and scalable web experiences using modern stacks (Next.js, React, Node, Nest, Laravel).",
      "Every build ships with strong SEO, accessibility, and analytics so you can measure impact from day one.",
      "From marketing sites to complex dashboards and marketplaces, we deliver clean code and reliable performance.",
    ],
    benefits: [
      "Blazing‑fast performance and Core Web Vitals",
      "Clean, maintainable codebase with best practices",
      "SEO, schema, and analytics baked‑in",
      "Security‑first and scalable architecture",
    ],
    heroImage: "/assets/img/service/web/1.png",
    gallery: [
      "/assets/img/service/web/2.png",
      "/assets/img/service/web/3.png",
    ],
    faqs: [
      { q: "What tech stack do you use for web development?", a: "We use modern stacks such as Next.js/React on the frontend and Node.js/Nest/Laravel on the backend, selecting tools that fit performance, security, and team workflows." },
      { q: "Do you provide SEO and performance optimization?", a: "Yes. We optimize Core Web Vitals, implement technical SEO (meta, structured data), and ship sitemaps, robots, and analytics by default." },
      { q: "Can you migrate my site to Next.js?", a: "We plan redirects, content migration, and SEO parity, then implement incremental or full migration to Next.js with minimal downtime." },
      { q: "How long does a typical web development project take?", a: "Project timelines vary based on complexity. Simple websites take 4-6 weeks, while complex applications can take 3-6 months. We provide detailed timelines during project planning." },
      { q: "Do you offer ongoing maintenance and support?", a: "Yes, we provide comprehensive maintenance packages including security updates, performance monitoring, content updates, and technical support to keep your site running optimally." },
      { q: "What about mobile responsiveness and accessibility?", a: "All our websites are built mobile-first with responsive design principles. We also ensure WCAG 2.1 AA compliance for accessibility and cross-browser compatibility." }
    ],
  },
  {
    id: 2,
    imageSrc: "/assets/img/icon/serviceIcon1_4.png",
    title: "Mobile App Development",
    description: "Custom iOS and Android apps with native‑like performance, polished UX, and scalable APIs for growth.",
    overview: [
      "We ship polished mobile apps using native and cross‑platform stacks (Swift/Kotlin/React Native/Flutter).",
      "We focus on fluid UX, offline‑first patterns, and robust release pipelines.",
    ],
    benefits: ["Native performance", "Scalable APIs", "App Store compliance"],
    heroImage: "/assets/img/service/mobile/1.png",
    gallery: [
      "/assets/img/service/mobile/2.png",
      "/assets/img/service/mobile/3.png",
    ],
    faqs: [
      { q: "Which platforms do you support?", a: "We build for iOS and Android using native (Swift/Kotlin) or cross‑platform (React Native/Flutter) depending on your needs." },
      { q: "Do you handle app store submissions?", a: "Yes. We prepare assets, signing, compliance checks, and guide you through App Store and Google Play submissions." },
      { q: "How do you ensure app security and data privacy?", a: "We implement industry-standard security measures including data encryption, secure API communication, biometric authentication, and compliance with GDPR/CCPA regulations." },
      { q: "What's the difference between native and cross-platform development?", a: "Native apps offer best performance and platform-specific features, while cross-platform solutions provide faster development and cost efficiency. We recommend based on your specific requirements." },
      { q: "Do you provide post-launch support and updates?", a: "Yes, we offer comprehensive post-launch support including bug fixes, feature updates, performance optimization, and ongoing maintenance to ensure your app stays current and competitive." },
      { q: "How do you test app performance across different devices?", a: "We use extensive testing protocols including device labs, automated testing tools, and real-world testing scenarios to ensure optimal performance across various screen sizes and OS versions." }
    ],
  },
  {
    id: 3,
    imageSrc: "/assets/img/icon/serviceIcon1_6.png",
    title: "UI/UX Design",
    description: "Research‑driven UI/UX design that improves conversion and accessibility with consistent, brand‑ready systems.",
    overview: [
      "We create interfaces that feel intuitive from day one.",
      "Our process includes research, wireframes, high‑fidelity designs, and clickable prototypes.",
    ],
    benefits: ["User research", "Design systems", "Usability testing"],
    heroImage: "/assets/img/service/ui ux/1.png",
    gallery: [
      "/assets/img/service/ui ux/2.png",
      "/assets/img/service/ui ux/3.png",
    ],
    faqs: [
      { q: "What is your UI/UX process?", a: "Research and audits → information architecture → wireframes → high‑fidelity UI → prototypes → usability testing → hand‑off." },
      { q: "Can you work with our existing brand?", a: "Yes. We extend or create design systems to keep your product consistent and scalable." },
      { q: "How do you conduct user research and testing?", a: "We use multiple research methods including user interviews, surveys, analytics analysis, and usability testing sessions. We also conduct A/B testing to validate design decisions." },
      { q: "What design tools and software do you use?", a: "We use industry-standard tools including Figma, Sketch, Adobe Creative Suite, and prototyping tools like InVision and Principle for creating interactive prototypes." },
      { q: "Do you provide design system documentation?", a: "Yes, we create comprehensive design systems including component libraries, style guides, and documentation to ensure consistency and scalability across your product." },
      { q: "How do you ensure designs are accessible?", a: "We follow WCAG 2.1 guidelines, implement proper color contrast ratios, ensure keyboard navigation, and test with screen readers to create inclusive designs for all users." }
    ],
  },
  {
    id: 4,
    imageSrc: "/assets/img/icon/serviceIcon1_9.png",
    title: "AI Agents",
    description: "Private, secure AI copilots that automate support and operations, connect to your data, and boost productivity.",
    overview: [
      "We build domain‑specific AI agents for support, research, lead‑gen, and internal ops.",
      "Secure data connectors and guardrails ensure safe and reliable outputs.",
    ],
    benefits: ["Private data connectors", "Guardrails & evals", "Human‑in‑the‑loop"],
    heroImage: "/assets/img/service/ai/1.gif",
    gallery: [
      "/assets/img/service/ai/2.png",
      "/assets/img/service/ai/3.png",
    ],
    faqs: [
      { q: "What data sources can AI agents use?", a: "Docs, knowledge bases, CRMs, databases, and APIs via secure connectors with row‑level permissions." },
      { q: "How do you ensure safety?", a: "We implement guardrails, rate limits, audit logs, and human‑in‑the‑loop review for sensitive actions." },
      { q: "What types of AI agents can you build?", a: "We can build various AI agents including customer support bots, sales assistants, research assistants, document processors, and workflow automation agents tailored to your specific business needs." },
      { q: "How do you handle AI model training and updates?", a: "We use transfer learning and fine-tuning approaches, continuously improve models with new data, and implement version control to ensure stable and improving AI performance over time." },
      { q: "What about AI ethics and bias prevention?", a: "We implement bias detection algorithms, diverse training data, fairness metrics, and regular audits to ensure our AI solutions are ethical, unbiased, and fair across all user groups." },
      { q: "Can AI agents integrate with existing business systems?", a: "Yes, we provide seamless integration with existing CRM, ERP, and business systems through secure APIs, ensuring AI agents can access and work with your current data infrastructure." }
    ],
  },
  {
    id: 5,
    imageSrc: "/assets/img/icon/serviceIcon2_10.png",
    title: "Cloud & DevOps",
    description: "AWS/Azure, CI/CD, scaling, and SRE best practices.",
    overview: [
      "We architect, migrate, and operate cloud platforms with IaC and observability.",
    ],
    benefits: ["CI/CD automation", "Scalable infra", "24/7 monitoring"],
    heroImage: "/assets/img/service/Cloud/1.png",
    gallery: [
      "/assets/img/service/Cloud/2.png",
      "/assets/img/service/Cloud/3.png",
    ],
    faqs: [
      { q: "Which clouds do you support?", a: "AWS, Azure, and GCP. We also handle hybrid and on‑prem with containerization and IaC." },
      { q: "Do you implement CI/CD?", a: "Yes. We set up pipelines, blue‑green/canary deploys, observability, and SRE best practices." },
      { q: "What infrastructure as code tools do you use?", a: "We use Terraform, CloudFormation, and Ansible for infrastructure automation, ensuring reproducible and version-controlled infrastructure deployments across all environments." },
      { q: "How do you handle disaster recovery and backup?", a: "We implement comprehensive backup strategies, multi-region replication, automated disaster recovery procedures, and regular testing to ensure business continuity and data protection." },
      { q: "What monitoring and observability solutions do you provide?", a: "We implement monitoring stacks including Prometheus, Grafana, ELK stack, and cloud-native monitoring tools for comprehensive visibility into application and infrastructure performance." },
      { q: "Can you help with cloud migration and optimization?", a: "Yes, we provide end-to-end cloud migration services including assessment, planning, migration execution, and ongoing optimization to reduce costs and improve performance." }
    ],
  },
  {
    id: 6,
    imageSrc: "/assets/img/icon/serviceIcon1_2.png",
    title: "Digital Marketing",
    description: "Data-driven digital marketing strategies that increase brand visibility, drive traffic, and generate qualified leads.",
    overview: [
      "We create comprehensive digital marketing campaigns across multiple channels.",
      "Our strategies focus on measurable results and ROI optimization.",
    ],
    benefits: ["SEO optimization", "PPC management", "Social media marketing", "Analytics & reporting"],
    heroImage: "/assets/img/service/Marketing/1.png",
    gallery: [
      "/assets/img/service/Marketing/2.png",
      "/assets/img/service/Marketing/3.png",
    ],
    faqs: [
      { q: "What marketing channels do you specialize in?", a: "SEO, PPC, social media, content marketing, email campaigns, and influencer partnerships." },
      { q: "How do you measure marketing success?", a: "We track KPIs like conversion rates, ROI, traffic growth, and lead quality using advanced analytics tools." },
      { q: "How long does it take to see results from digital marketing?", a: "SEO typically shows results in 3-6 months, PPC provides immediate visibility, while content marketing builds long-term authority. We provide detailed timelines during strategy development." },
      { q: "Do you handle content creation and management?", a: "Yes, we provide comprehensive content services including strategy development, content creation, SEO optimization, and ongoing content management to maintain your marketing momentum." },
      { q: "What analytics and reporting do you provide?", a: "We provide detailed monthly reports including traffic analysis, conversion tracking, ROI calculations, competitor analysis, and actionable recommendations for continuous improvement." },
      { q: "Can you work with existing marketing teams?", a: "Absolutely! We collaborate seamlessly with in-house teams, providing strategy, tools, and support while integrating with your existing marketing processes and workflows." }
    ],
  }
];

export const services2 = [
  {
    id: 9,
    icon: "/assets/img/icon/serviceIcon1_1.png",
    title: "Data Analytics",
    description: "Data analytics involves examining raw data.",
    bgImage: "/assets/img/bg/serviceCardThumbBg1_1.png",
    delay: ".2s",
  },
  {
    id: 10,
    icon: "/assets/img/icon/serviceIcon1_2.png",
    title: "UI/UX Design",
    description: "UI/UX design is a crucial aspect of",
    bgImage: "/assets/img/bg/serviceCardThumbBg1_1.png",
    delay: ".4s",
  },
  {
    id: 11,
    icon: "/assets/img/icon/serviceIcon1_3.png",
    title: "Cybersecurity",
    description: "Cybersecurity is the practice of protecting",
    bgImage: "/assets/img/bg/serviceCardThumbBg1_1.png",
    delay: ".6s",
  },
  {
    id: 12,
    icon: "/assets/img/icon/serviceIcon1_4.png",
    title: "App development",
    description: "App development is the process of",
    bgImage: "/assets/img/bg/serviceCardThumbBg1_1.png",
    delay: ".8s",
  }
];

export const servicesStyle2 = [
  {
    id: 14,
    thumb: "/assets/img/service/serviceThumb2_1.png",
    title: "Software Services",
    description: "Software services encompass a wide range of",
    icon: "/assets/img/icon/serviceIcon2_1.png",
    iconTwo: "/assets/img/icon/serviceIcon2_5.png",
    delay: ".3s",
  },
  {
    id: 16,
    thumb: "/assets/img/service/serviceThumb2_3.png",
    title: "Web Development",
    description: "Web development is the work involved in",
    icon: "/assets/img/icon/serviceIcon2_3.png",
    iconTwo: "/assets/img/icon/serviceIcon2_7.png",
    delay: ".8s",
  },

];

export const services3 = [
  {
    id: 18,
    icon: "/assets/img/icon/serviceIcon4_1.png",
    title: "Core Feature",
    description:
      "The core features of a website can vary based on its purpose, audience, and goals. However, here",
    delay: ".2s",
  },
  {
    id: 19,
    icon: "/assets/img/icon/serviceIcon4_2.png",
    title: "Easy Customizable",
    description:
      "One of the core features of this website is its easy customizability, which allows users to effortlessly",
    delay: ".5s",
  },
  {
    id: 20,
    icon: "/assets/img/icon/serviceIcon4_3.png",
    title: "Fast Support",
    description:
      "One of the standout features of this website is its commitment to providing fast and reliable support",
    delay: ".8s",
  },
];

export const serviceItems = [
  { id: 21, imgSrc: "/assets/img/icon/serviceIcon1_3.png", title: "Web Development", text: "SEO‑ready websites and web apps that are fast, secure, and built to convert.", delay: ".3s" },
  { id: 22, imgSrc: "/assets/img/icon/serviceIcon1_4.png", title: "Mobile App Development", text: "iOS and Android apps with native performance, polished UX, and scalable APIs.", delay: ".6s" },
  { id: 23, imgSrc: "/assets/img/icon/serviceIcon1_6.png", title: "UI/UX Design", text: "Research‑driven UI/UX that improves usability, consistency, and conversion.", delay: ".9s" },
  { id: 24, imgSrc: "/assets/img/icon/serviceIcon1_9.png", title: "AI Agents", text: "Private AI copilots that automate workflows with secure data connectors and guardrails.", delay: "1s" },
  { id: 27, imgSrc: "/assets/img/icon/serviceIcon2_10.png", title: "Digital Marketing", text: "SEO, PPC, social, and analytics with data-driven strategies.", delay: "1.7s" },
  { id: 29, imgSrc: "/assets/img/icon/serviceIcon1_2.png", title: "Cloud & DevOps", text: "Cloud infra, CI/CD, containerization, and SRE.", delay: "2.1s" },
];

export const serviceCards = [
  {
    id: 29,
    thumbSrc: "/assets/img/service/web/1.png",
    iconSrc: "/assets/img/icon/serviceIcon2_1.png",
    iconTwoSrc: "/assets/img/icon/serviceIcon2_5.png",
    title: "Web Development",
    text: "Modern web applications built with cutting-edge technologies",
    delay: ".3s",
    hasRipple: true,
  },
  {
    id: 30,
    thumbSrc: "/assets/img/service/mobile/1.png",
    iconSrc: "/assets/img/icon/serviceIcon2_2.png",
    iconTwoSrc: "/assets/img/icon/serviceIcon2_6.png",
    title: "Mobile Development",
    text: "Native and cross-platform mobile applications",
    delay: ".6s",
  },
  {
    id: 31,
    thumbSrc: "/assets/img/service/ui ux/1.png",
    iconSrc: "/assets/img/icon/serviceIcon2_3.png",
    iconTwoSrc: "/assets/img/icon/serviceIcon2_7.png",
    title: "UI/UX Design",
    text: "User-centered design solutions for digital products",
    delay: ".9s",
  },
  {
    id: 32,
    thumbSrc: "/assets/img/service/ai/1.gif",
    iconSrc: "/assets/img/icon/serviceIcon2_4.png",
    iconTwoSrc: "/assets/img/icon/serviceIcon2_8.png",
    title: "AI Solutions",
    text: "Intelligent automation and AI-powered applications",
    delay: "1.2s",
  },
  {
    id: 33,
    thumbSrc: "/assets/img/service/Marketing/1.png",
    iconSrc: "/assets/img/icon/serviceIcon2_9.png",
    iconTwoSrc: "/assets/img/icon/serviceIcon2_13.png",
    title: "Digital Marketing",
    text: "Data-driven marketing strategies and campaigns",
    delay: "1.3s",
    hasRipple: true,
  },
  {
    id: 34,
    thumbSrc: "/assets/img/service/Cloud/1.png",
    iconSrc: "/assets/img/icon/serviceIcon2_10.png",
    iconTwoSrc: "/assets/img/icon/serviceIcon2_14.png",
    title: "Cloud & DevOps",
    text: "Scalable cloud infrastructure and automation",
    delay: "1.5s",
  }
];

export const allService = [
  ...services,
  ...services2,
  ...servicesStyle2,
  ...services3,
  ...serviceItems,
  ...serviceCards,
];

export const sericeCategories = [
  { id: 1, label: "Web Development", active: true },
  { id: 2, label: "Mobile App Development", active: false },
  { id: 3, label: "UI/UX Design", active: false },
  { id: 4, label: "AI Agents", active: false },
  { id: 5, label: "Cloud & DevOps", active: false },
  { id: 6, label: "Digital Marketing", active: false },
];

export const hours = [
  { iconClass: "fa-regular fa-clock", text: "Monday - Friday: 9:00 AM - 6:00 PM" },
  { iconClass: "fa-regular fa-clock", text: "Saturday: 10:00 AM - 4:00 PM" },
  { iconClass: "fa-regular fa-clock", text: "Sunday: By Appointment" },
  { iconClass: "fa-solid fa-headset", text: "24/7 Emergency Support" },
  { iconClass: "fa-solid fa-globe", text: "Global Timezone Coverage" },
];


