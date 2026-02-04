'use client';

import { track } from '@vercel/analytics';

interface BookingButtonProps {
  location: 'hero' | 'contact';
  className?: string;
  style?: React.CSSProperties;
}

export default function BookingButton({
  location,
  className = 'btn-primary',
  style,
}: BookingButtonProps) {
  const handleClick = () => {
    track('treatwell_click', { location });
  };

  return (
    <a
      href="https://buchung.treatwell.at/ort/513506/menue/"
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={style}
      onClick={handleClick}
    >
      Termin jetzt buchen
    </a>
  );
}
