export const profile = {
  name: "SOLOARISOA Delphine Rakotoarisoa",
  shortName: "SOLOARISOA Delphine Rakotoarisoa",
  role: "Étudiante en M2 Data Science & Analyst · Développeuse Logiciel",
  location: "Amoron'i Mania, Madagascar",
  phone: "+261 37 90 593 32",
  email: "arisoaandriamihaja@gmail.com",
  github: "https://github.com/ARISOARak",
  githubLabel: "github.com/ARISOARak",
  summary:
    "Étudiante en Master 2 spécialisée en Data Science et Data Analysis, issue d'un solide parcours en Génie Logiciel. Je maîtrise Python et le traitement des bases de données. Autonome, rigoureuse et habituée au travail d'équipe.",
}

export const education = [
  {
    period: "2025 — 2026",
    school: "Université d'Amoron'i Mania (ex ISTA)",
    title: "Master 2 — Data Analysis & Data Science",
    detail: "Préparation du mémoire de fin d'études.",
  },
  {
    period: "2026",
    school: "Orange Digital Center (ODC)",
    title: "Formation intensive en Cybersécurité",
    detail: "Programme pour les jeunes.",
  },
  {
    period: "2024",
    school: "Université d'Amoron'i Mania (ex ISTA)",
    title: "Licence Professionnelle en Génie Logiciel",
    detail: "Fondations solides en développement logiciel.",
  },
  {
    period: "2023",
    school: "Internet Society (ISOC)",
    title: "Initiation à l'Internet of Things (IoT)",
    detail: "Découverte des objets connectés.",
  },
  {
    period: "2021",
    school: "TME Education",
    title: "Programmation de Projets ARDUINO",
    detail: "Électronique et prototypage embarqué.",
  },
]

export const experiences = [
  {
    period: "En cours",
    icon: "ai",
    title: "Plateforme d'IA pour l'Agriculture",
    org: "Projet Académique",
    description:
      "Conception d'algorithmes de prédiction de rendement basés sur des données agricoles locales.",
    tags: ["Python", "Machine Learning", "Data Science"],
  },
  {
    period: "2025",
    icon: "hackathon",
    title: "Hackathon DevFest Antsirabe",
    org: "Participante",
    description:
      "Conception et prototypage rapide d'une solution en équipe lors du DevFest.",
    tags: ["Prototypage", "Travail d'équipe", "Agile"],
  },
  {
    period: "2023 — 2024",
    icon: "web",
    title: "Stagiaire en Développement Web",
    org: "Préfecture d'Antsirabe · 3 mois",
    description:
      "Analyse des besoins des utilisateurs locaux et modélisation de la base de données.",
    tags: ["Analyse", "Modélisation BDD", "Web"],
  },
]

export const skillGroups = [
  {
    label: "Data Science & Programmation",
    items: ["Python", "JavaScript", "PHP", "React Native"],
  },
  {
    label: "Bases de données",
    items: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    label: "Technologies Web",
    items: ["HTML5 / CSS3", "Node.js", "ReactJS", "Express.js", "Bootstrap"],
  },
  {
    label: "Systèmes & Outils",
    items: ["Linux", "Windows", "Git / VS Code", "KoboToolbox / KoboCollect"],
  },
  {
    label: "Méthodologies",
    items: ["UML", "Méthodologie Agile"],
  },
]

export const languages = [
  { name: "Français", level: "Intermédiaire", value: 65 },
  { name: "Anglais", level: "Intermédiaire", value: 60 },
]

export const interests = ["Jeux", "Musique", "Basketball"]

export const projects = [
  {
    title: "Gestion de Présence Faciale Universitaire",
    kind: "Projet universitaire · IA",
    description:
      "Système de reconnaissance faciale pour automatiser la gestion de présence des étudiants à l'université. Le modèle repose sur un réseau de neurones convolutif (CNN) entraîné sur mesure pour l'identification des visages.",
    features: [
      "Modèle CNN entraîné pour la reconnaissance faciale",
      "Détection et identification des visages en temps réel",
      "Follow-up automatique de la présence des étudiants",
    ],
    tech: ["Python", "CNN", "TensorFlow / Keras", "OpenCV"],
    github: "https://github.com/ARISOARak/gestion_de_presence_facial",
  },
]

export const navItems = [
  { label: "Profil", href: "#top" },
  { label: "Parcours", href: "#parcours" },
  { label: "Expériences", href: "#experiences" },
  { label: "Projets", href: "#projets" },
  { label: "Compétences", href: "#competences" },
  { label: "Contact", href: "#contact" },
]
