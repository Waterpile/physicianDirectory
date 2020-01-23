import React from 'react';
import CategoryPageResults from './CategoryPageResultsComponent';
import { withRouter } from 'react-router-dom';

const CatDropdown = ({ specialties }) => {
     return (
          specialties.map(specialty => {
               return (
                    <option id={specialty.SpecialtyId} key={specialty.SpecialtyId}>{specialty.Name} {specialty.SpecialtyId}</option>
               );
          })

     );
}

class Home extends React.Component {
     constructor(props) {
          super(props);
          this.handleChange = this.handleChange.bind(this);
     }
     handleChange(event) {
          let index = event.target.selectedIndex;
          let el = event.target.childNodes[index]
          let option = el.getAttribute('id');
          let value = event.target.value.toLowerCase();
          let finalValue = value.replace(/\s+/g, "-");
          console.log(finalValue);
          return (
               this.props.history && this.props.history.push(`/specialty/${option}`)
          );
     }
     render() {
          return (
               <>
                    <select onChange={this.handleChange}>
                         <option>--</option>
                         <CatDropdown specialties={this.props.specialties} />
                    </select>
               </>
          );
     }
}

export default withRouter(Home);