Teste -> 001
    1 - criado estrutura de diretorio onde o arquivo do teste ficara, segui o exemplo de aula;
    2 - escrevi a estrutura base do teste, bem como o nome e instalei as dependências na minha maquina;
    3 - escrevi lógica simples, add os três passos Arrange, Act e Assert, rodei o teste e ele falhou, ficando vermelho;
    4 - escrevi o método no classe do service, add a lógica da validação, bem como criar na pasta src o diretório model e a classe usuário;
    5 - rodei o teste enviando uma senha com 7 digitos, a validação deve retornar true quando for >= 8 e false quando for <=, o teste passou, ficando verde;
    6 - refatorei o nome do método, adequando ao que ele testa, ficando azul;

Teste -> 002
    1 - criado teste para validar se possui letras, executei ele e foi uma falha, ficando vermelho;
    2 - criado if no método de validação de senha para checar se possui letras maiusculas, testei e foi um sucesso, sendo verde;
    3 - refatorei o nome do método para ficar correspondente a sua validação;

Teste -> 003
    1 - criado teste para validar se possui letras minusculas, maiusculas e ser maior que 8, executei ele e foi uma falha, ficando vermelho;
