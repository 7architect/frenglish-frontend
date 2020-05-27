import { mount } from '@vue/test-utils'
import test from 'ava'
import Sidebar from '../../components/Logo'

test('is a Vue instance', t => {
  const wrapper = mount(Sidebar)
  t.is(wrapper.isVueInstance(), true)
})
