import Image from "next/image";

export function BrandMark() {
  return (
    <a className="brand-mark" href="#top" aria-label="CheckMate PDI Exxpert home">
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
