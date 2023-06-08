import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {

   readonly page: Page;
    readonly linkCadastrar: Locator;

    constructor(page: Page) {
        this.page = page;
        this.linkCadastrar = page.locator('a', { hasText: 'Nao possui uma conta? Cadastra-se' })
    }
    
    async goto(){
        await this.page.goto('http://localhost:3000');
    }

    async linkCadastro(){
        await this.linkCadastrar.first().click();
    }
}