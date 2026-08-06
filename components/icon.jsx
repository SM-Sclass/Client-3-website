const iconMap = {
  shield: (
    <>
      <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3Z" />
      <path d="M9.5 12.5 11.5 14.5 15.5 10.5" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16 20 20" />
    </>
  ),
  car: (
    <>
      <path d="M5 15.5 6.5 10h11L19 15.5" />
      <path d="M4.5 15.5h15v3h-2v-1h-11v1h-2Z" />
      <path d="M7.5 10 9 7h6l1.5 3" />
      <circle cx="8" cy="15.5" r="1" />
      <circle cx="16" cy="15.5" r="1" />
    </>
  ),
  report: (
    <>
      <path d="M7 3.5h7l4 4v13H7z" />
      <path d="M14 3.5v4h4" />
      <path d="M10 12h5" />
      <path d="M10 15h5" />
      <path d="M10 18h3" />
    </>
  ),
  camera: (
    <>
      <path d="M5 8h3l1.5-2h5L16 8h3v10H5z" />
      <circle cx="12" cy="13" r="3.25" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7.5v5l3 1.5" />
    </>
  ),
  rupee: (
    <>
      <path d="M7 7h8" />
      <path d="M7 10.5h8" />
      <path d="M8 7c0 2.5 2 4.5 4.5 4.5H15L8.5 18h7" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8.5" r="3.25" />
      <path d="M6.5 19c1.4-3 3.6-4.5 5.5-4.5S16.1 16 17.5 19" />
    </>
  ),
  phone: (
    <>
      <path d="M8.2 4.5h2.2l1 3.5-1.7 1.7c1 2 2.6 3.6 4.6 4.6l1.7-1.7 3.5 1v2.2c0 1-.8 1.8-1.8 1.8C10.3 18.6 5.4 13.7 5.4 7.3c0-1 .8-1.8 1.8-1.8Z" />
    </>
  ),
  arrowLeft: (
    <>
      <path d="M15 18 9 12l6-6" />
    </>
  ),
  arrowRight: (
    <>
      <path d="M9 18l6-6-6-6" />
    </>
  ),
  mail: (
    <>
      <path d="M4.5 6.5h15v11h-15z" />
      <path d="m5.5 8 6.5 5 6.5-5" />
    </>
  ),
  city: (
    <>
      <path d="M5.5 18.5V8.5l4-2v12" />
      <path d="M9.5 18.5v-10l5-3v13" />
      <path d="M14.5 18.5v-7l4-2v9" />
      <path d="M4 18.5h16" />
    </>
  ),
  calendar: (
    <>
      <rect x="4.5" y="6" width="15" height="13" rx="2" />
      <path d="M8 3.5v5" />
      <path d="M16 3.5v5" />
      <path d="M4.5 9.5h15" />
      <path d="M8.5 13h3" />
      <path d="M13.5 13h2" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="m8.5 12.5 2.2 2.2 4.8-5.2" />
    </>
  ),
  alert: (
    <>
      <path d="M12 4.5 20 18H4z" />
      <path d="M12 9v4.5" />
      <path d="M12 16.5h.01" />
    </>
  ),
  close: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="m9 9 6 6" />
      <path d="m15 9-6 6" />
    </>
  ),
  chat: (
    <>
      <path d="M5 7.5A3.5 3.5 0 0 1 8.5 4h7A3.5 3.5 0 0 1 19 7.5v4A3.5 3.5 0 0 1 15.5 15H10l-4 3v-3.5A3.5 3.5 0 0 1 5 11.5z" />
    </>
  ),
  star: (
    <>
      <path d="m12 4.5 2.2 4.4 4.8.7-3.5 3.4.8 4.8L12 15.6l-4.3 2.2.8-4.8L5 9.6l4.8-.7z" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  )
};

export function Icon({ name, className = "", strokeWidth = 1.8, ...props }) {
  const glyph = iconMap[name];

  if (!glyph) {
    return null;
  }

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      viewBox="0 0 24 24"
      {...props}
    >
      {glyph}
    </svg>
  );
}
