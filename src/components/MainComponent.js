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
                         category={this.state.categories.filter(cat => cat.id === +match.params.catId)[0]}
                         physicians={this.state.physicians.filter(physician => physician.catId === +match.params.catId)}
                    />
               );
          }
          return (
               <>
                    <Switch>
                         <Route exact path='/' render={() => <Home categories={this.state.categories} />} />
                         <Route path={`/specialty/:catId`} component={CategoryResult} />} />
                         <Redirect to='/' />
                    </Switch>
               </>
          );
     }
}