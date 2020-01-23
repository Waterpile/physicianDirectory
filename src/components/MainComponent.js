import React from 'react';
import Home from './HomeComponent';
import { CATEGORIES } from '../shared/categories';
import { PHYSICIANS } from '../shared/physicians';
import { Switch, Route, Redirect } from 'react-router-dom';
import CategoryPageResults from './CategoryPageResultsComponent';

export default class Main extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               categories: CATEGORIES,
               physicians: PHYSICIANS
          }
     }
     render() {
          const CategoryResult = ({ match }) => {
               return (
                    <CategoryPageResults
                         specialty={this.props.specialties.filter(specialty => specialty.SpecialtyId === +match.params.specialtyId)[0]}
                         physicians={this.props.physicians.filter(physician => {
                              if (physician.Specialty1 === +match.params.specialtyId || physician.Specialty2 === +match.params.specialtyId || physician.Specialty3 === +match.params.specialtyId || physician.SpecialtyThree === +match.params.specialtyId || physician.Specialty4 === +match.params.specialtyId) {
                                   return true;
                              } else {
                                   return false;
                              }
                         }
                         )}

                    />
               );
          }
          return (
               <>
                    <Switch>
                         <Route exact path='/' render={() => <Home specialties={this.props.specialties} />} />
                         <Route path={`/specialty/:specialtyId`} component={CategoryResult} />} />
                         <Redirect to='/' />
                    </Switch>
               </>
          );
     }
}