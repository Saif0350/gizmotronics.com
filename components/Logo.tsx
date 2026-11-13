import Link from "next/link";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export function Logo() {
  return (
    <Link
      href="/"
      aria-label="Gizmo-Tronics — Home"
      className="group inline-flex items-center"
    >
      <span
        className={`
          ${pacifico.className}
          text-2xl md:text-3xl
          tracking-wide
          text-lightGolden
          transition-colors duration-300
          group-hover:text-mid
        `}
      >
        Gizmo-Tronics
      </span>
    </Link>
  );
}
