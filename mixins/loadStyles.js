export default function(uri) {
  const css = import('vue-loader!' + uri)
  // eslint-disable-next-line
  css.then(console.log)
  return {}
}
