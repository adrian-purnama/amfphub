(function () {
  const common = {
    en: {
      "nav.services": "Services",
      "nav.audience": "Who we help",
      "nav.contact": "Contact",
      "nav.menu": "Menu",
      "nav.close": "Close",
      "product.kicker": "Product",
      "product.marketplace.shopee": "Order on Shopee",
      "product.marketplace.tokopedia": "Order on Tokopedia",
      "footer.copy": "Technology, AI implementation, and automation."
    },
    id: {
      "nav.services": "Layanan",
      "nav.audience": "Untuk siapa",
      "nav.contact": "Kontak",
      "nav.menu": "Menu",
      "nav.close": "Tutup",
      "product.kicker": "Produk",
      "product.marketplace.shopee": "Pesan di Shopee",
      "product.marketplace.tokopedia": "Pesan di Tokopedia",
      "footer.copy": "Teknologi, implementasi AI, dan automasi."
    }
  };

  const products = {
    n8n: {
      en: {
        "product.title": "n8n Automation",
        "product.lead": "Private n8n setup for automating business workflows, notifications, data movement, APIs, and internal operations   built for teams that need control without complexity.",
        "product.copy.1": "n8n is a flexible workflow automation platform that connects your apps, databases, and APIs in one visual builder. Instead of juggling manual tasks across spreadsheets, chat tools, and dashboards, you define triggers and actions once   then let automation handle the rest.",
        "product.copy.2": "We help you design, deploy, and maintain n8n for real business use: order alerts, CRM sync, approval flows, scheduled reports, webhook handlers, and custom integrations. Choose self-hosted for full data ownership or a managed setup if you want us to run and monitor it for you.",
        "product.copy.3": "Need a faster start? We also offer ready-made workflow templates and implementation support so your team can go live without learning every node from scratch.",
        "product.feature.1": "Custom workflow design and deployment",
        "product.feature.2": "Webhook, API, and database integrations",
        "product.feature.3": "Notifications, approvals, and internal ops automation",
        "product.feature.4": "Self-hosted or managed setup options",
        "product.feature.5": "8000+ workflow templates available on request",
        "product.feature.6": "Ongoing support, monitoring, and improvements",
        "product.cta": "Start with n8n"
      },
      id: {
        "product.title": "Automasi n8n",
        "product.lead": "Setup n8n privat untuk mengotomatisasi workflow bisnis, notifikasi, perpindahan data, API, dan operasional internal   dibuat untuk tim yang butuh kontrol tanpa kerumitan.",
        "product.copy.1": "n8n adalah platform automasi workflow yang menghubungkan aplikasi, database, dan API dalam satu builder visual. Alih-alih mengurus tugas manual di spreadsheet, chat, dan dashboard, Anda cukup mendefinisikan trigger dan action sekali   lalu biarkan automasi yang menjalankannya.",
        "product.copy.2": "Kami membantu merancang, deploy, dan maintain n8n untuk kebutuhan bisnis nyata: alert pesanan, sinkronisasi CRM, alur persetujuan, laporan terjadwal, webhook handler, dan integrasi custom. Pilih self-hosted untuk kontrol data penuh atau setup managed jika Anda ingin kami yang menjalankan dan memantaunya.",
        "product.copy.3": "Butuh start yang lebih cepat? Kami juga menyediakan template workflow siap pakai dan dukungan implementasi agar tim Anda bisa go live tanpa harus mempelajari setiap node dari nol.",
        "product.feature.1": "Desain dan deployment workflow custom",
        "product.feature.2": "Integrasi webhook, API, dan database",
        "product.feature.3": "Notifikasi, persetujuan, dan automasi operasional internal",
        "product.feature.4": "Opsi setup self-hosted atau managed",
        "product.feature.5": "8000+ template workflow tersedia atas permintaan",
        "product.feature.6": "Dukungan, monitoring, dan perbaikan berkelanjutan",
        "product.cta": "Mulai dengan n8n"
      }
    },
    sapai: {
      en: {
        "product.title": "SapAi LLM API",
        "product.lead": "LLM API access for chatbots, RAG, summaries, classification, and AI features inside your own app or website   practical AI without rebuilding your stack.",
        "product.copy.1": "SapAi gives your product a ready LLM layer so you can ship chat, search, and intelligent features faster. Connect through a simple API and keep your existing frontend, backend, and user flows.",
        "product.copy.2": "Use it for customer support bots, document Q&A, content summaries, data extraction, and classification   with room to grow into more advanced RAG and agent-style workflows later.",
        "product.feature.1": "Chatbot and conversational AI endpoints",
        "product.feature.2": "RAG and document-aware responses",
        "product.feature.3": "Summaries, classification, and extraction",
        "product.feature.4": "API-first integration for your product",
        "product.cta": "Start with SapAi"
      },
      id: {
        "product.title": "SapAi LLM API",
        "product.lead": "Akses LLM API untuk chatbot, RAG, ringkasan, klasifikasi, dan fitur AI di aplikasi atau website kamu sendiri   AI praktis tanpa harus membangun ulang stack.",
        "product.copy.1": "SapAi memberi produk Anda lapisan LLM siap pakai sehingga fitur chat, pencarian, dan kecerdasan bisa lebih cepat dirilis. Hubungkan lewat API sederhana sambil mempertahankan frontend, backend, dan alur pengguna yang sudah ada.",
        "product.copy.2": "Cocok untuk bot dukungan pelanggan, tanya jawab dokumen, ringkasan konten, ekstraksi data, dan klasifikasi   dengan ruang untuk berkembang ke RAG dan workflow agent yang lebih advanced.",
        "product.feature.1": "Endpoint chatbot dan conversational AI",
        "product.feature.2": "RAG dan respons berbasis dokumen",
        "product.feature.3": "Ringkasan, klasifikasi, dan ekstraksi",
        "product.feature.4": "Integrasi API-first untuk produk Anda",
        "product.cta": "Mulai dengan SapAi"
      }
    },
    "convert-api": {
      en: {
        "product.title": "Convert API",
        "product.lead": "File conversion API for documents, images, and everyday conversion tasks that your product or team needs   reliable format handling without maintaining your own pipeline.",
        "product.copy.1": "Convert API handles the messy format work behind the scenes so your team can focus on product features. Send files in, get the output format you need back   through a clean REST interface.",
        "product.copy.2": "Ideal for SaaS products, internal tools, automation workflows, and batch jobs that need dependable document and image conversion at scale.",
        "product.feature.1": "Document and image format conversion",
        "product.feature.2": "REST API for product integrations",
        "product.feature.3": "Batch and on-demand processing",
        "product.feature.4": "Built for automation and internal tools",
        "product.cta": "Start with Convert API"
      },
      id: {
        "product.title": "Convert API",
        "product.lead": "API konversi file untuk dokumen, gambar, dan kebutuhan konversi harian produk atau tim Anda   penanganan format yang andal tanpa harus maintain pipeline sendiri.",
        "product.copy.1": "Convert API menangani pekerjaan format yang rumit di belakang layar sehingga tim bisa fokus pada fitur produk. Kirim file masuk, dapatkan format output yang dibutuhkan   lewat antarmuka REST yang bersih.",
        "product.copy.2": "Cocok untuk produk SaaS, tools internal, workflow automasi, dan batch job yang butuh konversi dokumen dan gambar yang stabil dalam skala besar.",
        "product.feature.1": "Konversi format dokumen dan gambar",
        "product.feature.2": "REST API untuk integrasi produk",
        "product.feature.3": "Pemrosesan batch dan on-demand",
        "product.feature.4": "Dibuat untuk automasi dan tools internal",
        "product.cta": "Mulai dengan Convert API"
      }
    },
    "n8n-workflow": {
      en: {
        "product.title": "8000+ n8n Workflow Templates",
        "product.lead": "Ready-made n8n workflow templates to automate business workflows, notifications, data movement, APIs, and internal operations   import, customize, and deploy faster.",
        "product.copy.1": "Skip weeks of trial and error. Our library includes thousands of proven n8n workflows covering CRM sync, ecommerce alerts, social posting, data pipelines, AI integrations, and everyday business automation.",
        "product.copy.2": "Each template is a practical starting point you can adapt to your stack, credentials, and business rules. Perfect for teams that want speed without sacrificing control over their automation.",
        "product.feature.1": "8000+ curated n8n workflow templates",
        "product.feature.2": "Covers notifications, APIs, and data sync",
        "product.feature.3": "Import-ready for self-hosted or cloud n8n",
        "product.feature.4": "Customization and implementation support available",
        "product.cta": "Get workflow templates"
      },
      id: {
        "product.title": "8000+ Template Workflow n8n",
        "product.lead": "Template workflow n8n siap pakai untuk mengotomatisasi workflow bisnis, notifikasi, perpindahan data, API, dan operasional internal   import, sesuaikan, dan deploy lebih cepat.",
        "product.copy.1": "Lewati minggu-minggu trial and error. Library kami berisi ribuan workflow n8n yang sudah terbukti, mencakup sinkronisasi CRM, alert ecommerce, posting sosial, pipeline data, integrasi AI, dan automasi bisnis sehari-hari.",
        "product.copy.2": "Setiap template adalah titik awal praktis yang bisa disesuaikan dengan stack, kredensial, dan aturan bisnis Anda. Cocok untuk tim yang ingin cepat tanpa mengorbankan kontrol atas automasi mereka.",
        "product.feature.1": "8000+ template workflow n8n terkurasi",
        "product.feature.2": "Mencakup notifikasi, API, dan sinkronisasi data",
        "product.feature.3": "Siap import untuk n8n self-hosted atau cloud",
        "product.feature.4": "Kustomisasi dan dukungan implementasi tersedia",
        "product.cta": "Dapatkan template workflow"
      }
    }
  };

  const html = document.documentElement;
  const productId = document.body.dataset.product;
  const savedLang = localStorage.getItem("amfphub_lang");
  const initialLang = savedLang || (navigator.language && navigator.language.toLowerCase().startsWith("id") ? "id" : "en");

  function getStrings(lang) {
    const productStrings = products[productId]?.[lang] || {};
    return { ...common[lang], ...productStrings };
  }

  function setLanguage(lang) {
    const strings = getStrings(lang);
    html.dataset.lang = lang;
    html.lang = lang;
    localStorage.setItem("amfphub_lang", lang);

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      if (strings[key]) element.textContent = strings[key];
    });

    document.title = `${strings["product.title"] || document.title}    AMFPHUB`;
  }

  function initDrawer() {
    const drawer = document.getElementById("mobileDrawer");
    const toggle = document.querySelector(".drawer-toggle");
    const closeTargets = document.querySelectorAll("[data-close-drawer]");
    if (!drawer || !toggle) return;

    const openDrawer = () => {
      document.body.classList.add("drawer-open");
      drawer.setAttribute("aria-hidden", "false");
      toggle.setAttribute("aria-expanded", "true");
    };

    const closeDrawer = () => {
      document.body.classList.remove("drawer-open");
      drawer.setAttribute("aria-hidden", "true");
      toggle.setAttribute("aria-expanded", "false");
    };

    toggle.addEventListener("click", openDrawer);
    closeTargets.forEach((target) => target.addEventListener("click", closeDrawer));
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeDrawer();
    });
  }

  document.querySelectorAll("[data-set-lang]").forEach((item) => {
    const selectLanguage = () => setLanguage(item.dataset.setLang);
    item.addEventListener("click", selectLanguage);
    item.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectLanguage();
      }
    });
  });

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  initDrawer();
  setLanguage(initialLang);
})();
