import ease = require("d3-ease")
import Segment = require('segment-js')
import * as $ from 'jquery'

let pathA = $("#pathA").get(0),
    pathB = $("#pathB").get(0),
    pathC = $("#pathC").get(0),
    primeirosegmento = new Segment(pathA, 8, 32),
    segundosegmento = new Segment(pathB, 8, 32),
    terceirosegmento = new Segment(pathC, 8, 32)

function inAC(segment) {
    segment.draw('80% - 24', '80%', 0.3, {delay: 0.1, callback: () => {inAC2(segment)}})
}

function inAC2(segment) {
    segment.draw('100% - 54.5', '100% - 30.05', 0.1, {easing: ease.easeElasticOut(1, 0.3)})
}

function inB(segment) {
    segment.draw(2, 26, 0.1, {callback: () => {inB2(segment)}})
}

function inB2(segment) {
    segment.draw(20, 20, 0.3, {easing: ease.easeBounceOut(1, 0.3)})
}

function outAC(segment) {
    segment.draw('90% - 24', '90%', 0.1, {easing: ease.easeElasticIn(1, 0.3), callback: () => {outAC2(segment)}})
}

function outAC2(segment) {
    segment.draw('20% - 24', '20%', 0.1, {callback: () => {outAC3(segment)}})
}

function outAC3(segment) {
    segment.draw(8, 32, 0.1, {easing: ease.easeElasticOut(1, 0.3)})
}

function outB(segment) {
    segment.draw(8, 32 , 0.1, {delay: 0.1, easing: ease.easeElasticOut(1, 0.4)})
}

export function animateMenu(trigger, closeIcon: boolean = true) {
    return trigger.on('click touchStart', () => {
        if(closeIcon) {
            inAC(primeirosegmento)
            inB(segundosegmento)
            inAC(terceirosegmento)
        } else {
            outAC(primeirosegmento)
            outB(segundosegmento)
            outAC(terceirosegmento)
        }
        closeIcon = !closeIcon
    }) 
}