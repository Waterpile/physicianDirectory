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
               physicians: []
          }
     }
     render() {
          const CategoryResult = ({ match }) => {
               return (
                    <CategoryPageResults
                         specialty={this.props.specialties.filter(specialty => {
                              let specialtyNameLowerCase = specialty.Name.toLowerCase();
                              let specialtyNameFinal = specialtyNameLowerCase.replace(/\s+/g, "-");
                              if (specialtyNameFinal === match.params.finalValue) {
                                   return true;
                              } else {
                                   return false;
                              }

                         })}
                         physicians={this.props.physicians.filter(physician => {
                              if (physician.Specialty) {
                                   let specialtyNameLowerCase = physician.Specialty.Name.toLowerCase();
                                   let specialtyNameFinal = specialtyNameLowerCase.replace(/\s+/g, "-");
                                   if (specialtyNameFinal === match.params.finalValue) {
                                        return true;
                                   }
                                   if (match.params.finalValue === "cancer") {
                                        if (physician.Specialty.SpecialtyId === 39 || physician.Specialty.SpecialtyId === 35 || physician.Specialty.SpecialtyId === 23) {
                                             return true;
                                        }
                                   }
                                   if (match.params.finalValue === "heart-and-vascular") {
                                        if (physician.Specialty.SpecialtyId === 2 || physician.Specialty.SpecialtyId === 3 || physician.Specialty.SpecialtyId === 4 || physician.Specialty.SpecialtyId === 42) {
                                             return true;
                                        }
                                   }
                                   if (match.params.finalValue === "primary-care") {
                                        if (physician.Specialty.SpecialtyId === 10 || physician.Specialty.SpecialtyId === 18 || physician.Specialty.SpecialtyId === 22 || physician.Specialty.SpecialtyId === 29) {
                                             return true;
                                        }
                                   }
                              }
                              if (physician.Specialty3) {
                                   let specialtyNameLowerCase = physician.Specialty3.Name.toLowerCase();
                                   let specialtyNameFinal = specialtyNameLowerCase.replace(/\s+/g, "-");
                                   if (specialtyNameFinal === match.params.finalValue) {
                                        return true;
                                   }
                                   if (match.params.finalValue === "cancer") {
                                        if (physician.Specialty3.SpecialtyId === 39 || physician.Specialty3.SpecialtyId === 35 || physician.Specialty3.SpecialtyId === 23) {
                                             return true;
                                        }
                                   }
                                   if (match.params.finalValue === "heart-and-vascular") {
                                        if (physician.Specialty3.SpecialtyId === 2 || physician.Specialty3.SpecialtyId === 3 || physician.Specialty3.SpecialtyId === 4 || physician.Specialty3.SpecialtyId === 42) {
                                             return true;
                                        }
                                   }
                                   if (match.params.finalValue === "primary-care") {
                                        if (physician.Specialty3.SpecialtyId === 10 || physician.Specialty3.SpecialtyId === 18 || physician.Specialty3.SpecialtyId === 22 || physician.Specialty3.SpecialtyId === 29) {
                                             return true;
                                        }
                                   }
                              }
                              else {
                                   return false
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
                         <Route path={`/specialty/:finalValue`} component={CategoryResult} />} />
                         <Redirect to='/' />
                    </Switch>
               </>
          );
     }
}