import React, { Component } from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';
import fishes from '../sample-fishes';
class App extends Component {
   state = {
      fishes: {},
      order: {}
   };

   componentDidMount() {
      const localStorageRef = localStorage.getItem(
         this.props.match.params.storeId
      );
      if (localStorageRef) {
         this.setState({ order: JSON.parse(localStorageRef) });
      }
      this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {
         context: this,
         state: 'fishes'
      });
   }

   componentDidUpdate() {
      localStorage.setItem(
         this.props.match.params.storeId,
         JSON.stringify(this.state.order)
      );
   }

   componentWillUnmount() {
      base.removeBinding(this.ref);
   }

   deleteFish = key => {
      const fishes = { ...this.state.fishes };
      fishes[key] = null;
      this.setState({ fishes });
   };

   loadSampleFishes = () => {
      this.setState({ fishes: sampleFishes });
   };

   addFish = fish => {
      console.log('Adding a fish');
      const fishes = { ...this.state.fishes };
      fishes[`fish${Date.now()}`] = fish;

      this.setState({ fishes });
   };

   updateFish = (key, updatedFish) => {
      const fishes = { ...this.state.fishes };
      fishes[key] = updatedFish;
      this.setState({ fishes });
   };
   addToOrder = key => {
      const order = { ...this.state.order };
      order[key] = order[key] + 1 || 1;
      this.setState({ order });
   };

   removeFromOrder = key => {
      const order = { ...this.state.order };
      delete order[key];
      this.setState({ order });
   };

   render() {
      return (
         <div className="catch-of-the-day">
            <div className="menu">
               <Header tagline="Commerce de poissons frais" />
               <ul className="fishes">
                  {Object.keys(this.state.fishes).map(key => (
                     <Fish
                        key={key}
                        index={key}
                        details={this.state.fishes[key]}
                        addToOrder={this.addToOrder}
                     />
                  ))}
               </ul>
            </div>
            <Order
               fishes={this.state.fishes}
               order={this.state.order}
               removeFromOrder={this.removeFromOrder}
            />
            <Inventory
               addFish={this.addFish}
               updateFish={this.updateFish}
               deleteFish={this.deleteFish}
               loadSampleFishes={this.loadSampleFishes}
               fish={this.state.fishes}
            />
         </div>
      );
   }
}

export default App;
