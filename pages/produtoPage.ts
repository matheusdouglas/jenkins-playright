import { Page, Locator, expect } from "@playwright/test";

export class ProdutoPage {
    readonly page: Page;
    readonly inputImagem: Locator;
    readonly inputCategoria: Locator;
    readonly inputNome: Locator;
    readonly inputPreco: Locator;
    readonly inputDescricao: Locator;
    readonly botaoCadastrar: Locator;
    readonly toast: Locator;

    constructor(page: Page) {
        this.page = page;
        this.inputImagem = page.locator('input[type="file"]');
        this.inputCategoria = page.locator('select');
        this.inputNome = page.locator('input[placeholder="Digite o nome do produto"]');
        this.inputPreco = page.locator('input[placeholder="Digite o Preço"]');
        this.inputDescricao = page.locator('textarea');
        this.botaoCadastrar = page.locator('button[type="submit"]');
        this.toast = page.locator('div.Toastify');
    }
   
    async cadastrarProduto(imagem:string,categoria:string,nome:string,preco:string,descricao:string){
       await this.inputImagem.setInputFiles(imagem);
       await this.inputCategoria.selectOption({ value: categoria});
       await this.inputNome.fill(nome);
       await this.inputPreco.fill(preco);
       await this.inputDescricao.fill(descricao);
       await this.botaoCadastrar.click();
    }

    async verificaToast(mensagemEsperada: string): Promise<void> {
        await this.page.waitForTimeout(2000);
        const toastElement = await this.toast.first();
        const toastText = await toastElement.textContent();
        await expect(toastText).toBe(mensagemEsperada);
      }
 
}