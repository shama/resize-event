declare module "resize-event" {
  export default function onresize(
    target: HTMLElement,
    callback: (entries?: ResizeObserverEntry[]) => void
  );
}
