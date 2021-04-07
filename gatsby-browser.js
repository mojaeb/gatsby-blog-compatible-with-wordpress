/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import './static/css/global.css'
import './static/css/normalize.css'
import './static/icons/webfont.css'
// import './static/css/bootstrap.min.css'
import './static/images/logo.svg'
import './static/images/post-image.png'
import './static/images/engineering-2.jpg'
import './static/images/avatar.jpg'
import './static/images/iconmonstr-quote-3.svg'
import './static/images/96686565.png'
import './static/images/background.svg'
import NProgress from 'nprogress'

export const onClientEntry = () => {
  alert("df")
  // console.log("We've started!")
  // callAnalyticsAPI()
}

export const onInitialClientRender = () => {
  NProgress.start();
  setTimeout(function() {
    document.getElementById("___loader").style.display = "none"
  }, 1000)
}