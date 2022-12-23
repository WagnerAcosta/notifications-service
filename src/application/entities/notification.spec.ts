import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  test('Criando notificação ', () => {
    const notification = new Notification({
      content: new Content('Nova solicitação de amizade!'),
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});
