const container = document.querySelector('.container');
for (let i = 1; i < 152; i++) {
    const pokeBox = document.createElement('div');
    const newImg = document.createElement('img');
    const label = document.createElement('span');
    label.innerText = `# ${i}`;
    newImg.setAttribute('src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`);

    pokeBox.classList.add('poke-tag');
    newImg.classList.add('poke-img');

    pokeBox.append(newImg);
    pokeBox.append(label);
    container.append(pokeBox);
}