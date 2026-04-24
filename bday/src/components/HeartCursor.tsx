import { useState, useEffect, useRef } from "react";

const HeartCursor = () => {
    const [pos,setPos]=useState({x:-200,y:-200});
  const [sparks,setSparks]=useState([]);
  const ctr=useRef(0);
  useEffect(()=>{
    const mv=(e)=>{
      setPos({x:e.clientX,y:e.clientY});
      const id=ctr.current++;
      const chars=['✦','✿','★','·','♥','❀','🌸'];
      const colors=['#f48fb1','#e91e8c','#ffd700','#ff9eb5','#c2185b','#ffb6c1'];
      setSparks(s=>[...s.slice(-18),{id,x:e.clientX,y:e.clientY,char:chars[id%chars.length],color:colors[id%colors.length],size:7+Math.random()*10}]);
      setTimeout(()=>setSparks(s=>s.filter(x=>x.id!==id)),750);
    };
    window.addEventListener('mousemove',mv);
    return ()=>window.removeEventListener('mousemove',mv);
  },[]);
  return (
    <>
      {/* Wand tip */}
      <div style={{position:'fixed',left:pos.x,top:pos.y,zIndex:9999,transform:'translate(-4px,-4px)',pointerEvents:'none',fontSize:22,animation:'wandCursor 1s ease-in-out infinite'}}>❤️</div>
      {/* Sparkle trail */}
      {sparks.map(s=>(
        <span key={s.id} style={{position:'fixed',left:s.x,top:s.y,zIndex:9998,transform:'translate(-50%,-50%)',pointerEvents:'none',fontSize:s.size,color:s.color,animation:'heartPop .75s ease-out forwards'}}>{s.char}</span>
      ))}
    </>
  );
};

export default HeartCursor;

