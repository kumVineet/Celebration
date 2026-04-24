const HeartFrame = ({id,label,rot=0}) => (
    <div style={{transform:`rotate(${rot}deg)`,display:'inline-block'}}>
      <svg width="140" height="133" viewBox="0 0 145 138">
        <defs>
          <clipPath id={`hcp${id}`}>
            <path d="M72.5,130 C32,102 8,75 8,48 C8,27 23,11 42,11 C55,11 66,19 72.5,32 C79,19 90,11 103,11 C122,11 137,27 137,48 C137,75 113,102 72.5,130 Z"/>
          </clipPath>
        </defs>
        <g clipPath={`url(#hcp${id})`}>
          <rect width="145" height="138" fill="#fce4ec"/>
          {[...Array(10)].map((_,i)=>(
            <line key={i} x1={-5+i*16} y1="0" x2={i*16+14} y2="138" stroke="#f8bbd0" strokeWidth="9" strokeOpacity=".55"/>
          ))}
          <text x="72" y="60" textAnchor="middle" fontFamily="Nunito" fontSize="24" fill="#f48fb1">📸</text>
          <text x="72" y="80" textAnchor="middle" fontFamily="Dancing Script, cursive" fontSize="11" fill="#b5174b" fontWeight="700">{label}</text>
        </g>
        <path d="M72.5,130 C32,102 8,75 8,48 C8,27 23,11 42,11 C55,11 66,19 72.5,32 C79,19 90,11 103,11 C122,11 137,27 137,48 C137,75 113,102 72.5,130 Z" fill="none" stroke="#e91e8c" strokeWidth="3"/>
      </svg>
    </div>
  );

export default HeartFrame;