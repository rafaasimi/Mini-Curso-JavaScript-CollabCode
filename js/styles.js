const style = `<style>
        * {
            margin: 0;
            padding: 0;
            border: none;
        }

        body {
            background-color: #2f3640;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        #root {
            box-sizing: border-box;
            text-align: center;
            padding-top: 4rem;
            background-color: #1e272e;
            width: 40vw;
            min-width: 768px;
            height: 65vh;
            font-family: 'Bungee', cursive;
            border-radius: 4px;
            box-shadow: 2px 2px 15px rgba(0,0,0,0.1);
        }
    </style>`

const head = document.querySelector('head').insertAdjacentHTML('beforeend', style);