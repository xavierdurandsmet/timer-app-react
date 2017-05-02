import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';
import CountDown from 'CountDown';

describe('CountDown', () => {
    it('should exist', () => {
        expect(CountDown).toExist();
    })

    describe('handleSetCountDown', () => {
        it('should set state to started and countdown', (done) => {
            const countdown = TestUtils.renderIntoDocument(<CountDown/>);
            countdown.handleSetCountDown(10);
            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countDownStatus).toBe('started');

            setTimeout(() => {
                expect(countdown.state.count).toBe(9);
                done();
            }, 1001);

        })
    })
})
