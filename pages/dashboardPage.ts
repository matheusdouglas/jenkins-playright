import { Page, Locator } from "@playwright/test";

export class DashboardPage {
    readonly page: Page;
    readonly linkCategoria: Locator;
    readonly linkProduto: Locator;

    constructor(page: Page) {
        this.page = page;
        this.linkCategoria = page.locator('a', { hasText: 'Categoria' });
        this.linkProduto = page.locator('a', { hasText: 'Produto' });
    }

    async itemCategoria() {
        await this.linkCategoria.first().click();
    }
    async itemProduto() {
        await this.linkProduto.first().click();
    }

}