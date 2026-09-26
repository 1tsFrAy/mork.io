document.addEventListener('DOMContentLoaded', () => {

  // --- 1. СЛОВАРЬ ПЕРЕВОДОВ (5 ЯЗЫКОВ) ---
  const translations = {
    ru: {
      navAbout: "О себе",
      navServices: "Услуги",
      navPortfolio: "Портфолио ✦",
      navBook: "Записаться",
      heroSubtitle: "Tattoo Artist & Visual Creator",
      heroTitle: "Индивидуальные татуировки с характером",
      heroDesc: "Создаю эскизы под вашу анатомию. Качественные материалы, полная стерильность и внимание к деталям.",
      btnWorks: "Смотреть работы",
      btnBook: "Записаться на сеанс",
      aboutTitle: "О мастере",
      aboutText: "Привет! Я Dorxwea. Для меня татуировка — это не просто рисунок на коже, а форма самовыражения и отражение вашей внутренней эстетики. Работаю как по уникальным авторским эскизам, так и воплощаю идеи клиентов.",
      servicesTitle: "Услуги и Категории",
      card1Title: "Custom Tattoo",
      card1Desc: "Разработка уникального эскиза по вашему ТЗ или референсам с учетом формы тела.",
      card2Title: "Модельные проекты",
      card2Desc: "Специальные условия и скидки на реализацию моих личных масштабных задумок.",
      card3Title: "Flash & Эскизы",
      card3Desc: "Готовые авторские эскизы, которые можно нанести на сеансе без долгих ожиданий.",
      bookingTitle: "Запись на сеанс",
      bookingDesc: "Заполните форму, и я свяжусь с вами в Telegram для обсуждения идеи и выбора даты.",
      namePlaceholder: "Ваше имя",
      contactPlaceholder: "Telegram / Телефон / Instagram",
      servicePlaceholder: "Выберите вариант",
      commentPlaceholder: "Опишите идею, примерный размер и место нанесения...",
      submitBtn: "Отправить заявку",
      rodoNotice: "Я соглашаюсь на обработку персональных данных для записи на сеанс (RODO / GDPR).",
      privacyLink: "Политика конфиденциальности (RODO)",
      privacyTitle: "Политика конфиденциальности",
      privacyText: "Администратором ваших персональных данных является Dorxwea Tattoo. Данные, указанные в форме (имя, контакт, описание), используются исключительно для связи с вами по поводу записи на сеанс и обсуждения эскиза. Данные не передаются третьим лицам и не используются для рекламы. Вы имеете право запросить удаление своих данных в любой момент, написав мне напрямую.",
      portfolioTitle: "Работы мастера",
      portfolioDesc: "Здесь представлена подборка готовых татуировок, модельных проектов и свободных эскизов.",
      tabAll: "Все работы",
      tabCustom: "🎨 Custom",
      tabModel: "📸 Для моделей",
      tabFlash: "⚡️ Flash",
      emptyState: "В этой категории пока нет загруженных работ.",
      noDesc: "Описание отсутствует.",
      sending: "Отправка...",
      successMsg: "✅ Заявка успешно отправлена! Скоро свяжусь с вами.",
      errorMsg: "❌ Не удалось отправить заявку. Напишите напрямую."
    },
    en: {
      navAbout: "About",
      navServices: "Services",
      navPortfolio: "Portfolio ✦",
      navBook: "Book Now",
      heroSubtitle: "Tattoo Artist & Visual Creator",
      heroTitle: "Custom Tattoos with Unique Identity",
      heroDesc: "Anatomically fitted designs, premium equipment, 100% sterility, and deep attention to detail.",
      btnWorks: "View Works",
      btnBook: "Book a Session",
      aboutTitle: "About the Artist",
      aboutText: "Hi! I'm Dorxwea. To me, a tattoo is more than skin art — it's a statement of self-expression and aesthetics. I create unique custom designs as well as bring your personal ideas to life.",
      servicesTitle: "Services & Categories",
      card1Title: "Custom Tattoo",
      card1Desc: "Bespoke design creation tailored to your idea and anatomical features.",
      card2Title: "Model Projects",
      card2Desc: "Special rates for clients ready to participate in my large-scale personal concepts.",
      card3Title: "Flash Designs",
      card3Desc: "Ready-to-ink original flash art available without long waiting times.",
      bookingTitle: "Book a Session",
      bookingDesc: "Fill out the form below and I'll get back to you via Telegram to discuss details.",
      namePlaceholder: "Your name",
      contactPlaceholder: "Telegram / Phone / Instagram",
      servicePlaceholder: "Select service",
      commentPlaceholder: "Describe your idea, placement, and preferred size...",
      submitBtn: "Submit Application",
      rodoNotice: "I agree to the processing of my personal data for session booking (GDPR / RODO).",
      privacyLink: "Privacy Policy (GDPR)",
      privacyTitle: "Privacy Policy",
      privacyText: "The administrator of your personal data is Dorxwea Tattoo. Information provided in the booking form (name, contact, project details) is used solely to contact you regarding your appointment. Your data will never be shared with third parties or used for marketing. You have the right to request deletion of your data at any time.",
      portfolioTitle: "Portfolio",
      portfolioDesc: "A collection of finished tattoos, model concepts, and available flash designs.",
      tabAll: "All Works",
      tabCustom: "🎨 Custom",
      tabModel: "📸 For Models",
      tabFlash: "⚡️ Flash",
      emptyState: "No works uploaded in this category yet.",
      noDesc: "No description provided.",
      sending: "Sending...",
      successMsg: "✅ Application sent successfully! I will contact you soon.",
      errorMsg: "❌ Failed to send application. Please write directly."
    },
    pl: {
      navAbout: "O mnie",
      navServices: "Usługi",
      navPortfolio: "Portfolio ✦",
      navBook: "Zapisz się",
      heroSubtitle: "Tattoo Artist & Visual Creator",
      heroTitle: "Indywidualne tatuaże z charakterem",
      heroDesc: "Tworzę projekty dopasowane do Twojej anatomii. Wysoka jakość, pełna sterylność i dbałość o detale.",
      btnWorks: "Zobacz prace",
      btnBook: "Zarezerwuj sesję",
      aboutTitle: "O artyście",
      aboutText: "Cześć! Jestem Dorxwea. Tatuaż to dla mnie coś więcej niż rysunek na skórze — to forma wyrażenia siebie i Twojej estetyki. Tworzę autorskie projekty oraz realizuję pomysły klientów.",
      servicesTitle: "Usługi i Kategorie",
      card1Title: "Custom Tattoo",
      card1Desc: "Projekt indywidualny stworzony na podstawie Twojego pomysłu i budowy ciała.",
      card2Title: "Projekty dla modeli",
      card2Desc: "Specjalne warunki i zniżki na realizację moich autorskich, dużych pomysłów.",
      card3Title: "Flash & Projekty",
      card3Desc: "Gotowe autorskie wzory dostępne do wykonania od ręki.",
      bookingTitle: "Zapisy na sesję",
      bookingDesc: "Wypełnij formularz, a skontaktuję się z Tobą na Telegramie, aby omówić szczegóły.",
      namePlaceholder: "Twoje imię",
      contactPlaceholder: "Telegram / Telefon / Instagram",
      servicePlaceholder: "Wybierz opcję",
      commentPlaceholder: "Opisz pomysł, orientacyjny rozmiar i miejsce...",
      submitBtn: "Wyślij zgłoszenie",
      rodoNotice: "Wyrażam zgodę na przetwarzanie danych osobowych w celu rezerwacji sesji (RODO).",
      privacyLink: "Polityka Prywatności (RODO)",
      privacyTitle: "Polityka Prywatności",
      privacyText: "Administratorem Twoich danych osobowych jest Dorxwea Tattoo. Dane podane w formularzu (imię, kontakt, opis) są wykorzystywane wyłącznie w celu kontaktu w sprawie rezerwacji terminu i omówienia tatuażu. Dane nie są przekazywane podmiotom trzecim ani wykorzystywane do celów marketingowych. Masz prawo do żądania usunięcia swoich danych w dowolnym momencie.",
      portfolioTitle: "Prace artysty",
      portfolioDesc: "Kolekcja gotowych tatuaży, projektów dla modeli oraz wolnych wzorów.",
      tabAll: "Wszystkie",
      tabCustom: "🎨 Custom",
      tabModel: "📸 Dla modeli",
      tabFlash: "⚡️ Flash",
      emptyState: "Brak prac w tej kategorii.",
      noDesc: "Brak opisu.",
      sending: "Wysyłanie...",
      successMsg: "✅ Zgłoszenie wysłane! Wkrótce się skontaktuję.",
      errorMsg: "❌ Błąd wysyłania. Napisz bezpośrednio."
    },
    de: {
      navAbout: "Über mich",
      navServices: "Leistungen",
      navPortfolio: "Portfolio ✦",
      navBook: "Buchen",
      heroSubtitle: "Tattoo Artist & Visual Creator",
      heroTitle: "Individuelle Tattoos mit Charakter",
      heroDesc: "Maßgeschneiderte Designs angepasst an deine Anatomie. Hohe Qualität, Sterilität und Liebe zum Detail.",
      btnWorks: "Arbeiten ansehen",
      btnBook: "Termin buchen",
      aboutTitle: "Über den Künstler",
      aboutText: "Hallo! Ich bin Dorxwea. Tattoo ist für mich mehr als nur Zeichnung auf der Haut — es ist Selbstausdruck. Ich erstelle individuelle Designs und setze deine Ideen um.",
      servicesTitle: "Leistungen & Kategorien",
      card1Title: "Custom Tattoo",
      card1Desc: "Entwicklung eines einzigartigen Designs nach deinen Wünschen.",
      card2Title: "Modell-Projekte",
      card2Desc: "Sonderkonditionen für die Umsetzung meiner eigenen großflächigen Konzepte.",
      card3Title: "Flash-Wannados",
      card3Desc: "Fertige Originalmotive, die direkt gestochen werden können.",
      bookingTitle: "Terminanfrage",
      bookingDesc: "Fülle das Formular aus, ich melde mich per Telegram bei dir.",
      namePlaceholder: "Dein Name",
      contactPlaceholder: "Telegram / Telefon / Instagram",
      servicePlaceholder: "Option auswählen",
      commentPlaceholder: "Beschreibe deine Idee, Größe und Körperstelle...",
      submitBtn: "Anfrage senden",
      rodoNotice: "Ich stimme der Verarbeitung meiner Daten zur Terminbuchung zu (DSGVO / RODO).",
      privacyLink: "Datenschutzerklärung (DSGVO)",
      privacyTitle: "Datenschutzerklärung",
      privacyText: "Verantwortlich für Ihre Daten ist Dorxwea Tattoo. Die im Formular angegebenen Daten werden ausschließlich zur Kontaktaufnahme bezüglich Ihrer Buchung verwendet. Ihre Daten werden nicht an Dritte weitergegeben. Sie haben jederzeit das Recht, die Löschung Ihrer Daten zu verlangen.",
      portfolioTitle: "Portfolio",
      portfolioDesc: "Eine Auswahl an fertigen Tattoos, Modellprojekten und verfügbaren Wannados.",
      tabAll: "Alle Arbeiten",
      tabCustom: "🎨 Custom",
      tabModel: "📸 Für Modelle",
      tabFlash: "⚡️ Flash",
      emptyState: "In dieser Kategorie gibt es noch keine Arbeiten.",
      noDesc: "Keine Beschreibung vorhanden.",
      sending: "Senden...",
      successMsg: "✅ Anfrage erfolgreich gesendet! Ich melde mich bald.",
      errorMsg: "❌ Fehler beim Senden. Bitte direkt schreiben."
    },
    ua: {
      navAbout: "Про мене",
      navServices: "Послуги",
      navPortfolio: "Портфоліо ✦",
      navBook: "Записатися",
      heroSubtitle: "Tattoo Artist & Visual Creator",
      heroTitle: "Індивідуальні татуювання з характером",
      heroDesc: "Створюю ескізи під вашу анатомію. Якісні матеріали, повна стерильність та увага до деталей.",
      btnWorks: "Дивитися роботи",
      btnBook: "Записатися на сеанс",
      aboutTitle: "Про майстра",
      aboutText: "Привіт! Я Dorxwea. Для мене татуювання — це не просто малюнок на шкірі, а форма самовираження та відображення вашої естетики. Працюю за авторськими ескізами та втілюю ідеї клієнтів.",
      servicesTitle: "Послуги та Категорії",
      card1Title: "Custom Tattoo",
      card1Desc: "Розробка унікального ескізу за вашим ТЗ з урахуванням анатомії.",
      card2Title: "Модельні проекти",
      card2Desc: "Спеціальні умови та знижки на реалізацію моїх масштабних задумів.",
      card3Title: "Flash & Ескізи",
      card3Desc: "Готові авторські ескізи, які можна нанести на сеансі без довгого очікування.",
      bookingTitle: "Запис на сеанс",
      bookingDesc: "Заповніть форму, і я зв'яжуся з вами в Telegram для обговорення ідеї.",
      namePlaceholder: "Ваше ім'я",
      contactPlaceholder: "Telegram / Телефон / Instagram",
      servicePlaceholder: "Оберіть варіант",
      commentPlaceholder: "Опишіть ідею, приблизний розмір та місце...",
      submitBtn: "Надіслати заявку",
      rodoNotice: "Я погоджуюся на обробку персональних даних для запису на сеанс (RODO / GDPR).",
      privacyLink: "Політика конфіденційності (RODO)",
      privacyTitle: "Політика конфіденційності",
      privacyText: "Адміністратором ваших персональних даних є Dorxwea Tattoo. Дані, вказані у формі (ім'я, контакт, опис), використовуються виключно для зв'язку з вами щодо запису на сеанс. Дані не передаються третім особам. Ви маєте право вимагати видалення своїх даних у будь-який момент.",
      portfolioTitle: "Роботи майстра",
      portfolioDesc: "Добірка готових татуювань, модельних проектів та вільних ескізів.",
      tabAll: "Усі роботи",
      tabCustom: "🎨 Custom",
      tabModel: "📸 Для моделей",
      tabFlash: "⚡️ Flash",
      emptyState: "У цій категорії поки немає завантажених робіт.",
      noDesc: "Опис відсутній.",
      sending: "Надсилання...",
      successMsg: "✅ Заявку успішно надіслано! Скоро зв'яжуся з вами.",
      errorMsg: "❌ Не вдалося надіслати заявку. Напишіть напряму."
    }
  };

  let currentLang = localStorage.getItem('site_lang') || 'ru';

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('site_lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (translations[lang] && translations[lang][key]) {
        el.placeholder = translations[lang][key];
      }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });

  applyLanguage(currentLang);

  // --- 2. МОБИЛЬНОЕ МЕНЮ ---
  const burgerBtn = document.getElementById('burgerBtn');
  const navLinks = document.getElementById('navLinks');
  if (burgerBtn && navLinks) {
    burgerBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
  }

  // --- 3. ФОРМА ЗАПИСИ ---
  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const statusDiv = document.getElementById('formStatus');
      const submitBtn = document.getElementById('submitBtn');

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerText = translations[currentLang] ? translations[currentLang].sending : "Отправка...";
      }
      if (statusDiv) statusDiv.innerText = '';

      const formData = {
        name: document.getElementById('name')?.value || '',
        contact: document.getElementById('contact')?.value || '',
        service: document.getElementById('service')?.value || '',
        comment: document.getElementById('comment')?.value || '',
        lang: currentLang.toUpperCase()
      };

      try {
        const res = await fetch('https://mork-bot-worker.1tsfray.workers.dev', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });

        if (res.ok) {
          if (statusDiv) {
            statusDiv.style.color = '#4caf50';
            statusDiv.innerText = translations[currentLang] ? translations[currentLang].successMsg : "✅ Заявка отправлена!";
          }
          bookingForm.reset();
        } else {
          throw new Error('Server error');
        }
      } catch (err) {
        if (statusDiv) {
          statusDiv.style.color = '#f44336';
          statusDiv.innerText = translations[currentLang] ? translations[currentLang].errorMsg : "❌ Ошибка отправки.";
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerText = translations[currentLang] ? translations[currentLang].submitBtn : "Отправить заявку";
        }
      }
    });
  }

  // --- 4. ПОРТФОЛИО (works.html) ---
  const gallery = document.getElementById('gallery');
  if (gallery) {
    let worksData = [];

    fetch(`works.json?_=${Date.now()}`)
      .then(res => res.json())
      .then(data => {
        worksData = Array.isArray(data) ? data : [];
        renderGallery(worksData, 'all');
      })
      .catch(err => {
        console.error('Error works.json:', err);
        renderGallery([], 'all');
      });

    const filterBtns = document.querySelectorAll('.tab-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.category || 'all';
        renderGallery(worksData, cat);
      });
    });
  }

  function renderGallery(items, selectedCategory) {
    const galleryEl = document.getElementById('gallery');
    const emptyState = document.getElementById('galleryEmpty');
    if (!galleryEl) return;

    galleryEl.innerHTML = '';

    const selCatLower = (selectedCategory || 'all').toLowerCase();

    const filtered = items.filter(item => {
      if (!item) return false;
      const itemCat = (item.category || '').toLowerCase();
      if (itemCat === 'pending') return false;
      if (selCatLower === 'all') return true;
      return itemCat === selCatLower;
    });

    if (filtered.length === 0) {
      if (emptyState) emptyState.style.display = 'block';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';

    filtered.forEach(item => {
      const card = document.createElement('div');
      card.className = 'gallery-card';
      card.innerHTML = `
        <img src="${item.src}" alt="Work" loading="lazy">
        <div class="card-overlay">
          <span class="badge">${item.category || 'WORK'}</span>
          ${item.description ? `<p style="font-size: 12px; color: #ccc;">${item.description}</p>` : ''}
        </div>
      `;

      card.addEventListener('click', () => openModal(item));
      galleryEl.appendChild(card);
    });
  }

  // --- 5. МОДАЛЬНОЕ ОКНО ДЛЯ КАРТИНОК ---
  const modal = document.getElementById('imageModal');
  const modalClose = document.getElementById('modalClose');

  if (modalClose) {
    modalClose.addEventListener('click', () => {
      if (modal) modal.style.display = 'none';
    });
  }
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.style.display = 'none';
    });
  }

  function openModal(item) {
    const modalImg = document.getElementById('modalImg');
    const modalCategory = document.getElementById('modalCategory');
    const modalDesc = document.getElementById('modalDesc');

    if (modalImg) modalImg.src = item.src;
    if (modalCategory) modalCategory.innerText = (item.category || 'WORK').toUpperCase();
    if (modalDesc) modalDesc.innerText = item.description || (translations[currentLang] ? translations[currentLang].noDesc : 'Описание отсутствует');
    
    if (modal) modal.style.display = 'flex';
  }

  // --- 6. МОДАЛКА ПОЛИТИКИ КОНФИДЕНЦИАЛЬНОСТИ (RODO) ---
  const privacyBtn = document.getElementById('privacyBtn');
  const privacyModal = document.getElementById('privacyModal');
  const privacyClose = document.getElementById('privacyClose');

  if (privacyBtn && privacyModal) {
    privacyBtn.addEventListener('click', (e) => {
      e.preventDefault();
      privacyModal.style.display = 'flex';
    });
  }

  if (privacyClose && privacyModal) {
    privacyClose.addEventListener('click', () => {
      privacyModal.style.display = 'none';
    });
  }

  if (privacyModal) {
    privacyModal.addEventListener('click', (e) => {
      if (e.target === privacyModal) privacyModal.style.display = 'none';
    });
  }

});
