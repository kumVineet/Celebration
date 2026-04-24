const GiftBoxSvg = ({open}) => (
    <svg width="200" height="200" viewBox="0 0 210 210" style={{overflow:'visible'}}>
      <rect x="28" y="100" width="154" height="115" rx="9" fill="#ffd6e7" stroke="#f48fb1" strokeWidth="2.5"/>
      <rect x="92" y="100" width="26" height="115" fill="#e91e8c" opacity=".65"/>
      <g style={{transformOrigin:'105px 100px',animation:open?'lidFly .8s cubic-bezier(.4,0,.2,1) forwards':'none'}}>
        <rect x="18" y="76" width="174" height="34" rx="9" fill="#f48fb1" stroke="#e91e8c" strokeWidth="2"/>
        <rect x="90" y="76" width="30" height="34" fill="#e91e8c" opacity=".7"/>
        <ellipse cx="88" cy="76" rx="22" ry="14" fill="#e91e8c" transform="rotate(-22 88 76)"/>
        <ellipse cx="122" cy="76" rx="22" ry="14" fill="#e91e8c" transform="rotate(22 122 76)"/>
        <circle cx="105" cy="76" r="10" fill="#c2185b"/>
        <circle cx="105" cy="76" r="5" fill="#ff4d88"/>
      </g>
      {open && ['#f48fb1','#e91e8c','#ffd700','#ff9800','#b5174b','#ff69b4'].map((c,i)=>(
        <circle key={i} cx={75+i*12} cy={95} r={6} fill={c}
          style={{'--cx':`${(i-2.5)*50}px`,'--cy':`${-70-i*18}px`,animation:`confBurst .9s ${i*.08}s ease-out forwards`}}/>
      ))}
    </svg>
  );
export default GiftBoxSvg;