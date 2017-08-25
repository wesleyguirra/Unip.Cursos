import ease from "d3-ease"
import Segment from "segment-js"
import $ from "jquery"

let wrapper = $('#navbar-toggle'), 
    trigger =  $('#toggle-button'),
    pathA = $("#pathA"), 
    pathB = $("#pathB"), 
    pathC = $("#pathC"),
    primeirosegmento = new Segment(pathA, 8, 32),
    segundosegmento = new Segment(pathB, 8, 32),
    terceirosegmento = new Segment(pathC, 8, 32)

function inAC(segment) {
    segment.draw('80% - 24', '80%', 0.3, {delay: 0.1, callback: segment => {inAC2(segment)}})
}

function inAC2(segment) {
    segment.draw('100% - 54.5', '100% - 30.05', 0.6, {easing: ease.easeElasticOut()})
}

function inB(segment) {
    segment.draw(2, 26, 0.1, {callback: segment => {inB2(segment)}})
}

function inB2(segment) {
    segment.draw(20, 20, 0.3, {easing: ease.easeBounceOut()})
}

function outAC(segment) {
    segment.draw('90% - 24', '90%', 0.1, {easing: ease.easeElasticIn(), callback: segment => {outAC2(segment)}})
}

function outAC2(segment) {
    segment.draw('20% - 24', '20%', 0.3, {callback: segment => {outAC3(segment)}})
}

function outAC3(segment) {
    segment.draw(8, 32, 0.7, {easing: ease.easeElasticOut()})
}

function outB(segment) {
    segment.draw(8, 32 , 0.7, {delay: 0.1, easing: ease.easeElasticOut()})
}

trigger.on('click touchstart', toCloseIcon => {
    if(toCloseIcon) {
        inAC(primeirosegmento)
        inB(segundosegmento)
        inAC(terceirosegmento)
    } else {
        outAC(primeirosegmento)
        outB(segundosegmento)
        outAC(terceirosegmento)
    }
})