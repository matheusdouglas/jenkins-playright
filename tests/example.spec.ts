import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { CadastrarPage } from '../pages/cadastrarPage';
import { DashboardPage } from '../pages/dashboardPage';
import { CategoriaPage } from '../pages/categoriaPage';
import { ProdutoPage } from '../pages/produtoPage';

// Dados para cadastro de um novo usuario 
const nome = 'desenvolvedor7';
const email = 'desenvolvedor7 @gmail.com';
const senha = '123456';

//Dados com um usuario existente
const emailExistente = 'admin@gmail.com'
const senhaExistente = '123456'

// Dados para gerar o erro.
const nomeInvalido = 'matheus12';
const emailInvalido = 'matheus12@gmail.com';
const senhaInvalido = '123456';

test.describe('Executar três testes', () => {
  let loginPage : LoginPage;
  let cadastrarPage : CadastrarPage;
  let categoriaPage : CategoriaPage;
  let dashboardPage : DashboardPage;
  let produtoPage : ProdutoPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    cadastrarPage = new CadastrarPage(page);
    categoriaPage = new CategoriaPage(page);
    dashboardPage = new DashboardPage(page);
    produtoPage = new ProdutoPage(page);

    await loginPage.goto();
  });

  test('Cadastrar usuário com sucesso', async () => {
    await loginPage.linkCadastro();
    await cadastrarPage.fazerCadastro(nome, email, senha);
    await cadastrarPage.verificaToast('Conta criada com sucesso');
  });

  test('Erro ao cadastrar um usuário', async () => {
    await loginPage.linkCadastro();
    await cadastrarPage.fazerCadastro(nomeInvalido, emailInvalido, senhaInvalido);
    await cadastrarPage.verificaToast('Erro ao cadastrar');
  });

  test('Fazer login', async () => {
    await loginPage.fazerLogin(emailExistente, senhaExistente);
    await loginPage.verificaToast('Logado com sucesso');
  });

  test('Cadastrar categoria', async () => {
    await loginPage.fazerLogin(emailExistente, senhaExistente);
    await dashboardPage.itemCategoria();
    await categoriaPage.cadastrarCategoria('arroz');
    await categoriaPage.verificaToast('Categoria cadastrada com sucesso!');
  });

  test('Cadastrar Produto', async () => {

    await loginPage.goto();
    await loginPage.fazerLogin(emailExistente, senhaExistente);
    await dashboardPage.itemProduto();
    await produtoPage.cadastrarProduto('C:\\Users\\Warrior\\Desktop\\fanta.jpg', '1', 'Fanta Laranja1', '3.99', 'Refrigerante sabor Laranja1');
    await produtoPage.verificaToast('Producto Cadastrado!');

  })

});
