import { Lightning, Utils, Colors } from '@lightningjs/sdk'

import { WIDTH, HEIGHT } from '@/constants'

class Home extends Lightning.Component {
  static _template() {
    return {
      Background: {
        w: WIDTH,
        h: HEIGHT,
        rect: true,
        color: Colors('background').get(),
      },
      Avatar: {
        w: 250,
        h: 250,
        mount: 0.5,
        x: WIDTH / 2,
        y: HEIGHT / 2,
        src: Utils.asset('images/linkedin.jpeg'),
      },
      Title: {
        y: HEIGHT / 2 - 125,
        mountY: 1,
        w: WIDTH,
        text: {
          textColor: Colors('text').get(),
          fontSize: 36,
          text: 'Get To Know Me',
          textAlign: 'center',
        },
      },
    }
  }
}

export default Home
