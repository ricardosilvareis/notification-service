import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/notifications')
      .expect(200)
      .expect({
        id: '196bedf0-cb3f-4eb5-b24c-f0fedd6f2d81',
        recipientId: '549216a7-9c31-45ba-9e75-4938c78e3581',
        content: 'Teste',
        category: 'category',
        readAt: null,
        createdAt: '2023-05-05T02:55:34.165Z',
      });
  });
});
