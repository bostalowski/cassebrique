import { createVector as Vector } from './Vector'

const particlePrototype = state => ({
  getX: state.position.getX,
  getY: state.position.getY,

  update: function() {
    state.position.addTo(state.velocity)
    return this
  }
})

export const createParticle = (x = 0, y = 0, speed = 0, direction = 0) => {
  const state = {
    position: Vector(x, y),
    velocity: Vector()
      .setLength(speed)
      .setAngle(direction)
  }

  return Object.assign(state, particlePrototype(state))
}
