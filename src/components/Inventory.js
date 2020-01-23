import React, { Component } from 'react';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';

class Inventory extends Component {
   render() {
      return (
         <div className="inventory">
            <h2>Inventaire</h2>
            {Object.keys(this.props.fish).map(key => (
               <EditFishForm
                  key={key}
                  index={key}
                  fish={this.props.fish[key]}
                  updateFish={this.props.updateFish}
                  deleteFish={this.props.deleteFish}
               />
            ))}
            <AddFishForm addFish={this.props.addFish} />
            <button onClick={this.props.loadSampleFishes}>
               Charger un exemple de poissons
            </button>
         </div>
      );
   }
}

export default Inventory;
