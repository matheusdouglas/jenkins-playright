import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {

    readonly page: Page;
    readonly linkCadastrar: Locator;
    readonly inputEmail: Locator;
    readonly inputSenha: Locator;
    readonly buttonAcessar: Locator;
    readonly toast: Locator;


    constructor(page: Page) {
        this.page = page;
        this.linkCadastrar = page.locator('a', { hasText: 'Nao possui uma conta? Cadastra-se' });
        this.inputEmail = page.locator('input[placeholder="Digite seu email"]');
        this.inputSenha = page.locator('input[placeholder="Digite sua senha"]');
        this.buttonAcessar = page.locator('button[type="submit"] a');
        this.toast = page.locator('div.Toastify')
    }

    async goto() {
        await this.page.goto('http://localhost:3000');
    }

    async fazerLogin(email : string, senha: string){
        await this.inputEmail.fill(email);
        await this.inputSenha.fill(senha);
        await this.buttonAcessar.first().click();
    } 

    async linkCadastro() {
        await this.linkCadastrar.first().click();
    }
    
    async verificaToast(mensagemEsperada: string): Promise<void> {
        await this.page.waitForTimeout(2000);
        const toastElement = await this.toast.first();
        const toastText = await toastElement.textContent();
        await expect(toastText).toBe(mensagemEsperada);
      }

}