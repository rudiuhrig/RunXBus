//Filter customizado para exibicao
app.filter("exclamacao", function () {
		return function(input, totalExclamacoes) {
			var exclamacao = "";
			if (totalExclamacoes) {
				for( j=0 ; j < totalExclamacoes; j++) {
					exclamacao = exclamacao + "!";
				}
			}
			return input + exclamacao;
		};
	});