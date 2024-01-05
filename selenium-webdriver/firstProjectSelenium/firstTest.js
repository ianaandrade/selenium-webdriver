const {Builder, By, Key} = require("selenium-webdriver");
const assert = require("assert");
const should = require("chai").should();

// Abrir função assíncrona
async function toDoList() {

// Abrir navegador
let driver = await new Builder().forBrowser("firefox").build();

// Navegar até o site
await driver.get("https://herziopinto.github.io/lista-de-tarefas/");

// Adicionar uma tarefa
await driver.findElement(By.id("inputTask")).sendKeys("Aprender Selenium", Key.RETURN);

// Assertion / validação (xpath)
let seleniumText = await driver.findElement(By.xpath("/html/body/div/section/ul/li/label")).getText()
.then(function(value){
return value
});

// Assertion utilizando o node puro
//assert.strictEqual(seleniumText, "Aprender Selenium");

// Assertion utilizando a biblioteca Chai - should
seleniumText.should.equal("Aprender Selenium");

// Fechar navegador
await driver.quit()

// Fechar função assíncrona
}

toDoList()