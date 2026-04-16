const Usuario = require("../../src/model/Usuario");
const ValidadorSenhaService = require("../../src/service/ValidadorSenhaService");

test("001 - Deve validar se a senha possui o minimo de 8 caracteres", () => {
    // Arrange
    const usuario = new Usuario({ id: 1, nome: "João", senha: "Eduard0o!@#$%^&*"});
    
    // Act 
    const resultado = ValidadorSenhaService.validadorSenha.validar(usuario.senha);
    
    // Assert
    expect(resultado).toBe(true);
});

test("002 - Deve validar se a senha possui letras maiúsculas", () => {
    // Arrange
    const usuario = new Usuario({ id: 1, nome: "João", senha: "Eduard0o!@#$%^&*"});
    
    // Act 
    const resultado = ValidadorSenhaService.validadorSenha.validar(usuario.senha);
    
    // Assert
    expect(resultado).toBe(true);
});

test("003 - Deve validar se a senha possui letras minusculas", () => {
    // Arrange
    const usuario = new Usuario({ id: 1, nome: "João", senha: "Eduard0o!@#$%^&*" });

    // Act 
    const resultado = ValidadorSenhaService.validadorSenha.validar(usuario.senha);

    // Assert
    expect(resultado).toBe(true);
});

test("004 - Deve validar se a senha possui numero", () => {
    // Arrange
    const usuario = new Usuario({ id: 1, nome: "João", senha: "Eduard0o!@#$%^&*" });

    // Act 
    const resultado = ValidadorSenhaService.validadorSenha.validar(usuario.senha);

    // Assert
    expect(resultado).toBe(true);
});

test("005 - Deve validar se a senha possui caracter especial", () => {
    // Arrange
    const usuario = new Usuario({ id: 1, nome: "João", senha: "Eduard0o!@#$%^&*" });

    // Act 
    const resultado = ValidadorSenhaService.validadorSenha.validar(usuario.senha);

    // Assert
    expect(resultado).toBe(true);
});