const root = document.querySelector('#root');
const textTitle = 'Dificuldade';


const title = Title`
    color: #F0F0F0;
    font-size: 2.5rem;
    letter-spacing: 1.5px;
    margin-bottom: 4rem;
    ${textTitle}
`


root.insertAdjacentHTML('beforeend', title);
root.insertAdjacentHTML('beforeend', wrapperCharacters);
