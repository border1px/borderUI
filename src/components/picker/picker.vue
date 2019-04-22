<template>
  <div class="pf-picker">
    <div
      class="pf-picker__columns"
      :style="columnsStyle"
      @touchmove.prevent
    >
      <picker-column
        v-for="(item, index) in (simple ? [columns] : columns)"
        :key="index"
        :value-key="valueKey"
        :initial-options="simple ? item : item.values"
        :class-name="item.className"
        :default-index="item.defaultIndex"
        :item-height="itemHeight"
        :visible-item-count="visibleItemCount"
        class="pf-picker-column"
        @change="onChange(index)"
      />

    </div>
  </div>
</template>

<script>
// import create from '../utils/create';
import PickerColumn from './picker-column.vue'
import deepClone from '../utils/deep-clone'
import PickerMixin from './mixins_picker'

export default {
  name: 'BoPicker',
  mixins: [PickerMixin],
  components: {
    PickerColumn
  },

  props: {
    columns: Array,
    valueKey: {
      type: String,
      default: 'text'
    }
  },

  data () {
    return {
      children: []
    }
  },

  computed: {
    frameStyle () {
      return {
        height: this.itemHeight + 'px'
      }
    },

    columnsStyle () {
      return {
        height: this.itemHeight * this.visibleItemCount + 'px'
      }
    },

    simple () {
      return this.columns.length && !this.columns[0].values
    }
  },

  watch: {
    columns () {
      this.setColumns()
    }
  },

  methods: {
    setColumns () {
      const columns = this.simple ? [{ values: this.columns }] : this.columns
      columns.forEach((column, index) => {
        this.setColumnValues(index, deepClone(column.values))
      })
    },

    emit (event) {
      if (this.simple) {
        this.$emit(event, this.getColumnValue(0), this.getColumnIndex(0))
      } else {
        this.$emit(event, this.getValues(), this.getIndexes())
      }
    },

    onChange (columnIndex) {
      if (this.simple) {
        this.$emit('change', this, this.getColumnValue(0), this.getColumnIndex(0))
      } else {
        this.$emit('change', this, this.getValues(), columnIndex)
      }
    },

    // get column instance by index
    getColumn (index) {
      return this.children[index]
    },

    // get column value by index
    getColumnValue (index) {
      const column = this.getColumn(index)
      return column && column.getValue()
    },

    // set column value by index
    setColumnValue (index, value) {
      const column = this.getColumn(index)
      column && column.setValue(value)
    },

    // get column option index by column index
    getColumnIndex (columnIndex) {
      return (this.getColumn(columnIndex) || {}).currentIndex
    },

    // set column option index by column index
    setColumnIndex (columnIndex, optionIndex) {
      const column = this.getColumn(columnIndex)
      column && column.setIndex(optionIndex)
    },

    // get options of column by index
    getColumnValues (index) {
      return (this.children[index] || {}).options
    },

    // set options of column by index
    setColumnValues (index, options) {
      const column = this.children[index]
      if (column && JSON.stringify(column.options) !== JSON.stringify(options)) {
        column.options = options
        column.setIndex(0)
      }
    },

    // get values of all columns
    getValues () {
      return this.children.map(child => child.getValue())
    },

    // set values of all columns
    setValues (values) {
      values.forEach((value, index) => {
        this.setColumnValue(index, value)
      })
    },

    // get indexes of all columns
    getIndexes () {
      return this.children.map(child => child.currentIndex)
    },

    // set indexes of all columns
    setIndexes (indexes) {
      indexes.forEach((optionIndex, columnIndex) => {
        this.setColumnIndex(columnIndex, optionIndex)
      })
    }
  }
}
</script>

<style lang="stylus">
@import '../../style/var';

.pf-picker {
  overflow: hidden;
  user-select: none;
  position: relative;
  background-color: #FFF;
  -webkit-text-size-adjust: 100%; /* avoid iOS text size adjust */

  &__toolbar {
    display: flex;
    height: 44px;
    line-height: 44px;
    justify-content: space-between;
  }

  &__cancel,
  &__confirm {
    color: @blue;
    padding: 0 15px;
    font-size: 14px;

    &:active {
      background-color: #e8e8e8;
    }
  }

  &__title {
    max-width: 50%;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
  }

  &__columns {
    display: flex;
    position: relative;
  }

  &__loading {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    position: absolute;
    background-color: rgba(255, 255, 255, .9);

    circle {
      stroke: #1989fa;
    }
  }

  &__loading .van-loading,
  &__frame {
    top: 50%;
    left: 0;
    width: 100%;
    z-index: 1;
    position: absolute;
    pointer-events: none;
    transform: translateY(-50%);
  }

  &-column {
    flex: 1;
    overflow: hidden;
    font-size: 16px;
    text-align: center;

    &__item {
      padding: 0 5px;
      color: #969799;

      &--selected {
        font-weight: 500;
        color: #323233;
      }

      &--disabled {
        opacity: .3;
      }
    }
  }
}
.pf-picker-column__item.selected{
    font-weight: 500;
    color: #323233;
}
</style>
