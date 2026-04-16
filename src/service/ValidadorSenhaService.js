class ValidadorSenhaService {
    static validadorSenha = {
        validar: (senha) => {
            if (senha.length < 8) {
                return false; 
            }

            if (!/[A-Z]/.test(senha)) {
                return false; 
            }
            return true;
        }
    }
}

module.exports = ValidadorSenhaService;