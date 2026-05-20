// =============================================
// TRANSLATION DICTIONARY
// =============================================
const i18n = {
    fr: {
      nav_tagline:"Rejoignez-nous, Allez Loin !",
      nav_about:"À Propos", nav_lang:"Langues", nav_services:"Services",
      nav_campuses:"Campus", nav_stories:"Témoignages", nav_enroll:"S'inscrire",
      hero_badge:"✦ Association Culturelle Internationale · Depuis 2006",
      hero_title_line1:"Votre Passerelle vers",
      hero_title_line2:"l'Éducation Internationale",
      hero_title_line3:"Légale",
      hero_sub:"CLIRAP offre aux jeunes Africains une formation linguistique de haut niveau, des voies certifiées vers l'international et un accompagnement complet pour étudier à l'étranger — en toute légalité.",
      hero_btn1:"Découvrir nos cours", hero_btn2:"Consultation gratuite",
      stat1:"Années d'excellence", stat2:"Campus internationaux",
      stat3:"Langues enseignées", stat4:"Diplômés dans le monde",
      hero_card_quote:"\"Mobilité légale.<br>Compétences globales.<br>Avenir africain.\"",
      fc1_label:"Fondé en", fc2_label:"Langues enseignées", fc2_sub:"6+ Langues Internationales",
      founder_quote:"« Il est toujours bon de voyager. La mobilité pour les études ou l'expérience professionnelle internationale est un excellent moyen de combattre l'ignorance. Interagir avec d'autres peuples et cultures est une richesse inestimable. »",
      about_origin:"Né de la tragédie des migrations illégales en Méditerranée — Dr. Assadio, alors doctorant à l'Université de Nottingham, a fondé CLIRAP en 2006 pour offrir aux jeunes Africains des voies légales, sûres et valorisantes vers l'éducation à l'étranger.",
      mission_title:"Notre Mission Fondamentale",
      mission1:"Informer la jeunesse sur les dangers de la migration illégale",
      mission2:"Former aux langues mondiales et aux certifications internationales",
      mission3:"Guider les étudiants dans les démarches légales de mobilité",
      mission4:"Encourager les diplômés à rentrer développer l'Afrique",
      about_tag:"Qui Sommes-Nous",
      about_body1:"CLIRAP est une association culturelle internationale dont le siège est à Yaoundé, au Cameroun, avec un réseau de campus à travers l'Afrique de l'Ouest, l'Afrique Centrale et l'Europe. Depuis 2006, nous sommes l'institution de référence pour la formation linguistique, les certifications internationales et l'accompagnement à la mobilité légale pour les jeunes Africains.",
      about_body2:"Nous croyons que le développement de l'Afrique passe par sa jeunesse. Notre modèle trois-en-un — excellence linguistique, médiation culturelle et accompagnement à la mobilité internationale — est unique sur le continent.",
      val1_t:"Excellence Académique", val1_d:"30h/semaine de cours intensifs avec des formateurs certifiés",
      val2_t:"Migration Légale", val2_d:"Accompagnement complet visa & admissions pour des parcours sûrs",
      val3_t:"Fierté Africaine", val3_d:"Promotion de la culture, de l'identité et des langues africaines",
      val4_t:"Retour & Construction", val4_d:"Encourager les diplômés à ramener leurs compétences en Afrique",
      lang_tag:"Ce Que Nous Enseignons", lang_title:"Les Langues Qui Ouvrent des Portes",
      lang_sub:"Du niveau A1 débutant au C2 expert — tous les niveaux, tous les parcours.",
      lang_all_levels:"A1 → C2 · Tous niveaux", lang_beg_adv:"Débutant → Avancé",
      lang_all_exams:"Tous niveaux & examens", lang_intl:"International",
      lang_bus_acad:"Professionnel & Académique", lang_conv_write:"Expression orale & écrite",
      lang_fr_levels:"Prépa universitaire · DELF",
      lang_african_name:"Langues Africaines", lang_african_sub:"Préserver & célébrer nos racines",
      lang_by_campus:"Disponible par campus :",
      serv_tag:"Accompagnement Complet",
      serv_title1:"Tout ce qu'il vous faut pour", serv_title2:"Réussir vos Études à l'Étranger",
      serv_sub:"Notre modèle trois-en-un couvre tout votre parcours — du premier cours au visa.",
      s1_t:"Formation Linguistique", s1_d:"30 heures de cours intensifs par semaine, du lundi au vendredi, dispensés par des formateurs qualifiés natifs ou experts utilisant des méthodes pédagogiques modernes.", s1_tag:"Locuteurs natifs",
      s2_t:"Certifications Internationales", s2_d:"Préparation complète aux certifications CILS, CERT.IT, ÖSD, DELF, DALF et autres diplômes reconnus à l'international, requis pour l'admission universitaire.",
      s3_t:"Admissions Universitaires", s3_d:"Accompagnement étape par étape pour les bacheliers et licenciés souhaitant s'inscrire dans des universités italiennes, allemandes, belges et chinoises.",
      s4_t:"Traduction & Légalisation", s4_d:"Traduction officielle et légalisation de vos documents académiques pour les ambassades, consulats italiens et institutions africaines à l'étranger. Suivi en temps réel inclus.",
      s4_tag1:"Certifié Ambassade", s4_tag2:"Suivi en ligne", s4_tag3:"Rapide",
      s5_t:"Médiation Culturelle", s5_d:"Formation à la communication interculturelle, à l'interprétariat et à la traduction. Préparez les étudiants à évoluer avec confiance dans les environnements académiques et professionnels occidentaux.",
      s5_tag1:"Traduction", s5_tag2:"Interprétariat", s5_tag3:"Prépa culturelle",
      s6_t:"Événements d'Orientation", s6_d:"Conférences régulières sur les opportunités d'études à l'étranger, les stratégies de réussite académique en Europe, les besoins en compétences pour le développement africain et les programmes de retour.",
      s6_tag1:"Conférences", s6_tag2:"Réseautage", s6_tag3:"Orientation",
      how_tag:"Le Processus", how_title:"Votre Parcours en 4 Étapes",
      how_sub:"De votre premier contact avec CLIRAP au jour où vous atterrissez dans votre université de rêve.",
      step1_t:"Test Gratuit", step1_d:"Passez un test de niveau pour évaluer vos compétences actuelles. Entièrement gratuit, sans engagement.",
      step2_t:"S'inscrire & Se Former", step2_d:"Rejoignez votre cours sur mesure. 30h/semaine de formation intensive, lun–ven, avec des formateurs experts.",
      step3_t:"Obtenir sa Certification", step3_d:"Passez et réussissez votre certification linguistique internationale. CLIRAP vous prépare au niveau B2 ou C1.",
      step4_t:"Postuler & Partir", step4_d:"Notre service des admissions gère votre dossier complet — de la candidature universitaire au visa, logement et préparation au voyage.",
      camp_tag:"Notre Réseau", camp_title1:"9 Campus en", camp_title2:"Afrique & en Europe",
      camp_sub:"Du cœur de Yaoundé à Turin, en Italie — CLIRAP est là où vous en avez besoin.",
      camp_coord:"Coordination Internationale",
      camp_turin_desc:"Notre hub européen coordonne les admissions en Master, la légalisation des documents et le soutien étudiant dans toutes les institutions italiennes.",
      camp_hq:"Siège Social", camp_univ_city:"Ville Universitaire", camp_premium:"Campus Premium",
      camp_wa:"Hub Afrique Occ.", camp_ca:"Afrique Centrale", camp_eu:"Siège Européen",
      testi_tag:"Témoignages d'Étudiants", testi_title:"La Voix de Nos Diplômés",
      testi_sub:"De Lomé à Milan, de Yaoundé à Francfort — de vraies personnes, de vraies réussites.",
      testi1:"« CLIRAP a changé ma vie. En seulement 7 mois, je suis passée de zéro en italien à la certification B2, et je suis maintenant inscrite à l'Università di Bologna. L'accompagnement administratif était incroyable — je n'ai jamais dû me débrouiller seule. »",
      testi2:"« J'étais sur le point de payer un passeur pour traverser la mer. Un ami m'a parlé de CLIRAP. Deux ans plus tard, j'ai un Master en Ingénierie de Turin — légalement, en toute sécurité, avec fierté. »",
      testi3:"« Le cours d'allemand de CLIRAP est intensif mais les professeurs sont exceptionnels. J'ai réussi mon examen ÖSD du premier coup et j'ai obtenu une place à la TU Berlin. CLIRAP, c'est sérieux — faites confiance au processus. »",
      news_tag:"Actualités", news_title:"Nouvelles & Événements", news_all:"Tout voir →",
      news1_cat:"Certification", news1_t:"Premier Examen ÖSD en Afrique de l'Ouest — Organisé par CLIRAP Lomé", news1_d:"CLIRAP Lomé est entré dans l'histoire en organisant le tout premier examen de certification allemand ÖSD dans la sous-région ouest-africaine, ouvrant de nouvelles portes aux étudiants togolais.",
      news2_cat:"Partenariat", news2_t:"CLIRAP & CDAB COMPASS Signent un Accord de Collaboration", news2_d:"Une nouvelle alliance pour mieux détecter les profils étudiants, concevoir des parcours sur mesure et accélérer l'intégration des étudiants africains dans les universités françaises, allemandes et italiennes.",
      news3_cat:"Médias", news3_t:"Dr. Assadio Invité sur NEKTAR — La Préparation Culturelle au-delà de la Langue", news3_d:"Le Président de CLIRAP participe à une émission télévisée nationale pour expliquer comment la préparation culturelle, au-delà des compétences linguistiques, est essentielle à la réussite des étudiants africains en Europe.",
      contact_tag:"Nous Contacter", contact_title1:"Prêt à Commencer", contact_title2:"Votre Voyage ?",
      contact_body:"Que vous soyez étudiant, parent ou institution partenaire — nous sommes là pour vous. Contactez-nous via le formulaire, WhatsApp ou directement sur le campus CLIRAP le plus proche.",
      ci1_label:"Nous Écrire", ci2_label:"WhatsApp (Lomé)", ci3_label:"Coordination Italie / Masters", ci4_label:"Adresse Campus Lomé",
      form_title:"Demander une Consultation Gratuite",
      form_sub:"Remplissez vos informations et un conseiller CLIRAP vous contactera dans les 24 heures.",
      form_fname:"Prénom", form_fname_ph:"Jean-Marc",
      form_lname:"Nom de famille", form_lname_ph:"Essomba",
      form_email:"Adresse e-mail", form_email_ph:"vous@exemple.com",
      form_phone:"WhatsApp / Téléphone",
      form_campus:"Campus le plus proche", form_campus_sel:"Choisir un campus...",
      form_lang:"Langue souhaitée", form_lang_sel:"Choisir une langue...",
      opt_it:"Italien", opt_de:"Allemand", opt_en:"Anglais", opt_es:"Espagnol",
      opt_fr:"Français", opt_pt:"Portugais", opt_af:"Langue Africaine",
      form_msg:"Votre message (facultatif)", form_msg_ph:"Parlez-nous de vos objectifs d'études à l'étranger...",
      form_submit:"Envoyer ma demande ✦",
      form_wa_btn:"Ou Discuter sur WhatsApp",
      form_success_t:"Demande envoyée !", form_success_d:"Un conseiller CLIRAP vous contactera dans les 24 heures. Rejoignez-nous, Allez Loin ! 🌍",
      footer_tagline_sm:"Rejoignez-nous, Allez Loin !",
      footer_tagline:"Cercle Culturel pour la Promotion des Langues, le Développement et la Paix. Au service de la jeunesse africaine depuis 2006.",
      footer_nav:"Navigation", footer_about:"À Propos de CLIRAP", footer_lang:"Langues",
      footer_serv:"Services", footer_how:"Comment ça marche", footer_camp:"Campus",
      footer_testi:"Témoignages", footer_news:"Actualités",
      footer_campuses:"Nos Campus", footer_contact:"Contact",
      footer_copy:"© 2025 CLIRAP — Cercle Culturel pour la Promotion des Langues, le Développement et la Paix. Tous droits réservés.",
      footer_privacy:"Politique de Confidentialité", footer_terms:"Conditions d'Utilisation", footer_sitemap:"Plan du Site"
    },
    en: {
      nav_tagline:"Join Us, Go Far!",
      nav_about:"About", nav_lang:"Languages", nav_services:"Services",
      nav_campuses:"Campuses", nav_stories:"Stories", nav_enroll:"Enroll Now",
      hero_badge:"✦ International Cultural Association · Since 2006",
      hero_title_line1:"Your Gateway to",
      hero_title_line2:"International Education",
      hero_title_line3:"Legal",
      hero_sub:"CLIRAP empowers young Africans with world-class language training, certified international pathways, and complete study-abroad support — legally, safely, proudly.",
      hero_btn1:"Explore Our Courses", hero_btn2:"Free Consultation",
      stat1:"Years of Excellence", stat2:"International Campuses",
      stat3:"Languages Taught", stat4:"Alumni Worldwide",
      hero_card_quote:"\"Legal mobility.<br>Global skills.<br>African future.\"",
      fc1_label:"Founded", fc2_label:"Languages we teach", fc2_sub:"6+ International Languages",
      founder_quote:"\"It is always good to travel. Mobility studies or international work experience is a great way to fight ignorance. Interacting with other peoples and cultures is a tremendous wealth.\"",
      about_origin:"Born from the tragedy of illegal migration across the Mediterranean — Dr. Assadio, then a doctoral student at the University of Nottingham, created CLIRAP in 2006 to give young Africans legal, safe, and empowered pathways to education abroad.",
      mission_title:"Our Core Mission",
      mission1:"Inform youth about the dangers of illegal migration",
      mission2:"Train in world languages & international certifications",
      mission3:"Guide students through legal study-abroad processes",
      mission4:"Encourage graduates to return and develop Africa",
      about_tag:"Who We Are",
      about_body1:"CLIRAP is an international cultural association headquartered in Yaoundé, Cameroon, with a network of campuses across West and Central Africa and Europe. Since 2006, we have been the premier institution for language training, international certifications, and legal study-abroad guidance for young Africans.",
      about_body2:"We believe that the development of Africa passes through its youth. Our three-in-one model — linguistic excellence, cultural mediation, and international mobility support — is unique across the continent.",
      val1_t:"Academic Excellence", val1_d:"30h/week of intensive courses with certified instructors",
      val2_t:"Legal Migration", val2_d:"Full visa & admissions support for safe, legal pathways",
      val3_t:"African Pride", val3_d:"Promoting African culture, identity & languages globally",
      val4_t:"Return & Build", val4_d:"Encouraging graduates to bring their skills back to Africa",
      lang_tag:"What We Teach", lang_title:"Languages That Open Doors",
      lang_sub:"From A1 beginners to C2 masters — all levels, all paths.",
      lang_all_levels:"A1 → C2 · All levels", lang_beg_adv:"Beginner → Advanced",
      lang_all_exams:"All levels & exams", lang_intl:"International",
      lang_bus_acad:"Business & Academic", lang_conv_write:"Conversational & Written",
      lang_fr_levels:"University Prep · DELF",
      lang_african_name:"African Languages", lang_african_sub:"Preserving & celebrating our roots",
      lang_by_campus:"Available by campus:",
      serv_tag:"Full-Service Support",
      serv_title1:"Everything You Need to", serv_title2:"Study Abroad Successfully",
      serv_sub:"Our unique three-in-one model covers your full journey — from first lesson to visa stamp.",
      s1_t:"Language Training", s1_d:"30 hours per week of intensive language instruction, Monday to Friday, taught by qualified native and expert instructors using modern pedagogical methods.", s1_tag:"Native Speakers",
      s2_t:"International Certifications", s2_d:"Full preparation for CILS, CERT.IT, ÖSD, DELF, DALF and other internationally recognized language certifications required for university admission.",
      s3_t:"University Admissions", s3_d:"Step-by-step guidance for BAC holders and Bachelor degree graduates seeking enrollment in Italian, German, Belgian, and Chinese universities.",
      s4_t:"Translation & Legalization", s4_d:"Official translation and legalization of your academic documents for Italian embassies, consulates, and African institutions abroad. Includes a real-time tracking system.",
      s4_tag1:"Embassy Certified", s4_tag2:"Online Tracking", s4_tag3:"Fast",
      s5_t:"Cultural Mediation", s5_d:"Training in cross-cultural communication, interpretation, and translation. Prepare students to navigate Western academic and professional environments with confidence.",
      s5_tag1:"Translation", s5_tag2:"Interpretation", s5_tag3:"Cultural Prep",
      s6_t:"Orientation Events", s6_d:"Regular conferences on study abroad opportunities, academic success strategies in Europe, skills needs for African development, and return-and-invest programs.",
      s6_tag1:"Conferences", s6_tag2:"Networking", s6_tag3:"Career Guidance",
      how_tag:"The Process", how_title:"Your Journey in 4 Steps",
      how_sub:"From your first contact with CLIRAP to the day you land at your dream university.",
      step1_t:"Free Assessment", step1_d:"Take a proficiency test to determine your current language level. Completely free, no commitment needed.",
      step2_t:"Enroll & Train", step2_d:"Join your tailored course. 30h/week of intensive training, Mon–Fri, with expert instructors and small groups.",
      step3_t:"Get Certified", step3_d:"Sit and pass your international language certification. CLIRAP prepares you thoroughly — B2 or C1 level.",
      step4_t:"Apply & Travel", step4_d:"Our admissions office handles your entire dossier — from university application to visa, housing guidance, and travel prep.",
      camp_tag:"Our Network", camp_title1:"9 Campuses Across", camp_title2:"Africa & Europe",
      camp_sub:"From the heart of Yaoundé to Turin, Italy — CLIRAP is wherever you need us to be.",
      camp_coord:"International Coordination",
      camp_turin_desc:"Our European hub coordinates Masters admissions, document legalization, and student support across all Italian institutions.",
      camp_hq:"Headquarters", camp_univ_city:"University City", camp_premium:"Premium Campus",
      camp_wa:"West Africa Hub", camp_ca:"Central Africa", camp_eu:"European HQ",
      testi_tag:"Student Stories", testi_title:"Voices of Our Alumni",
      testi_sub:"From Lomé to Milan, from Yaoundé to Frankfurt — real people, real success stories.",
      testi1:"\"CLIRAP changed my life. In just 7 months I went from zero Italian to B2 certified, and now I'm enrolled at Università di Bologna. The administrative support was incredible — I never had to figure anything out alone.\"",
      testi2:"\"I was about to pay a trafficker to cross the sea. A friend told me about CLIRAP. Two years later I have a Master's degree in Engineering from Turin — legally, safely, proudly.\"",
      testi3:"\"The German course at CLIRAP is intensive but the teachers are exceptional. I passed my ÖSD exam on the first attempt and secured a spot at TU Berlin. CLIRAP is the real deal — trust the process.\"",
      news_tag:"Latest Updates", news_title:"News & Events", news_all:"See All →",
      news1_cat:"Certification", news1_t:"First ÖSD German Exam in West Africa — Hosted by CLIRAP Lomé", news1_d:"CLIRAP Lomé made history by hosting the first-ever ÖSD German certification exam in the West African sub-region, opening new doors for Togolese students.",
      news2_cat:"Partnership", news2_t:"CLIRAP & CDAB COMPASS Sign Landmark Collaboration Agreement", news2_d:"A new alliance to better detect student profiles, design tailored study plans, and accelerate African student integration into French, German and Italian universities.",
      news3_cat:"Media", news3_t:"Dr. Assadio Featured on NEKTAR — Cultural Preparation Beyond Language", news3_d:"CLIRAP President joins national TV program to discuss how cultural readiness, beyond linguistic ability, is essential for African students succeeding in Europe.",
      contact_tag:"Get In Touch", contact_title1:"Ready to Start", contact_title2:"Your Journey?",
      contact_body:"Whether you're a student, a parent, or a partner institution — we're here for you. Reach out via the form, WhatsApp, or contact your nearest CLIRAP campus directly.",
      ci1_label:"Email Us", ci2_label:"WhatsApp (Lomé)", ci3_label:"Italy / Masters Coordination", ci4_label:"Lomé Campus Address",
      form_title:"Request a Free Consultation",
      form_sub:"Fill in your details and a CLIRAP advisor will reach out within 24 hours.",
      form_fname:"First Name", form_fname_ph:"Jean-Marc",
      form_lname:"Last Name", form_lname_ph:"Essomba",
      form_email:"Email Address", form_email_ph:"you@example.com",
      form_phone:"WhatsApp / Phone",
      form_campus:"Nearest Campus", form_campus_sel:"Select campus...",
      form_lang:"Language of Interest", form_lang_sel:"Select language...",
      opt_it:"Italian", opt_de:"German", opt_en:"English", opt_es:"Spanish",
      opt_fr:"French", opt_pt:"Portuguese", opt_af:"African Language",
      form_msg:"Your Message (Optional)", form_msg_ph:"Tell us about your study abroad goals...",
      form_submit:"Send Consultation Request ✦",
      form_wa_btn:"Or Chat Directly on WhatsApp",
      form_success_t:"Request Sent!", form_success_d:"A CLIRAP advisor will contact you within 24 hours. Join Us, Go Far! 🌍",
      footer_tagline_sm:"Join Us, Go Far!",
      footer_tagline:"Cercle Culturel pour la Promotion des Langues, le Développement et la Paix. Empowering African youth since 2006.",
      footer_nav:"Quick Links", footer_about:"About CLIRAP", footer_lang:"Languages",
      footer_serv:"Services", footer_how:"How It Works", footer_camp:"Campuses",
      footer_testi:"Student Stories", footer_news:"News & Events",
      footer_campuses:"Our Campuses", footer_contact:"Contact",
      footer_copy:"© 2025 CLIRAP — Cercle Culturel pour la Promotion des Langues, le Développement et la Paix. All rights reserved.",
      footer_privacy:"Privacy Policy", footer_terms:"Terms of Use", footer_sitemap:"Sitemap"
    }
  };
  
  // =============================================
  // TRANSLATION ENGINE
  // =============================================
  let currentLang = 'fr';
  
  function applyLang(lang) {
    const dict = i18n[lang];
    document.documentElement.lang = lang;
  
    document.body.style.transition = 'opacity 0.2s ease';
    document.body.style.opacity = '0.7';
  
    setTimeout(() => {
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
          el.innerHTML = dict[key];
        }
      });
  
      document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict[key] !== undefined) {
          el.placeholder = dict[key];
        }
      });
  
      document.title = lang === 'fr'
        ? 'CLIRAP – Votre Passerelle vers l\'Éducation Internationale Légale'
        : 'CLIRAP – Your Gateway to Legal International Education';
  
      document.body.style.opacity = '1';
    }, 200);
  }
  
  document.getElementById('btnFr').addEventListener('click', function() {
    if (currentLang === 'fr') return;
    currentLang = 'fr';
    this.classList.add('active');
    document.getElementById('btnEn').classList.remove('active');
    applyLang('fr');
  });
  
  document.getElementById('btnEn').addEventListener('click', function() {
    if (currentLang === 'en') return;
    currentLang = 'en';
    this.classList.add('active');
    document.getElementById('btnFr').classList.remove('active');
    applyLang('en');
  });
  
  // =============================================
  // CURSOR — desktop / fine-pointer only
  // =============================================
  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursor-ring');
  
  if (window.matchMedia('(pointer: fine)').matches) {
    let cx = 0, cy = 0, rx = 0, ry = 0;
  
    document.addEventListener('mousemove', e => {
      cx = e.clientX; cy = e.clientY;
      cursor.style.left = cx + 'px';
      cursor.style.top  = cy + 'px';
    });
  
    (function animRing() {
      rx += (cx - rx) * .12;
      ry += (cy - ry) * .12;
      ring.style.left = rx + 'px';
      ring.style.top  = ry + 'px';
      requestAnimationFrame(animRing);
    })();
  
    document.querySelectorAll('a,button,.lang-card,.service-card,.campus-card').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.width  = '20px'; cursor.style.height = '20px';
        ring.style.width    = '52px'; ring.style.height   = '52px';
        ring.style.borderColor = 'var(--gold)';
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.width  = '12px'; cursor.style.height = '12px';
        ring.style.width    = '36px'; ring.style.height   = '36px';
        ring.style.borderColor = 'var(--green)';
      });
    });
  } else {
    /* touch device — hide the elements entirely */
    if (cursor) cursor.style.display = 'none';
    if (ring)   ring.style.display   = 'none';
  }
  
  // =============================================
  // NAVBAR SCROLL
  // =============================================
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
  
  // =============================================
  // HAMBURGER
  // =============================================
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
  
  // =============================================
  // SCROLL REVEAL
  // =============================================
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: .12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));
  
  // =============================================
  // COUNTERS
  // =============================================
  function animCounter(el, target, dur) {
    let s = 0;
    const step = target / (dur / 16);
    const t = setInterval(() => {
      s += step;
      if (s >= target) { el.textContent = target; clearInterval(t); }
      else el.textContent = Math.floor(s);
    }, 16);
  }
  const heroObs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      document.querySelectorAll('.stat-number').forEach(el => {
        const num = parseInt(el.textContent);
        if (!isNaN(num)) {
          const sup = el.querySelector('sup');
          const suffix = sup ? sup.textContent : '';
          const counter = document.createElement('span');
          el.innerHTML = '';
          el.appendChild(counter);
          if (suffix) { const s = document.createElement('sup'); s.textContent = suffix; el.appendChild(s); }
          setTimeout(() => animCounter(counter, num, 1200), 400);
        }
      });
      heroObs.disconnect();
    }
  }, { threshold: .5 });
  heroObs.observe(document.getElementById('hero'));
  
  // =============================================
  // FORM SUBMIT
  // =============================================
  function handleSubmit() {
    const form = document.getElementById('contactForm');
    const success = document.getElementById('formSuccess');
    form.style.opacity = '0';
    form.style.transform = 'scale(0.95)';
    form.style.transition = 'all .4s';
    setTimeout(() => {
      form.style.display = 'none';
      success.style.display = 'block';
      success.style.opacity = '0';
      success.style.transform = 'scale(0.9)';
      success.style.transition = 'all .4s';
      requestAnimationFrame(() => {
        success.style.opacity = '1';
        success.style.transform = 'scale(1)';
      });
    }, 400);
  }
  
  // =============================================
  // KENTE ENTRANCE
  // =============================================
  document.querySelectorAll('.kente-strip span').forEach((span, i) => {
    span.style.opacity = '0';
    span.style.transform = 'scaleX(0)';
    span.style.transition = `all .4s ${i * .06}s ease`;
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        span.style.opacity = '1';
        span.style.transform = 'scaleX(1)';
        obs.disconnect();
      }
    });
    obs.observe(span);
  });
  
  // =============================================
  // ACTIVE NAV HIGHLIGHT
  // =============================================
  const sections = document.querySelectorAll('section[id]');
  const navAs = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 100) current = s.id; });
    navAs.forEach(a => {
      a.style.color = '';
      if (a.getAttribute('href') === '#' + current) a.style.color = 'var(--green)';
    });
  }, { passive: true });
  
  // =============================================
  // SCROLL EFFECTS ENGINE
  // =============================================
  (function () {
    'use strict';
  
    // 1. SCROLL PROGRESS BAR
    const progressBar = document.getElementById('scroll-progress');
    function updateProgress() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      if (progressBar) progressBar.style.width = pct + '%';
    }
  
    // 2. INTERSECTION OBSERVER — multi-effect
    const ioOptions = { threshold: 0.12, rootMargin: '0px 0px -40px 0px' };
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        el.classList.add('visible');
        el.classList.add('in');
        if (el.classList.contains('stagger-children')) {
          el.classList.add('staggered');
        }
        el.querySelectorAll('.highlight-sweep').forEach(hs => {
          setTimeout(() => hs.classList.add('swept'), 300);
        });
        revealObserver.unobserve(el);
      });
    }, ioOptions);
  
    document.querySelectorAll(
      '.reveal, .slide-left, .slide-right, .scale-up, .rotate-in, .stagger-children, .highlight-sweep'
    ).forEach(el => revealObserver.observe(el));
  
    // 3. SECTION WATERMARKS
    const allSections = document.querySelectorAll('section[id]');
    const sectionNums = ['01', '02', '03', '04', '05', '06', '07', '08', '09'];
    allSections.forEach((sec, i) => {
      const wm = document.createElement('div');
      wm.className = 'sec-watermark';
      wm.textContent = sectionNums[i] || '';
      wm.setAttribute('aria-hidden', 'true');
      sec.style.position = sec.style.position || 'relative';
      sec.appendChild(wm);
    });
  
    // 4. SECTION ENTER ANIMATION
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('sec-enter');
          setTimeout(() => entry.target.classList.remove('sec-enter'), 700);
        }
      });
    }, { threshold: 0.18 });
    allSections.forEach(s => sectionObserver.observe(s));
  
    // 5. PARALLAX ON SCROLL
    const heroPattern = document.querySelector('.hero-pattern');
    const heroBg = document.querySelector('.hero-bg');
    const floatCards = document.querySelectorAll('.float-card');
  
    function applyParallax() {
      const sy = window.scrollY;
      if (heroPattern) heroPattern.style.transform = `translateY(${sy * 0.18}px)`;
      if (heroBg) heroBg.style.transform = `translateY(${sy * 0.08}px)`;
      floatCards.forEach((fc, i) => {
        const dir = i % 2 === 0 ? -1 : 1;
        fc.style.transform = `translateY(${dir * sy * 0.06 - (i % 2 === 0 ? 0 : 9)}px)`;
      });
      const kente = document.querySelector('.kente-strip');
      if (kente) kente.style.transform = `translateX(${sy * 0.04}px)`;
    }
  
    // 6. PARTICLE CANVAS
    const canvas = document.getElementById('particleCanvas');
    let ctx, particles = [];
  
    function initCanvas() {
      if (!canvas) return;
      ctx = canvas.getContext('2d');
      resize();
      spawnParticles();
      animateParticles();
    }
  
    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  
    function spawnParticles() {
      const count = Math.min(18, Math.floor(window.innerWidth / 80));
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push(newParticle(true));
      }
    }
  
    function newParticle(randomY) {
      const size = 2 + Math.random() * 4;
      return {
        x: Math.random() * window.innerWidth,
        y: randomY ? Math.random() * window.innerHeight : window.innerHeight + 10,
        size,
        speed: 0.3 + Math.random() * 0.7,
        opacity: 0.1 + Math.random() * 0.35,
        color: Math.random() > 0.5 ? '#1a4a2e' : '#c8960a',
        drift: (Math.random() - 0.5) * 0.4,
        life: 0,
        maxLife: 200 + Math.random() * 300
      };
    }
  
    function animateParticles() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.y -= p.speed;
        p.x += p.drift;
        p.life++;
        const lifeRatio = p.life / p.maxLife;
        const alpha = p.opacity * Math.sin(lifeRatio * Math.PI);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, alpha);
        ctx.fill();
        ctx.globalAlpha = 1;
        if (p.life >= p.maxLife || p.y < -20) {
          particles[i] = newParticle(false);
        }
      });
      requestAnimationFrame(animateParticles);
    }
  
    // 7. MAGNETIC HOVER
    function initMagnetic() {
      document.querySelectorAll('.btn-primary, .btn-green, .nav-cta, .wa-float').forEach(btn => {
        btn.classList.add('magnetic');
        btn.addEventListener('mousemove', (e) => {
          const rect = btn.getBoundingClientRect();
          const cx = rect.left + rect.width / 2;
          const cy = rect.top + rect.height / 2;
          const dx = (e.clientX - cx) * 0.22;
          const dy = (e.clientY - cy) * 0.22;
          btn.style.transform = `translate(${dx}px, ${dy}px)`;
        });
        btn.addEventListener('mouseleave', () => {
          btn.style.transform = '';
        });
      });
    }
  
    // 8. TILT EFFECT ON CARDS
    function initTilt() {
      if (window.matchMedia('(pointer:coarse)').matches) return;
      document.querySelectorAll('.service-card, .testi-card, .news-card, .hero-card-main').forEach(card => {
        card.classList.add('tilt-card');
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          card.style.transform = `perspective(800px) rotateX(${y * -8}deg) rotateY(${x * 8}deg) scale3d(1.02,1.02,1.02)`;
        });
        card.addEventListener('mouseleave', () => {
          card.style.transform = '';
          card.style.transition = 'transform .4s ease';
          setTimeout(() => card.style.transition = '', 400);
        });
      });
    }
  
    // 9. RIPPLE ON CLICK
    function initRipple() {
      document.querySelectorAll('.btn-primary, .btn-outline, .nav-cta').forEach(btn => {
        btn.style.position = 'relative';
        btn.style.overflow = 'hidden';
        btn.addEventListener('click', (e) => {
          const rect = btn.getBoundingClientRect();
          const size = Math.max(rect.width, rect.height) * 2;
          const x = e.clientX - rect.left - size / 2;
          const y = e.clientY - rect.top - size / 2;
          const ripple = document.createElement('span');
          ripple.className = 'ripple-effect';
          ripple.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px;`;
          btn.appendChild(ripple);
          setTimeout(() => ripple.remove(), 700);
        });
      });
    }
  
    // 10. SMOOTH COUNTER ANIMATION
    function animateCount(el, target, duration, suffix) {
      let start = 0;
      const step = target / (duration / 16);
      const timer = setInterval(() => {
        start += step;
        if (start >= target) { start = target; clearInterval(timer); }
        el.textContent = Math.floor(start) + suffix;
      }, 16);
    }
  
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll('.stat-number').forEach(el => {
          const raw = el.textContent;
          const num = parseInt(raw.replace(/\D/g, ''));
          const suffix = raw.includes('K') ? 'K+' : raw.includes('+') ? '+' : '';
          if (!isNaN(num)) {
            const sup = el.querySelector('sup');
            const supText = sup ? sup.textContent : '';
            el.innerHTML = '0' + (supText ? `<sup>${supText}</sup>` : '');
            const span = document.createElement('span');
            span.className = 'count-up';
            el.prepend(span);
            setTimeout(() => animateCount(span, num, 1400, suffix), 200);
          }
        });
        counterObserver.unobserve(entry.target);
      });
    }, { threshold: 0.5 });
  
    const heroSec = document.getElementById('hero');
    if (heroSec) counterObserver.observe(heroSec);
  
    // 11. TYPING EFFECT on hero title
    function initTyping() {
      const goldWord = document.querySelector('.hero-title .gold-word');
      if (!goldWord) return;
      const original = goldWord.textContent.trim();
      const typeCursor = document.createElement('span');
      typeCursor.className = 'type-cursor';
      typeCursor.textContent = '|';
      goldWord.textContent = '';
      goldWord.appendChild(typeCursor);
      let i = 0;
      function type() {
        if (i <= original.length) {
          goldWord.textContent = original.slice(0, i);
          goldWord.appendChild(typeCursor);
          i++;
          setTimeout(type, 80 + Math.random() * 40);
        } else {
          setTimeout(() => typeCursor.remove(), 1200);
        }
      }
      setTimeout(type, 900);
    }
  
    // 12. HIGHLIGHT SWEEP on section headings
    function initHighlights() {
      document.querySelectorAll('.sec-title em, .hero-title em').forEach(em => {
        em.classList.add('highlight-sweep');
      });
    }
  
    // 13. NAV ACTIVE INDICATOR
    function updateActiveNav() {
      const sy = window.scrollY + 90;
      let current = '';
      allSections.forEach(sec => { if (sy >= sec.offsetTop) current = sec.id; });
      document.querySelectorAll('.nav-links a').forEach(a => {
        const isActive = a.getAttribute('href') === '#' + current;
        a.style.color = isActive ? 'var(--green)' : '';
        a.style.fontWeight = isActive ? '600' : '';
      });
    }
  
    // 14. SMOOTH ANCHOR SCROLL
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        const target = document.querySelector(a.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 68;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    });
  
    // 15. NAV BACKGROUND INTENSITY
    function updateNavStyle() {
      const navEl = document.getElementById('navbar');
      if (!navEl) return;
      const progress = Math.min(window.scrollY / 200, 1);
      const alpha = 0.92 + progress * 0.06;
      navEl.style.background = `rgba(250,248,243,${alpha})`;
    }
  
    // 16. LANG CARDS — stagger hover glow
    function initLangCardGlow() {
      document.querySelectorAll('.lang-card').forEach((card, i) => {
        card.addEventListener('mouseenter', () => {
          document.querySelectorAll('.lang-card').forEach((c, j) => {
            if (c !== card) {
              const dist = Math.abs(i - j);
              c.style.opacity = Math.max(0.55, 1 - dist * 0.12).toString();
              c.style.transform = `scale(${Math.max(0.97, 1 - dist * 0.008)})`;
            }
          });
        });
        card.addEventListener('mouseleave', () => {
          document.querySelectorAll('.lang-card').forEach(c => {
            c.style.opacity = '';
            c.style.transform = '';
          });
        });
      });
    }
  
    // 17. MASTER SCROLL HANDLER
    let ticking = false;
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateProgress();
          applyParallax();
          updateActiveNav();
          updateNavStyle();
          ticking = false;
        });
        ticking = true;
      }
    }
  
    // 18. INIT
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', () => { resize(); spawnParticles(); });
  
    // On touch / mobile: remove animation delays so hero content is always visible
    if (window.matchMedia('(pointer: coarse)').matches) {
      document.querySelectorAll('.hero-badge, .hero-title, .hero-sub, .hero-actions, .hero-stats').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
        el.style.animation = 'none';
      });
    }
  
    setTimeout(() => {
      initCanvas();
      initMagnetic();
      initTilt();
      initRipple();
      initTyping();
      initHighlights();
      initLangCardGlow();
      updateProgress();
      updateNavStyle();
    }, 100);
  
  })();
  
  // =============================================
  // INIT — apply French on load (default)
  // =============================================
  applyLang('fr');