import { Router }  from '@vaadin/router'

import 'pages/home'

const router = new Router(document.getElementById('root'))
router.setRoutes([
  { path: '/', component: 'pages-home' }
])
