import * as $ from "jquery"
import { initMenu } from "./componentes/menu"

const trigger =  $('#toggle-button')
const menu = $('.navbar-nav')

initMenu(trigger, menu)