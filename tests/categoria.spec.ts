import { test } from "@playwright/test";
import { CategoriaPage } from "../pages/categoriaPage";
import { LoginPage } from "../pages/loginPage";
import { DashboardPage } from "../pages/dashboardPage";

test('testando categoria', async ({page}) => {
   const categoriaPage = new CategoriaPage(page);
   const loginPage = new LoginPage(page);
   const dashboardPage = new DashboardPage(page);

   await loginPage.goto();
   await loginPage.fazerLogin('admin@gmail.com', '123456');
   await dashboardPage.itemCategoria();
   await categoriaPage.cadastrarCategoria('feijao');
   await categoriaPage.verificaToast('Categoria cadastrada com sucesso!');
})