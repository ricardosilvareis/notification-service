/* eslint-disable prettier/prettier */
import { Content } from "./content";
import { Notification } from "./notification";

describe('Notification', () => {
    it('Should be able to create a notification', () => {
        const notification = new Notification({
            content: new Content('content'),
            category: 'Category',
            createdAt: new Date(),
            recipienId: '5555'
        });

        expect(notification).toBeTruthy();
    });
});
