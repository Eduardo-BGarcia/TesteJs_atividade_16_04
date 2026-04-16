class ValidadorSenhaService {
    static validadorSenha = {
        validar: (senha) => {
            return senha.length >= 8;
        }
    }
}
module.exports = ValidadorSenhaService;