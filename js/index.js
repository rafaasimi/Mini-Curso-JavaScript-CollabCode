const root = document.querySelector('#root');
const textTitle = 'Dificuldade';
const textSmall = 'Texto pequeno';

const title = Title`
    color: red;
    font-size: 30px;
    ${textTitle}
`

root.insertAdjacentHTML('beforeend', title);