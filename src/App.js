import logo from './logo.svg';
import './App.css';
import Card from './card.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/free-solid-svg-icons'

function App() {
  var cardDetails=[
    {
      planName:"free", 
      price:0, 
      feature : [
        {
          name:"Single User",
          isEnabled : "True"
        },
        {
          name:"5GB Storage",
          isEnabled : "True"
        },
        {
          name:"Unlimited Public Projects",
          isEnabled : "True"
        },
        {
          name:"Community Access",
          isEnabled : "True"
        },
        {
          name:"Unlimited Private Projects"
        },
        {
          name:"Dedicated Phone Support"
        },
        {
          name:"Free Subdomain"
        },
        {
          name:"Monthly Status Reports"        
        }
      ]
    },
    {
      planName:"Plus", 
      price:9,
      feature : [
        {
          name:"5 User",
          isEnabled : "True"
        },
        {
          name:"50GB Storage",
          isEnabled : "True"
        },
        {
          name:"Unlimited Public Projects",
          isEnabled : "True"
        },
        {
          name:"Community Access",
          isEnabled : "True"
        },
        {
          name:"Unlimited Private Projects",
          isEnabled : "True"
        },
        {
          name:"Dedicated Phone Support",
          isEnabled : "True"
        },
        {
          name:"Free Subdomain",
          isEnabled : "True"
        },
        {
          name:"Monthly Status Reports"
        }
      ]
    },
    {
      planName:"Pro", 
      price:49, 
      feature : [
        {
          name:"Unlimited User",
          isEnabled : "True"
        },
        {
          name:"150GB Storage",
          isEnabled : "True"
        },
        {
          name:"Unlimited Public Projects",
          isEnabled : "True"
        },
        {
          name:"Community Access",
          isEnabled : "True"
        },
        {
          name:"Unlimited Private Projects",
          isEnabled : "True"
        },
        {
          name:"Dedicated Phone Support",
          isEnabled : "True"
        },
        {
          name:"Unlimited Free Subdomain",
          isEnabled : "True"
        },
        {
          name:"Monthly Status Reports",
          isEnabled : "True"
        }
      ]
    }
  ]
  return (
<div className="pricing py-5">
<div className="container">
<div className="row">
  {
    cardDetails.map((card)=>{
      return <Card card={card}></Card>
    })
  }
  </div>
</div>
</div>
  );
}

export default App;
