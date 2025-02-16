function cacarDragoes() {
    // Obter os valores dos inputs
    const dragoesPoderes = document.getElementById('dragoes').value.split(',').map(Number);
    const poderMagico = parseInt(document.getElementById('poderMagico').value);

    // Verificar se os inputs são válidos
    if (dragoesPoderes.some(isNaN) || isNaN(poderMagico)) {
        alert("Por favor, insira valores válidos!");
        return;
    }

    // Encontrar os dragões que podem ser capturados
    const dragoesCapturados = dragoesPoderes.reduce((acc, poder, index) => {
        if (poderMagico > poder) {
            acc.push(index);
        }
        return acc;
    }, []);

    // Exibir o resultado
    const resultado = document.getElementById('resultado');
    if (dragoesCapturados.length > 0) {
        resultado.textContent = `Você pode capturar os dragões nos índices: [${dragoesCapturados.join(', ')}]`;
    } else {
        resultado.textContent = "Você não pode capturar nenhum dragão com seu poder atual.";
    }
}
