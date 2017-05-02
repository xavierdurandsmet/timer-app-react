import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';
import CountDownForm from 'CountDownForm';

describe('CountDownForm', () => {
    it('should exist', () => {
        expect(CountDownForm).toExist();
    })

    describe('render', () => {
        it ('should call onSetCountDown if valid seconds entered', () => {
            const spy = expect.createSpy();
            const countDownForm = TestUtils.renderIntoDocument(< CountDownForm onSetCountDown={spy}/>)
            const $el = $(ReactDOM.findDOMNode(countDownForm));

            countDownForm.refs.seconds.value = '109';
            TestUtils.Simulate.submit($el.find('form')[0]);
            expect(spy).toHaveBeenCalledWith(109);
        })
        it ('should not call onSetCountDown if invalid seconds entered', () => {
            const spy = expect.createSpy();
            const countDownForm = TestUtils.renderIntoDocument(< CountDownForm onSetCountDown={spy}/>)
            const $el = $(ReactDOM.findDOMNode(countDownForm));

            countDownForm.refs.seconds.value = '234fase';
            TestUtils.Simulate.submit($el.find('form')[0]);
            expect(spy).toNotHaveBeenCalled();
        })
    })
})
