export interface VideoTagProps {
    class?: string;
    className?: string;
    controls?: boolean;
    src?: string;
    poster?: string;
    type?: string;
    muted?: boolean;
    autoPlay?: boolean;
    playsInline?: boolean;
    loop?: boolean;
    preload?: string;
    allowfullscreen?: boolean;
}
export declare const videoTagString: (props?: VideoTagProps) => string;
