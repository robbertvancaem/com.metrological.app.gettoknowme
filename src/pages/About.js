import { Lightning, Colors } from '@lightningjs/sdk'

import { WIDTH, HEIGHT } from '@/constants'

class About extends Lightning.Component {
  static _template() {
    return {
      Background: {
        w: WIDTH,
        h: HEIGHT,
        rect: true,
        color: Colors('background').get(),
      },
      Title: {
        y: HEIGHT / 2,
        mountY: 0.5,
        w: WIDTH,
        text: {
          textColor: Colors('text').get(),
          fontSize: 36,
          text: 'Some more about me',
          textAlign: 'center',
        },
      },
    }
  }
}

export default About
