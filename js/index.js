import '@babel/polyfill'

const init = async () => {
    const response = await fetch('/data')
    const responseJson = await response.json()
    document.querySelector('h2').innerText = responseJson.site_title
}
init()