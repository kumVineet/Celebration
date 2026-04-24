const Tulip = ({size=55, color='#f48fb1'}) => (
    <svg width={size} height={Math.round(size*1.75)} viewBox="0 0 36 63">
      <line x1="18" y1="30" x2="18" y2="63" stroke="#3d7a2a" strokeWidth="2.8" strokeLinecap="round"/>
      <path d="M18,45 Q8,38 10,32 Q14,40 18,45" fill="#3d7a2a" opacity=".7"/>
      <path d="M18,28 Q10,22 10,12 Q10,4 18,2 Q26,4 26,12 Q26,22 18,28Z" fill={color} stroke={color==='#f48fb1'?'#e91e8c':'#e91e8c'} strokeWidth=".8"/>
      <path d="M18,24 Q13,18 13,10 Q14,18 18,22 Q22,18 23,10 Q23,18 18,24Z" fill={color==='#f48fb1'?'#ffb6c1':'#ff80ab'} opacity=".6"/>
    </svg>
  );

export default Tulip;