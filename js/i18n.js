// ============================================================
//  CIPTA SERI -- Bilingual Language Switcher (EN / MS)
//  Language preference persists via localStorage across pages.
// ============================================================

const TRANSLATIONS = {
  en: {
    // Nav
    'nav.home':       'Home',
    'nav.service':    'Service',
    'nav.gallery':    'Gallery',
    'nav.contact':    'Contact Us',
    'nav.quote':      'Get a Quote',

    // Hero
    'hero.tag':  'KLANG, SELANGOR - HOUSE BUILDING & RENOVATION',
    'hero.h1':   'We draft it,<br>we build it, <em>we finish it.</em>',
    'hero.lede': 'Cipta Seri Resources plans and builds house construction, renovation, custom cabinets, curtains, and utility work from first sketch to final handover, one team, from start to finish.',
    'hero.cta1': 'Request a Quotation',
    'hero.cta2': 'View Our Services',

    // Stats
    'stat.projects': 'Projects Delivered',
    'stat.years':    'Years In Practice',
    'stat.team':     'Specialists On Team',
    'stat.clients':  'Clients Who Return',

    // About
    'about.eyebrow': 'About Us',
    'about.h2':  '<em>D</em>ESIGN WITH<br>INTENTION',
    'about.p':   "At Cipta Seri, we believe that interior design is not just about how a space looks - it's about how it makes you feel. We approach each project as a layered composition of light, form, and purpose, where clarity meets quiet beauty.",
    'about.link': 'LEARN MORE',

    // Services Teaser
    'services.eyebrow': 'What We Do',
    'services.h2': 'Every trade your home needs, under one roof.',
    'services.p':  'From structural building to the final paintbrush stroke. We scope, build, and supervise each stage so you never have to coordinate separate contractors.',
    'services.s1.h3': 'House Construction',
    'services.s1.p':  'Constructing custom residential spaces from foundation to roof, designed specifically around your requirements.',
    'services.s2.h3': 'Renovation',
    'services.s2.p':  'Complete house renovations, room extensions, structural upgrades, and commercial remodeling.',
    'services.s3.h3': 'Custom Cabinet',
    'services.s3.p':  'Kitchen cabinets, built-in wardrobes, TV consoles, and custom wood furniture measured and fitted in-house.',
    'services.s4.h3': 'Curtain',
    'services.s4.p':  'Custom curtains, drapes, blinds, and high-quality textiles tailored to suit your interior style.',
    'services.s5.h3': 'Electrical & Plumbing',
    'services.s5.p':  'Safe electrical wiring, custom lighting setups, plumbing repair, and new pipe installations.',
    'services.s6.h3': 'Painting',
    'services.s6.p':  'Professional interior and exterior wall coating, surface preparation, and protective paint finishes.',
    'services.all':   'See All Services',
    'services.click': 'Click to view details',

    // Values
    'values.eyebrow': 'Why Choose Cipta Seri',
    'values.h2':  'Built on planning, not guesswork.',
    'values.v1.h4': 'Clear Scheduling',
    'values.v1.p':  'A written timeline and resource plan before work begins, not after.',
    'values.v2.h4': 'One Point of Contact',
    'values.v2.p':  'A single project lead keeps you updated - no chasing multiple contractors.',
    'values.v3.h4': 'Progress You Can See',
    'values.v3.p':  'Site updates and milestone checks so you always know where the project stands.',
    'values.v4.h4': 'Quality Checks',
    'values.v4.p':  'Every stage is inspected before the next trade begins.',
    'values.v5.h4': 'On-Time Handover',
    'values.v5.p':  'We build to the schedule we agreed on, and we tell you early if anything shifts.',

    // CTA
    'cta.h2':  "Have a space in mind? Let's put it on paper.",
    'cta.btn': 'Talk To Our Team',

    // Footer
    'footer.tagline':  'House construction, renovation, custom cabinetry, curtains, M&E, and painting based in Klang, Selangor.',
    'footer.site':     'Site',
    'footer.services': 'Services',
    'footer.contact':  'Contact',
    'footer.copy':     '© 2026 Cipta Seri Resources. All rights reserved.',

    // Service Page - Main
    'sp.eyebrow': 'Our Services',
    'sp.h1': '<em>Professional</em> <br> services for a beautiful, functional space.',
    'sp.p':  'From building custom homes to custom cabinetry, painting, and utility installations, we handle the full spectrum of contracting works under one seamless schedule.',
    
    // Service Page - Construction
    'sp.const.eyebrow': 'House Construction',
    'sp.const.h2': 'Custom Residential Spaces',
    'sp.const.p1': 'Constructing custom residential spaces from foundation to roof, tailored to your lifestyle, preferences, and budget. Every home is carefully planned to maximize functionality, comfort, and long-term value while reflecting your unique vision.',
    'sp.const.p2': 'From site preparation and structural construction to roofing, finishes, and final inspections, our experienced team manages every stage of the project with precision. We are committed to quality craftsmanship, transparent communication, and delivering your new home on time and within budget.',
    
    // Service Page - Renovation
    'sp.reno.eyebrow': 'Renovation',
    'sp.reno.h2': 'Complete Renovation Services',
    'sp.reno.p1': "Complete house renovations, room extensions, structural upgrades, and commercial remodeling designed to enhance both the functionality and appearance of your property. Whether you're modernizing an outdated space, expanding your home, or transforming a commercial unit, we provide practical solutions tailored to your needs and budget.",
    'sp.reno.p2': 'Our experienced team carefully manages every stage of the renovation process, from planning and demolition to construction, finishing, and final inspections. With quality workmanship, reliable project management, and attention to every detail, we ensure a smooth renovation experience while delivering results that improve the value, comfort, and longevity of your property.',
    
    // Service Page - Cabinet
    'sp.cab.eyebrow': 'Custom Cabinet',
    'sp.cab.h2': 'Custom Cabinetry Solutions',
    'sp.cab.p1': 'We design and build custom kitchen cabinets, built-in wardrobes, TV consoles, and bespoke wood furniture tailored to your space and lifestyle. Every piece is carefully measured and crafted to maximize storage, functionality, and visual appeal.',
    'sp.cab.p2': 'From material selection to fabrication and installation, our in-house team ensures precision at every stage. Using quality workmanship and durable materials, we create custom cabinetry that combines lasting performance with timeless design.',
    
    // Service Page - Curtain
    'sp.curt.eyebrow': 'Curtain',
    'sp.curt.h2': 'Custom Curtains & Blinds',
    'sp.curt.p1': 'Enhance your home with custom curtains, drapes, blinds, and premium-quality fabrics designed to complement your interior style. We offer a wide selection of materials, colors, and finishes to create window treatments that provide both elegance and everyday functionality.',
    'sp.curt.p2': 'From on-site measurements to fabrication and professional installation, our team ensures a perfect fit and flawless finish. Every curtain and blind is tailored to your space, delivering comfort, privacy, and a refined look that completes your interior.',
    
    // Service Page - Plumbing
    'sp.plumb.eyebrow': 'Electrical & Plumbing',
    'sp.plumb.h2': 'Reliable Electrical & Plumbing Services',
    'sp.plumb.p1': 'We provide safe and reliable electrical and plumbing services, including electrical wiring, custom lighting installations, plumbing repairs, and new pipe installations for residential and commercial properties. Every project is carried out with precision to ensure safety, efficiency, and long-term performance.',
    'sp.plumb.p2': "Our experienced technicians use quality materials and industry-approved practices to deliver dependable results that meet your requirements. Whether it's a new installation, system upgrade, or repair work, we complete every job with professionalism, attention to detail, and minimal disruption to your property.",
    
    // Service Page - Painting
    'sp.paint.eyebrow': 'Painting',
    'sp.paint.h2': 'Professional Wall Coating Services',
    'sp.paint.p1': 'Flawless results begin with proper surface preparation. Professional painters thoroughly clean, repair, and prime walls before applying any coating. This essential step guarantees a smooth, even finish that adheres properly to both interior and exterior surfaces.',
    'sp.paint.p2': 'High-quality protective paints do more than just look good. Modern exterior and interior coatings shield walls against weather, moisture, fading, and daily wear. Choosing durable finishes protects your property from damage while instantly boosting its overall value.',
    
    // Service Page - Team
    'sp.team.eyebrow': 'Our Team',
    'sp.team.h2': 'Led by experienced industry professionals.',
    'sp.team.p1': 'Overseeing project operations, materials sourcing, team coordination, and client communications across Selangor.',
    'sp.team.p2': 'Our custom cabinet and curtain makers who manufacture and install beautiful, bespoke built-ins.',
    'sp.team.p3': 'Experienced bricklayers, plumbers, electricians, and painters who execute the physical build to high standards.',
    'sp.team.op_manager': 'Operation Manager',
    'sp.team.fabricators': 'In-house Fabricators',
    'sp.team.utilities': 'Construction & Utilities',
    'sp.team.crew1': 'Custom Carpentry Crew',
    'sp.team.crew2': 'Builders & M&E Crew',

    'sp.cta.h2': "Want to know if we're a fit for your project?",
    'sp.cta.btn': 'Get In Touch',

    // Gallery Page
    'gp.eyebrow':       'Gallery',
    'gp.h1':            "A look at spaces we've <em>completed.</em>",
    'gp.p':             'Filter by category to see recent renovation, interior and exterior facade projects across Selangor.',
    'gp.filter.all':    'All Projects',
    'gp.filter.building':'House Construction',
    'gp.filter.reno':   'Renovation',
    'gp.filter.cabinet':'Cabinet & Curtain',
    'gp.filter.utilities':'Utilities & Painting',
    
    'gp.tag.cab': 'Cabinetry',
    'gp.tag.reno': 'Renovation',
    'gp.tag.const': 'House Construction',
    'gp.tag.paint': 'Painting & M&E',
    
    'gp.cap.1': 'Bedroom Dressing Table',
    'gp.cap.2': 'Facade Upgrade',
    'gp.cap.3': 'Cabinets Upgrade',
    'gp.cap.4': 'Living Room Renovation',
    'gp.cap.5': 'Bathroom Utilities',
    'gp.cap.6': 'Bedroom Vanity',
    'gp.cap.7': 'Front Facade',
    'gp.cap.8': 'Room Renovation',
    'gp.cap.9': 'Balcony Construction',

    'gp.cta.h2': "Like what you see? Let's plan yours.",
    'gp.cta.btn': 'Start A Project',

    // Contact Page
    'cp.eyebrow':  'Contact Us',
    'cp.h1':       "Tell us about your space. We'll take it from there.",
    'cp.p':        'Send your project details below, or reach us directly by phone, email or WhatsApp. A site visit is free and comes with no obligation.',
    
    'cp.info.eyebrow': 'Get In Touch',
    'cp.info.p': 'Contact Nurul Hazira (Operation Manager) directly, or send us your details using the form. We respond within one business day.',
    'cp.info.email': 'Email',
    'cp.info.phone': 'Phone',
    'cp.info.whatsapp': 'WhatsApp',
    'cp.info.office': 'Office',
    'cp.info.address': 'Lot 6599, Jalan Kampung Delek Kiri,<br>41250 Klang, Selangor',
    
    'cp.form.eyebrow': 'Send A Message',
    'cp.form.h3': 'Request a quotation',
    'cp.form.name':    'Full Name',
    'cp.form.phone':   'Phone Number',
    'cp.form.email':   'Email',
    'cp.form.service': 'Service Needed',
    'cp.form.message': 'Project Details',
    'cp.form.submit':  'Send Message',
    'cp.form.opt.reno': 'Renovation',
    'cp.form.opt.cab': 'Custom Cabinet',
    'cp.form.opt.curt': 'Curtain',
    'cp.form.opt.plumb': 'Electrical & Plumbing',
    'cp.form.opt.paint': 'Painting',
    'cp.form.opt.other': 'Other / Multiple Services',
    'cp.form.pl.name': 'Your name',
    'cp.form.pl.phone': 'e.g. 012-345 6789',
    'cp.form.pl.email': 'you@example.com',
    'cp.form.pl.message': "Tell us about the space, size, and what you'd like done.",
    
    'cp.find.eyebrow': 'Find Us',
    'cp.find.h2': 'Our office in Klang, Selangor',
    
    'breadcrumb.home': 'Home',
    'breadcrumb.service': 'Service',
    'breadcrumb.gallery': 'Gallery',
    'breadcrumb.contact': 'Contact Us'
  },

  ms: {
    // Nav
    'nav.home':       'Utama',
    'nav.service':    'Perkhidmatan',
    'nav.gallery':    'Galeri',
    'nav.contact':    'Hubungi Kami',
    'nav.quote':      'Dapatkan Sebutan Harga',

    // Hero
    'hero.tag':  'KLANG, SELANGOR - PEMBINAAN & RENOVASI RUMAH',
    'hero.h1':   'Kami reka,<br>kami bina, <em>kami siapkan.</em>',
    'hero.lede': 'Cipta Seri Resources merancang dan membina rumah, renovasi, kabinet, langsir, dan kerja utiliti dari lakaran pertama hingga serah kunci, satu pasukan, dari awal hingga akhir.',
    'hero.cta1': 'Minta Sebutan Harga',
    'hero.cta2': 'Lihat Perkhidmatan Kami',

    // Stats
    'stat.projects': 'Projek Siap',
    'stat.years':    'Tahun Pengalaman',
    'stat.team':     'Pakar Dalam Pasukan',
    'stat.clients':  'Pelanggan Yang Kembali',

    // About
    'about.eyebrow': 'Tentang Kami',
    'about.h2':  '<em>R</em>EKA BENTUK<br>DENGAN TUJUAN',
    'about.p':   'Di Cipta Seri, kami percaya bahawa reka bentuk dalaman bukan sekadar penampilan - ia tentang perasaan yang tercipta. Kami mendekati setiap projek sebagai komposisi cahaya, bentuk, dan tujuan yang harmoni.',
    'about.link': 'KETAHUI LEBIH LANJUT',

    // Services Teaser
    'services.eyebrow': 'Apa Yang Kami Buat',
    'services.h2': 'Semua keperluan rumah anda, di bawah satu bumbung.',
    'services.p':  'Dari binaan struktur hingga sapuan kuas terakhir. Kami mengurus setiap peringkat supaya anda tidak perlu berurusan dengan kontraktor yang berbeza.',
    'services.s1.h3': 'Pembinaan Rumah',
    'services.s1.p':  'Membina kediaman khas dari asas hingga bumbung, direka khusus mengikut keperluan anda.',
    'services.s2.h3': 'Renovasi',
    'services.s2.p':  'Renovasi rumah lengkap, sambungan bilik, naik taraf struktur, dan pengubahsuaian komersial.',
    'services.s3.h3': 'Kabinet Khas',
    'services.s3.p':  'Kabinet dapur, almari tanam, konsol TV, dan perabot kayu khas yang diukur dan dipasang secara dalaman.',
    'services.s4.h3': 'Langsir',
    'services.s4.p':  'Langsir, tirai, bidai, dan tekstil berkualiti tinggi yang disesuaikan dengan gaya dalaman anda.',
    'services.s5.h3': 'Elektrik & Paip',
    'services.s5.p':  'Pendawaian elektrik selamat, pemasangan pencahayaan, pembaikan paip, dan pemasangan paip baharu.',
    'services.s6.h3': 'Pengecatan',
    'services.s6.p':  'Pengecatan dinding dalaman dan luaran secara profesional, penyediaan permukaan, dan kemasan cat pelindung.',
    'services.all':   'Lihat Semua Perkhidmatan',
    'services.click': 'Klik untuk lihat butiran',

    // Values
    'values.eyebrow': 'Mengapa Pilih Cipta Seri',
    'values.h2':  'Dibina atas perancangan, bukan andaian.',
    'values.v1.h4': 'Jadual Yang Jelas',
    'values.v1.p':  'Garis masa bertulis dan pelan sumber sebelum kerja bermula, bukan selepasnya.',
    'values.v2.h4': 'Satu Titik Hubungan',
    'values.v2.p':  'Seorang ketua projek akan sentiasa mengemaskini anda - tiada perlu berurusan dengan pelbagai kontraktor.',
    'values.v3.h4': 'Kemajuan Yang Boleh Dilihat',
    'values.v3.p':  'Kemaskini tapak dan semakan pencapaian supaya anda tahu kedudukan projek pada setiap masa.',
    'values.v4.h4': 'Pemeriksaan Kualiti',
    'values.v4.p':  'Setiap peringkat diperiksa sebelum kerja seterusnya bermula.',
    'values.v5.h4': 'Serah Kunci Tepat Masa',
    'values.v5.p':  'Kami membina mengikut jadual yang dipersetujui, dan kami maklumkan awal sekiranya ada perubahan.',

    // CTA
    'cta.h2':  'Ada ruang yang anda bayangkan? Mari kita lukiskan.',
    'cta.btn': 'Hubungi Pasukan Kami',

    // Footer
    'footer.tagline':  'Pembinaan rumah, renovasi, kabinet khas, langsir, M&E, dan pengecatan berpusat di Klang, Selangor.',
    'footer.site':     'Laman',
    'footer.services': 'Perkhidmatan',
    'footer.contact':  'Hubungi',
    'footer.copy':     '© 2026 Cipta Seri Resources. Hak cipta terpelihara.',

    // Service Page - Main
    'sp.eyebrow': 'Perkhidmatan Kami',
    'sp.h1': '<em>Profesional</em> <br> perkhidmatan untuk ruang yang cantik dan berfungsi.',
    'sp.p':  'Daripada membina rumah rekaan khas kepada kabinet khusus, pengecatan dan pemasangan utiliti, kami mengendalikan pelbagai kerja kontraktor di bawah satu jadual yang lancar.',
    
    // Service Page - Construction
    'sp.const.eyebrow': 'Pembinaan Rumah',
    'sp.const.h2': 'Ruang Kediaman Khas',
    'sp.const.p1': 'Membina ruang kediaman khas dari asas ke bumbung, disesuaikan dengan gaya hidup, keutamaan dan bajet anda. Setiap rumah dirancang dengan teliti untuk memaksimumkan fungsi, keselesaan, dan nilai jangka panjang sambil mencerminkan visi unik anda.',
    'sp.const.p2': 'Daripada penyediaan tapak dan pembinaan struktur kepada bumbung, kemasan dan pemeriksaan akhir, pasukan kami yang berpengalaman mengurus setiap peringkat projek dengan tepat. Kami komited kepada kualiti, komunikasi telus, dan menyerahkan rumah baru anda tepat pada masanya dan dalam bajet.',
    
    // Service Page - Renovation
    'sp.reno.eyebrow': 'Renovasi',
    'sp.reno.h2': 'Perkhidmatan Renovasi Lengkap',
    'sp.reno.p1': "Renovasi rumah lengkap, tambahan bilik, peningkatan struktur, dan pengubahsuaian komersial direka untuk meningkatkan fungsi dan penampilan hartanah anda. Sama ada anda memodenkan ruang usang, membesarkan rumah, atau mengubah unit komersial, kami menyediakan penyelesaian praktikal disesuaikan dengan keperluan dan bajet anda.",
    'sp.reno.p2': 'Pasukan kami yang berpengalaman mengurus setiap peringkat proses ubah suai dengan teliti, dari perancangan dan perobohan kepada pembinaan, kemasan, dan pemeriksaan akhir. Dengan hasil kerja berkualiti, pengurusan projek yang dipercayai, dan perhatian kepada setiap perincian, kami memastikan pengalaman ubah suai yang lancar sambil memberikan hasil yang meningkatkan nilai, keselesaan, dan jangka hayat hartanah anda.',
    
    // Service Page - Cabinet
    'sp.cab.eyebrow': 'Kabinet Khas',
    'sp.cab.h2': 'Penyelesaian Kabinet Khas',
    'sp.cab.p1': 'Kami mereka bentuk dan membina kabinet dapur, almari pakaian terbina dalam, konsol TV, dan perabot kayu yang disesuaikan dengan ruang dan gaya hidup anda. Setiap bahagian diukur dengan teliti dan direka untuk memaksimumkan penyimpanan, fungsi dan daya tarikan visual.',
    'sp.cab.p2': 'Daripada pemilihan bahan kepada fabrikasi dan pemasangan, pasukan dalaman kami memastikan ketepatan pada setiap peringkat. Menggunakan mutu kerja berkualiti dan bahan tahan lama, kami mencipta kabinet tersuai yang menggabungkan prestasi berkekalan dengan reka bentuk abadi.',
    
    // Service Page - Curtain
    'sp.curt.eyebrow': 'Langsir',
    'sp.curt.h2': 'Langsir & Bidai Tersuai',
    'sp.curt.p1': 'Tingkatkan kediaman anda dengan langsir tersuai, tirai, bidai dan fabrik berkualiti premium yang direka bentuk untuk melengkapkan gaya dalaman anda. Kami menawarkan pelbagai pilihan bahan, warna dan kemasan untuk mencipta hiasan tingkap yang memberikan keanggunan serta fungsi harian.',
    'sp.curt.p2': 'Daripada ukuran di tapak kepada fabrikasi dan pemasangan profesional, pasukan kami memastikan ia padan dengan sempurna dan kemasan yang tiada cacat cela. Setiap langsir dan bidai disesuaikan dengan ruang anda, memberikan keselesaan, privasi dan rupa yang menyempurnakan bahagian dalaman anda.',
    
    // Service Page - Plumbing
    'sp.plumb.eyebrow': 'Elektrik & Paip',
    'sp.plumb.h2': 'Perkhidmatan Elektrik & Paip Dipercayai',
    'sp.plumb.p1': 'Kami menyediakan perkhidmatan elektrik dan paip yang selamat dan boleh dipercayai, termasuk pendawaian elektrik, pemasangan pencahayaan tersuai, pembaikan paip, dan pemasangan paip baru untuk hartanah kediaman dan komersial. Setiap projek dijalankan dengan tepat untuk memastikan keselamatan, kecekapan, dan prestasi jangka panjang.',
    'sp.plumb.p2': "Juruteknik kami yang berpengalaman menggunakan bahan berkualiti dan amalan yang diluluskan industri untuk menyampaikan hasil yang boleh dipercayai dan memenuhi keperluan anda. Sama ada pemasangan baru, menaik taraf sistem, atau kerja pembaikan, kami menyelesaikan setiap tugasan dengan profesionalisme, perhatian kepada perincian, dan gangguan minimum kepada hartanah anda.",
    
    // Service Page - Painting
    'sp.paint.eyebrow': 'Pengecatan',
    'sp.paint.h2': 'Perkhidmatan Mengecat Dinding Profesional',
    'sp.paint.p1': 'Hasil yang sempurna bermula dengan penyediaan permukaan yang betul. Tukang cat profesional akan membersihkan, membaiki dan mengemaskan dinding sebelum menggunakan sebarang cat. Langkah penting ini menjamin kelancaran, kemasan rata yang melekat dengan betul pada kedua-dua permukaan dalaman dan luaran.',
    'sp.paint.p2': 'Cat pelindung berkualiti tinggi melakukan lebih daripada sekadar kelihatan cantik. Salutan dalaman dan luaran moden melindungi dinding daripada cuaca, kelembapan, pudar dan kehausan harian. Memilih kemasan yang tahan lama melindungi hartanah anda daripada kerosakan sambil meningkatkan nilai keseluruhannya serta-merta.',
    
    // Service Page - Team
    'sp.team.eyebrow': 'Pasukan Kami',
    'sp.team.h2': 'Diterajui oleh profesional industri yang berpengalaman.',
    'sp.team.p1': 'Menyelia operasi projek, penyumberan bahan, koordinasi pasukan, dan komunikasi pelanggan di seluruh Selangor.',
    'sp.team.p2': 'Pembuat kabinet tersuai dan pembuat langsir kami yang mengeluarkan dan memasang kabinet cantik dan dibuat khusus.',
    'sp.team.p3': 'Tukang pasang bata, tukang paip, juruelektrik dan tukang cat berpengalaman yang melaksanakan binaan fizikal pada standard yang tinggi.',
    'sp.team.op_manager': 'Pengurus Operasi',
    'sp.team.fabricators': 'Fabrikator Dalaman',
    'sp.team.utilities': 'Pembinaan & Utiliti',
    'sp.team.crew1': 'Kru Pertukangan Khas',
    'sp.team.crew2': 'Kru Pembinaan & M&E',

    'sp.cta.h2': "Ingin tahu jika kami sesuai untuk projek anda?",
    'sp.cta.btn': 'Hubungi Kami',

    // Gallery Page
    'gp.eyebrow':       'Galeri',
    'gp.h1':            'Lihat ruang yang telah kami <em>siapkan.</em>',
    'gp.p':             'Tapis mengikut kategori untuk melihat projek renovasi, dalaman, dan fasad luaran terkini di seluruh Selangor.',
    'gp.filter.all':    'Semua Projek',
    'gp.filter.building':'Pembinaan Rumah',
    'gp.filter.reno':   'Renovasi',
    'gp.filter.cabinet':'Kabinet & Langsir',
    'gp.filter.utilities':'Utiliti & Pengecatan',
    
    'gp.tag.cab': 'Kabinet',
    'gp.tag.reno': 'Renovasi',
    'gp.tag.const': 'Pembinaan Rumah',
    'gp.tag.paint': 'Pengecatan & M&E',
    
    'gp.cap.1': 'Meja Solek Bilik Tidur',
    'gp.cap.2': 'Naik Taraf Fasad',
    'gp.cap.3': 'Naik Taraf Kabinet',
    'gp.cap.4': 'Pengubahsuaian Ruang Tamu',
    'gp.cap.5': 'Utiliti Bilik Mandi',
    'gp.cap.6': 'Solekan Bilik Tidur',
    'gp.cap.7': 'Fasad Depan',
    'gp.cap.8': 'Pengubahsuaian Bilik',
    'gp.cap.9': 'Pembinaan Balkoni',

    'gp.cta.h2': 'Suka dengan apa yang anda lihat? Mari rancang anda.',
    'gp.cta.btn': 'Mula Sebuah Projek',

    // Contact Page
    'cp.eyebrow':  'Hubungi Kami',
    'cp.h1':       'Ceritakan tentang ruang anda. Kami akan uruskan selebihnya.',
    'cp.p':        'Hantar butiran projek anda di bawah, atau hubungi kami terus melalui telefon, e-mel atau WhatsApp. Lawatan tapak adalah percuma dan tanpa sebarang obligasi.',
    
    'cp.info.eyebrow': 'Hubungi Kami',
    'cp.info.p': 'Hubungi Nurul Hazira (Pengurus Operasi) secara terus, atau hantar butiran anda menggunakan borang di bawah. Kami akan balas dalam masa satu hari perniagaan.',
    'cp.info.email': 'E-mel',
    'cp.info.phone': 'Telefon',
    'cp.info.whatsapp': 'WhatsApp',
    'cp.info.office': 'Pejabat',
    'cp.info.address': 'Lot 6599, Jalan Kampung Delek Kiri,<br>41250 Klang, Selangor',
    
    'cp.form.eyebrow': 'Hantar Mesej',
    'cp.form.h3': 'Minta sebut harga',
    'cp.form.name':    'Nama Penuh',
    'cp.form.phone':   'Nombor Telefon',
    'cp.form.email':   'E-mel',
    'cp.form.service': 'Perkhidmatan Diperlukan',
    'cp.form.message': 'Butiran Projek',
    'cp.form.submit':  'Hantar Mesej',
    'cp.form.opt.reno': 'Renovasi',
    'cp.form.opt.cab': 'Kabinet Khas',
    'cp.form.opt.curt': 'Langsir',
    'cp.form.opt.plumb': 'Elektrik & Paip',
    'cp.form.opt.paint': 'Pengecatan',
    'cp.form.opt.other': 'Lain-lain / Pelbagai Perkhidmatan',
    'cp.form.pl.name': 'Nama anda',
    'cp.form.pl.phone': 'cth. 012-345 6789',
    'cp.form.pl.email': 'anda@contoh.com',
    'cp.form.pl.message': "Beritahu kami tentang ruang, saiz, dan apa yang anda mahu lakukan.",
    
    'cp.find.eyebrow': 'Cari Kami',
    'cp.find.h2': 'Pejabat kami di Klang, Selangor',
    
    'breadcrumb.home': 'Utama',
    'breadcrumb.service': 'Perkhidmatan',
    'breadcrumb.gallery': 'Galeri',
    'breadcrumb.contact': 'Hubungi Kami'
  }
};

