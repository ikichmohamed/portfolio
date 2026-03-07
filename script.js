/* ══════════════════════════════════════════════
   Mohamed Ikich Portfolio — script.js
   Features:
   - FR/EN language switcher (i18n)
   - CORS-free visitor counter (image-only)
   - KPI counter animations
   - Skills bar animation
   - Tab switching
   - Contact form
   - Scroll fade-in
   ══════════════════════════════════════════════ */

/* ══════════════════════════════════════════════
   TRANSLATIONS
   ══════════════════════════════════════════════ */
const i18n = {
  en: {
    // Nav
    'nav.about': 'About',
    'nav.metrics': 'Metrics',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.education': 'Education',
    'nav.contact': 'Contact',
    'nav.cta': 'Hire Me',
    // Hero
    'hero.status': 'Available for opportunities · Casablanca, Morocco',
    'hero.prefix': 'Solution Engineer at',
    'hero.desc': 'ENSEEIHT-trained engineer bridging enterprise architecture and software delivery. I turn complex business problems into elegant, scalable solutions.',
    'hero.cta1': 'Let\'s Connect →',
    'hero.cta2': 'View Work',
    'hero.scroll': 'Scroll',
    // Visitor counter
    'vc.label': 'Portfolio Views',
    'vc.unit': 'visits',
    'vc.loading': 'Loading…',
    // Metrics
    'metrics.label': 'By The Numbers',
    'metrics.title': 'Impact Dashboard',
    'metrics.live': 'Career Metrics · 2023–2026',
    'kpi.clients': 'Enterprise Clients Served',
    'kpi.clients.sub': 'HOPEX & Bizzdesign deployments',
    'kpi.time': 'Avg. Time-to-Value Reduction',
    'kpi.time.sub': 'via automation & workflow design',
    'kpi.langs': 'Languages Spoken',
    'kpi.certs': 'HOPEX Certifications',
    'kpi.certs.sub': '+1 in progress',
    'kpi.exp': 'Professional Experience',
    'kpi.projects': 'Open-Source Projects',
    'journey.title': 'Career Trajectory',
    'journey.now': 'Bizzdesign · SE · Now',
    // About
    'about.label': 'Profile',
    'about.title': 'Engineering meets Strategy',
    'about.p1': 'Graduate of <strong>ENSEEIHT (INP Toulouse)</strong> in Computer Science & Telecommunications — one of France\'s top engineering schools. My path: from preparatory classes at Mohamed VI School of Excellence in Benguerir to building enterprise solutions at Airbus, MEGA International, and now Bizzdesign.',
    'about.p2': 'I specialize in the intersection of <strong>enterprise architecture</strong>, <strong>software engineering</strong>, and <strong>business process optimization</strong>. I speak the language of both CTOs and CFOs.',
    'about.stat1': 'ENSEEIHT Graduate Class',
    'about.stat2': 'Aerospace internship experience',
    'about.stat3': 'FR · EN · AR · DE',
    'about.stat4': 'Enterprise software experience',
    // Experience
    'exp.label': 'Career',
    'exp.title': 'Experience',
    'exp.sub': 'A deliberate career building depth in enterprise architecture and solution engineering across aerospace, consulting, and SaaS.',
    'exp.bizzdesign.role': 'Solution Engineer',
    'exp.bizzdesign.date': 'Jan 2025 — Present',
    'exp.bizzdesign.b1': 'Lead client kickoffs, pre-sales demos, and discovery workshops — translating ambiguous business requirements into scoped HOPEX solutions for GRC, Internal Audit, and BPA use cases.',
    'exp.bizzdesign.b2': 'Assess customization complexity for client change requests, propose pragmatic HOPEX-native solutions, and own delivery end-to-end — turning complex compliance needs into elegant platform configurations.',
    'exp.bizzdesign.b3': 'Build custom reports and dashboards consuming HOPEX REST APIs and VBScript — automating risk, audit, and process reporting pipelines that previously required hours of manual consolidation.',
    'exp.bizzdesign.b4': 'Onboard and upskill clients through structured training programs, accelerating time-to-value and platform adoption across banking, insurance, and public sector accounts.',
    'exp.mega.role': 'Solution Engineer',
    'exp.mega.date': 'Jun 24 — Dec 2024',
    'exp.mega.b1': 'Deployed and configured the HOPEX enterprise architecture platform for 12+ clients across banking, insurance, and public sector.',
    'exp.mega.b2': 'Developed custom VBScript macros and BPMN models to automate client reporting, reducing manual effort by ~40%.',
    'exp.mega.b3': 'Achieved 3 HOPEX Aquila certifications (BPA, GRC, Internal Audit) and actively pursuing IT Architecture certification.',
    'exp.mega.b4': 'Implemented REST API integrations between HOPEX and client IT landscapes (ERP, CMDB, ITSM).',
    'exp.airbus.role': 'Software Engineer Intern',
    'exp.airbus.date': '2023',
    'exp.airbus.b1': 'Contributed to internal tooling and software systems within one of Europe\'s largest aerospace companies.',
    'exp.airbus.b2': 'Worked in an Agile environment applying rigorous engineering standards to mission-critical software.',
    // Projects
    'proj.label': 'Portfolio',
    'proj.title': 'Projects',
    'proj.sub': 'Engineering work demonstrating system design, algorithmic thinking, and automation expertise.',
    'proj.autotester.tagline': 'A fully automated CI/CD testing pipeline for evaluating student Java projects via GitLab, Docker, and a custom Python orchestration engine.',
    'proj.students': 'Students',
    'proj.roles': 'Roles',
    'proj.epidemic.tagline': 'Graph-based mathematical modeling of COVID-19 propagation through human contact networks using SIS, SIR, and SAIR models.',
    'proj.models': 'Models',
    'proj.nodes': 'Nodes',
    // Tabs
    'tab.overview': 'Overview',
    'tab.pipeline': 'Pipeline',
    'tab.roles': 'System Roles',
    'tab.tech': 'Tech Stack',
    'tab.models': '3 Models',
    'tab.zero': 'Patient Zero',
    // Flow
    'flow.student': '👨‍💻 Student',
    'flow.autotester': '🤖 AutoTester',
    'flow.professor': '👨‍🏫 Professor',
    // AutoTester steps
    'at.step1.title': 'Student Push',
    'at.step1.desc': 'Student commits code to their GitLab repository. A unique trigger token fires the pipeline automatically.',
    'at.step2.title': 'Docker Execution',
    'at.step2.desc': 'A dedicated Docker image spins up, clones the student repo, and validates integrity and attempt limits.',
    'at.step3.title': 'Test Suite',
    'at.step3.desc': 'JUnit, Blackbox testing, Checkstyle static analysis, and compiler checks run inside isolated scenarios.',
    'at.step4.title': 'Feedback Commit',
    'at.step4.desc': 'Structured feedback is automatically committed back to the student\'s branch with a score and detailed test report.',
    // Roles
    'role.student': 'Student Developer',
    'role.professor': 'Professor / Evaluator',
    'role.autotester': 'AutoTester System',
    'role.student.l1': 'Writes Java implementations per assignment spec',
    'role.student.l2': 'Commits to personal GitLab repository',
    'role.student.l3': 'Trigger token fires on each push',
    'role.student.l4': 'Receives instant automated feedback',
    'role.prof.l1': 'Defines test scenarios using feat3p CLI',
    'role.prof.l2': 'Sets scoring weights, attempt limits, deadlines',
    'role.prof.l3': 'Accesses consolidated grade dashboard',
    'role.auto.l1': 'Listens for student commits via trigger token',
    'role.auto.l2': 'Runs inside a dedicated Docker image',
    'role.auto.l3': 'Executes JUnit, Blackbox, Checkstyle, Compiler',
    'role.auto.l4': 'Commits structured feedback back to student',
    // Learning
    'learn.label': "What's Next",
    'learn.title': 'Currently Learning',
    'learn.sub': 'Expanding beyond enterprise architecture — exploring automation, workflow design, and AI-powered business solutions.',
    'learn.banner.title': 'Building Toward Automation Expertise',
    'learn.banner.sub': 'Combining low-code tools and custom workflow engines for next-gen enterprise solutions at Bizzdesign.',
    'learn.stat1': 'Tools in Progress',
    'learn.stat2': 'Live Workflow',
    'learn.automate.desc': 'Designing and deploying cloud-based automated workflows using Power Automate. Focus on Microsoft 365 integration, scheduled flows, and real business use cases at Bizzdesign.',
    'learn.live': 'Live Workflow · Production',
    'learn.wf.title': 'Weekly Timecard Report',
    'learn.wf.desc': 'A scheduled cloud flow automatically compiling and sending a weekly timecard email to my manager every Monday morning.',
    'learn.wf.s1': 'Weekly Trigger<br/><span>Mon 8AM</span>',
    'learn.wf.s2': 'Collect Timecards<br/><span>All projects</span>',
    'learn.wf.s3': 'Format Report<br/><span>HTML email</span>',
    'learn.wf.s4': 'Send to Manager<br/><span>Outlook</span>',
    'learn.n8n.desc': 'Exploring n8n — open-source, self-hostable workflow automation — to build flexible pipelines with custom nodes, API integrations, and conditional logic.',
    'learn.goal.title': 'Strategic Goal — Bizzdesign Unify',
    'learn.goal.desc': 'Learning n8n to design custom automation workflows integrating with Bizzdesign Unify, enabling clients to automate business processes, data syncs, and reporting pipelines.',
    // Skills
    'skills.label': 'Expertise',
    'skills.title': 'Skills & Technologies',
    'skills.sub': 'A diverse toolkit spanning enterprise architecture platforms, backend & frontend development, and cloud infrastructure.',
    // Education
    'edu.label': 'Academic Background',
    'edu.title': 'Education',
    'edu.sub': "Rigorous engineering formation across France and Morocco's top institutions.",
    'edu.enseeiht.degree': "Engineer's Degree — Computer Science & Telecommunications",
    'edu.cpge.degree': 'Preparatory Classes (CPGE/MPSI)',
    'edu.bac.degree': 'Baccalaureate — Math & Sciences (Highest Honors)',
    // Certifications
    'cert.label': 'Credentials',
    'cert.title': 'Certifications',
    'cert.sub': 'Industry-recognized certifications across data science, enterprise architecture, and governance platforms.',
    'cert.ibm.desc': 'Proficiency in Pandas, Numpy, Matplotlib — data wrangling, exploratory analysis, and predictive modeling.',
    'cert.cambridge.desc': 'Score of 173 on Cambridge Linguaskill — B2 level on the CEFR scale.',
    'cert.view': 'View Credential →',
    'cert.hopex.sub': 'Certified by MEGA International · Bizzdesign',
    'cert.certified': '✓ Certified',
    'cert.inprogress': '⏳ In Progress',
    'cert.bpa': 'Business Process Analysis',
    'cert.bpa.desc': 'Modeling and analyzing end-to-end business processes in compliance with BPMN standards.',
    'cert.grc': 'Governance, Risk & Compliance',
    'cert.grc.desc': 'Managing risk assessments, compliance frameworks, and internal controls using HOPEX GRC.',
    'cert.audit': 'Internal Audit',
    'cert.audit.desc': 'Planning and executing audit missions, defining scope, and recording observations.',
    'cert.it': 'IT Architecture',
    'cert.it.desc': 'Application landscape, infrastructure modeling, and technology roadmaps.',
    // Contact
    'contact.label': 'Get In Touch',
    'contact.title': "Let's Work Together",
    'contact.desc': 'Open to opportunities in Solution Engineering, Enterprise Architecture, and software development. Let\'s connect.',
    'form.name': 'NAME',
    'form.name.ph': 'Your name',
    'form.email': 'EMAIL',
    'form.msg': 'MESSAGE',
    'form.msg.ph': 'Tell me about your project or opportunity...',
    'form.send': 'Send Message →',
  },

  fr: {
    // Nav
    'nav.about': 'Profil',
    'nav.metrics': 'Métriques',
    'nav.experience': 'Expérience',
    'nav.projects': 'Projets',
    'nav.skills': 'Compétences',
    'nav.education': 'Formation',
    'nav.contact': 'Contact',
    'nav.cta': 'Me recruter',
    // Hero
    'hero.status': 'Disponible pour de nouvelles opportunités · Casablanca, Maroc',
    'hero.prefix': 'Ingénieur Solution chez',
    'hero.desc': 'Ingénieur formé à l\'ENSEEIHT, je connecte l\'architecture d\'entreprise et la livraison logicielle. Je transforme des problèmes business complexes en solutions élégantes et scalables.',
    'hero.cta1': 'Me contacter →',
    'hero.cta2': 'Voir mes projets',
    'hero.scroll': 'Défiler',
    // Visitor counter
    'vc.label': 'Vues du portfolio',
    'vc.unit': 'visites',
    'vc.loading': 'Chargement…',
    // Metrics
    'metrics.label': 'En chiffres',
    'metrics.title': 'Tableau de bord impact',
    'metrics.live': 'Métriques carrière · 2023–2026',
    'kpi.clients': 'Clients entreprise accompagnés',
    'kpi.clients.sub': 'Déploiements HOPEX & Bizzdesign',
    'kpi.time': 'Réduction moy. du time-to-value',
    'kpi.time.sub': 'via automatisation & workflows',
    'kpi.langs': 'Langues parlées',
    'kpi.certs': 'Certifications HOPEX',
    'kpi.certs.sub': '+1 en cours',
    'kpi.exp': 'Expérience professionnelle',
    'kpi.projects': 'Projets open-source',
    'journey.title': 'Trajectoire de carrière',
    'journey.now': 'Bizzdesign · SE · Maintenant',
    // About
    'about.label': 'Profil',
    'about.title': 'Ingénierie & Stratégie',
    'about.p1': 'Diplômé de l\'<strong>ENSEEIHT (INP Toulouse)</strong> en Informatique & Télécommunications — l\'une des meilleures grandes écoles d\'ingénieurs de France. Mon parcours : des classes préparatoires à l\'École Mohamed VI d\'Excellence de Benguerir jusqu\'à la construction de solutions enterprise chez Airbus, MEGA International, et désormais Bizzdesign.',
    'about.p2': 'Je me spécialise à l\'intersection de l\'<strong>architecture d\'entreprise</strong>, de l\'<strong>ingénierie logicielle</strong> et de l\'<strong>optimisation des processus métier</strong>. Je parle le langage des DSI comme des directeurs financiers.',
    'about.stat1': 'Promotion ENSEEIHT',
    'about.stat2': 'Stage en aérospatiale',
    'about.stat3': 'FR · EN · AR · DE',
    'about.stat4': 'Expérience logiciel enterprise',
    // Experience
    'exp.label': 'Carrière',
    'exp.title': 'Expérience',
    'exp.sub': 'Une carrière construite délibérément en architecture d\'entreprise et ingénierie solution, du secteur aérospatial au SaaS.',
    'exp.bizzdesign.role': 'Ingénieur Solution',
    'exp.bizzdesign.date': 'Jan 2025 — Présent',
    'exp.bizzdesign.b1': 'Diriger les réunions de lancement client, les démonstrations avant-vente et les ateliers de découverte — en transformant des besoins métiers parfois ambigus en solutions HOPEX clairement définies pour les cas d\’usage GRC, audit interne et BPA.',
    'exp.bizzdesign.b2': 'Évaluer la complexité des personnalisations demandées par les clients, proposer des solutions pragmatiques basées sur les capacités natives de HOPEX et assurer la livraison de bout en bout — en transformant des exigences de conformité complexes en configurations de plateforme efficaces.',
    'exp.bizzdesign.b3': 'Concevoir des rapports et tableaux de bord personnalisés utilisant les API REST de HOPEX et VBScript — automatisant les processus de reporting sur les risques, les audits et les processus qui nécessitaient auparavant des heures de consolidation manuelle.',
    'exp.bizzdesign.b4': 'Former et accompagner les clients via des programmes de formation structurés, afin d\’accélérer la prise en main de la plateforme et le time-to-value dans des organisations des secteurs bancaire, assurance et public.',
    'exp.mega.role': 'Ingénieur Solution',
    'exp.mega.date': 'Juin 2024 — Déc 2024',
    'exp.mega.b1': 'Déploiement et configuration de la plateforme HOPEX pour 12+ clients dans les secteurs banque, assurance et secteur public.',
    'exp.mega.b2': 'Développement de macros VBScript et modèles BPMN pour automatiser les reportings clients, réduisant l\'effort manuel de ~40%.',
    'exp.mega.b3': '3 certifications HOPEX Aquila obtenues (BPA, GRC, Audit Interne) et certification IT Architecture en cours.',
    'exp.mega.b4': 'Intégrations API REST entre HOPEX et le SI client (ERP, CMDB, ITSM).',
    'exp.airbus.role': 'Stagiaire Ingénieur Logiciel',
    'exp.airbus.date': '2023',
    'exp.airbus.b1': 'Contribution aux outils internes et systèmes logiciels de l\'un des plus grands groupes aérospatiaux européens.',
    'exp.airbus.b2': 'Travail en environnement Agile avec application des standards rigoureux de l\'ingénierie logicielle critique.',
    // Projects
    'proj.label': 'Portfolio',
    'proj.title': 'Projets',
    'proj.sub': 'Des travaux d\'ingénierie illustrant la conception de systèmes, la pensée algorithmique et l\'expertise en automatisation.',
    'proj.autotester.tagline': 'Un pipeline CI/CD automatisé pour évaluer les projets Java étudiants via GitLab, Docker et un moteur d\'orchestration Python.',
    'proj.students': 'Étudiants',
    'proj.roles': 'Rôles',
    'proj.epidemic.tagline': 'Modélisation mathématique de la propagation du COVID-19 dans des réseaux de contacts humains (modèles SIS, SIR, SAIR).',
    'proj.models': 'Modèles',
    'proj.nodes': 'Nœuds',
    // Tabs
    'tab.overview': 'Vue d\'ensemble',
    'tab.pipeline': 'Pipeline',
    'tab.roles': 'Rôles système',
    'tab.tech': 'Stack technique',
    'tab.models': '3 Modèles',
    'tab.zero': 'Patient Zéro',
    // Flow
    'flow.student': '👨‍💻 Étudiant',
    'flow.autotester': '🤖 AutoTester',
    'flow.professor': '👨‍🏫 Professeur',
    // AutoTester steps
    'at.step1.title': 'Push étudiant',
    'at.step1.desc': 'L\'étudiant pousse son code vers son dépôt GitLab. Un token déclencheur unique lance le pipeline automatiquement.',
    'at.step2.title': 'Exécution Docker',
    'at.step2.desc': 'Une image Docker dédiée démarre, clone le dépôt étudiant et valide l\'intégrité et les limites de tentatives.',
    'at.step3.title': 'Suite de tests',
    'at.step3.desc': 'JUnit, tests Blackbox, analyse statique Checkstyle et compilation s\'exécutent dans des scénarios isolés.',
    'at.step4.title': 'Commit feedback',
    'at.step4.desc': 'Un feedback structuré est automatiquement committé sur la branche de l\'étudiant avec score et rapport détaillé.',
    // Roles
    'role.student': 'Développeur étudiant',
    'role.professor': 'Professeur / Évaluateur',
    'role.autotester': 'Système AutoTester',
    'role.student.l1': 'Écrit des implémentations Java selon le cahier des charges',
    'role.student.l2': 'Commit sur son dépôt GitLab personnel',
    'role.student.l3': 'Le token déclencheur s\'active à chaque push',
    'role.student.l4': 'Reçoit un feedback automatique instantané',
    'role.prof.l1': 'Définit les scénarios de test via feat3p CLI',
    'role.prof.l2': 'Configure les pondérations, limites et délais',
    'role.prof.l3': 'Accède au tableau de bord des résultats',
    'role.auto.l1': 'Écoute les commits étudiants via token déclencheur',
    'role.auto.l2': 'S\'exécute dans une image Docker dédiée',
    'role.auto.l3': 'Lance JUnit, Blackbox, Checkstyle, Compilateur',
    'role.auto.l4': 'Commite le feedback structuré sur le dépôt étudiant',
    // Learning
    'learn.label': 'Et après ?',
    'learn.title': 'En cours d\'apprentissage',
    'learn.sub': 'Au-delà de l\'architecture d\'entreprise — exploration de l\'automatisation, des workflows et des solutions IA pour le business.',
    'learn.banner.title': 'Vers une expertise en automatisation',
    'learn.banner.sub': 'Association d\'outils low-code et de moteurs de workflow custom pour les solutions enterprise nouvelle génération chez Bizzdesign.',
    'learn.stat1': 'Outils en cours',
    'learn.stat2': 'Workflow live',
    'learn.automate.desc': 'Conception et déploiement de workflows cloud automatisés avec Power Automate. Focus sur l\'intégration Microsoft 365, les flows planifiés et les cas d\'usage réels chez Bizzdesign.',
    'learn.live': 'Workflow live · Production',
    'learn.wf.title': 'Rapport timecard hebdomadaire',
    'learn.wf.desc': 'Un cloud flow planifié compilant et envoyant automatiquement un email timecard hebdomadaire à mon manager chaque lundi matin.',
    'learn.wf.s1': 'Déclencheur hebdo<br/><span>Lun 8h00</span>',
    'learn.wf.s2': 'Collecte timecards<br/><span>Tous projets</span>',
    'learn.wf.s3': 'Format rapport<br/><span>Email HTML</span>',
    'learn.wf.s4': 'Envoi manager<br/><span>Outlook</span>',
    'learn.n8n.desc': 'Exploration de n8n — automatisation de workflows open-source et auto-hébergeable — pour construire des pipelines flexibles avec nœuds custom, intégrations API et logique conditionnelle.',
    'learn.goal.title': 'Objectif stratégique — Bizzdesign Unify',
    'learn.goal.desc': 'Apprentissage de n8n pour concevoir des workflows d\'automatisation custom intégrant Bizzdesign Unify, permettant aux clients d\'automatiser processus, syncs de données et pipelines de reporting.',
    // Skills
    'skills.label': 'Expertise',
    'skills.title': 'Compétences & Technologies',
    'skills.sub': 'Un panel de compétences couvrant les plateformes d\'architecture d\'entreprise, le développement backend & frontend, et l\'infrastructure cloud.',
    // Education
    'edu.label': 'Formation',
    'edu.title': 'Éducation',
    'edu.sub': 'Une formation d\'ingénieur rigoureuse dans les meilleures établissements de France et du Maroc.',
    'edu.enseeiht.degree': 'Diplôme d\'ingénieur — Informatique & Télécommunications',
    'edu.cpge.degree': 'Classes préparatoires aux grandes écoles (MPSI)',
    'edu.bac.degree': 'Baccalauréat — Mathématiques & Sciences (Très Bien)',
    // Certifications
    'cert.label': 'Certifications',
    'cert.title': 'Certifications & Diplômes',
    'cert.sub': 'Certifications reconnues par l\'industrie en data science, architecture d\'entreprise et gouvernance.',
    'cert.ibm.desc': 'Maîtrise de Pandas, Numpy, Matplotlib — wrangling, analyse exploratoire et modélisation prédictive.',
    'cert.cambridge.desc': 'Score de 173 au test Cambridge Linguaskill — niveau B2 sur l\'échelle CECRL.',
    'cert.view': 'Voir le certificat →',
    'cert.hopex.sub': 'Certifié par MEGA International · Bizzdesign',
    'cert.certified': '✓ Certifié',
    'cert.inprogress': '⏳ En cours',
    'cert.bpa': 'Analyse des processus métier',
    'cert.bpa.desc': 'Modélisation et analyse de processus end-to-end en conformité avec les standards BPMN.',
    'cert.grc': 'Gouvernance, Risques & Conformité',
    'cert.grc.desc': 'Gestion des évaluations de risques, référentiels de conformité et contrôles internes via HOPEX GRC.',
    'cert.audit': 'Audit interne',
    'cert.audit.desc': 'Planification et exécution de missions d\'audit, définition du périmètre et enregistrement des constats.',
    'cert.it': 'Architecture IT',
    'cert.it.desc': 'Paysage applicatif, modélisation d\'infrastructure et roadmaps technologiques.',
    // Contact
    'contact.label': 'Me contacter',
    'contact.title': 'Travaillons ensemble',
    'contact.desc': 'Ouvert aux opportunités en Ingénierie Solution, Architecture d\'Entreprise et développement logiciel. N\'hésitez pas à me contacter.',
    'form.name': 'NOM',
    'form.name.ph': 'Votre nom',
    'form.email': 'EMAIL',
    'form.msg': 'MESSAGE',
    'form.msg.ph': 'Parlez-moi de votre projet ou opportunité...',
    'form.send': 'Envoyer le message →',
  }
};

