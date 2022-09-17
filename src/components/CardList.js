import React from 'react';
import Card from './Card';

const CardList = (props) => {
    const { robots } = props;
    return (
        <div>
            {
                // robots.forEach(robot => {
                //     return (
                //         <Card 
                //         key={robot.id} 
                //         id={robot.id} 
                //         name={robot.name} 
                //         email={robot.email}
                //         />
                //     )
                // })
                robots.map((user, i) => {
                    return (
                        <Card 
                        key={i} 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email}
                        />
                    )
                }) 
            }
        </div>
    )
}

export default CardList;