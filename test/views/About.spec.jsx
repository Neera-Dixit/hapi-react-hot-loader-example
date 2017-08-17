import React from 'react';
import {Provider} from 'react-redux';
import {shallow, mount, render} from 'enzyme';
import About from '../../src/views/About';
import configureStore from 'redux-mock-store';
import MetaAction from '../../src/store/meta/MetaAction';

describe('views/About', () => {
    const initialState = {};
    const mockStore = configureStore();
    let store;
    let wrapper;
    let component;

    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = mount(
            <Provider store={store}>
                <About />
            </Provider>
        );

        component = wrapper.find(About).first();
    });

    it('should match mapStateToProps', () => {
        // TODO: how to test mapStateToProps
    });

    it('should call setMeta action', () => {
        const actions = store.getActions();
        const actual = actions[0];
        const expected = {
            type: MetaAction.SET_META,
            payload: {
                title: 'About Page',
            },
        };

        expect(actual).toEqual(expected);
    });

    it('should call X number of actions', () => {
        const actions = store.getActions();
        const actual = actions.length;
        const expected = 1;

        expect(actual).toBe(expected);
    });

});
