import { mount } from '@vue/test-utils'
import { Cell, CellItem } from '@/components/cell'

describe('Cell components', () => {
  it('renders the container state and default slot', () => {
    const wrapper = mount(Cell, {
      propsData: {
        noBorder: true
      },
      slots: {
        default: '<span class="cell-content">Account</span>'
      }
    })

    expect(Cell.name).toBe('bo-cell')
    expect(wrapper.classes()).toContain('no-border')
    expect(wrapper.get('.cell-content').text()).toBe('Account')
  })

  it('renders item props, named slots, and link state', () => {
    const wrapper = mount(CellItem, {
      propsData: {
        title: 'Profile',
        value: 'Open',
        isLink: true
      },
      slots: {
        title: '<small class="title-extra">Required</small>',
        value: '<small class="value-extra">Now</small>'
      }
    })

    expect(CellItem.name).toBe('bo-cell-item')
    expect(wrapper.classes()).toContain('taphold')
    expect(wrapper.get('.icon-right').exists()).toBe(true)
    expect(wrapper.get('.title-extra').text()).toBe('Required')
    expect(wrapper.get('.value-extra').text()).toBe('Now')
  })

  it('emits click from an interactive item', async () => {
    const wrapper = mount(CellItem, {
      propsData: {
        clickable: true
      }
    })

    await wrapper.trigger('click')

    expect(wrapper.emitted('click')).toHaveLength(1)
  })
})
