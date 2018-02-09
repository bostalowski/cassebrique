import { createVector as Vector } from './class/Vector'
import { createParticle as Particle } from './class/Particle'

window.onload = () => {
  const canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    width = (canvas.width = window.innerWidth),
    height = (canvas.height = window.innerHeight)

  let particle = Particle(100, 100)
  let acceleration = Vector()

  const onKeyDown = (event) => {
    switch(event.keyCode) {
      case 38: // up
        acceleration.setY(-0.1)
        break
      case 40: // down
        acceleration.setY(0.1)
        break
      case 37: // left
        acceleration.setX(-0.1)
        break
      case 39: // right
        acceleration.setX(0.1)
        break;
      default:
        break
    }
  }

  const onKeyUp = (event) => {
    switch(event.keyCode) {
      case 38: // up
        acceleration.setY(0)
        break
      case 40: // down
        acceleration.setY(0)
        break
      case 37: // left
        acceleration.setX(0)
        break
      case 39: // right
        acceleration.setX(0)
        break;
      default:
        break
    }
  }

  document.body.addEventListener('keydown', onKeyDown)
  document.body.addEventListener('keyup', onKeyUp)
  
  const update = () => {
    context.clearRect(0, 0, width, height)

    particle.accelerate(acceleration)
    particle.update()
    context.beginPath()
    context.arc(particle.getX(), particle.getY(), 10, 0, Math.PI * 2, false)
    context.fill()

    if (particle.getX() > width) {
      particle.setX(0)
    }
    if (particle.getX() < 0) {
      particle.setX(width)
    }
    if (particle.getY() > height) {
      particle.setY(0)
    }
    if (particle.getY() < 0) {
      particle.setY(height)
    }

    requestAnimationFrame(update)
  }

  update()
}

