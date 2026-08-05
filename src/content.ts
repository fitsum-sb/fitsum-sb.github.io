export type Link = {
  label: string;
  href: string;
};

export type Publication = {
  year: string;
  venue: string;
  title: string;
  authors: string;
  image?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
  imageShape?: "square" | "wide";
  links: Link[];
};

export type Work = {
  name: string;
  status?: string;
  role?: string;
  description: string;
  stack?: string;
  image?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
  imageShape?: "square" | "wide";
  links: Link[];
};

export const publications: Publication[] = [
  {
    year: "2026",
    venue:
      "Association for Computing Machinery (ACM) Conference on Fairness, Accountability, and Transparency (FAccT)",
    title:
      "A Survey of OCR Evaluation Methods and Metrics and the Invisibility of Historical Documents",
    authors: "Fitsum Sileshi Beyene and Christopher L. Dancy",
    image: "/assets/ocr-survey-prisma.png",
    imageAlt:
      "PRISMA 2020 flow diagram showing the identification and screening of studies in the OCR evaluation survey",
    imageFit: "contain",
    links: [
      {
        label: "ACM Digital Library",
        href: "https://dl.acm.org/doi/10.1145/3805689.3806442",
      }
    ],
  },
  {
    year: "2025",
    venue:
      "Institute of Electrical and Electronics Engineers (IEEE) International Symposium on Technology and Society (ISTAS)",
    title:
      "Layout-Aware OCR in Black Digital Archives: An Unsupervised Evaluation Approach",
    authors: "Fitsum Sileshi Beyene and Christopher L. Dancy",
    image: "/assets/layout-aware-paper.png",
    imageAlt:
      "Detection metrics, semantic coherence, and region entropy figures from the layout-aware OCR paper",
    imageFit: "contain",
    imageShape: "square",
    links: [
      {
        label: "IEEE Xplore",
        href: "https://ieeexplore.ieee.org/document/11269615",
      }
    ],
  },
];

export const posters: Publication[] = [
  {
    year: "Apr 22, 2026",
    venue:
      "Institute for Computational and Data Sciences (ICDS) Quantum Hub Student Poster Competition",
    title: "The Quantum-Classical Gap in Subquadratic Edit Distance Approximation",
    authors: "Fitsum Sileshi Beyene and Nishchay Pagarani",
    image: "/assets/quantum-classical-gap-poster.png",
    imageAlt:
      "Full poster comparing quantum and classical algorithms for subquadratic edit-distance approximation",
    imageFit: "contain",
    links: [],
  },
  {
    year: "Sep 2025",
    venue:
      "Institute for Computational and Data Sciences (ICDS) Symposium Poster Session",
    title:
      "Sliding-Window Text Extraction and Ensemble Layout Detection for Low-Resource Media",
    authors: "Fitsum Sileshi Beyene and Christopher L. Dancy",
    image: "/assets/sliding-window-poster.png",
    imageAlt:
      "Full poster on sliding-window text extraction and ensemble layout detection for low-resource media",
    imageFit: "contain",
    links: [
      {
        label: "Related paper",
        href: "https://ieeexplore.ieee.org/document/11269615",
      },
    ],
  },
];

export const researchSystems: Work[] = [
  {
    name: "GT-Pipeline",
    status: "ongoing research system",
    description:
      "A human-in-the-loop document artificial intelligence (AI) workbench for segmenting, optical character recognition (OCR) processing, annotating, reconstructing, and exporting historical newspaper pages. It supports independent submissions, intersection over union (IoU) consensus, disagreement review, interaction telemetry, and versioned archival exports.",
    stack:
      "Python · FastAPI · React · TypeScript · PostgreSQL · ONNX · OpenCV · Tesseract · Docker · Cloudflare",
    image: "/assets/gt-pipeline-canonical-review.png",
    imageAlt:
      "GT-Pipeline canonical review interface showing a historical newspaper page, annotation regions, and an automatic adjudicator",
    links: [
      {
        label: "Related paper",
        href: "https://arxiv.org/abs/2603.25761",
      },
      {
        label: "Humanities and Artificial Intelligence Virtual Institute (HAVI)",
        href: "https://www.schmidtsciences.org/humanities-and-ai-virtual-institute/",
      },
    ],
  },
  {
    name: "CAIL Crisis Model Lab",
    status: "ongoing research system",
    description:
      "An interactive crisis-text classification and artificial intelligence (AI) audit lab for checkpoint comparison, held-out evaluation, and token-sensitivity analysis. The pipeline binds datasets, models, code, environments, and random seeds into reproducible experiment cells with fail-closed validation and independent metric recomputation.",
    stack:
      "Python · FastAPI · PyTorch · Hugging Face Transformers · Pydantic · scikit-learn · JavaScript · 107 Python tests",
    image: "/assets/cail-crisis-model-lab.png",
    imageAlt:
      "CAIL Crisis Model Lab overview showing the form, post, token inspection, and benchmark workflow",
    links: [
      {
        label: "THiCC Lab",
        href: "https://thicc-lab.org/",
      },
    ],
  },
];

