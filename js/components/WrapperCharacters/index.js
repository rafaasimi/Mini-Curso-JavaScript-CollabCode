const pathPersonagem = 'images/stormtrooper.png'
const personagem = Character`
    width: 18%;
    ${pathPersonagem}
`

const WrapperCharacters = (css, children) => (`
    <div style="${css}">${children}</div>
`)

const wrapperCharacters = WrapperCharacters`
    display: flex;
    justify-content: space-evenly;
    ${personagem + personagem + personagem}
`