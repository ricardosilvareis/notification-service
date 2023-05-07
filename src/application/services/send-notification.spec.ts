/* eslint-disable prettier/prettier */
import { SendNotification } from './send-notification';

describe('Send Notification', () => {
    it('Should be able to send a notification', async () => {
        const sendNotification = new SendNotification();

        const { notification } = await sendNotification.excute({
            content: 'This is a notification',
            category: 'social',
            recipientId: '5555',
        });

        expect(notification).toBeTruthy()

    });
});
