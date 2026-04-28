const logos = [
  { name: "loom", style: "font-semibold" },
  { name: "airbnb", style: "font-bold italic" },
  { name: "Notion", style: "font-semibold" },
  { name: "HubSpot", style: "font-bold" },
  { name: "stripe", style: "font-semibold" },
  { name: "webflow", style: "font-bold" },
];

export default function Logos() {
  return (
    <section className="bg-[#f6f6fb] py-14 px-8 lg:px-16 border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto">
        <p className="text-center text-[0.65rem] font-extrabold tracking-[0.25em] text-gray-400 uppercase mb-10">
          Trusted By Innovative Companies
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-14 gap-y-6">
          {logos.map((logo) => (
            <span
              key={logo.name}
              className={`text-xl text-gray-300 hover:text-gray-600 transition-colors duration-300 cursor-pointer select-none ${logo.style}`}
            >
              {logo.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
