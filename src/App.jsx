import React, { useState, useEffect } from "react";
import photo from "./assets/images/photo.png";
import perpus1 from "./assets/images/perpus1.png";
import perpus2 from "./assets/images/perpus2.png";
import simaset1 from "./assets/images/simaset1.png";
import simaset2 from "./assets/images/simaset2.png";
import blog1 from "./assets/images/blog1.png";
import blog2 from "./assets/images/blog2.png";

import {
  Code,
  LineChart,
  Wallet,
  ArrowRight,
  Download,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Linkedin,
} from "lucide-react";

// --- 1. DATA PROJECT ---
const timelineProjects = [
  {
    year: "2024",
    title: "Web Perpustakaan Spring Boot",
    role: "Academic Project",
    desc: "Sistem manajemen perpustakaan full-stack dengan arsitektur MVC. Mengintegrasikan dashboard statistik real-time, validasi login multi-role (Admin & User), dan CRUD manajemen buku menggunakan Spring Data JPA.",    
    tags: ["Java Spring Boot", "Bootstrap", "MVC Architecture"],
    align: "left",
    images: [perpus1, perpus2], 
    link: "https://github.com/doren10/SpringBoot_Perpustakaan",
  },
  {
    year: "2023",
    title: "Sistem Manajemen Aset (SIMASET)",
    role: "Internship @ SMK Telkom",
    desc: "Melakukan pengembangan website manajemen aset dengan penambahan menu pencatatan Air PDAM, fitur download format Excel, serta integrasi QR Code untuk identifikasi aset sekolah.",    
    tags: ["Laravel (PHP)", "MySQL", "QR Code Logic"],
    align: "right",
    images: [simaset1, simaset2], // Pastikan ini array meskipun cuma 1 gambar agar tidak error
    link: "https://github.com/Unit-Produksi-Telkom-Jakarta/asset-management-telkom",
  },
  {
    year: "2022",
    title: "SEO Specialist & Content",
    role: "Internship @ SARI Teknologi",
    desc: "Berhasil menaikkan traffic organik website dan mencapai peringkat #1 Google untuk keyword 'Robotika Indonesia' melalui strategi SEO On-page.",
    tags: ["SEO Audit", "Google Analytics", "Content Strategy"],
    align: "left",
    images: [perpus1],
  },
  {
    year: "2020 - Now",
    title: "PopcornTalks & Sevolution Blog",
    role: "Personal Project",
    desc: "Mengembangkan platform review film yang SEO-friendly. Mengoptimalkan template, meta tags, dan struktur konten untuk menjangkau audiens organik.",
    tags: ["Blogger XML", "HTML/CSS", "SEO Copywriting"],
    align: "right",
    images: [blog1, blog2],
    link: "https://www.blogger.com/follower/view/06387980882884002125/4948112002748433061",
  },
];

