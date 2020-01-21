import React from 'react';
import { withRouter } from 'react-router-dom';

const CategoryPageResults = ({ category, physicians }) => {
     return (
          <>
               <div>
                    <h1>{category.name}</h1>
                    <ul>
                         {physicians.map(physician => <li key={physician.id}>{physician.name}</li>)}
                    </ul>
               </div>
          </>
     );
}

export default withRouter(CategoryPageResults);