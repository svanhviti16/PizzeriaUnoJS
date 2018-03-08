import React from 'react';
import { PizzaId } from './PizzaId';
import { shallow } from 'enzyme';

const pizzaId = {id: 1, name: 'Senior Salsa', description: 'Pizza with pepperoni, salsa and chili', price: 1350, image: 'https://www.dominos.is/media/1133/media-6986-nelson.jpg?width=400&format=jpg&quality=50&bgcolor=fff'};

describe('PizzaId tests', () => {
    let getPizzaById;
    let addToCart;
    let component;
    let match; //??
    let props;  //??
    let handleOnClickCart;
    beforeEach(() => {
        addToCart = jest.fn();
        handleOnClickCart = jest.fn();
        getPizzaById = jest.fn();
        props = pizzaId;
        component = shallow(<PizzaId handleOnClickCart={handleOnClickCart} getPizzaById={getPizzaById} match={{params: {id: 1}}} props={props} addToCart={addToCart} pizzaId={pizzaId} />);
    });

    it('should render one pizza', () => {
        expect(component.props().children.type).toBe('div');
    });

    it('should call getPizzaById once', () => {
        expect(getPizzaById.mock.calls.length).toBe(1);
    });
    /*it('should call addToCart once', () => {

        const button = shallow((<button className="btn btn-primary" onClick={() => { this.handleOnClickCart(pizzaId); }}
        > Add to Cart</button>));
        button.find('button').simulate('click');
        expect(addToCart.mock.calls.length).toBe(1);
    });*/
})