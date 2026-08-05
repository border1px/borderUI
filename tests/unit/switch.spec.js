import { mount } from '@vue/test-utils'
import Switch from '@/components/switch'

describe('BoSwitch', () => {
  it('uses the initial v-model value', () => {
    const wrapper = mount(Switch, {
      propsData: {
        value: true
      }
    })

    expect(Switch.name).toBe('bo-switch')
    expect(wrapper.get('input').element.checked).toBe(true)
  })

  it('emits the updated boolean when changed', async () => {
    const wrapper = mount(Switch, {
      propsData: {
        value: true
      }
    })

    await wrapper.get('input').setChecked(false)

    expect(wrapper.emitted('change')).toEqual([[false]])
  })
})
