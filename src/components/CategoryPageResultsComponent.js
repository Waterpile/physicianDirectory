import React from 'react';
import { withRouter } from 'react-router-dom';

const CategoryPageResults = ({ specialty, physicians }) => {
     return (
          <>
               <div>
                    <h1>{specialty.Name}</h1>
                    <ul>
                         {physicians.map(physician => <li key={`physician${physician.PhysicianId}`}>{physician.FirstName} {physician.LastName}, {physician.Credentials}</li>)}
                    </ul>
               </div>
          </>
     );
}

export default withRouter(CategoryPageResults);