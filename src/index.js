import {siteTitle, b, c} from './config.js'
import {navigate} from './engine/router-hash'
import routes from './engine/router-history-api/routes.js'
import 'bulma/css/bulma.css'
import './app.css'

// if (history.state == null){
//   history.pushState(routes.home, "", "/home")
// }



// using the hash based router
// navigate once to go to home
window.addEventListener('load', navigate);



// using the history api router
// window.addEventListener('popstate', console.log('popstate aqui'))

// window.onpopstate = navigate
// window.addEventListener('pushstate', console.log('pushstate aqui index'))
// window.addEventListener('pushstate', navigate)

console.log('History state title: ' + history.state.title)
console.log('History state location: ' + history.state.location)
console.log('Size of history ' + history.length)
console.log('route home: ' + routes.home.title)