// ── Core engine ──────────────────────────────────────────────
const DEFAULT_LANG = 'en';

function getCurrentLang() {
  return localStorage.getItem('csr_lang') || DEFAULT_LANG;
}

function setLang(lang) {
  if (!TRANSLATIONS[lang]) return;
  localStorage.setItem('csr_lang', lang);
  applyTranslations(lang);
  updateToggleButton(lang);
  document.documentElement.lang = lang === 'ms' ? 'ms' : 'en';
}

function applyTranslations(lang) {
  const t = TRANSLATIONS[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] === undefined) return;
    // Use innerHTML only when the string contains HTML tags
    if (/<[a-z]/i.test(t[key])) {
      el.innerHTML = t[key];
    } else {
      el.textContent = t[key];
    }
  });
  // Handle placeholder attributes separately
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] !== undefined) el.placeholder = t[key];
  });
}

// Show the OPPOSITE language on the button (like DeepSeek)
function updateToggleButton(lang) {
  const btn = document.getElementById('lang-toggle');
  if (!btn) return;
  btn.textContent = lang === 'en' ? 'BM' : 'EN';
  btn.setAttribute('aria-label', lang === 'en' ? 'Tukar ke Bahasa Melayu' : 'Switch to English');
  btn.dataset.currentLang = lang;
}

// ── Bootstrap ────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('lang-toggle');
  if (!btn) return;
  const lang = getCurrentLang();
  applyTranslations(lang);
  updateToggleButton(lang);
  btn.addEventListener('click', () => {
    const current = btn.dataset.currentLang || getCurrentLang();
    setLang(current === 'en' ? 'ms' : 'en');
  });
});
