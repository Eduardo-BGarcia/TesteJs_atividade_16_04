const Usuario = require("../../src/model/Usuario");
const ValidadorSenhaService = require("../../src/service/ValidadorSenhaService");

test("001 - Deve validar se a senha possui o minimo de 8 caracteres", () => {
    // Arrange
    const usuario = new Usuario({id: 1, nome: "João", senha: "1234567"});
    
    // Act 
    const resultado = ValidadorSenhaService.validadorSenha.validar(usuario.senha);
    
    // Assert
    expect(resultado).toBe(false);
});

test("002 - Deve validar se a senha possui letras maiúsculas e mais de 8 digitos", () => {
    // Arrange
    const usuario = new Usuario({id: 1, nome: "João", senha: "Eduardoo"});
    
    // Act 
    const resultado = ValidadorSenhaService.validadorSenha.validar(usuario.senha);
    
    // Assert
    expect(resultado).toBe(true);
});

test("003 - Deve validar se a senha possui letras minusculas", () => {
    // Arrange
    const usuario = new Usuario({ id: 1, nome: "João", senha: "EDuARDOo" });

    // Act 
    const resultado = ValidadorSenhaService.validadorSenha.validar(usuario.senha);

    // Assert
    expect(resultado).toBe(true);
});

test("003 - Deve validar se a senha possui numero", () => {
    // Arrange
    const usuario = new Usuario({ id: 1, nome: "João", senha: "EDuARDOo1" });

    // Act 
    const resultado = ValidadorSenhaService.validadorSenha.validar(usuario.senha);

    // Assert
    expect(resultado).toBe(false);
});