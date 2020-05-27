require('./default.css')

export default {
  name: 'o-multi-tasking',
  // mixins: [loadStyles('~/components/multitasking/default.css')],
  props: {
    snapElement: {
      required: true,
      validate: value => value instanceof 'HTMLElement'
    }
  },
  data() {
    return {
      tabs: []
    }
  },
  methods: {
    deleteTab(index) {
      this.tabs.splice(index, 1)
    }
  },
  mounted() {
    this.$router.beforeResolve((to, from, next) => {
      next()
      this.$root.$loading.start()

      const visited = this.tabs.findIndex(tab => tab.referer.path === to.path)
      const domToImage = require('dom-to-image')

      domToImage.toPng(this.snapElement).then(dataUrl => {
        this.tabs.push({
          referer: from,
          uri: to,
          snap: dataUrl,
          title: document.querySelector('head title').textContent
        })
        if (visited > -1) this.deleteTab(visited)
      })
    })
    // this.$router.beforeResolve(
    //   (to, from, next) => this.$root.$loading.increase(50) && next()
    // )
    // this.$router.afterEach((to, from) => this.$root.$loading.finish())
  },
  render(h) {
    const tabs = this.tabs.map((tab, index) => {
      return (
        <nuxt-link to={tab.referer.path} staticClass="o-multi-tasking__tab">
          <div staticClass="o-multi-tasking__tab-title">{tab.title}</div>
          <div staticClass="o-multi-tasking__tab-snap">
            <div
              staticClass="o-multi-tasking__tab-snap-image"
              style={{ 'background-image': `url(${tab.snap})` }}
            />
          </div>
        </nuxt-link>
      )
    })

    return <div staticClass="o-multi-tasking">{tabs}</div>
  }
}
