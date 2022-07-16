import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';

function Card(props){
  return <div>
    
    <h2>{props.name}</h2>
        <img src={props.imgPath} alt="kat_img" 
        />
        <p>{props.number}</p>
        <p>{props.mail}</p>
  </div>
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
    <h1>My Contacts</h1>
    <Card 
    name="Katrin Kaif"
    imgPath = "https://th.bing.com/th/id/OIP.5-7lQBjWdex0gfNGNJh02AHaMN?w=186&h=307&c=7&r=0&o=5&dpr=1.25&pid=1.7"
    number="+123 456 789"
    mail="fakema123@gmail.com"
    />
    <Card
    name="Vicky Kaushal"
    imgPath="https://th.bing.com/th/id/OIP.-8xSsOndZaZEj9UGqyBhcwHaFj?w=258&h=189&c=7&r=0&o=5&dpr=1.25&pid=1.7"
    number="+123 654 987"
    mail="fakema123@gmail.com"
    />
    
    </div>
  </React.StrictMode>
);


