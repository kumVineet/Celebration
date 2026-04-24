const Rose = ({size=60, color='#e91e8c', stemColor='#3d7a2a'}) => (
    <svg width={size} height={Math.round(size*1.7)} viewBox="0 0 40 68">
      <line x1="20" y1="30" x2="18" y2="68" stroke={stemColor} strokeWidth="2.8" strokeLinecap="round"/>
      <path d="M18,48 Q8,42 10,36 Q14,44 18,48" fill={stemColor} opacity=".7"/>
      <circle cx="20" cy="18" r="13" fill={color}/>
      <circle cx="20" cy="14" r="9" fill={color==='#e91e8c'?'#ff4d88':color} opacity=".85"/>
      <circle cx="20" cy="11" r="6" fill={color==='#e91e8c'?'#ff80ab':color} opacity=".8"/>
      <circle cx="20" cy="10" r="3.5" fill={color==='#e91e8c'?'#ffb3c6':color} opacity=".9"/>
      <ellipse cx="9" cy="22" rx="6" ry="9" fill={color} opacity=".7" transform="rotate(-30 9 22)"/>
      <ellipse cx="31" cy="22" rx="6" ry="9" fill={color} opacity=".7" transform="rotate(30 31 22)"/>
      <ellipse cx="20" cy="28" rx="7" ry="5" fill="#4a8a30" opacity=".8"/>
    </svg>
  );

  export default Rose;