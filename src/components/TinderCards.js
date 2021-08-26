import React,{useState} from 'react';
import './TinderCards.css';
import TinderCard from 'react-tinder-card';

function TinderCards(){
    const [people,setPeople]= useState([
        {
            name:"Félix Lengyel",
            url:"https://pbs.twimg.com/profile_images/1188911868863221772/fpcyKuIW_400x400.jpg"
        },
        {
            name:"Janne Stefanovski",
            url:"https://www.vpesports.com/wp-content/uploads/2020/08/gorgc-OG1.jpg"
        },
        {
            name:"Jaron",
            url:"https://estnn.com/wp-content/uploads/2020/11/monkeys-forever-dota.jpg"
        }
    ]);
    const swiped=(dir,name)=>{
        console.log(`Removing ${name}`);
    };
    const outOfFrame= (name)=>{
        console.log(`${name} is out of the frame`);
    };
    return(
        <div className="TinderCards">
            <div className="TinderCards__CardContainer">
                {people.map((person)=>{
                    return(
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up","down"]}
                        onSwipe={(dir)=>{swiped(dir,person.name)}}
                        onCardLeftScreen={()=> outOfFrame(person.name)}
                    >
                        <div className="card" style={{backgroundImage: `url(${person.url})`}}><h1>{person.name}</h1></div>

                    </TinderCard>
                    );
                })}
            </div>
        </div>
    );
}

export default TinderCards;