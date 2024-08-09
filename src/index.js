import {createRoot} from 'react-dom/client';
const root = createRoot(document.getElementById('root'));
const SayHello = ({name})=>{
  return(<><h2>Hello {name}</h2></>)
}
const CakeShop = ()=>{
return (<div><h1>Dark-Chocolate</h1></div>);
}


root.render(<>
<SayHello name ="Rutuja"/>
<h1>Cake</h1>
<CakeShop/>
</>);