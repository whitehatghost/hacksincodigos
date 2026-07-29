  // ── MOTOR DE INTERNACIONALIZACIÓN ──
  //
  // El español de Costa Rica es el idioma en que se sirve el HTML, así que ese
  // contenido NO se toma de la tabla i18n: se toma del propio documento. Antes la
  // tabla tenía versiones abreviadas de los mismos textos y los reemplazaba al
  // cargar, de modo que Google indexaba un texto y el visitante veía otro más corto.
  // Ahora el HTML es la única fuente de verdad del español y la tabla i18n solo
  // aporta las traducciones.
  //
  // Consecuencia útil: la tabla de traducciones (~64 kB para 8 idiomas) no hace
  // falta para servir español, así que vive en su propio módulo y se descarga solo
  // cuando alguien elige otro idioma en el selector.

  var i18nModule = null;
  /** Traducciones ya resueltas, para los usos que necesitan ser síncronos (el formulario). */
  var loadedI18n = null;
  function loadTranslations() {
    if (!i18nModule) {
      i18nModule = import('./i18n-data.js').then(function(m) { loadedI18n = m.i18nData; return m; });
    }
    return i18nModule;
  }

  /** Textos del formulario en español. Son el valor por defecto y el respaldo. */
  var FORM_ES = {
    form_err_name: 'Por favor ingresá tu nombre.',
    form_err_email: 'El correo no es válido.',
    form_err_tel: 'Ingresá tu teléfono.',
    form_err_serv: 'Seleccioná un servicio.',
    form_err_msg: 'Escribí tu mensaje.',
    wa_intro: 'Hola HacksinCodigos, vengo desde su página web.',
    form_name_label_raw: 'Nombre',
    form_empresa_label_raw: 'Empresa',
    form_email_label_raw: 'Correo',
    form_tel_label_raw: 'Teléfono',
    form_servicio_label_raw: 'Servicio',
    form_msg_label_raw: 'Mensaje',
  };

  var esBaseline = null;
  function captureSpanishBaseline() {
    if (esBaseline) return esBaseline;
    esBaseline = new Map();
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      esBaseline.set(el, el.tagName === 'INPUT' || el.tagName === 'TEXTAREA'
        ? (el.placeholder || '')
        : el.innerHTML);
    });
    return esBaseline;
  }

  /** Marca visual del idioma en el selector. Se aplica de inmediato, sin esperar nada. */
  function setLangIndicator(lang) {
    var langMap = {'es-CR':['🇨🇷','ES'],'en':['🇺🇸','EN'],'fr':['🇫🇷','FR'],'pt':['🇧🇷','PT'],'de':['🇩🇪','DE'],'ja':['🇯🇵','JA'],'zh':['🇨🇳','ZH'],'ru':['🇷🇺','RU'],'zh-TW':['🇹🇼','TW']};
    var info = langMap[lang] || langMap['es-CR'];
    var flagEl = document.getElementById('langFlag');
    var codeEl = document.getElementById('langCode');
    if (flagEl) flagEl.textContent = info[0];
    if (codeEl) codeEl.textContent = info[1];
    document.querySelectorAll('.lang-option').forEach(function(o) {
      o.classList.toggle('active', o.getAttribute('data-lang') === lang);
    });
    try { localStorage.setItem('hacksinCodigosLang', lang); } catch (e) {}
  }

  /**
   * Aplica un idioma. El español se resuelve de forma síncrona desde el HTML;
   * el resto espera a que llegue el módulo de traducciones.
   */
  function applyLanguage(lang) {
    var baseline = captureSpanishBaseline();
    document.documentElement.lang = lang === 'es-CR' ? 'es-CR' : lang;
    setLangIndicator(lang);

    if (lang === 'es-CR') {
      baseline.forEach(function(html, el) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = html;
        else el.innerHTML = html;
        if (el.classList.contains('glitch') || el.hasAttribute('data-text')) {
          el.setAttribute('data-text', el.textContent || '');
        }
      });
      // Las frases de la máquina de escribir en español están en el propio módulo
      // de traducciones; se piden solo si ya se descargó por otro motivo.
      if (i18nModule) {
        i18nModule.then(function(m) { applyPhrases(m.langPhrases, 'es-CR'); });
      }
      return;
    }

    loadTranslations().then(function(m) {
      translate(lang, m.i18nData, m.langPhrases);
    }).catch(function() {
      // Si el módulo no carga, el sitio se queda en español: sigue siendo usable.
      document.documentElement.lang = 'es-CR';
    });
  }

  function applyPhrases(langPhrases, lang) {
    if (!langPhrases[lang]) return;
    window.typewriterPhrases = langPhrases[lang];
    var twEl = document.getElementById('typewriter-text');
    if (twEl && window.resetTypewriter) window.resetTypewriter();
  }

  function translate(lang, i18nData, langPhrases) {
    var t = i18nData[lang] || i18nData['es-CR'];
    // Update data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        var tag = el.tagName;
        if (tag === 'META') { el.content = t[key]; }
        else if (tag === 'TITLE') { document.title = t[key]; }
        else if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'LABEL' || tag === 'SELECT') {
          if (el.placeholder !== undefined) el.placeholder = t[key];
          else if (el.value !== undefined && !el.value) el.value = t[key];
          else el.innerHTML = t[key];
        }
        else { el.innerHTML = t[key]; }
        if (el.classList.contains('glitch') || el.hasAttribute('data-text')) {
          el.setAttribute('data-text', t[key] || el.textContent);
        }
      }
    });
    applyPhrases(langPhrases, lang);

    // Update hero card h2 innerHTML (may contain <br>)
    var cardTitleEl = document.querySelector('[data-i18n="card_title"]');
    if (cardTitleEl && t.card_title) cardTitleEl.innerHTML = t.card_title;
    // Update select options
    document.querySelectorAll('option[data-i18n]').forEach(function(opt) {
      var key = opt.getAttribute('data-i18n');
      if (t[key] !== undefined) opt.innerHTML = t[key];
    });

    // Update WhatsApp links with language-specific messages
    var waMsg = t.wa_intro || 'Hola HacksinCodigos, vengo desde su página web.';
    var waEncoded = encodeURIComponent(waMsg);
    document.querySelectorAll('.wa-btn').forEach(function(a) {
      a.href = 'https://wa.me/50689840662?text=' + waEncoded;
    });
    document.querySelectorAll('#wa-float').forEach(function(a) {
      a.href = 'https://wa.me/50689840662?text=' + waEncoded;
    });
  }

  (function() {

    // ── NAVBAR SCROLL ──
    var nav = document.getElementById('navbar');
    if (nav) {
      window.addEventListener('scroll', function() {
        nav.classList.toggle('scrolled', window.scrollY > 80);
      }, { passive: true });
    }

    // ── HAMBURGER ──
    var hamburger = document.getElementById('hamburger');
    var mobileMenu = document.getElementById('mobile-menu');
    function closeMobileMenu() {
      if (!hamburger || !mobileMenu) return;
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', function() {
        var isOpen = mobileMenu.classList.toggle('open');
        hamburger.classList.toggle('open', isOpen);
        hamburger.setAttribute('aria-expanded', String(isOpen));
        document.body.style.overflow = isOpen ? 'hidden' : '';
      });
      // Cerrar con Escape (mejora de accesibilidad de teclado).
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
          closeMobileMenu();
          hamburger.focus();
        }
      });
    }
    // Los enlaces del menú móvil usan la clase .menu-item (antes se escuchaba
    // .menu-link, que no existe en el marcado, así que el menú no se cerraba al tocar).
    document.querySelectorAll('#mobile-menu .menu-item').forEach(function(l) { l.addEventListener('click', closeMobileMenu); });
    window.addEventListener('scroll', function() { if (mobileMenu.classList.contains('open')) closeMobileMenu(); }, { passive: true });

    // ── DETECCIÓN DE IDIOMA ──
    // El sitio es de una empresa costarricense: el idioma por defecto es español de
    // Costa Rica y coincide con el HTML servido, así que no hay parpadeo de texto.
    // La detección usa el idioma del navegador; ya no se llama a una API de geo-IP
    // externa (era una petición a un tercero en cada primera visita, lenta y con
    // implicaciones de privacidad, y dejaba el sitio en inglés si fallaba).
    var supported = ['es-CR', 'en', 'fr', 'pt', 'de', 'ja', 'zh', 'ru', 'zh-TW'];
    function detectFromBrowser() {
      var navLangs = (navigator.languages && navigator.languages.length)
        ? navigator.languages
        : [navigator.language || 'es-CR'];
      for (var i = 0; i < navLangs.length; i++) {
        var raw = String(navLangs[i]);
        if (/^es/i.test(raw)) return 'es-CR';
        if (/^zh-(TW|HK|MO)/i.test(raw)) return 'zh-TW';
        var base = raw.split('-')[0].toLowerCase();
        if (supported.indexOf(base) !== -1) return base;
      }
      return 'es-CR';
    }
    var savedLang = 'es-CR';
    try {
      var stored = localStorage.getItem('hacksinCodigosLang');
      savedLang = stored && supported.indexOf(stored) !== -1 ? stored : detectFromBrowser();
    } catch (e) { savedLang = detectFromBrowser(); }
    applyLanguage(savedLang);
    // ── LANGUAGE SWITCHER ──
    var langBtn = document.getElementById('langBtn');
    var langDropdown = document.getElementById('langDropdown');
    var langOptions = document.querySelectorAll('.lang-option');
    if (langBtn && langDropdown) {
      // Toggle dropdown
      langBtn.addEventListener('click', function(e) { e.stopPropagation(); langBtn.parentElement.classList.toggle('open'); });
      // Select language
      langOptions.forEach(function(opt) {
        opt.addEventListener('click', function() {
          var lang = opt.getAttribute('data-lang');
          applyLanguage(lang);
          langBtn.parentElement.classList.remove('open');
        });
      });
      // Close on outside click
      document.addEventListener('click', function() { langBtn.parentElement.classList.remove('open'); });
    }

    // ── TYPEWRITER ──
    window.typewriterPhrases = ['Páginas web en Costa Rica que aparecen en Google.','Agentes IA para WhatsApp con panel de ventas.','Soporte IT remoto 24/7 en todo el país.','Publicidad digital que convierte en ventas.'];
    var twEl = document.getElementById('typewriter-text');
    var twTid, phIdx = 0, charIdx = 0, deleting = false;
    window.resetTypewriter = function() {
      clearTimeout(twTid); phIdx = 0; charIdx = 0; deleting = false;
      if (twEl) twEl.textContent = '';
      twTid = setTimeout(typeWriter, 300);
    };
    function typeWriter() {
      if (!twEl) return;
      var cur = window.typewriterPhrases[phIdx] || '';
      twEl.textContent = deleting ? cur.slice(0,--charIdx) : cur.slice(0,++charIdx);
      if (!deleting && charIdx === cur.length) { deleting = true; twTid = setTimeout(typeWriter, 1800); return; }
      if (deleting && charIdx === 0) { deleting = false; phIdx = (phIdx+1) % window.typewriterPhrases.length; }
      twTid = setTimeout(typeWriter, deleting ? 45 : 80);
    }
    if (twEl) typeWriter();

    // ── HERO SPOTLIGHT (mouse follow) ──
    var spotlight = document.getElementById('hero-spotlight');
    var heroEl = document.getElementById('hero');
    if (heroEl && spotlight) {
      heroEl.addEventListener('mousemove', function(e) {
        var r = heroEl.getBoundingClientRect();
        var x = ((e.clientX - r.left) / r.width * 100).toFixed(1) + '%';
        var y = ((e.clientY - r.top)  / r.height * 100).toFixed(1) + '%';
        spotlight.style.setProperty('--mx', x);
        spotlight.style.setProperty('--my', y);
      }, { passive: true });
    }

    // ── tsParticles ──
    window.addEventListener('load', function() {
      if (typeof tsParticles === 'undefined') return;
      var count = window.innerWidth < 768 ? 30 : 80;
      tsParticles.load('tsparticles', {
        background: { color: { value: 'transparent' } },
        fpsLimit: 60,
        interactivity: { events: { onHover: { enable: window.innerWidth >= 1024, mode: 'grab' }, resize: true }, modes: { grab: { distance: 140, links: { opacity: .5 } } } },
        particles: {
          color: { value: '#00ff88' }, links: { color: '#00ff88', distance: 140, enable: true, opacity: .18, width: 1 },
          move: { enable: true, speed: .8, outModes: { default: 'bounce' } },
          number: { density: { enable: true, area: 800 }, value: count },
          opacity: { value: .3 }, shape: { type: 'circle' }, size: { value: { min: 1, max: 2 } }
        },
        detectRetina: true
      });
    });

    // ── SPLINE viewer ──
    var splineEl = document.getElementById('spline-scene');
    var splineLoader = document.getElementById('spline-loader');
    function hideSplineLogo() {
      var logo = splineEl && splineEl.shadowRoot && splineEl.shadowRoot.getElementById('logo');
      if (logo) logo.style.display = 'none';
    }
    if (splineEl && splineLoader) {
      splineEl.addEventListener('load-complete', function() {
        splineLoader.classList.add('hidden');
        hideSplineLogo();
      });
      setTimeout(function() {
        splineLoader.classList.add('hidden');
        hideSplineLogo();
      }, 8000);
    }

    // Cycling cyber status label
    var statuses = ['● SISTEMA ACTIVO · hacksincodigos.com','● ESCANEANDO RED...','● FIREWALL ACTIVO · Costa Rica','● THREAT LEVEL: BAJO','● CIFRADO TLS 1.3 ACTIVO'];
    var si = 0;
    var statusEl = document.getElementById('cyber-status');
    if (statusEl) {
      setInterval(function() {
        si = (si+1)%statuses.length;
        statusEl.textContent = statuses[si];
      }, 2500);
    }

    // ── GLITCH ──
    var glitchEl = document.querySelector('.glitch');
    if (glitchEl) {
      function triggerGlitch() {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        glitchEl.classList.add('playing');
        setTimeout(function() { glitchEl.classList.remove('playing'); }, 400);
      }
      triggerGlitch();
      setInterval(triggerGlitch, 4000);
    }

    // ── FADE-UP IntersectionObserver ──
    var fadeEls = document.querySelectorAll('.fade-up');
    if ('IntersectionObserver' in window) {
      var obs = new IntersectionObserver(function(entries) {
        entries.forEach(function(e) { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
      }, { threshold: .1 });
      fadeEls.forEach(function(el) { obs.observe(el); });
    } else { fadeEls.forEach(function(el) { el.classList.add('visible'); }); }

    // ── COUNTERS ──
    var counters = document.querySelectorAll('.stat-number[data-target]');
    var counted = false;
    function animateCounters() {
      if (counted) return; counted = true;
      counters.forEach(function(el) {
        var target = +el.getAttribute('data-target');
        var prefix = el.getAttribute('data-prefix')||'';
        var suffix = el.getAttribute('data-suffix')||'';
        var start = null;
        function step(ts) {
          if (!start) start = ts;
          var p = Math.min((ts-start)/1600,1);
          var ease = 1-Math.pow(1-p,3);
          el.textContent = prefix+Math.floor(ease*target)+suffix;
          if (p<1) requestAnimationFrame(step); else el.textContent = prefix+target+suffix;
        }
        requestAnimationFrame(step);
      });
    }
    var statsEl = document.getElementById('stats');
    if ('IntersectionObserver' in window && statsEl) {
      new IntersectionObserver(function(e) { if (e[0].isIntersecting) animateCounters(); }, { threshold: .3 }).observe(statsEl);
    }

    // ── CAROUSEL ──
    var track = document.getElementById('carousel-track');
    var dots  = document.querySelectorAll('.dot');
    var slides = track ? track.querySelectorAll('.testimonial-slide') : [];
    var cur = 0, autoT;
    function goTo(idx) {
      if (!track || !slides.length) return;
      cur = (idx+slides.length)%slides.length;
      track.style.transform = 'translateX(-'+(cur*100)+'%)';
      dots.forEach(function(d,i){ d.classList.toggle('active',i===cur); d.setAttribute('aria-selected',i===cur?'true':'false'); });
    }
    function startAuto(){ if (!track || slides.length < 2) return; autoT=setInterval(function(){ goTo(cur+1); },5000); }
    dots.forEach(function(d){ d.addEventListener('click',function(){ goTo(+d.getAttribute('data-index')); clearInterval(autoT); startAuto(); }); });
    if (track) {
      var tx=0;
      track.addEventListener('touchstart',function(e){tx=e.touches[0].clientX;},{passive:true});
      track.addEventListener('touchend',function(e){ var d=tx-e.changedTouches[0].clientX; if(Math.abs(d)>40){goTo(d>0?cur+1:cur-1); clearInterval(autoT); startAuto();} });
    }
    startAuto();

    // ── PORTFOLIO DRAG ──
    var ps = document.getElementById('portfolio-scroll');
    if (ps) {
      var dn=false, sx, sl;
      ps.addEventListener('mousedown',function(e){dn=true;sx=e.pageX-ps.offsetLeft;sl=ps.scrollLeft;});
      ps.addEventListener('mouseleave',function(){dn=false;});
      ps.addEventListener('mouseup',function(){dn=false;});
      ps.addEventListener('mousemove',function(e){if(!dn)return;e.preventDefault();ps.scrollLeft=sl-(e.pageX-ps.offsetLeft-sx)*1.5;});
    }

    // ── FAQ accordion ──
    var faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(function(item) {
      var btn = item.querySelector('.faq-question');
      btn.addEventListener('click', function() {
        var isOpen = item.classList.contains('open');
        faqItems.forEach(function(i) { i.classList.remove('open'); i.querySelector('.faq-question').setAttribute('aria-expanded','false'); });
        if (!isOpen) { item.classList.add('open'); btn.setAttribute('aria-expanded','true'); }
      });
    });

    // ── FORM → WHATSAPP ──
    var form = document.getElementById('contact-form');
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault(); var ok=true;
        var curLang = 'es-CR'; try { curLang = localStorage.getItem('hacksinCodigosLang') || 'es-CR'; } catch(ex) {}
        // Se resuelve de forma síncrona a propósito: `window.open` dentro de una
        // promesa lo bloquean los navegadores por no venir de un gesto del usuario.
        // Si el idioma no es español, la tabla ya está cargada (es lo que la trajo).
        var t = (curLang !== 'es-CR' && loadedI18n && loadedI18n[curLang]) || FORM_ES;
        function err(id,msg){document.getElementById(id).textContent=msg;ok=false;}
        function clr(id){document.getElementById(id).textContent='';}
        var n=form.nombre.value.trim(), em=form.email.value.trim(), tel=form.telefono.value.trim(), sv=form.servicio.value, ms=form.mensaje.value.trim();
        n?clr('err-nombre'):err('err-nombre',t.form_err_name||FORM_ES.form_err_name);
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)?clr('err-email'):err('err-email',t.form_err_email||FORM_ES.form_err_email);
        tel?clr('err-telefono'):err('err-telefono',t.form_err_tel||FORM_ES.form_err_tel);
        sv?clr('err-servicio'):err('err-servicio',t.form_err_serv||FORM_ES.form_err_serv);
        ms?clr('err-mensaje'):err('err-mensaje',t.form_err_msg||FORM_ES.form_err_msg);
        if(!ok){ var firstErr = form.querySelector('.form-error:not(:empty)'); if(firstErr){ var grp = firstErr.closest('.form-group'); var input = grp && grp.querySelector('input,select,textarea'); if(input) input.focus(); } return; }
        var emp=form.empresa.value.trim();
        var waIntro = t.wa_intro || FORM_ES.wa_intro;
        var txt = waIntro + '\n\n*' + (t.form_name_label_raw||FORM_ES.form_name_label_raw) + ':* ' + n + '\n' + (emp ? '*' + (t.form_empresa_label_raw||FORM_ES.form_empresa_label_raw) + ':* ' + emp + '\n' : '') + '*' + (t.form_email_label_raw||FORM_ES.form_email_label_raw) + ':* ' + em + '\n*' + (t.form_tel_label_raw||FORM_ES.form_tel_label_raw) + ':* ' + tel + '\n*' + (t.form_servicio_label_raw||FORM_ES.form_servicio_label_raw) + ':* ' + sv + '\n*' + (t.form_msg_label_raw||FORM_ES.form_msg_label_raw) + ':* ' + ms;
        window.open('https://wa.me/50689840662?text='+encodeURIComponent(txt),'_blank');
      });
    }

    // ── CURSOR ──
    var cursor = document.getElementById('cursor');
    if (cursor && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      document.addEventListener('mousemove', function(e) { cursor.style.left=e.clientX+'px'; cursor.style.top=e.clientY+'px'; }, { passive: true });
    }

    // ── SERVICE CARDS: 3D TILT + MOUSE GLOW ──
    var tiltCards = document.querySelectorAll('[data-tilt]');
    tiltCards.forEach(function(card) {
      card.addEventListener('mousemove', function(e) {
        var r = card.getBoundingClientRect();
        var x = e.clientX - r.left, y = e.clientY - r.top;
        var cx = r.width / 2, cy = r.height / 2;
        var dx = (x - cx) / cx, dy = (y - cy) / cy;
        var rx = dy * 8, ry = -dx * 8;
        card.style.setProperty('--mx', (x / r.width * 100).toFixed(1) + '%');
        card.style.setProperty('--my', (y / r.height * 100).toFixed(1) + '%');
        if (window.innerWidth >= 1024) {
          card.style.transform = 'perspective(800px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) translateY(-6px) scale(1.01)';
        }
      });
      card.addEventListener('mouseleave', function() {
        card.style.transform = '';
      });
    });
    var sections = document.querySelectorAll('section[id]');
    var navAs = document.querySelectorAll('.nav-links a');
    if ('IntersectionObserver' in window) {
      var navObs = new IntersectionObserver(function(entries) {
        entries.forEach(function(e) {
          if (e.isIntersecting) navAs.forEach(function(a){ a.classList.toggle('active', a.getAttribute('href')==='#'+e.target.id); });
        });
      }, { rootMargin: '-40% 0px -40% 0px' });
      sections.forEach(function(s){ navObs.observe(s); });
    }

  })();
  