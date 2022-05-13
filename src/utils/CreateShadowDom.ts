type ShadowDomProps = {
  classNames?: string
  styleSheetUrl?: string
  uniqueId: string
}

export default function (props: ShadowDomProps) {
  const container = document.createElement('div')
  const root = document.createElement('div')
  root.setAttribute('class', props.classNames || '')
  root.id = props.uniqueId
  const shadowDOM = container.attachShadow?.({ mode: 'open' }) || container
  if (props.styleSheetUrl) {
    const styleEl = document.createElement('link')
    styleEl.rel = 'stylesheet'
    styleEl.href = props.styleSheetUrl
    shadowDOM.appendChild(styleEl)
  }
  shadowDOM.appendChild(root)
  return { root, container }
}
