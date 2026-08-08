import { mount } from '@vue/test-utils'
import { Checkbox, CheckboxGroup } from '@/components/checkbox'
import { Radio, RadioGroup } from '@/components/radio'

const stubs = {
  'bo-icon': true
}

describe('Checkbox controls', () => {
  it('renders a controlled native input and supports custom values', async () => {
    const wrapper = mount(Checkbox, {
      propsData: {
        value: 'no',
        trueValue: 'yes',
        falseValue: 'no'
      },
      stubs
    })
    const input = wrapper.get('input[type="checkbox"]')

    expect(input.element.checked).toBe(false)

    input.element.checked = true
    await input.trigger('change')

    expect(wrapper.emitted('input')).toEqual([['yes']])
    expect(wrapper.emitted('change')).toEqual([['yes']])

    await wrapper.setProps({ value: 'yes' })

    expect(input.element.checked).toBe(true)
  })

  it('forwards disabled and accessible input attributes', () => {
    const wrapper = mount(Checkbox, {
      attrs: {
        'aria-label': 'Accept terms'
      },
      propsData: {
        disabled: true
      },
      stubs
    })
    const input = wrapper.get('input')

    expect(input.attributes('disabled')).toBe('disabled')
    expect(input.attributes('aria-label')).toBe('Accept terms')
  })

  it('rejects new group selections after reaching max', async () => {
    const wrapper = mount({
      components: {
        BoCheckbox: Checkbox,
        BoCheckboxGroup: CheckboxGroup
      },
      data () {
        return {
          selected: ['A']
        }
      },
      template: `
        <bo-checkbox-group v-model="selected" :max="1" aria-label="Choices">
          <bo-checkbox label="A">A</bo-checkbox>
          <bo-checkbox label="B">B</bo-checkbox>
        </bo-checkbox-group>
      `
    }, { stubs })
    const inputs = wrapper.findAll('input')

    inputs.at(1).element.checked = true
    await inputs.at(1).trigger('change')

    expect(wrapper.vm.selected).toEqual(['A'])
    expect(inputs.at(1).element.checked).toBe(false)
    expect(wrapper.get('[role="group"]').attributes('aria-label')).toBe('Choices')
  })
})

describe('Radio controls', () => {
  it('compares a standalone model with its label', async () => {
    const wrapper = mount(Radio, {
      propsData: {
        value: 'B',
        label: 'A',
        name: 'standalone-choice'
      },
      stubs
    })
    const input = wrapper.get('input[type="radio"]')

    expect(input.element.checked).toBe(false)

    input.element.checked = true
    await input.trigger('change')

    expect(wrapper.emitted('input')).toEqual([['A']])
    expect(wrapper.emitted('change')).toEqual([['A']])
    expect(input.attributes('name')).toBe('standalone-choice')
  })

  it('uses one generated native name and updates grouped v-model', async () => {
    const wrapper = mount({
      components: {
        BoRadio: Radio,
        BoRadioGroup: RadioGroup
      },
      data () {
        return {
          selected: 'A'
        }
      },
      template: `
        <bo-radio-group v-model="selected" aria-label="Fruit">
          <bo-radio label="A">A</bo-radio>
          <bo-radio label="B">B</bo-radio>
        </bo-radio-group>
      `
    }, { stubs })
    const inputs = wrapper.findAll('input')

    expect(inputs.at(0).attributes('name')).toBe(inputs.at(1).attributes('name'))
    expect(wrapper.get('[role="radiogroup"]').attributes('aria-label')).toBe('Fruit')

    inputs.at(1).element.checked = true
    await inputs.at(1).trigger('change')

    expect(wrapper.vm.selected).toBe('B')
  })
})
