import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage'
import { CadastrarPage } from '../pages/cadastrarPage';


test('Cadastrar usuario', async ({ page }) => {

  const loginPage = new LoginPage(page)
  const cadastrarPage = new CadastrarPage(page)


  await loginPage.goto();
  await loginPage.linkCadastro();
  await cadastrarPage.fazerCadastro('darlan2', 'darlan2.douglas@cibus.app.br1', 'admin')
  await cadastrarPage.verificaToast('Conta criada com sucesso')


})