/* ══════════════════════════════════════════════
   LANGUAGE SWITCHER
   ══════════════════════════════════════════════ */
let currentLang = localStorage.getItem('mi_lang') || 'en';

function applyTranslations(lang) {
  const t = i18n[lang];
  if (!t) return;

  // Text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // Lang toggle button
  const btn = document.getElementById('langToggle');
  if (lang === 'en') {
    btn.querySelector('.lang-flag').textContent = '🇫🇷';
    btn.querySelector('.lang-text').textContent = 'FR';
    btn.title = 'Passer en français';
  } else {
    btn.querySelector('.lang-flag').textContent = '🇬🇧';
    btn.querySelector('.lang-text').textContent = 'EN';
    btn.title = 'Switch to English';
  }

  document.documentElement.setAttribute('data-lang', lang);
}

function toggleLang() {
  currentLang = currentLang === 'en' ? 'fr' : 'en';
  localStorage.setItem('mi_lang', currentLang);
  applyTranslations(currentLang);
}

document.getElementById('langToggle').addEventListener('click', toggleLang);

/* ══════════════════════════════════════════════
   VISITOR COUNTER — CORS-FREE
   The fetch() approach fails due to CORS on hits.sh.
   Solution: use an <img> element to trigger the increment
   and display a locally stored + estimated count.
   We never fetch() the SVG directly.
   ══════════════════════════════════════════════ */
