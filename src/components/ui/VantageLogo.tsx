export function VantageLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 190"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Green left arm — bright, lit from upper-left */}
        <linearGradient id="vmc-gl" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#58E87E" />
          <stop offset="40%"  stopColor="#28A050" />
          <stop offset="100%" stopColor="#0E4820" />
        </linearGradient>

        {/* Green right arm — shadow side */}
        <linearGradient id="vmc-gr" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#1C7038" />
          <stop offset="55%"  stopColor="#0C3C1C" />
          <stop offset="100%" stopColor="#060F08" />
        </linearGradient>

        {/* Green top bevel highlight */}
        <linearGradient id="vmc-gbev" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#90FFB8" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#3AB868" stopOpacity="0.40" />
        </linearGradient>

        {/* Gold left arm — bright */}
        <linearGradient id="vmc-gold-l" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#FFED90" />
          <stop offset="45%"  stopColor="#D4AA38" />
          <stop offset="100%" stopColor="#886018" />
        </linearGradient>

        {/* Gold right arm — shadow side */}
        <linearGradient id="vmc-gold-r" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#B88C22" />
          <stop offset="60%"  stopColor="#704E10" />
          <stop offset="100%" stopColor="#38260A" />
        </linearGradient>

        {/* Gold top bevel highlight */}
        <linearGradient id="vmc-gold-bev" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#FFFACC" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#E8C848" stopOpacity="0.35" />
        </linearGradient>
      </defs>

      {/* ── DROP SHADOW (dark offset V) ── */}
      <polygon
        points="5,8 55,8 100,155 145,8 195,8 100,170"
        fill="#010604"
        transform="translate(4,5)"
        opacity="0.65"
      />

      {/* ══════════════ GREEN V ══════════════ */}

      {/* Left arm — lit face */}
      <polygon points="5,8  55,8  100,155  100,170" fill="url(#vmc-gl)" />

      {/* Right arm — shadow face */}
      <polygon points="145,8  195,8  100,170  100,155" fill="url(#vmc-gr)" />

      {/* Top bevel — left arm (bright edge) */}
      <polygon points="5,8  55,8  57,16  7,16" fill="url(#vmc-gbev)" />

      {/* Top bevel — right arm (dim edge) */}
      <polygon points="143,8  195,8  193,16  145,16" fill="#1C5C2E" opacity="0.55" />

      {/* Inner side face — left (inner-wall visible between arms) */}
      <polygon points="55,8  100,155  100,170  56,8" fill="#1A6B3C" opacity="0.18" />

      {/* Inner dark cutout — the hollow of the green V */}
      <polygon points="55,8  145,8  100,92" fill="#030B05" />

      {/* ══════════════ GOLD V ══════════════ */}

      {/* Left arm — lit face */}
      <polygon points="50,63  80,63  100,168  100,180" fill="url(#vmc-gold-l)" />

      {/* Right arm — shadow face */}
      <polygon points="120,63  150,63  100,180  100,168" fill="url(#vmc-gold-r)" />

      {/* Top bevel — left arm */}
      <polygon points="50,63  80,63  81,71  51,71" fill="url(#vmc-gold-bev)" />

      {/* Top bevel — right arm (dim) */}
      <polygon points="119,63  150,63  149,71  120,71" fill="#C09828" opacity="0.45" />

      {/* Inner dark cutout — hollow of the gold V */}
      <polygon points="80,63  120,63  100,112" fill="#0A0700" />
    </svg>
  );
}
