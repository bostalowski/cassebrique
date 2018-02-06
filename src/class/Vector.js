const prototype = state => ({
  setX: function(value) {
    state.x = value
    return this
  },

  getX: () => {
    return state.x
  },

  setY: function(value) {
    state.y = value
    return this
  },

  getY: function() {
    return state.y
  },

  setAngle: function(angle) {
    let length = this.getLength()
    state.x = Math.cos(angle) * length
    state.y = Math.sin(angle) * length

    return this
  },

  getAngle: function() {
    return Math.atan2(state.y, state.x)
  },

  setLength: function(length) {
    const angle = this.getAngle()
    state.x = Math.cos(angle) * length
    state.y = Math.sin(angle) * length

    return this
  },

  getLength: function() {
    return Math.hypot(state.x, state.y)
  },

  add: function({ x, y }) {
    return createVector(state.x + x, state.y + y)
  },

  addTo: function({ x, y }) {
    state.x += x
    state.y += y

    return this
  },

  subtract: function({ x = 0, y = 0 }) {
    return createVector(state.x - x, state.y - y)
  },

  subtractFrom: function({ x = 0, y = 0 }) {
    state.x -= x
    state.y -= y

    return this
  },

  multiply: function(val) {
    return createVector(val * state.x, val * state.y)
  },

  multiplyBy: function(val) {
    state.x *= val
    state.y *= val
    return this
  },

  divide: function(val) {
    return createVector(state.x / val, state.y / val)
  },

  divideBy: function(val) {
    state.x /= val
    state.y /= val
    return this
  }
})

export const createVector = (x = 0, y = 0) => {
  let state = {
    x,
    y
  }

  return Object.assign(state, prototype(state))
}