(function initVisitorCounter() {
  const numEl = document.getElementById('vcNum');
  const progressEl = document.getElementById('vcProgress');
  const statusEl = document.getElementById('vcStatusText');
  const wrapEl = document.getElementById('vcWrap');

  if (!numEl || !wrapEl) return;

  function animateCount(target) {
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 60));
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      numEl.textContent = current.toLocaleString();
      if (current >= target) clearInterval(timer);
    }, 25);

    const pct = Math.min(target / 1000, 1);
    progressEl.style.strokeDashoffset = 163 - pct * 163;
  }

  const LS_KEY = 'mi_visit_count';
  const LS_VISITED = 'mi_has_visited';

  // Get current count
  let count = parseInt(localStorage.getItem(LS_KEY) || '0');

  // Increment only if this browser hasn't visited before
  if (!localStorage.getItem(LS_VISITED)) {
    count += 1;
    localStorage.setItem(LS_KEY, String(count));
    localStorage.setItem(LS_VISITED, '1');
  }

  animateCount(count);

  if (statusEl) {
    statusEl.textContent = currentLang === 'fr' ? 'Visiteurs uniques' : 'Unique visitors';
  }
})();

/* ══════════════════════════════════════════════
   KPI COUNTER ANIMATION
   ══════════════════════════════════════════════ */
