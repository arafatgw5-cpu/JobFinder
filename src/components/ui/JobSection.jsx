import React from "react";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    description: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour",
  },
  {
    id: 2,
    title: "Frontend Developer",
    description: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour",
  },
  {
    id: 3,
    title: "Frontend Developer",
    description: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour",
  },
  {
    id: 4,
    title: "Frontend Developer",
    description: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour",
  },
  {
    id: 5,
    title: "Frontend Developer",
    description: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour",
  },
  {
    id: 6,
    title: "Frontend Developer",
    description: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour",
  },
];

const LocationIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const HybridIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
  </svg>
);

const SalaryIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M14.31 8a4 4 0 0 0-4.62 0C8.39 8.78 8 10 8 12s.39 3.22 1.69 4a4 4 0 0 0 4.62 0" />
    <path d="M12 6v2M12 16v2" />
  </svg>
);

const JobCard = ({ job }) => (
  <div className="group relative bg-[#1a1a1d] border border-white/[0.07] rounded-2xl p-7 flex flex-col justify-between min-h-[230px] hover:border-white/[0.14] hover:bg-[#1e1e22] transition-all duration-300 cursor-pointer overflow-hidden">
    {/* top-right subtle glow on hover */}
    <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full bg-[#6B4BFF]/0 group-hover:bg-[#6B4BFF]/[0.06] transition-all duration-300 pointer-events-none" />

    {/* Content */}
    <div>
      <h3 className="text-[20px] font-bold text-white mb-2 leading-tight">{job.title}</h3>
      <p className="text-[13px] text-zinc-400 leading-relaxed max-w-[280px]">{job.description}</p>
    </div>

    {/* Tags + CTA */}
    <div>
      {/* Tags row 1 */}
      <div className="flex flex-wrap gap-2 mt-5 mb-2">
        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] text-zinc-300 text-[12px] font-medium">
          <LocationIcon /> {job.location}
        </span>
        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] text-zinc-300 text-[12px] font-medium">
          <HybridIcon /> {job.type}
        </span>
      </div>
      {/* Tags row 2 */}
      <div className="flex flex-wrap gap-2 mb-5">
        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] text-zinc-300 text-[12px] font-medium">
          <SalaryIcon /> {job.salary}
        </span>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-white/[0.06] mb-5" />

      {/* Apply Now */}
      <button className="flex items-center gap-2 text-[14px] font-semibold text-white group-hover:text-[#a78bfa] transition-colors duration-200">
        Apply Now
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-200">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </button>
    </div>
  </div>
);

const JobsSection = () => {
  return (
    <section className="relative w-full bg-[#050505] py-24 px-6 overflow-hidden font-sans">

      {/* ── Grid texture ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* ── Glow ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#4328EB]/15 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-sm bg-[#6B4BFF]" />
            <span className="text-[11px] font-bold tracking-[0.22em] text-zinc-400 uppercase">Smart Job Discovery</span>
            <span className="w-2 h-2 rounded-sm bg-[#6B4BFF]" />
          </div>

          <h2
            className="text-4xl md:text-[52px] font-bold text-white leading-tight tracking-tight max-w-[600px]"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            The roles you'd never<br />find by searching
          </h2>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {/* ── View All Button ── */}
        <div className="flex justify-center mt-14">
          <button className="px-8 py-3.5 rounded-full border border-white/20 bg-white/[0.04] text-white text-[14px] font-semibold hover:bg-white/[0.08] hover:border-white/30 transition-all duration-200 backdrop-blur-sm">
            View all job open
          </button>
        </div>

      </div>
    </section>
  );
};

export default JobsSection;