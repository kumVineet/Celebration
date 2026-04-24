import { useRef } from 'react';

const Confetti = ({active}) => {
    const pieces = useRef([...Array(40)].map((_,i)=>({
      id:i,x:Math.random()*100,delay:Math.random()*2,dur:2+Math.random()*3,
      color:['#f48fb1','#e91e8c','#ffd700','#ff9800','#b5174b','#ff69b4','#fff','#90caf9'][i%8],
      size:6+Math.random()*10, shape:i%3,
    })));
    if(!active) return null;
    return (
      <div style={{position:'fixed',inset:0,pointerEvents:'none',zIndex:5,overflow:'hidden'}}>
        {pieces.current.map(p=>(
          <div key={p.id} style={{
            position:'absolute',left:`${p.x}%`,top:-20,
            width:p.size,height:p.size*(p.shape===2?.3:1),
            borderRadius:p.shape===0?'50%':p.shape===1?'2px':'50%',
            background:p.color,
            animation:`confetti ${p.dur}s ${p.delay}s linear infinite`,
            transform:`rotate(${Math.random()*360}deg)`,
          }}/>
        ))}
      </div>
    );
  };

export default Confetti;