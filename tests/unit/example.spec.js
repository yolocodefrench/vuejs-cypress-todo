import { expect } from 'chai'
import { createLocalVue } from '@vue/test-utils';
import { shallowMount } from '@vue/test-utils'
import Unicon from 'vue-unicons';
import { uniConstructor, uniTimes } from 'vue-unicons/src/icons';
import Todo from '@/components/Todo.vue'

const localVue = createLocalVue();
Unicon.add([uniConstructor, uniTimes])
localVue.use(Unicon)

describe('Todo.vue', () => {
  it('renders props.msg when passed', () => {
    const todo = 'Test'
    const wrapper = shallowMount(Todo, {
      localVue,
      propsData: { todo }
    })
    expect(wrapper.text()).to.include(todo)
  })
})
