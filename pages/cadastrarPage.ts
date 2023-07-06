import { expect, Locator, Page } from "@playwright/test";

export class CadastrarPage {

  readonly page: Page;
  readonly inputName: Locator;
  readonly inputEmail: Locator;
  readonly inputSenha: Locator;
  readonly botaoEntrar: Locator;
  readonly toast: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inputName = page.locator('input[placeholder="Digite seu nome"]');
    this.inputEmail = page.locator('input[placeholder="Digite seu email"]');
    this.inputSenha = page.locator('input[placeholder="Sua senha"]');
    this.botaoEntrar = page.locator('button[type="submit"] a');
    this.toast = page.locator('div.Toastify')
  }

  async fazerCadastro(nome: string, email: string, senha: string) {
    await this.inputName.fill(nome);
    await this.inputEmail.fill(email);
    await this.inputSenha.fill(senha);
    await this.botaoEntrar.first().click();
  }


  async verificaToast(mensagemEsperada: string): Promise<void> {
    await this.page.waitForTimeout(2000);
    const toastElement = await this.toast.first();
    const toastText = await toastElement.textContent();
    await expect(toastText).toBe(mensagemEsperada);
  }
}


