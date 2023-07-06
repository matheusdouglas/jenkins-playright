import { Page, Locator, expect } from "@playwright/test";

export class CategoriaPage {
    
    readonly page: Page;
    readonly inputNome: Locator;
    readonly botaoCadastrar: Locator;
    readonly toast: Locator;

    constructor(page : Page){
        this.page = page;
        this.inputNome = page.locator('input[placeholder="Digite o nome da categoria"]');
        this.botaoCadastrar = page.locator('button[type="submit"]');
        this.toast = page.locator('div.Toastify')
    }
    
    async cadastrarCategoria(nome: string){
        await this.inputNome.fill(nome);
        await this.botaoCadastrar.first().click();
    }

    async verificaToast(mensagemEsperada: string): Promise<void> {
        await this.page.waitForTimeout(2000);
        const toastElement = await this.toast.first();
        const toastText = await toastElement.textContent();
        await expect(toastText).toBe(mensagemEsperada);
      }

}