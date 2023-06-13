<script setup lang="ts">
const props = defineProps({
   numSquaresFloor: Number,
   numSquaresCeiling: Number,
   squareSizeFloor: Number,
   squareSizeCeiling: Number,
})
</script>

<style lang="scss">
.kd-square-splash {

   .kd-square {
      border-radius: 10%;
      background-color: white;
   }
}
</style>

<template>
   <div class="kd-square-splash w-full h-full absolute top-0 right-0 z-50">
      <div class="inner">
         <div class="target"></div>
      </div>
   </div>
</template>

<script lang="ts">
class KDSquare {
   size: any;
   color: any;
   bounds: any;

   constructor(size: any, color: any, bounds: any) {
      this.size = size;
      this.color = color;
      this.bounds = bounds;
   }
}

function generateSquares(numFloor: any, numCeiling: any) {
   var count =
    Math.floor(Math.random() * (numCeiling - numFloor + 1)) + numFloor;

  var squares = [];
  for (var i = 0; i < count; i++) {
    squares.push(new KDSquare(getRandomSize(), getRandomColor(), Bounds()));
  }

  return squares;
}
function placeSquares(target: any, squares: any) {

}

function randomizePos(target: any) {

}

// helper functions

function Bounds(el?: any, pad = 0) { // this is like a class -- TODO: turn into actual class?
   const square = el?.getBoundingClientRect() ?? {
      left: 0,
      top: 0,
      right: innerWidth,
      bottom: innerHeight,
      width: innerWidth,
      height: innerHeight
   };

   return {
      l: square.left - pad,
      t: square.top - pad,
      r: square.right + pad,
      b: square.bottom + pad,

      w: square.width + pad * 2,
      h: square.height + pad * 2,
      overlaps(bounds: any) {
         return !(
            this.l > bounds.r ||
            this.r < bounds.l ||
            this.t > bounds.b ||
            this.b < bounds.t
         );
      },
      moveTo(x: any, y: any) {
         this.r = (this.l = x) + this.w;
         this.b = (this.t = y) + this.h;
         return this;
      },
      placeElement() {
         if (el) {
            el.style.top = this.t + pad + "px";
            el.style.left = this.l + pad + "px";
            el.style.visibility = "visible";
            el.classList.add("placed");
         }
         return this;
      }
   };
}

function getDistance(x1: any, y1: any, x2: any, y2: any) {
   let xDistance = x2 - x1;
   let yDistance = y2 - y1;

   return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

function getRandomColor() {
  var colors = Array("orange", "yellow", "gray", "light-blue");
  return colors[Math.floor(Math.random() * colors.length)];
}

function getRandomSize() {
  var sizeFloor = 15;
  var sizeCeiling = 100;

  var size = Math.floor(Math.random() * (sizeCeiling - sizeFloor) + sizeFloor);
  return size;
}
</script>