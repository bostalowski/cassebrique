import { createVector as Vector } from './class/Vector'
import { createParticle as Particle } from './class/Particle'

window.onload = () => {
  const canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    width = (canvas.width = window.innerWidth),
    height = (canvas.height = window.innerHeight)

  let particle = Particle(100, 100, 3, Math.PI / 6)

  const update = () => {
    context.clearRect(0, 0, width, height)

    particle.update()
    context.beginPath()
    context.arc(particle.getX(), particle.getY(), 10, 0, Math.PI * 2, false)
    context.fill()

    requestAnimationFrame(update)
  }

  update()
}