function animateKPIs() {
  document.querySelectorAll('.kpi-value[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    let current = 0;
    const step = target / 50;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = Math.round(current) + suffix;
      if (current >= target) clearInterval(timer);
    }, 30);
  });
}

/* ══════════════════════════════════════════════
   SKILLS GRID
   ══════════════════════════════════════════════ */
const skills = [
  { icon: '🏗️', name: 'HOPEX Platform', cat: 'Enterprise Architecture', pct: 92 },
  { icon: '☕', name: 'Java / C# / .NET', cat: 'Backend', pct: 85 },
  { icon: '🐍', name: 'Python / Django', cat: 'Backend', pct: 88 },
  { icon: '🌐', name: 'HTML / CSS / JS', cat: 'Frontend', pct: 82 },
  { icon: '🐋', name: 'Docker', cat: 'DevOps', pct: 80 },
  { icon: '☁️', name: 'Amazon Web Services', cat: 'Cloud', pct: 75 },
  { icon: '🗄️', name: 'SQL / PostgreSQL', cat: 'Database', pct: 83 },
  { icon: '📊', name: 'VBScript / BPMN', cat: 'Process & Reporting', pct: 88 },
  { icon: '🔧', name: 'Git / GitLab / Maven', cat: 'Dev Tools', pct: 87 },
];

