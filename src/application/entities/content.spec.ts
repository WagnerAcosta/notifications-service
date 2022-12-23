import { Content } from './content';

describe('Notification content', () => {
  test('Criando um conteúdo', () => {
    const content = new Content('Você recebeu uma solicitação de amizade!');

    expect(content).toBeTruthy();
  });

  test('Criar com menos 5 caracters', () => {
    expect(() => new Content('Olá')).toThrow();
  });

  test('Criar com mais de 240 caracters', () => {
    expect(() => new Content('Olá'.repeat(241))).toThrow();
  });
});
