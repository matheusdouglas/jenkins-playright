import { test, expect } from '@playwright/test';
import exp from 'constants';

test.describe.parallel('Teste da api', () => {
    const usuario = "admin@gmail.com"
    const senha = "123456"
    const token1 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY4Njc1MjE0MiwiZXhwIjoxNjg5MzQ0MTQyLCJzdWIiOiI3ZDk5ODMyYy1hM2E3LTRjM2EtYjBmYS0xZDdlNjVjMzJiMjkifQ.3_TuHybv5k8EdUGHWf3uYfRNc8kFaD3E1VNYie120-8';
  

    test('Api de teste simples', async ({ request, baseURL }) => {
        const response = await request.post(`${baseURL}/session`, {
            data: {
                email: usuario,
                password: senha
            }
        })
        expect(response.status()).toBe(200)
        console.log(await response.json());
    })


    test('Teste de API GET', async ({ request, baseURL}) => {
        const response = await request.get(`${baseURL}/category`,{
           headers : {
            Authorization : `token ${token1}`,
           }
        })
        expect(response.status()).toBe(200);
        console.log(await response.json());
})

});