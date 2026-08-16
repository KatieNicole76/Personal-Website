import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function ExperienceCard({ company, dates, role, bullets = [], variant = "dark", className = "" }) {
    const [isOpen, setIsOpen] = useState(true);
    const hasBullets = bullets.length > 0;
    const base = "torn-edge-y p-2 cursor-pointer";
    const variants = {
        dark: "bg-darkest-green text-gold",
        light: "bg-gold text-black",
    };
    const caretColor = {
        dark: "text-gold",
        light: "text-black",
    };
    const muted_colors = {
        dark: "text-gold-muted",
        light: "text-black",
    };

  const header = (
    <div className="flex items-center justify-between">
        <h3 className="text-h3">{company}</h3>
        <div className="flex items-center gap-2">
            <p className={`text-body2 ${muted_colors[variant]}`}>{dates}</p>
            {hasBullets && (
                <ChevronDown size={20} className={`${caretColor[variant]} transition-transform ${isOpen ? "rotate-180" : ""}`}/>
            )}
        </div>
    </div>
  );

  return (
    <div className={`${base} ${variants[variant]} ${className}`}>
        {hasBullets ? (
            <button onClick={() => setIsOpen(!isOpen)} className="w-full text-left">
                {header}
                <p className="text-body2 italic">{role}</p>
            </button>
        ) : (
            <div className="w-full text-left">
                {header}
                <p className="text-body2 italic">{role}</p>
            </div>
        )}

        {hasBullets && isOpen && (
            <ul className="text-body1 mt-2">
                {bullets.map((bullet, i) => (
                <li key={i} className="flex mb-1">
                    <p className={`${muted_colors[variant]}`}>•</p>
                    <p className="ml-1">{bullet}</p>
                </li>
                ))}
            </ul>
        )}
    </div>
);
}