import { Daisy, Lily, Rose, Tulip } from "./svg";

const FloralStrip = () => (
    <div style={{position:'fixed',bottom:0,left:0,right:0,height:148,zIndex:50,pointerEvents:'none',overflow:'hidden'}}>
      {/* Ground */}
      <div style={{position:'absolute',bottom:0,left:0,right:0,height:52,background:'linear-gradient(180deg,#a5d66a 0%,#7cb83a 55%,#5a9a20 100%)',borderRadius:'50% 50% 0 0 / 30px 30px 0 0'}}/>
      {/* Grass blades */}
      <svg style={{position:'absolute',bottom:44,left:0,width:'100%',height:36}} viewBox="0 0 1400 36" preserveAspectRatio="none">
        {[...Array(70)].map((_,i)=>{
          const x=i*20+Math.random()*8; const h=14+Math.random()*20; const tilt=(Math.random()-.5)*18;
          return <path key={i} d={`M${x},36 Q${x+tilt},${36-h*0.5} ${x+tilt*.6},${36-h}`} stroke="#4a8a20" strokeWidth="2.2" fill="none" strokeLinecap="round" opacity={.6+Math.random()*.4}/>;
        })}
      </svg>
      {/* Flowers arranged across strip */}
      {[
        {x:4,  el:<Rose size={52} color="#e91e8c"/>,    bot:40},
        {x:9,  el:<Daisy size={36}/>,                  bot:68},
        {x:15, el:<Tulip size={48} color="#ff80ab"/>,  bot:40},
        {x:22, el:<Lily size={46}/>,                   bot:40},
        {x:27, el:<Rose size={44} color="#c2185b"/>,   bot:40},
        {x:35, el:<Daisy size={32}/>,                  bot:70},
        {x:40, el:<Tulip size={52} color="#f48fb1"/>,  bot:40},
        {x:46, el:<Rose size={56} color="#ff4d94"/>,   bot:40},
        {x:52, el:<Lily size={50}/>,                   bot:40},
        {x:58, el:<Daisy size={38}/>,                  bot:65},
        {x:64, el:<Tulip size={44} color="#e91e8c"/>,  bot:40},
        {x:70, el:<Rose size={48} color="#f48fb1"/>,   bot:40},
        {x:76, el:<Lily size={44}/>,                   bot:40},
        {x:82, el:<Daisy size={34}/>,                  bot:68},
        {x:88, el:<Tulip size={50} color="#ff80ab"/>,  bot:40},
        {x:94, el:<Rose size={54} color="#c2185b"/>,   bot:40},
      ].map((f,i)=>(
        <div key={i} style={{position:'absolute',bottom:f.bot,left:`${f.x}%`,animation:`floatBob ${2.2+i*.3}s ${i*.18}s ease-in-out infinite`}}>
          {f.el}
        </div>
      ))}
      {/* Small butterflies */}
      {[14,38,62,86].map((x,i)=>(
        <svg key={i} width="28" height="20" viewBox="0 0 28 20" style={{position:'absolute',bottom:100+i*8,left:`${x}%`,animation:`floatBob ${1.8+i*.4}s ${i*.3}s ease-in-out infinite`}}>
          <ellipse cx="10" cy="10" rx="9" ry="6" fill={['#f48fb1','#e91e8c','#ffb6c1','#ff4d88'][i]} opacity=".8" transform="rotate(-20 10 10)"/>
          <ellipse cx="18" cy="12" rx="8" ry="5" fill={['#f48fb1','#e91e8c','#ffb6c1','#ff4d88'][i]} opacity=".7" transform="rotate(15 18 12)"/>
          <line x1="14" y1="8" x2="14" y2="16" stroke="#5a2a5a" strokeWidth="1"/>
        </svg>
      ))}
    </div>
  );

export default FloralStrip;