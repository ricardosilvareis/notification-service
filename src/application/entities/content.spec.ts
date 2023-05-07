/* eslint-disable prettier/prettier */
import { Content } from './content';

describe('Notification content', () => {
    it('Should be able to create a notification content', () => {
        const content = new Content('Você recebeu uma notificação!');

        expect(content).toBeTruthy();
    });

    it('Should not be able to create a notification content with less than 5 chacacters', () => {

        expect(() => new Content('Voce')).toThrow();
    });

    it('Should not be able to create a notification content with more than 240 chacacters', () => {

        expect(() => new Content('V'.repeat(241))).toThrow();
    });
})



