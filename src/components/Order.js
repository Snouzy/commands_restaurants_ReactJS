import React, { Component } from 'react';
import { formatPrice } from '../helpers';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
class Order extends Component {
   renderOrder = key => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === 'available';
      //make sure the fish is loaded before continue
      //and not showing "sorry, fish is not longer available"
      if (!fish) return null;
      if (!isAvailable) {
         return (
            <li key={key}>
               Désolé, {fish ? fish.name : 'fish'} n'est plus disponible !
            </li>
         );
      }
      return (
         <CSSTransition
            classNames="order"
            key={key}
            timeout={{ enter: 1000, exit: 1000 }}
         >
            <li key={key}>
               <span>
                  <TransitionGroup component="span" className="count">
                     <CSSTransition
                        classNames="count"
                        key={count}
                        timeout={{ enter: 500, exit: 500 }}
                     >
                        <span>{count}</span>
                     </CSSTransition>
                  </TransitionGroup>
                  {count === 1 ? 'pc' : 'pcs'} {fish.name}{' '}
                  {formatPrice(count * fish.price)}
                  <button onClick={() => this.props.removeFromOrder(key)}>
                     X
                  </button>
               </span>
            </li>
         </CSSTransition>
      );
   };

   render() {
      const orderIds = Object.keys(this.props.order);
      const total = orderIds.reduce((prevTotal, key) => {
         const fish = this.props.fishes[key];
         const count = this.props.order[key];
         const isAvailable = fish && fish.status === 'available';

         if (isAvailable) {
            return prevTotal + count * fish.price;
         }
         return prevTotal;
      }, 0);

      return (
         <div className="order-wrap">
            <h2>Commande</h2>
            <TransitionGroup component="ul" className="order">
               {orderIds.map(this.renderOrder)}
            </TransitionGroup>
            <div className="total">
               <strong>{formatPrice(total)}</strong>
            </div>
         </div>
      );
   }
}

export default Order;
