
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function ExperienceCard({ company, dates, role, bullets, variant = "dark", className = "" }) {
    const [isOpen, setIsOpen] = useState(true);
    const base = "torn-edge p-2";
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
        light: "text-black-muted",
    };

  return (
    <div className={`${base} ${variants[variant]} ${className}`}>
        <button onClick={() => setIsOpen(!isOpen)} className="w-full text-left">
            <div className="flex items-center justify-between">
                <h3 className="text-h3">{company}</h3>
                <div className="flex items-center gap-2">
                    <p className="text-body2 ${muted_colors[variant]}">{dates}</p>
                    <ChevronDown size={20} className={`${caretColor[variant]} transition-transform ${isOpen ? "rotate-180" : ""}`}/>
                </div>
            </div>
            <p className="text-body2 italic">{role}</p>
        </button>

        {isOpen && ( <>
            <ul className="text-body1">
                {bullets.map((bullet, i) => (
                <li key={i} className="flex mb-1">
                    <p className={`${muted_colors[variant]}`}>•</p>
                    <p className="ml-1">{bullet}</p>
                </li>
                ))}
            </ul>
            </>
        )}
    </div>
);
}