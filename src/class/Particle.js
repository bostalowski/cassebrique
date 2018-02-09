import { createVector as Vector } from './Vector'

const particlePrototype = state => ({
  getX: state.position.getX,
  getY: state.position.getY,
  setX: state.position.setX,
  setY: state.position.setY,

  update: function() {
    state.velocity.addTo(state.gravity)
    state.position.addTo(state.velocity)
    return this
  },

  accelerate: state.velocity.addTo
})

export const createParticle = (
  x = 0,
  y = 0,
  speed = 0,
  direction = 0,
  gravity = 0
) => {
  const state = {
    position: Vector(x, y),
    velocity: Vector()
      .setLength(speed)
      .setAngle(direction),
    gravity: Vector(0, gravity)
  }

  return Object.assign(state, particlePrototype(state))
}
