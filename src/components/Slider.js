import { Lightning, Colors, Utils } from '@lightningjs/sdk'

import { ANIM_CONFIG } from '@/constants'

const slides = [
  {
    label: '1991',
    imgSrc: 'linkedin.jpeg',
    text: "Born in Waalwijk, near Tilburg and 's-Hertogenbosch",
  },
  {
    label: '2014',
    imgSrc: 'linkedin.jpeg',
    text: 'Graduated from Fontys University of Applied Sciences (Media & Design)',
  },
  {
    label: '2021',
    imgSrc: 'linkedin.jpeg',
    text:
      'Started working at Metrological in December and got my hands dirty on some Lightning for the very first time',
  },
  {
    label: '2022',
    imgSrc: 'linkedin.jpeg',
    text: 'Ready to build some awesome stuff with you guys',
  },
]

class Item extends Lightning.Component {
  static _template() {
    return {
      flexItem: {
        marginRight: 72,
        color: Colors('lightPink').get(),
      },
      Background: {
        rect: true,
        w: 60,
        h: 32,
        color: Colors('lightPink').get(),
      },
      Label: {
        w: 60,
        h: 32,
        alpha: 0.2,
        text: {
          fontSize: 16,
          lineHeight: 28,
          verticalAlign: 'middle',
          textAlign: 'center',
          textColor: Colors('darkGrey').get(),
        },
      },
      Image: {
        y: 64,
        w: 240,
        h: 240,
        alpha: 0,
      },
      Text: {
        w: 240,
        y: 64,
        x: 240 + 32,
        alpha: 0,
        text: {
          fontSize: 12,
          lineHeight: 28,
        },
      },
    }
  }

  _init() {
    this.patch({
      Label: { text: { text: this.slide.label } },
      Image: {
        src: Utils.asset(`images/${this.slide.imgSrc}`),
      },
      Text: { text: { text: this.slide.text } },
    })
  }

  _focus() {
    this.tag('Label').patch({
      smooth: { alpha: 1 },
    })
    this.tag('Image').patch({
      smooth: { alpha: [1, { delay: 0.4 }] },
    })
    this.tag('Text').patch({
      smooth: { alpha: [1, { delay: 0.6 }] },
    })
  }

  _unfocus() {
    this.tag('Label').patch({
      smooth: { alpha: 0.2 },
    })
    this.tag('Image').patch({
      smooth: { alpha: 0 },
    })
    this.tag('Text').patch({
      smooth: { alpha: 0 },
    })
  }
}

class Slider extends Lightning.Component {
  static _template() {
    return {
      Container: {
        x: 60,
        y: 128,
        flex: {
          direction: 'row',
        },
        children: slides.map((slide, index) => ({
          ref: `Item-${index}`,
          type: Item,
          slide,
        })),
      },
    }
  }

  _init() {
    this._activeIndex = 0
  }

  _handleRight() {
    if (this._activeIndex === slides.length - 1) {
      return
    }
    this._activeIndex++
  }

  _handleLeft() {
    if (this._activeIndex === 0) {
      return
    }
    this._activeIndex--
  }

  _getFocused() {
    const containerX = 60 + 72 * this._activeIndex * -1
    this.tag('Container').patch({
      smooth: {
        x: [containerX, ANIM_CONFIG],
      },
    })
    return this.tag('Container').children[this._activeIndex]
  }
}

export default Slider
