const css = `
<style>
    :root {
        --line-height: 10px;
        --happy-color: #f5f6fa;
        --action-color: #b33939;
    }

    * {
        margin: 0;
        padding: 0;
        border: none;
    }

    body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #2f3640;
    }

    #particles-js {
        position: absolute;
        width: 100%;
        height: 100vh;
        z-index: 1;
    }

    #root {
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        font-family: 'Bungee', cursive;
        background-color: #1e272e;
        width: 40vw;
        min-width: 768px;
        height: 65vh;
        text-align: center;
        padding-top: 4rem;
        padding-bottom: 8rem;
        border-radius: 4px;
        box-shadow: 2px 2px 15px rgba(0,0,0,0.1);
        z-index: 10;
    }
</style>`

const head = document.querySelector('head')

head.insertAdjacentHTML('beforeend', css)