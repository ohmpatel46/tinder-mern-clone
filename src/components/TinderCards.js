import React,{useState, useEffect} from 'react';
import './TinderCards.css';
import TinderCard from 'react-tinder-card';
import Axios from './axios.js';

function TinderCards(){
    const [people,setPeople]= useState([]);

    useEffect(()=>{
        async function fetchData(){
            const req= await Axios.get("/tinder/cards");
            setPeople(req.data);
        }
        fetchData();
    });


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