/* eslint-disable prettier/prettier */
import { SendNotification } from './send-notification';
import { InMemoryNotificationRepository } from '../../../test/repositories/in-memory-notifications-repositories';



describe('Send Notification', () => {
    it('Should be able to send a notification', async () => {
        const notificationRepository = new InMemoryNotificationRepository()
        const sendNotification = new SendNotification(notificationRepository);

        const { notification } = await sendNotification.excute({
            content: 'This is a notification',
            category: 'social',
            recipientId: '5555',
        });

        expect(notificationRepository.notifications).toHaveLength(1)
        expect(notificationRepository.notifications[0]).toEqual(notification)

    });
});