export const selectedEngineering: Work[] = [
  {
    name: "Adot",
    role: "Full-stack engineer · Africa to Silicon Valley",
    description:
      "A maternal-health platform with patient, clinician, and administrative experiences. I contributed across mobile and web development, quality assurance and user acceptance testing (QA/UAT), and pre-launch operations.",
    image: "/assets/adot-website.png",
    imageAlt:
      "Adot maternity companion website hero showing a mother resting her hands on her pregnant belly",
    imageFit: "contain",
    imageShape: "wide",
    links: [
      { label: "Visit website", href: "https://www.adot.life/en" },
      {
        label: "Adot Life",
        href: "https://apps.apple.com/us/app/adot-life/id6596767832",
      },
      {
        label: "Adot Doctor",
        href: "https://apps.apple.com/us/app/adot-doctor-what-to-expect/id6618150334",
      }
    ],
  },
  {
    name: "Labconnect",
    role: "Front-end engineer · Africa to Silicon Valley",
    description:
      "A platform for ordering laboratory tests and receiving results digitally, developed with a 25+ person engineering team. It received second place and a $4,000 award in the Africa to Silicon Valley (A2SV) project competition.",
    links: [
      {
        label: "Project announcement",
        href: "https://www.linkedin.com/posts/a2sv_a2sv-africa-digitaltransformation-activity-7009845880384020480-L4bP",
      },
    ],
  },
];

export const updates = [
  {
    date: "Jun 2026",
    text: "Presented my Full Paper at FAccT'26 Conference.",
    href: "https://dl.acm.org/doi/10.1145/3805689.3806442",
  },
  {
    date: "Apr 2026",
    text: "Presented “The Quantum-Classical Gap in Subquadratic Edit Distance Approximation” with Nishchay Pagarani at the Institute for Computational and Data Sciences (ICDS) Quantum Hub Student Poster Competition.",
  },
  {
    date: "Nov 2025",
    text: "Joined a cross-institutional planning meeting for humanities and artificial intelligence (AI) research."
  },
];

export const service = [
  {
    year: "2026-Present",
    title: "President",
    organization: "Computer Science and Engineering Graduate Student Association (CSE-GSA)",
    href: "",
  },
  {
    year: "2026",
    title: "Reviewer",
    organization: "International Conference on Cognitive Modeling (ICCM)",
    href: "https://iccm-conference.github.io/",
  },
  {
    year: "2025-26",
    title: "Workshop Coordinator",
    organization: "Multicultural Engineering Graduate Association (MEGA)",
    href: "https://sites.psu.edu/mega/",
  },
];

export const recognition = [
  {
    year: "2025–26",
    title: "Research Scholar",
    organization: "Center for Black Digital Research",
    href: "https://digblk.psu.edu/people/fitsum-beyene/",
  },
  {
    year: "2024–25",
    title: "University Graduate Fellow",
    organization: "J. Jeffrey and Ann Marie Fox Graduate School, Penn State",
    href: "https://www.psu.edu/news/fox-graduate-school/story/university-fellowships-awarded-110-graduate-students",
  },
  {
    year: "2025",
    title: "All Builders Welcome Grant",
    organization: "Amazon Web Services (AWS) re:Invent",
    href: "https://aws.amazon.com/events/reinvent/experiences/all-builders-welcome/",
  },
  {
    year: "2025",
    title: "Artificial Intelligence (AI) Workshop",
    organization:
      "Advanced Cyberinfrastructure Coordination Ecosystem: Services & Support (ACCESS)–National Artificial Intelligence Research Resource (NAIRR) · University of Colorado Boulder",
    href: "https://www.credly.com/go/xQImijG8dRBa6dD0UE3Uew",
  },
  {
    year: "2025",
    title:
      "Grad Cohort for Inclusion, Diversity, Equity, Accessibility, and Leadership Skills (IDEALS)",
    organization: "Computing Research Association–Widening Participation (CRA-WP)",
  }
];
