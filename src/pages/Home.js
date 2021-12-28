import { Lightning, Utils, Colors, Log } from '@lightningjs/sdk'

import { WIDTH, HEIGHT } from '@/constants'
import { Slider as SliderComp } from '@/components'
class Home extends Lightning.Component {
  static _template() {
    return {
      Background: {
        w: WIDTH,
        h: HEIGHT,
        rect: true,
        color: Colors('background').get(),
      },
      Title: {
        y: 24 + 96 / 2,
        x: 60,
        text: {
          color: Colors('text').get(),
          text: 'Robbert van Caem',
          fontSize: 24,
        },
      },
      Avatar: {
        w: 96,
        h: 96,
        mountX: 1,
        x: WIDTH - 24,
        y: 24,
        src: Utils.asset('images/linkedin.jpeg'),
      },
      Slider: {
        w: WIDTH,
        type: SliderComp,
      },
    }
  }

  _getFocused() {
    return this.tag('Slider')
  }
}

export default Home
