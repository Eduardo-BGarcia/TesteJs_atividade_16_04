

test("Deve validar senha com sucesso, rejeitando se menor que 8 caracteres", () => {
    // Arrange
    const usuario = new Usuario({id: 1, nome: "João", senha: "1234567"});
    
    // Act 
    const resultado = validadorSenha.validar(usuario.senha);
    
    // Assert
    expect(resultado).toBe(false);
});