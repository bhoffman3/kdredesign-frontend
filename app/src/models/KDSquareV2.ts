import { uuid } from 'vue-uuid'

class KDSquare {
   size: string = '50px'
   color: string = '#FFFFFF'
   align: string = 'top'
   delay: number = 0
   xgap: number = 4
	uid: any

	constructor(componentBackgroundColor: string) {
      this.size = `${this.getRandomNum()}px`
      this.align = this.getRandomAlign()
      this.delay = this.getRandomNum(1, 15)
      this.xgap = this.getRandomNum(4, 8)
		this.uid = uuid.v4()

      if(componentBackgroundColor != '') {
         this.color = this.getRandomColor(componentBackgroundColor).value
      } else {
         this.color = this.getRandomColor().value
      }
	}

   getRandomNum(floor = 15, ceiling = 100) {
      return Math.floor(Math.random() * (ceiling - floor) + floor)
   }

   getRandomColor(exclude = '') {
      let colors = [
         { name: 'navy', value: '#384967' },
         { name: 'orange', value: '#e56a54' },
         { name: 'sky', value: '#c6d6e3' },
         { name: 'yellow', value: '#fdd086' },
         { name: 'gray', value: '#75787b' },
         { name: 'light', value: '#e5e1e6' },
      ]

      if(exclude !== ''){
         colors = colors.filter(i => i.name !== exclude)
      }

      return colors[Math.floor(Math.random() * colors.length)]
   }

   getRandomAlign() {
      let alignOptions = Array(
         'top',
         'center',
         'end',
      )
      return alignOptions[Math.floor(Math.random() * alignOptions.length)]
   }
}

export default KDSquare