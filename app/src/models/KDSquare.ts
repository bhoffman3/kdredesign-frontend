import { uuid } from 'vue-uuid'
import NewBounds from './NewBounds'

class KDSquare {
	size: any
	styles: any
	newBounds: NewBounds
	uid: any

	constructor(size: any, color: any, newBounds: any) {
		this.size = size
		this.styles = {
			width: `${size}px`,
			height: `${size}px`,
			'background-color': color,
			visibility: 'hidden',
		}
		this.newBounds = newBounds
		this.uid = uuid.v4()
	}
}

export default KDSquare