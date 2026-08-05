import { mount } from '@vue/test-utils'
import Button from '@/components/button'

describe('BoButton', () => {
  it('renders its public defaults and slot content', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'Continue'
      }
    })

    expect(Button.name).toBe('BoButton')
    expect(wrapper.classes()).toEqual(expect.arrayContaining([
      'pf-button',
      'pf-button-primary',
      'pf-button-normal'
    ]))
    expect(wrapper.attributes('type')).toBe('button')
    expect(wrapper.text()).toContain('Continue')
  })

  it('supports an explicit native button type', () => {
    const wrapper = mount(Button, {
      propsData: {
        nativeType: 'submit'
      }
    })

    expect(wrapper.attributes('type')).toBe('submit')
  })

  it('emits the native event when clicked', async () => {
    const wrapper = mount(Button)

    await wrapper.trigger('click')

    expect(wrapper.emitted('click')).toHaveLength(1)
    expect(wrapper.emitted('click')[0][0]).toBeInstanceOf(MouseEvent)
  })

  it('disables interaction while disabled or loading', () => {
    const disabled = mount(Button, {
      propsData: {
        disabled: true
      }
    })
    const loading = mount(Button, {
      propsData: {
        loading: true,
        loadingTxt: 'Please wait'
      }
    })

    expect(disabled.attributes('disabled')).toBe('disabled')
    expect(disabled.attributes('aria-disabled')).toBe('true')
    expect(disabled.classes()).toContain('is-disabled')
    expect(loading.attributes('disabled')).toBe('disabled')
    expect(loading.attributes('aria-busy')).toBe('true')
    expect(loading.attributes('aria-disabled')).toBe('true')
    expect(loading.classes()).toContain('is-disabled')
    expect(loading.text()).toContain('Please wait')
  })
})
