const Daisy = ({size=44}) => (
    <svg width={size} height={size} viewBox="0 0 40 40">
      {[0,30,60,90,120,150,180,210,240,270,300,330].map((a,i)=>(
        <ellipse key={i} cx={20+Math.cos(a*Math.PI/180)*13} cy={20+Math.sin(a*Math.PI/180)*13}
          rx="3.5" ry="7" fill="white" stroke="#f8bbd0" strokeWidth=".7"
          transform={`rotate(${a} ${20+Math.cos(a*Math.PI/180)*13} ${20+Math.sin(a*Math.PI/180)*13})`}/>
      ))}
      <circle cx="20" cy="20" r="6.5" fill="#fdd835"/>
      <circle cx="20" cy="20" r="4" fill="#f9a825"/>
    </svg>
  );

export default Daisy;