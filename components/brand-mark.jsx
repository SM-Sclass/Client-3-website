import Image from "next/image";

export function BrandMark({ href = "/" }) {
  return (
    <a className="brand-mark" href={href} aria-label="CheckMate PDI Exxpert home">
      <Image 
        src="/assets/logo.png" 
        alt="CheckMate PDI Exxpert Logo" 
        width={240} 
        height={106} 
        className="brand-logo-img"
        priority
      />
    </a>
  );
}
