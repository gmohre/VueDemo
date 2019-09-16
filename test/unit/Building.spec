import { shallowMount } from '@vue/test-utils'
import Rating from '@/components/Building'

describe('Building', () => {
    const wrapper = shallowMount(Building, {
        propsData: {
          maxStars: 6,
          grade: 3
        }
    })
  // your tests go here
})