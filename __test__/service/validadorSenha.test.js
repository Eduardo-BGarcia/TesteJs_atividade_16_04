const Usuario = require("../../src/model/Usuario");
const ValidadorSenhaService = require("../../src/service/ValidadorSenhaService");

test("Deve validar senha com sucesso, rejeitando se menor que 8 caracteres", () => {
    // Arrange
    const usuario = new Usuario({id: 1, nome: "João", senha: "1234567"});
    
    // Act 
    const resultado = ValidadorSenhaService.validadorSenha.validar(usuario.senha);
    
    // Assert
    expect(resultado).toBe(false);
});