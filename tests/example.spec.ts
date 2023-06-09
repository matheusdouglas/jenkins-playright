import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage'
import { CadastrarPage } from '../pages/cadastrarPage';


test.describe('Executar dois testes', () => { 

  test('Cadastrar usuario com sucesso', async ({ page }) => {

  const loginPage = new LoginPage(page)
  const cadastrarPage = new CadastrarPage(page)

  await loginPage.goto();
  await loginPage.linkCadastro();
  await cadastrarPage.fazerCadastro('diego', 'diego@gmail.com', '123456')
  await cadastrarPage.verificaToast('Conta criada com sucesso')

})

  test('Erro ao cadastrar um usuario', async ({ page }) => {
    const loginPage = new LoginPage(page)
    const cadastrarPage = new CadastrarPage(page)
    
    await loginPage.goto();
    await loginPage.linkCadastro();
    await cadastrarPage.fazerCadastro('matheus12', 'matheus12@gmail.com', '123456')
    await cadastrarPage.verificaToast('Erro ao cadastrar')

  })

})


