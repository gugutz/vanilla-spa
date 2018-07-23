import routes from './routes.js'


// helper function
const loadScreen = async (screenName) => {
    const {default: currentScreen} = await import(`../../screens/${screenName}`)
    window.app.innerHTML = ''
    window.app.appendChild(await currentScreen())
}


const navigate = async () => {
  console.log('teste router aqui')

  state = history.state
  title = state.title
  location = state.location

  // history.pushState(state, title, location)

  loadScreen(title)
}


export {navigate}
