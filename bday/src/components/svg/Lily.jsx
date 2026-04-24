const Lily = ({size=60}) => (
    <svg width={size} height={Math.round(size*1.8)} viewBox="0 0 40 72">
      <line x1="20" y1="36" x2="20" y2="72" stroke="#3d7a2a" strokeWidth="2.8" strokeLinecap="round"/>
      <path d="M20,52 Q10,46 12,40 Q16,48 20,52" fill="#3d7a2a" opacity=".7"/>
      {[0,60,120,180,240,300].map((a,i)=>(
        <ellipse key={i} cx={20+Math.cos(a*Math.PI/180)*13} cy={20+Math.sin(a*Math.PI/180)*13}
          rx="5" ry="13" fill={i%2===0?'#fff5f8':'#ffb6c1'}
          stroke="#f48fb1" strokeWidth=".8"
          transform={`rotate(${a} ${20+Math.cos(a*Math.PI/180)*13} ${20+Math.sin(a*Math.PI/180)*13})`}/>
      ))}
      <circle cx="20" cy="20" r="5" fill="#ffd700"/>
      {[0,72,144,216,288].map((a,i)=>(
        <line key={i} x1="20" y1="20" x2={20+Math.cos(a*Math.PI/180)*9} y2={20+Math.sin(a*Math.PI/180)*9}
          stroke="#ff8f00" strokeWidth="1" strokeLinecap="round"/>
      ))}
    </svg>
  );

export default Lily;