export interface VideoTagProps {
    class?: string
    className?: string
    controls?: boolean
    src?: string
    poster?: string
    type?: string
    muted?: boolean
    autoPlay?: boolean
    playsInline?: boolean
    loop?: boolean
    preload?: string
    allowfullscreen?: boolean
}

export const videoTagString = (props: VideoTagProps = {}): string => {
    const classOrClassName = props.className || props.class
    const classString = classOrClassName ? ` class="${classOrClassName}"` : ``
    const controls = props.controls ? ` controls` : ``
    const muted = props.muted ? ` muted` : ``
    const autoPlay = props.autoPlay ? ` autoplay` : ``
    const playsInline = props.playsInline ? ` playsinline` : ``
    const loop = props.loop ? ` loop` : ``
    const poster = props.poster ? ` poster="${props.poster}"` : ``
    const src = props.src ? ` src="${props.src}"` : ` src=""` // required
    const type = props.type ? ` type="${props.type}"` : ``
    const preload = props.preload ? ` preload="${props.preload}"` : ``
    const allowfullscreen = props.allowfullscreen ? ` allowfullscreen` : ``

    return `<video${classString}${controls}${muted}${autoPlay}${playsInline}${loop}${poster}${preload}${allowfullscreen}><source${src}${type}></video>`
}
