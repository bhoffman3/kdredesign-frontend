class NewBounds {
   width: any
	height: any
	l: any
	t: any
	r: any
	b: any

   constructor(size: number, pad: number = 0) {
      this.l = 0 - pad
      this.t = 0 - pad
      this.r = 0 + pad
      this.b = 0 + pad
      this.width = size + pad * 2
      this.height = size + pad * 2
   }

   overlaps(bounds: NewBounds): boolean {
      return !(
         this.l > bounds.r ||
         this.r < bounds.l ||
         this.t > bounds.b ||
         this.b < bounds.t
      )
   }

   moveTo(x: number, y: number): NewBounds {
      this.r = (this.l = x) + this.width
      this.b = (this.t = y) + this.height
      return this
   }

   placeElement(el: any, pad: number = 0): NewBounds {
      if (el) {
         el.style.top = (this.t + pad) + 'px'
         el.style.left = (this.l + pad) + 'px'
      }

      return this
   }
}

export default NewBounds