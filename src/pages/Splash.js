import { Colors, Lightning, Router, Utils } from '@lightningjs/sdk'

import { WIDTH, HEIGHT } from '@/constants'

const DOT_SIZE = 16
const DOT_SPACING = 24

export default class Splash extends Lightning.Component {
  static _template() {
    return {
      Background: {
        rect: true,
        w: WIDTH,
        h: HEIGHT,
        color: Colors('lightPink').get(),
      },
      Logo: {
        src: Utils.asset('images/logo.png'),
        mount: 0.5,
        x: WIDTH / 2,
        y: HEIGHT / 2,
      },
      Dots: {
        y: HEIGHT / 2 + 64,
        x: WIDTH / 2,
        mount: 0.5,
        children: [
          {
            Dot1: {
              rect: true,
              color: Colors('darkGrey').get(),
              mountX: 0.5,
              x: w => w / 2 - DOT_SPACING,
              w: DOT_SIZE,
              h: DOT_SIZE,
              shader: {
                type: Lightning.shaders.RoundedRectangle,
                radius: DOT_SIZE / 2,
              },
            },
            Dot2: {
              rect: true,
              color: Colors('darkGrey').get(),
              mountX: 0.5,
              x: w => w / 2,
              w: DOT_SIZE,
              h: DOT_SIZE,
              shader: {
                type: Lightning.shaders.RoundedRectangle,
                radius: DOT_SIZE / 2,
              },
            },
            Dot3: {
              rect: true,
              color: Colors('darkGrey').get(),
              mountX: 0.5,
              x: w => w / 2 + DOT_SPACING,
              w: DOT_SIZE,
              h: DOT_SIZE,
              shader: {
                type: Lightning.shaders.RoundedRectangle,
                radius: DOT_SIZE / 2,
              },
            },
          },
        ],
      },
    }
  }

  pageTransition() {
    /**
     * Right now, the splash is animated up, and the home
     * screen is'nt animated at all. Somehow I expected it to
     * not animate the splash (as it is the root component), but
     * only animate the splash when it leaves.
     */
    return 'up'
  }

  _init() {
    const animation = {
      duration: 1.4,
      repeat: -1,
      repeatDelay: 0.4,
      actions: [{ p: 'alpha', v: { 0: 1.0, 0.5: 0.1, 1.0: 1.0 } }],
    }

    this._animations = [
      this.tag('Dots.Dot1').animation(animation),
      this.tag('Dots.Dot2').animation({ ...animation, delay: 0.4 }),
      this.tag('Dots.Dot3').animation({ ...animation, delay: 0.8 }),
    ]
  }

  _handleEnter() {
    Router.navigate('home')
  }

  _active() {
    this._animations.forEach(a => a.start())
  }

  _inactive() {
    this._animations.forEach(a => a.stop())
  }
}
