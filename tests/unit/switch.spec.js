import { mount } from '@vue/test-utils'
import Switch from '@/components/switch'

describe('BoSwitch', () => {
  it('reflects value prop updates in the native input', async () => {
    const wrapper = mount(Switch, {
      propsData: {
        value: true
      }
    })

    expect(Switch.name).toBe('bo-switch')
    expect(wrapper.get('input').element.checked).toBe(true)

    await wrapper.setProps({ value: false })

    expect(wrapper.get('input').element.checked).toBe(false)
  })

  it('emits the Vue 2 v-model and change contracts', async () => {
    const wrapper = mount(Switch, {
      propsData: {
        value: true
      }
    })

    await wrapper.get('input').setChecked(false)

    expect(wrapper.emitted('input')).toEqual([[false]])
    expect(wrapper.emitted('change')).toEqual([[false]])
  })

  it('forwards disabled and accessible-label state', () => {
    const wrapper = mount(Switch, {
      propsData: {
        disabled: true,
        ariaLabel: 'Airplane mode'
      }
    })
    const input = wrapper.get('input')

    expect(input.attributes('disabled')).toBe('disabled')
    expect(input.attributes('aria-label')).toBe('Airplane mode')
  })
})
