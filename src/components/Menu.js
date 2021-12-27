import { Lightning } from '@lightningjs/sdk'

class Menu extends Lightning.Component {
  static _template() {
    return {
      text: {
        fontSize: 36,
        text: 'Home',
      },
    }
  }
}

export default Menu
