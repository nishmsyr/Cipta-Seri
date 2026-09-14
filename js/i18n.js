// ============================================================
//  CIPTA SERI -- Bilingual Language Switcher (EN / MS)
//  Language preference persists via localStorage across pages.
// ============================================================

const TRANSLATIONS = {
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.service': 'Services',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact Us',
    'nav.quote': 'Get a Quote',

    // Hero
    'hero.tag': 'KLANG, SELANGOR - HOUSE CONSTRUCTION & RENOVATION',
    'hero.h1': 'We design it,<br>we build it, <em>we perfect it.</em>',
    'hero.lede': 'Cipta Seri Resources manages your project from the initial sketch to the final handover. We specialize in house construction, renovations, custom cabinetry, curtains, and utility works—delivering a seamless experience under one roof.',
    'hero.cta1': 'Request a Quote',
    'hero.cta2': 'Explore Our Services',

    // Stats
    'stat.projects': 'Projects Completed',
    'stat.years': 'Years of Experience',
    'stat.team': 'In-house Specialists',
    'stat.clients': 'Returning Clients',

    // About
    'about.eyebrow': 'About Us',
    'about.h2': '<em>P</em>URPOSE-DRIVEN<br>DESIGN',
    'about.p': "At Cipta Seri, we believe that interior design is about more than just aesthetics—it's about how a space makes you feel. We approach each project as a carefully curated composition of light, form, and functionality, where clarity meets quiet beauty.",
    'about.link': 'LEARN MORE',

    // Services Teaser
    'services.eyebrow': 'Our Expertise',
    'services.h2': 'Complete property solutions under one roof.',
    'services.p': 'From structural construction to the final coat of paint, we manage and execute every phase. Say goodbye to the hassle of coordinating multiple contractors.',
    'services.s1.h3': 'House Construction',
    'services.s1.p': 'Building custom residential spaces from foundation to roof, designed precisely around your lifestyle and needs.',
    'services.s2.h3': 'Renovation',
    'services.s2.p': 'Comprehensive house renovations, room extensions, structural upgrades, and commercial remodeling.',
    'services.s3.h3': 'Custom Cabinetry',
    'services.s3.p': 'Bespoke kitchen cabinets, built-in wardrobes, TV consoles, and custom wood furnishings, meticulously crafted in-house.',
    'services.s4.h3': 'Curtains & Blinds',
    'services.s4.p': 'Custom-tailored curtains, drapes, blinds, and high-quality textiles to elevate your interior styling.',
    'services.s5.h3': 'Electrical & Plumbing',
    'services.s5.p': 'Certified electrical wiring, custom lighting setups, plumbing repairs, and complete pipe installations.',
    'services.s6.h3': 'Painting',
    'services.s6.p': 'Professional interior and exterior painting, including thorough surface preparation and durable protective finishes.',
    'services.all': 'View All Services',
    'services.click': 'Click to view details',

    // Values
    'values.eyebrow': 'The Cipta Seri Advantage',
    'values.h2': 'Built on precision, not guesswork.',
    'values.v1.h4': 'Transparent Scheduling',
    'values.v1.p': 'We provide a detailed timeline and resource plan before work commences, ensuring zero surprises.',
    'values.v2.h4': 'Single Point of Contact',
    'values.v2.p': 'A dedicated project manager will keep you informed every step of the way—no more chasing multiple contractors.',
    'values.v3.h4': 'Visible Progress',
    'values.v3.p': 'Regular site updates and milestone reviews keep you fully aware of your project\'s status.',
    'values.v4.h4': 'Stringent Quality Control',
    'values.v4.p': 'Every phase undergoes a rigorous inspection before we proceed to the next.',
    'values.v5.h4': 'Punctual Handover',
    'values.v5.p': 'We strictly adhere to agreed-upon schedules, communicating proactively if adjustments are needed.',

    // CTA
    'cta.h2': "Have a space in mind? Let's bring it to life.",
    'cta.btn': 'Talk to Our Team',

    // Footer
    'footer.tagline': 'Premier house construction, renovation, custom cabinetry, curtains, M&E, and painting services based in Klang, Selangor.',
    'footer.site': 'Quick Links',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.copy': '© 2026 Cipta Seri Resources. All rights reserved.',

    // Service Page - Main
    'sp.eyebrow': 'Our Services',
    'sp.h1': '<em>Professional</em> <br> solutions for beautiful, functional spaces.',
    'sp.p': 'From constructing custom homes to bespoke cabinetry, painting, and utility installations, we handle the full spectrum of contracting works with seamless project management.',

    // Service Page - Construction
    'sp.const.eyebrow': 'House Construction',
    'sp.const.h2': 'Custom Residential Spaces',
    'sp.const.p1': 'We construct custom residential spaces from foundation to roof, meticulously tailored to your lifestyle, preferences, and budget. Every home is intelligently planned to maximize functionality, comfort, and long-term value, reflecting your unique vision.',
    'sp.const.p2': 'From site preparation and structural construction to roofing, finishes, and final inspections, our experienced team manages every phase with precision. We are fully committed to quality craftsmanship, transparent communication, and delivering your new home on schedule and within budget.',

    // Service Page - Renovation
    'sp.reno.eyebrow': 'Renovation',
    'sp.reno.h2': 'Comprehensive Renovation Services',
    'sp.reno.p1': "Our complete house renovations, room extensions, structural upgrades, and commercial remodeling services are designed to enhance both the functionality and aesthetics of your property. Whether you are modernizing an outdated space, expanding your home, or transforming a commercial unit, we provide practical, tailored solutions.",
    'sp.reno.p2': 'Our expert team efficiently manages the entire renovation process—from planning and demolition to construction, finishing, and final inspections. With impeccable workmanship and reliable project management, we ensure a seamless renovation experience that elevates the value, comfort, and longevity of your property.',

    // Service Page - Cabinet
    'sp.cab.eyebrow': 'Custom Cabinetry',
    'sp.cab.h2': 'Bespoke Cabinetry Solutions',
    'sp.cab.p1': 'We design and build custom kitchen cabinets, built-in wardrobes, TV consoles, and bespoke wood furnishings tailored specifically to your space and lifestyle. Each piece is precisely measured and crafted to optimize storage, functionality, and visual appeal.',
    'sp.cab.p2': 'From material selection to fabrication and installation, our dedicated in-house team ensures unparalleled precision at every stage. Utilizing premium workmanship and highly durable materials, we create custom cabinetry that blends lasting performance with timeless design.',

    // Service Page - Curtain
    'sp.curt.eyebrow': 'Curtains & Blinds',
    'sp.curt.h2': 'Custom Curtains & Blinds',
    'sp.curt.p1': 'Elevate your home with our custom curtains, drapes, blinds, and premium-quality fabrics designed to seamlessly complement your interior aesthetics. We offer an extensive selection of materials, colors, and finishes to craft window treatments that deliver both elegance and everyday functionality.',
    'sp.curt.p2': 'From precise on-site measurements to flawless fabrication and professional installation, our team guarantees a perfect fit and finish. Every curtain and blind is meticulously tailored to your space, offering enhanced comfort, privacy, and a highly refined look.',

    // Service Page - Plumbing
    'sp.plumb.eyebrow': 'Electrical & Plumbing',
    'sp.plumb.h2': 'Certified Electrical & Plumbing Services',
    'sp.plumb.p1': 'We offer safe, certified electrical and plumbing services, encompassing electrical wiring, custom lighting installations, plumbing repairs, and complete new pipe installations for both residential and commercial properties. Every task is executed with strict precision to guarantee safety, efficiency, and long-term reliability.',
    'sp.plumb.p2': "Our highly skilled technicians utilize industry-approved practices and premium materials to deliver dependable results. Whether it's a brand-new installation, a system upgrade, or a complex repair job, we approach every project with utmost professionalism, keen attention to detail, and minimal disruption to your daily life.",

    // Service Page - Painting
    'sp.paint.eyebrow': 'Painting',
    'sp.paint.h2': 'Professional Painting & Coating Services',
    'sp.paint.p1': 'A flawless result begins with meticulous surface preparation. Our professional painters thoroughly clean, repair, and prime all walls before applying any coating. This crucial step guarantees a smooth, uniform finish that adheres perfectly to both interior and exterior surfaces.',
    'sp.paint.p2': 'High-quality protective paints do much more than simply look aesthetically pleasing. Modern interior and exterior coatings provide a robust shield against harsh weather, moisture, fading, and daily wear. Opting for durable finishes not only protects your property from damage but also instantly boosts its overall market value.',

    // Service Page - Team
    'sp.team.eyebrow': 'Our Team',
    'sp.team.h2': 'Led by experienced industry professionals.',
    'sp.team.p1': 'Overseeing complete project operations, materials sourcing, team coordination, and client communication across Selangor.',
    'sp.team.p2': 'Our skilled custom cabinet and curtain makers who manufacture and install exquisite, bespoke built-ins.',
    'sp.team.p3': 'Seasoned bricklayers, plumbers, electricians, and painters who execute the physical build to the highest possible standards.',
    'sp.team.op_manager': 'Operations Manager',
    'sp.team.fabricators': 'In-house Fabricators',
    'sp.team.utilities': 'Construction & Utilities',
    'sp.team.crew1': 'Custom Carpentry Crew',
    'sp.team.crew2': 'Builders & M&E Crew',

    'sp.cta.h2': "Ready to see if we're the right fit for your project?",
    'sp.cta.btn': 'Get in Touch',

    // Gallery Page
    'gp.eyebrow': 'Gallery',
    'gp.h1': "A closer look at the spaces we've <em>transformed.</em>",
    'gp.p': 'Filter by category to explore our recent renovations, interior designs, and exterior facade projects across Selangor.',
    'gp.filter.all': 'All Projects',
    'gp.filter.reno': 'Renovation',
    'gp.filter.interior': 'Interior Designs',

    'gp.tag.reno': 'Renovation',
    'gp.tag.interior': 'Interior Designs',

    'gp.cap.1': 'Bedroom Dressing Table',
    'gp.cap.2': 'Facade Upgrade',
    'gp.cap.3': 'Cabinetry Upgrade',
    'gp.cap.4': 'Living Room Renovation',
    'gp.cap.5': 'Bathroom Utilities',
    'gp.cap.6': 'Bedroom Vanity',
    'gp.cap.7': 'Front Facade',
    'gp.cap.8': 'Room Renovation',
    'gp.cap.9': 'Balcony Construction',
    'gp.cap.10': 'Full Construction',
    'gp.cap.11': 'Curtain Installation',
    'gp.cap.12': 'Painting Interior Walls',

    'gp.cta.h2': "Inspired by what you see? Let's plan yours.",
    'gp.cta.btn': 'Start a Project',

    // Contact Page
    'cp.eyebrow': 'Contact Us',
    'cp.h1': "Tell us about your space. We'll take it from there.",
    'cp.p': 'Submit your project details below, or reach out to us directly via phone, email, or WhatsApp. Our site visits are complimentary and come with no obligations.',

    'cp.info.eyebrow': 'Get In Touch',
    'cp.info.p': 'Contact Nurul Hazira (Operations Manager) directly, or send us your details using the form. We will respond within one business day.',
    'cp.info.email': 'Email Address',
    'cp.info.phone': 'Phone Number',
    'cp.info.whatsapp': 'WhatsApp',
    'cp.info.office': 'Office Location',
    'cp.info.address': 'Lot 6599, Jalan Kampung Delek Kiri,<br>41250 Klang, Selangor',

    'cp.form.eyebrow': 'Send a Message',
    'cp.form.h3': 'Request a Quote',
    'cp.form.name': 'Full Name',
    'cp.form.phone': 'Phone Number',
    'cp.form.email': 'Email Address',
    'cp.form.service': 'Service Required',
    'cp.form.budget': 'Estimated Budget',
    'cp.form.address': 'Project Location / Address',
    'cp.form.message': 'Project Details',
    'cp.form.submit': 'Send Message',

    'cp.form.opt.select': 'Select a service',
    'cp.form.opt.reno': 'Renovation',
    'cp.form.opt.cab': 'Custom Cabinetry',
    'cp.form.opt.curt': 'Curtains & Blinds',
    'cp.form.opt.plumb': 'Electrical & Plumbing',
    'cp.form.opt.paint': 'Painting',
    'cp.form.opt.other': 'Others',

    'cp.form.opt.budget.select': 'Select your budget',
    'cp.form.opt.budget.1': 'Below RM5,000',
    'cp.form.opt.budget.2': 'RM5,000 - RM10,000',
    'cp.form.opt.budget.3': 'RM10,000 - RM20,000',
    'cp.form.opt.budget.4': 'RM20,000 - RM50,000',
    'cp.form.opt.budget.5': 'Above RM50,000',
    'cp.form.opt.budget.6': 'Not Sure',

    'cp.form.pl.name': 'Your full name',
    'cp.form.pl.phone': 'e.g., 012-345 6789',
    'cp.form.pl.email': 'you@example.com',
    'cp.form.pl.address': 'e.g., Kajang, Selangor',
    'cp.form.pl.message': "Please provide details about your space, its size, and your requirements.",

    'cp.find.eyebrow': 'Our Location',
    'cp.find.h2': 'Visit our office in Klang, Selangor',

    'breadcrumb.home': 'Home',
    'breadcrumb.service': 'Services',
    'breadcrumb.gallery': 'Gallery',
    'breadcrumb.contact': 'Contact Us'
  },

  ms: {
    // Nav
    'nav.home': 'Laman Utama',
    'nav.service': 'Perkhidmatan',
    'nav.gallery': 'Galeri',
    'nav.contact': 'Hubungi Kami',
    'nav.quote': 'Dapatkan Sebut Harga',

    // Hero
    'hero.tag': 'KLANG, SELANGOR - PEMBINAAN & UBAH SUAI RUMAH',
    'hero.h1': 'Kami reka,<br>kami bina, <em>kami sempurnakan.</em>',
    'hero.lede': 'Cipta Seri Resources menguruskan projek anda dari lakaran awal hingga penyerahan kunci. Kepakaran kami merangkumi pembinaan rumah, ubah suai, kabinet tempahan khas, langsir, dan kerja utiliti—semuanya di bawah satu bumbung.',
    'hero.cta1': 'Minta Sebut Harga',
    'hero.cta2': 'Terokai Perkhidmatan Kami',

    // Stats
    'stat.projects': 'Projek Disiapkan',
    'stat.years': 'Tahun Pengalaman',
    'stat.team': 'Pakar Dalaman',
    'stat.clients': 'Pelanggan Berulang',

    // About
    'about.eyebrow': 'Mengenai Kami',
    'about.h2': '<em>R</em>EKAAN<br>BERMATLAMAT',
    'about.p': 'Di Cipta Seri, kami percaya bahawa reka bentuk dalaman bukan sekadar rupa paras—ia mengenai suasana yang tercipta. Kami mengendalikan setiap projek sebagai satu gubahan cahaya, bentuk, dan fungsi yang teliti, di mana kejelasan bertemu keindahan.',
    'about.link': 'KETAHUI LEBIH LANJUT',

    // Services Teaser
    'services.eyebrow': 'Kepakaran Kami',
    'services.h2': 'Penyelesaian hartanah lengkap di bawah satu bumbung.',
    'services.p': 'Dari pembinaan struktur hingga ke sapuan cat terakhir, kami mengurus dan melaksanakan setiap fasa. Tidak perlu lagi bersusah payah berurusan dengan pelbagai kontraktor yang berbeza.',
    'services.s1.h3': 'Pembinaan Rumah',
    'services.s1.p': 'Membina ruang kediaman dari asas hingga bumbung, direka khusus mengikut gaya hidup dan keperluan anda.',
    'services.s2.h3': 'Ubah Suai',
    'services.s2.p': 'Ubah suai rumah menyeluruh, penambahan bilik, naik taraf struktur, dan pengubahsuaian komersial.',
    'services.s3.h3': 'Kabinet Tempahan Khas',
    'services.s3.p': 'Kabinet dapur, almari pakaian pasang siap, konsol TV, dan perabot kayu khas, semuanya dihasilkan oleh pasukan dalaman kami.',
    'services.s4.h3': 'Langsir & Bidai',
    'services.s4.p': 'Langsir jahitan khas, tirai, bidai, dan fabrik berkualiti tinggi untuk menaik taraf gaya dalaman anda.',
    'services.s5.h3': 'Pendawaian & Perpaipan',
    'services.s5.p': 'Pendawaian elektrik yang diiktiraf, pemasangan pencahayaan, pembaikan paip, dan pemasangan sistem paip yang lengkap.',
    'services.s6.h3': 'Pengecatan',
    'services.s6.p': 'Pengecatan dalaman dan luaran profesional, termasuk penyediaan permukaan yang rapi dan lapisan pelindung yang tahan lama.',
    'services.all': 'Lihat Semua Perkhidmatan',
    'services.click': 'Klik untuk butiran lanjut',

    // Values
    'values.eyebrow': 'Kelebihan Cipta Seri',
    'values.h2': 'Dibina dengan ketepatan, bukan tekaan.',
    'values.v1.h4': 'Penjadualan Telus',
    'values.v1.p': 'Kami menyediakan garis masa dan pelan sumber yang terperinci sebelum kerja bermula, bagi mengelakkan sebarang kejutan.',
    'values.v2.h4': 'Satu Titik Perhubungan',
    'values.v2.p': 'Pengurus projek khas akan sentiasa memaklumkan perkembangan terkini kepada anda—tidak perlu lagi mengejar pelbagai kontraktor.',
    'values.v3.h4': 'Perkembangan Jelas',
    'values.v3.p': 'Kemas kini tapak secara berkala dan semakan pencapaian memastikan anda sentiasa maklum akan status projek.',
    'values.v4.h4': 'Kawalan Kualiti Ketat',
    'values.v4.p': 'Setiap fasa akan melalui pemeriksaan rapi sebelum kami beralih ke peringkat seterusnya.',
    'values.v5.h4': 'Penyerahan Tepat Masa',
    'values.v5.p': 'Kami mematuhi jadual yang dipersetujui sepenuhnya, dan akan memaklumkan anda lebih awal sekiranya terdapat sebarang perubahan.',

    // CTA
    'cta.h2': 'Ada ruang idaman? Mari kita realisasikannya.',
    'cta.btn': 'Hubungi Pasukan Kami',

    // Footer
    'footer.tagline': 'Perkhidmatan utama pembinaan rumah, ubah suai, kabinet khas, langsir, M&E, dan pengecatan yang berpusat di Klang, Selangor.',
    'footer.site': 'Pautan Pantas',
    'footer.services': 'Perkhidmatan',
    'footer.contact': 'Hubungi',
    'footer.copy': '© 2026 Cipta Seri Resources. Hak cipta terpelihara.',

    // Service Page - Main
    'sp.eyebrow': 'Perkhidmatan Kami',
    'sp.h1': 'Penyelesaian <em>profesional</em> <br> untuk ruang yang cantik dan berfungsi.',
    'sp.p': 'Daripada pembinaan kediaman khas hingga kabinet tempahan khas, pengecatan, dan pemasangan utiliti, kami mengendalikan pelbagai kerja kontraktor dengan pengurusan projek yang lancar.',

    // Service Page - Construction
    'sp.const.eyebrow': 'Pembinaan Rumah',
    'sp.const.h2': 'Ruang Kediaman Khas',
    'sp.const.p1': 'Kami membina ruang kediaman dari asas ke bumbung, disesuaikan dengan teliti mengikut gaya hidup, keutamaan, dan bajet anda. Setiap rumah dirancang dengan bijak untuk memaksimumkan fungsi, keselesaan, dan nilai jangka panjang, di samping mencerminkan visi unik anda.',
    'sp.const.p2': 'Daripada penyediaan tapak dan pembinaan struktur kepada pemasangan bumbung, kemasan, dan pemeriksaan akhir, pasukan kami yang berpengalaman menguruskan setiap fasa dengan tepat. Kami komited sepenuhnya kepada hasil kerja berkualiti, komunikasi telus, dan penyerahan rumah baharu anda tepat pada masanya.',

    // Service Page - Renovation
    'sp.reno.eyebrow': 'Ubah Suai',
    'sp.reno.h2': 'Perkhidmatan Ubah Suai Menyeluruh',
    'sp.reno.p1': "Perkhidmatan ubah suai rumah, penambahan bilik, naik taraf struktur, dan pengubahsuaian komersial kami direka khusus untuk meningkatkan fungsi dan estetika hartanah anda. Sama ada anda memodenkan ruang sedia ada, membesarkan rumah, atau menaik taraf unit komersial, kami menyediakan penyelesaian yang praktikal.",
    'sp.reno.p2': 'Pasukan pakar kami menguruskan keseluruhan proses ubah suai dengan cekap—dari perancangan dan perobohan kepada pembinaan, kemasan, dan pemeriksaan akhir. Dengan mutu kerja yang cemerlang dan pengurusan projek yang boleh dipercayai, kami memastikan pengalaman ubah suai yang lancar dan meningkatkan nilai hartanah anda.',

    // Service Page - Cabinet
    'sp.cab.eyebrow': 'Kabinet Tempahan Khas',
    'sp.cab.h2': 'Penyelesaian Kabinet Tempahan Khas',
    'sp.cab.p1': 'Kami mereka bentuk dan membina kabinet dapur, almari pakaian, konsol TV, dan perabot kayu yang disesuaikan secara khusus dengan ruang dan gaya hidup anda. Setiap bahagian diukur dengan tepat dan direka untuk memaksimumkan storan, fungsi, dan daya tarikan visual.',
    'sp.cab.p2': 'Daripada pemilihan bahan kepada fabrikasi dan pemasangan, pasukan dalaman kami yang berdedikasi memastikan ketepatan yang tiada tandingan pada setiap peringkat. Dengan menggunakan kepakaran tinggi dan bahan tahan lama, kami mencipta kabinet yang menggabungkan prestasi berkekalan dengan rekaan yang malar segar.',

    // Service Page - Curtain
    'sp.curt.eyebrow': 'Langsir & Bidai',
    'sp.curt.h2': 'Langsir & Bidai Tempahan Khas',
    'sp.curt.p1': 'Serikan kediaman anda dengan langsir, tirai, bidai, dan fabrik berkualiti premium jahitan khas kami, direka untuk melengkapkan estetika dalaman anda. Kami menawarkan pelbagai pilihan bahan, warna, dan kemasan untuk menghasilkan hiasan tingkap yang menawan dan praktikal.',
    'sp.curt.p2': 'Daripada ukuran di tapak yang tepat kepada fabrikasi tanpa cela dan pemasangan profesional, pasukan kami menjamin hasil yang sempurna. Setiap langsir dan bidai disesuaikan dengan ruang anda, menawarkan keselesaan, privasi, serta rupa yang sangat halus dan kemas.',

    // Service Page - Plumbing
    'sp.plumb.eyebrow': 'Pendawaian & Perpaipan',
    'sp.plumb.h2': 'Perkhidmatan Pendawaian & Perpaipan Berlesen',
    'sp.plumb.p1': 'Kami menawarkan perkhidmatan pendawaian elektrik dan perpaipan yang selamat, termasuk pemasangan pencahayaan, pembaikan paip, dan pemasangan sistem paip baharu untuk hartanah kediaman serta komersial. Setiap tugasan dilaksanakan dengan ketepatan yang tinggi untuk menjamin keselamatan dan kebolehpercayaan jangka panjang.',
    'sp.plumb.p2': "Juruteknik kami yang berkemahiran tinggi menggunakan amalan yang diluluskan industri dan bahan premium untuk memberikan hasil yang meyakinkan. Sama ada pemasangan baharu, peningkatan sistem, atau kerja pembaikan yang kompleks, kami melaksanakan setiap projek dengan penuh profesionalisme dan teliti.",

    // Service Page - Painting
    'sp.paint.eyebrow': 'Pengecatan',
    'sp.paint.h2': 'Perkhidmatan Mengecat & Salutan Profesional',
    'sp.paint.p1': 'Hasil yang sempurna bermula dengan penyediaan permukaan yang rapi. Tukang cat profesional kami akan membersihkan, membaiki, dan menyapu lapisan asas (primer) sebelum sebarang warna diaplikasikan. Langkah penting ini menjamin kemasan yang licin, sekata, dan melekat dengan sempurna.',
    'sp.paint.p2': 'Cat pelindung berkualiti tinggi bukan sahaja mencantikkan ruang. Salutan dalaman dan luaran moden memberikan perlindungan yang kukuh terhadap cuaca buruk, kelembapan, pudar, dan kehausan harian. Pemilihan kemasan yang tahan lama mampu melindungi hartanah anda serta meningkatkan nilai pasarannya serta-merta.',

    // Service Page - Team
    'sp.team.eyebrow': 'Pasukan Kami',
    'sp.team.h2': 'Diterajui oleh barisan profesional industri yang berpengalaman.',
    'sp.team.p1': 'Menyelia keseluruhan operasi projek, penyumberan bahan, penyelarasan pasukan, dan komunikasi pelanggan di seluruh Selangor.',
    'sp.team.p2': 'Pembuat kabinet khas dan langsir mahir kami yang menghasilkan serta memasang kelengkapan ruang terbina dalam yang memukau.',
    'sp.team.p3': 'Tukang pasang bata, tukang paip, juruelektrik, dan tukang cat berpengalaman yang melaksanakan proses pembinaan pada standard yang tertinggi.',
    'sp.team.op_manager': 'Pengurus Operasi',
    'sp.team.fabricators': 'Pasukan Fabrikasi Dalaman',
    'sp.team.utilities': 'Pembinaan & Utiliti',
    'sp.team.crew1': 'Kru Pertukangan Khas',
    'sp.team.crew2': 'Kru Pembinaan & M&E',

    'sp.cta.h2': "Ingin tahu jika kami pilihan tepat untuk projek anda?",
    'sp.cta.btn': 'Hubungi Kami',

    // Gallery Page
    'gp.eyebrow': 'Galeri',
    'gp.h1': 'Lihat lebih dekat ruang yang telah kami <em>ubah suai.</em>',
    'gp.p': 'Tapis mengikut kategori untuk meneroka projek ubah suai, reka bentuk dalaman, dan fasad luaran terkini kami di seluruh Selangor.',
    'gp.filter.all': 'Semua Projek',
    'gp.filter.reno': 'Ubah Suai',
    'gp.filter.interior': 'Reka Bentuk Dalaman',

    'gp.tag.cab': 'Kabinet & Langsir',
    'gp.tag.reno': 'Ubah Suai',
    'gp.tag.const': 'Pembinaan Rumah',
    'gp.tag.paint': 'Pengecatan & M&E',

    'gp.cap.1': 'Meja Solek Bilik Tidur',
    'gp.cap.2': 'Naik Taraf Fasad',
    'gp.cap.3': 'Naik Taraf Kabinet',
    'gp.cap.4': 'Ubah Suai Ruang Tamu',
    'gp.cap.5': 'Utiliti Bilik Mandi',
    'gp.cap.6': 'Solekan Bilik Tidur',
    'gp.cap.7': 'Fasad Hadapan',
    'gp.cap.8': 'Ubah Suai Bilik',
    'gp.cap.9': 'Pembinaan Balkoni',
    'gp.cap.10': 'Pembinaan Menyeluruh',
    'gp.cap.11': 'Pemasangan Langsir',

    'gp.cta.h2': 'Tergamit dengan hasil kerja kami? Mari rancang ruang anda.',
    'gp.cta.btn': 'Mulakan Projek',

    // Contact Page
    'cp.eyebrow': 'Hubungi Kami',
    'cp.h1': 'Kongsikan mengenai ruang anda. Kami akan uruskan selebihnya.',
    'cp.p': 'Hantar butiran projek anda di bawah, atau hubungi kami terus melalui telefon, e-mel, atau WhatsApp. Lawatan tapak adalah percuma tanpa sebarang ikatan.',

    'cp.info.eyebrow': 'Berhubung dengan Kami',
    'cp.info.p': 'Hubungi Nurul Hazira (Pengurus Operasi) secara terus, atau hantar butiran anda melalui borang ini. Kami akan membalas pertanyaan anda dalam masa satu hari bekerja.',
    'cp.info.email': 'Alamat E-mel',
    'cp.info.phone': 'Nombor Telefon',
    'cp.info.whatsapp': 'WhatsApp',
    'cp.info.office': 'Lokasi Pejabat',
    'cp.info.address': 'Lot 6599, Jalan Kampung Delek Kiri,<br>41250 Klang, Selangor',

    'cp.form.eyebrow': 'Hantar Mesej',
    'cp.form.h3': 'Dapatkan Sebut Harga',
    'cp.form.name': 'Nama Penuh',
    'cp.form.phone': 'Nombor Telefon',
    'cp.form.email': 'Alamat E-mel',
    'cp.form.service': 'Perkhidmatan Diperlukan',
    'cp.form.budget': 'Anggaran Bajet',
    'cp.form.address': 'Lokasi / Alamat Projek',
    'cp.form.message': 'Butiran Projek',
    'cp.form.submit': 'Hantar Mesej',

    'cp.form.opt.select': 'Pilih perkhidmatan',
    'cp.form.opt.reno': 'Ubah Suai',
    'cp.form.opt.cab': 'Kabinet Tempahan Khas',
    'cp.form.opt.curt': 'Langsir & Bidai',
    'cp.form.opt.plumb': 'Pendawaian & Perpaipan',
    'cp.form.opt.paint': 'Pengecatan',
    'cp.form.opt.other': 'Lain-lain ',

    'cp.form.opt.budget.select': 'Pilih bajet anda',
    'cp.form.opt.budget.1': 'Bawah RM5,000',
    'cp.form.opt.budget.2': 'RM5,000 - RM10,000',
    'cp.form.opt.budget.3': 'RM10,000 - RM20,000',
    'cp.form.opt.budget.4': 'RM20,000 - RM50,000',
    'cp.form.opt.budget.5': 'Lebih RM50,000',
    'cp.form.opt.budget.6': 'Tidak Pasti',

    'cp.form.pl.name': 'Nama penuh anda',
    'cp.form.pl.phone': 'cth., 012-345 6789',
    'cp.form.pl.email': 'anda@contoh.com',
    'cp.form.pl.address': 'cth., Kajang, Selangor',
    'cp.form.pl.message': "Sila berikan butiran mengenai ruang, saiz, dan keperluan anda.",

    'cp.find.eyebrow': 'Lokasi Kami',
    'cp.find.h2': 'Kunjungi pejabat kami di Klang, Selangor',

    'breadcrumb.home': 'Laman Utama',
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

// Show the OPPOSITE language on the button
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
