import React from 'react';
import { PizzaId } from './PizzaId';
import { shallow } from 'enzyme';

const pizzaId = {id: 1, name: 'Senior Salsa', description: 'Pizza with pepperoni, salsa and chili', price: 1350, image: 'https://www.dominos.is/media/1133/media-6986-nelson.jpg?width=400&format=jpg&quality=50&bgcolor=fff'};

describe('PizzaId tests', () => {
    let getPizzaById;
    let addToCart;
    let component;
    let params;

    beforeEach(() => {
        getPizzaById = jest.fn();
        addToCart = jest.fn();
        params = {}
        component = shallow(<PizzaId getPizzaById={getPizzaById} params={params} addToCart={addToCart} pizzaId={pizzaId} />);
        console.log(component)
    });

    it('should render one pizza', () => {
        expect(component.props().children.length).toBe(1);
    });

    it('should call getPizzaById once', () => {
        expect(getPizzaById.mock.calls.length).toBe(1);
    });
    it('should call addToCart once', () => {
        expect(addToCart.mock.calls.length).toBe(1);
    });
})