const sg = document.getElementById('skillsGrid');
if (sg) {
  skills.forEach(s => {
    sg.innerHTML += `
    <div class="skill-card fade-in">
      <div class="skill-header">
        <div class="skill-icon">${s.icon}</div>
        <div>
          <div class="skill-name">${s.name}</div>
          <div class="skill-cat">${s.cat}</div>
        </div>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:.8rem;color:var(--gray);margin-bottom:.5rem">
        <span>Proficiency</span><span style="color:var(--blue)">${s.pct}%</span>
      </div>
      <div class="bar-wrap"><div class="bar" data-w="${s.pct}%"></div></div>
    </div>`;
  });
}

/* ══════════════════════════════════════════════
   TAB SWITCHING
   ══════════════════════════════════════════════ */
function switchTab(btn, id) {
  const card = btn.closest('.proj-card');
  card.querySelectorAll('.proj-tab').forEach(t => t.classList.remove('active'));
  card.querySelectorAll('.proj-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  const panel = document.getElementById('tab-' + id);
  if (panel) panel.classList.add('active');
}

/* ══════════════════════════════════════════════
   CONTACT FORM
   ══════════════════════════════════════════════ */
function sendEmail() {
  const name = document.getElementById('f-name').value.trim();
  const email = document.getElementById('f-email').value.trim();
  const msg = document.getElementById('f-msg').value.trim();
  const lang = currentLang;

  if (!name || !email || !msg) {
    alert(lang === 'fr' ? 'Veuillez remplir tous les champs.' : 'Please fill in all fields.');
    return;
  }
  const subject = encodeURIComponent(`Portfolio Contact — ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${msg}`);
  window.location.href = `mailto:mohamedikich7@gmail.com?subject=${subject}&body=${body}`;
}

/* ══════════════════════════════════════════════
   INTERSECTION OBSERVER — fade-in + skill bars + KPI
   ══════════════════════════════════════════════ */
let kpiAnimated = false;
let skillsAnimated = false;

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    // Fade in
    if (entry.target.classList.contains('fade-in')) {
      entry.target.classList.add('visible');
    }

    // KPI counters
    if (entry.target.id === 'metrics' && !kpiAnimated) {
      kpiAnimated = true;
      animateKPIs();
    }

    // Skill bars
    if (entry.target.id === 'skills' && !skillsAnimated) {
      skillsAnimated = true;
      document.querySelectorAll('.bar').forEach(b => {
        b.style.width = b.dataset.w;
      });
    }
  });
}, { threshold: 0.15 });

// Observe sections
document.querySelectorAll('section').forEach(el => observer.observe(el));

// Observe fade-in elements after skills grid is built
setTimeout(() => {
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}, 100);

/* ══════════════════════════════════════════════
   NAV SCROLL EFFECT
   ══════════════════════════════════════════════ */
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.style.background = 'rgba(5, 8, 16, 0.95)';
  } else {
    nav.style.background = 'rgba(5, 8, 16, 0.8)';
  }
}, { passive: true });

/* ══════════════════════════════════════════════
   HERO TITLE PARALLAX (subtle)
   ══════════════════════════════════════════════ */
const heroGlow1 = document.querySelector('.hero-glow-1');
window.addEventListener('scroll', () => {
  if (!heroGlow1) return;
  const y = window.scrollY;
  heroGlow1.style.transform = `translateX(-50%) translateY(${y * 0.3}px)`;
}, { passive: true });

/* ══════════════════════════════════════════════
   INIT
   ══════════════════════════════════════════════ */
applyTranslations(currentLang);