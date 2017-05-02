import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';
import Controls from 'Controls';

describe('Controls', () => {
    it('should exist', () => {
        expect(Controls).toExist();
    })

    describe('render', () => {
        it('should render pause when started', () => {
            const controls = TestUtils.renderIntoDocument(<Controls countDownStatus="started"/>)
            const $el = $(ReactDOM.findDOMNode(controls));
            const $pauseButton = $el.find('button:contains(Pause)');
            expect($pauseButton.length).toBe(1);
        })
    })
})
