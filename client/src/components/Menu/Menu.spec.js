import React from 'react';
import { Menu } from './Menu';
import { shallow } from 'enzyme';

const pizzaList = [{id: 1, name: 'Senior Salsa', description: 'Pizza with pepperoni, salsa and chili', price: 1350, image: 'https://www.dominos.is/media/1133/media-6986-nelson.jpg?width=400&format=jpg&quality=50&bgcolor=fff'}, 
    {id: 2, name: 'Chilanoz', description: 'Pizza with pepperoni, jalapeno, cream cheese, mushrooms and black pepper', price: 1450, image: 'https://www.dominos.is/media/1132/media-6985-prins…n.jpg?width=400&format=jpg&quality=50&bgcolor=fff'}];

describe('Menu tests', () => {
    let getAllPizzas;
    let component;

    beforeEach(() => {
        getAllPizzas = jest.fn();
        component = shallow(<Menu getAllPizzas={getAllPizzas} pizza={pizzaList} />);
    });

    it('should render 2 pizzas');

    it('should call getAllPizzas once', () => {
        expect(getAllPizzas.mock.calls.length).toBe(1);
    });
})