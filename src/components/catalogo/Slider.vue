<template>
<div class="content pt-4">
  <div id="my-slider" :se-min="minThreshold" :se-step="step" :se-min-value="min" :se-max-value="max" :se-max="maxThreshold" class="slider">
    <div class="slider-touch-left">
      <span id="tooltip-target-left"></span>
      <b-tooltip variant="danger"  target="tooltip-target-left" show triggers="click">{{
                min.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }}</b-tooltip>
    </div>
    <div class="slider-touch-right">
      <span id="tooltip-target-right" ></span>
      <b-tooltip variant="danger" target="tooltip-target-right" show triggers="click">{{
                max.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }}</b-tooltip>
    </div>
    <div class="slider-line">
      <span></span>
    </div>
  </div>
</div>
</template>

<script>
import ZbRangeSlider from './ZbRangeSlider'

export default {
  props: {
    minThreshold: {
      type: Number,
      default: 0
    },
    maxThreshold: {
      type: Number,
      default: 20000000
    },
    step: {
      type: Number,
      default: 1000
    },
    min: {
      type: String,
      required: true
    },
    max: {
      type: String,
      required: true
    }
  },
  data: function () {
    return {
      instance: undefined
    }
  },
  mounted: function () {
    this.instance = new ZbRangeSlider('my-slider')
    this.instance.onChange = (min, max) => this.updateValues(min, max)
  },
  destroyed: function () {

  },
  methods: {
    updateValues: function (min, max) {
      this.$emit('update:min', min)
      this.$emit('update:max', max)
    }
  }
}
</script>

<style lang="scss" >
.slider {
  display: block;
  position: relative;
  height: 36px;
  width: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
}
.slider .slider-touch-left,
.slider .slider-touch-right {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  display: block;
  position: absolute;
  height: 36px;
  width: 36px;
  padding: 6px;
  z-index: 2;
}
.slider .slider-touch-left span,
.slider .slider-touch-right span {
  display: block;
  width: 100%;
  height: 100%;
  background: $texto;
  border: 1px solid $secundario;
  border-radius: 50%;
}
.slider .slider-line {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  position: absolute;
  width: calc(100% - 36px);
  left: 18px;
  top: 16px;
  height: 4px;
  border-radius: 4px;
  background: rgba($color: $secundario, $alpha: .20);
  z-index: 0;
  overflow: hidden;
}
.slider .slider-line span {
  display: block;
  height: 100%;
  width: 0%;
  background: $secundario;
}
.tooltip.b-tooltip-danger .tooltip-inner {
    color: #fff;
    background-color: $secundario!important;
    display: block;
}

.tooltip.b-tooltip-danger.bs-tooltip-top .arrow::before, .tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=top] .arrow::before {
    border-top-color: $secundario!important;
     display: block;
}




</style>