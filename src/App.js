
import './App.css';

function App() {

const tablelist=[
  {
    plan:"FREE",
    price:"$0",
    pros:{
      one:"Single User",
      two:"5GB Storage",
      three:"Unlimited Public Projects",
      four:"Community Access",
      five:"Unlimited Private Projects",
      six:"Dedicated Phone Support",
      seven:"Free Subdomain",
      eight:"Monthly Status Reports",
    },
  },
  {
    plan:"PLUS",
    price:"$9",
    pros:{
      one:"5 Users",
      two:"50GB Storage",
      three:"Unlimited Public Projects",
      four:"Community Access",
      five:"Unlimited Private Projects",
      six:"Dedicated Phone Support",
      seven:"Free Subdomain",
      eight:"Monthly Status Reports",
    },        
  },
  {
    plan:"PRO",
    price:"$49",
    pros:{
      one:"Unlimited Users",
      two:"150GB Storage",
      three:"Unlimited Public Projects",
      four:"Community Access",
      five:"Unlimited Private Projects",
      six:"Dedicated Phone Support",
      seven:"Unlimited Free Subdomain",
      eight:"Monthly Status Reports"
    },
  },
]

  return (
     
    <div class="tablecontent">
{
  tablelist.map((tablecontent)=>(
    <Tableone plan = {tablecontent.plan}
    price = {tablecontent.price}
    pros = {tablecontent.pros}
    />
  ))
}
    </div>
  );
}
function Tableone(props)
{
  return(
     
    <div class="tables">
      <h4 class="plan">{props.plan}</h4>
      <div class="pricemonth">
      <span class="price">{props.price}</span>
      <span class="month">/month</span>
      </div>
      
      <Descriptionpros pros = {props.pros}/>

      <button class="btn">Button</button>
    </div>
  );
}

function Descriptionpros(props)
{
  return (
    <div>
      <ul class ="list">
        <li>{props.pros.one}</li>
        <li>{props.pros.two}</li>
        <li>{props.pros.three}</li>
        <li>{props.pros.four}</li>
        <li>{props.pros.five}</li>
        <li>{props.pros.six}</li>
        <li>{props.pros.seven}</li>
        <li>{props.pros.eight}</li>
      </ul>
      </div>
  );
}
export default App;