// --- 2. KOMPONEN ITEM TIMELINE (CAROUSEL OTOMATIS) ---
const TimelineItem = ({ project }) => {
  const images = project.images || (project.image ? [project.image] : []);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className={`relative flex flex-col md:flex-row items-center ${
        project.align === "right" ? "md:flex-row-reverse" : ""
      }`}>
      
      {/* Dot Penanda Tengah */}
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-x-1/2 w-4 h-4 bg-blue-900 rounded-full border-4 border-white shadow-sm z-10 mt-1.5 md:mt-0"></div>

      {/* --- KONTEN TEKS --- */}
      <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${
          project.align === "right" ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"
        }`}>
        
        {/* CAROUSEL MOBILE */}
        <div className="md:hidden relative w-full mb-4 h-48 rounded-lg overflow-hidden shadow-md bg-gray-100">
          {images.map((imgSrc, i) => (
            <img key={i} src={imgSrc} alt="Project"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                i === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            />
          ))}
        </div>

        {/* Info Project (Tahun & Role) */}
        <div className={`flex items-center gap-2 mb-2 ${project.align === "right" ? "md:justify-end" : "md:justify-start"}`}>
          <span className="px-3 py-1 bg-blue-50 text-blue-900 text-xs font-bold rounded-full border border-blue-100">{project.year}</span>
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">{project.role}</span>
        </div>

        {/* Judul & Deskripsi */}
        <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
        <p className="text-slate-600 leading-relaxed mb-4 text-sm">{project.desc}</p>
        
        {/* Tags */}
        <div className={`flex flex-wrap gap-2 ${project.align === "right" ? "md:justify-end" : "md:justify-start"}`}>
          {project.tags.map((tag, i) => (
            <span key={i} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded border border-slate-200">{tag}</span>
          ))}
        </div>

        {/* Tombol Link Project (Biru & Rapi) */}
        {project.link && (
          <div className={`mt-6 flex ${project.align === "right" ? "md:justify-end" : "md:justify-start"}`}>
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-all shadow-sm group"
            >
              Lihat Project 
              <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        )}
      </div>

      {/* --- GAMBAR DESKTOP --- */}
      <div className={`hidden md:block w-1/2 ${project.align === "right" ? "pl-16" : "pr-16"}`}>
        <div className="group relative rounded-xl overflow-hidden shadow-lg border border-slate-100 h-64">
          {images.map((imgSrc, i) => (
            <img key={i} src={imgSrc} alt="Project Desktop"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                i === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors duration-300 z-20"></div>
        </div>
      </div>
    </div>
  );
};

// --- 3. MAIN COMPONENT ---
const App = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? timelineProjects : timelineProjects.slice(0, 2);

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-blue-100">
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm border-b border-slate-100 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tight text-blue-900">
            Doren A.L.
          </h1>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#home" className="hover:text-blue-900 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-900 transition-colors">About</a>
            <a href="#projects" className="hover:text-blue-900 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-blue-900 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-800 text-xs font-bold tracking-wide uppercase">
              Open for Internship / Fulltime
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Hi, I'm <span className="text-blue-900">Doren Airhan Lowell</span>.
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-700 font-medium">
              Information Systems Student & Web Developer
            </h2>
            <p className="text-lg text-slate-600 max-w-md leading-relaxed">
              Mahasiswa semester 6 Universitas Tarumanagara dengan pengalaman membangun solusi web (Laravel & Spring Boot) dan strategi SEO yang terbukti.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#contact" className="px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors flex items-center gap-2">
                Contact Me <ArrowRight size={18} />
              </a>
              <a href="#" className="px-6 py-3 border border-slate-300 text-slate-700 font-semibold rounded-lg hover:border-blue-900 hover:text-blue-900 transition-colors flex items-center gap-2">
                Download CV <Download size={18} />
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96 bg-slate-100 rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10">
              <img src={photo} alt="Profile" className="w-full h-full object-cover object-top" />
            </div>
          </div>
        </div>
      </section>

      {/* --- SKILLS --- */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Core Competencies</h2>
            <p className="text-slate-500 mt-2">Kombinasi kemampuan teknis dan manajemen organisasi.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Code className="text-blue-900" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Web Development</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">Pengembangan Backend & Frontend menggunakan PHP (Laravel) dan Java Spring Boot.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <LineChart className="text-blue-900" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">SEO Specialist</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">Berpengalaman menaikkan ranking website ke halaman #1 Google melalui SEO On-page & Off-page.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Wallet className="text-blue-900" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Finance</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">Pengalaman manajemen anggaran organisasi sebagai Bendahara MAPALA.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- TECH STACK / SKILLS SECTION --- */}
      <section className="py-10 border-t border-slate-100 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-slate-500 text-sm font-semibold uppercase tracking-wider mb-8">
            Technologies & Tools I Use
          </p>
          
          {/* Grid Layout untuk Skills */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            {/* Group 1: Frontend */}
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 text-sm">Frontend</h4>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 bg-slate-50 text-slate-600 rounded text-xs border border-slate-200">React JS</span>
                <span className="px-3 py-1 bg-slate-50 text-slate-600 rounded text-xs border border-slate-200">Tailwind CSS</span>
                <span className="px-3 py-1 bg-slate-50 text-slate-600 rounded text-xs border border-slate-200">Bootstrap 5</span>
                <span className="px-3 py-1 bg-slate-50 text-slate-600 rounded text-xs border border-slate-200">HTML/CSS</span>
              </div>
            </div>

            {/* Group 2: Backend */}
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 text-sm">Backend</h4>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 bg-slate-50 text-slate-600 rounded text-xs border border-slate-200">Java Spring Boot</span>
                <span className="px-3 py-1 bg-slate-50 text-slate-600 rounded text-xs border border-slate-200">Laravel (PHP)</span>
                <span className="px-3 py-1 bg-slate-50 text-slate-600 rounded text-xs border border-slate-200">MySQL</span>
              </div>
            </div>

            {/* Group 3: Tools */}
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 text-sm">Tools</h4>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 bg-slate-50 text-slate-600 rounded text-xs border border-slate-200">Git / GitHub</span>
                <span className="px-3 py-1 bg-slate-50 text-slate-600 rounded text-xs border border-slate-200">VS Code</span>
                <span className="px-3 py-1 bg-slate-50 text-slate-600 rounded text-xs border border-slate-200">Canva</span>
                <span className="px-3 py-1 bg-slate-50 text-slate-600 rounded text-xs border border-slate-200">Figma</span>
              </div>
            </div>

            {/* Group 4: Others (SEO & Soft Skills) */}
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 text-sm">Others</h4>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 bg-slate-50 text-slate-600 rounded text-xs border border-slate-200">SEO Audit</span>
                <span className="px-3 py-1 bg-slate-50 text-slate-600 rounded text-xs border border-slate-200">Google Analytics</span>
                <span className="px-3 py-1 bg-slate-50 text-slate-600 rounded text-xs border border-slate-200">Team Leadership</span>
                <span className="px-3 py-1 bg-slate-50 text-slate-600 rounded text-xs border border-slate-200">Financial Mgmt</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- TIMELINE PROJECTS SECTION --- */}
      <section id="projects" className="py-20 px-6 bg-white min-h-screen">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Experience Timeline</h2>
            <p className="text-slate-500 mt-2">Perjalanan karir dan proyek teknis.</p>
          </div>

          {/* Timeline Container (Garis & List Project) */}
          <div className="relative">
            {/* Garis Vertikal (Hanya membungkus list project) */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-100"></div>
            <div className="md:hidden absolute left-4 h-full w-0.5 bg-blue-100"></div>

            {/* List Projects */}
            <div className="space-y-16">
              {displayedProjects.map((project, index) => (
                <TimelineItem key={index} project={project} />
              ))}
            </div>
          </div> 
          {/* ^^^ PENTING: Penutup div 'relative' ada DI SINI (Sebelum tombol) */}

          {/* Tombol Show More (Sudah di luar garis timeline) */}
          {timelineProjects.length > 2 && (
            <div className="text-center mt-20">
              <button 
                onClick={() => setShowAll(!showAll)}
                className="px-8 py-3 bg-white text-blue-900 font-bold rounded-full border-2 border-blue-900 hover:bg-blue-900 hover:text-white transition-all shadow-md"
              >
                {showAll ? "Tampilkan Lebih Sedikit" : "Lihat Selengkapnya"}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* --- EDUCATION & CERTIFICATIONS --- */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-10 text-center">
            Education & Certifications
          </h2>

          <div className="space-y-6">
            {/* Kampus */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <h3 className="font-bold text-lg text-slate-900">
                  Universitas Tarumanagara
                </h3>
                <p className="text-slate-600">
                  S1 Sistem Informasi (Semester 6)
                </p>
              </div>
              <div className="text-center md:text-right">
                <span className="block font-bold text-blue-900">
                  IPK 3.41 / 4.00
                </span>
                <span className="text-sm text-slate-500">Agustus 2023 - Sekarang</span>
              </div>
            </div>

            {/* SMK */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <h3 className="font-bold text-lg text-slate-900">
                  SMK Telkom Jakarta
                </h3>
                <p className="text-slate-600">Rekayasa Perangkat Lunak (RPL)</p>
              </div>
              <div className="text-center md:text-right">
                <span className="block font-bold text-blue-900">
                  86.32/100
                </span>
                <span className="text-sm text-slate-500">
                  Jul 2020 - Jul 2023
                </span>
              </div>
            </div>

            {/* Certifications Badge */}
            <div className="flex justify-center pt-8 gap-4 flex-wrap">
              <div className="px-6 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-800 text-sm font-semibold">
                BNSP: Digital Marketing
              </div>
              <div className="px-6 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-800 text-sm font-semibold">
                BNSP: Rekayasa Perangkat Lunak
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contact" className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">Let's Work Together</h2>
          <div className="flex flex-col md:flex-row justify-center gap-6 text-slate-600">
            <a href="mailto:dorenairhan20@gmail.com" className="flex items-center justify-center gap-2 hover:text-blue-900">
              <Mail size={18} /> dorenairhan20@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/doren-airhan-lowell/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 hover:text-blue-900 transition-colors"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
            <span className="flex items-center justify-center gap-2">
              <Phone size={18} /> +62 852 1957 9258
            </span>
            <span className="flex items-center justify-center gap-2">
              <MapPin size={18} /> Jakarta, Indonesia
            </span>
          </div>
          <div className="pt-8 text-xs text-slate-400">
            &copy; {new Date().getFullYear()} Doren Airhan Lowell. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;