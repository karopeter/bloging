import React from 'react';

class Directory extends React.Component {
     constructor() {
       super();

       this.state = {
         sections: [
          {
            title: 'Job Vacancies | Traffic Updates & Articles',
            id: 'pgb1'
          },
          {
           title: 'Weekends are meant for chilling',
           id: 'pgn2'
          },
          {
           title: 'This is a new life',
           id: 'gfe3'
          }
         ]
       }
     }

     render() {
       return (
        <div className="directory">
          {
           this.state.sections.map(section => (
           <h1 key={section.id}> {section.title} </h1>
           ))}
        </div> 
       )
     }
}

export default Directory;