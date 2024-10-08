import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAftabeOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M10.528 21.751c-2.525 0-4.182-.842-4.546-2.31L4.839 12.77a3.06 3.06 0 0 1 .77-2.579l1.686-1.805-.424-4a.75.75 0 1 1 1.492-.158l.46 4.343a.75.75 0 0 1-.2.591l-1.918 2.054a1.55 1.55 0 0 0-.39 1.3l1.13 6.618c.166.656 1.38 1.116 3.08 1.116 1.702 0 2.915-.46 3.092-1.17l1.118-6.564a1.54 1.54 0 0 0-.39-1.3l-1.871-2.064a.75.75 0 0 1-.192-.574l.407-4.342a.74.74 0 0 1 .817-.677.75.75 0 0 1 .677.817l-.376 4.013 1.648 1.813a3.04 3.04 0 0 1 .765 2.571l-1.13 6.618c-.38 1.52-2.035 2.361-4.562 2.361"
    />
    <Path
      fill={props.color}
      d="M10.609 13.466a20.3 20.3 0 0 1-5.272-.58.75.75 0 1 1 .432-1.437 18.8 18.8 0 0 0 4.84.516 20 20 0 0 0 4.7-.47.75.75 0 1 1 .386 1.448 21.3 21.3 0 0 1-5.086.523M10.527 9.687c-3.668 0-3.668-1-3.668-1.328a.75.75 0 0 1 1.364-.43c1.517.344 3.092.344 4.61 0a.75.75 0 0 1 1.363.43c0 .328 0 1.326-3.669 1.328M10.526 5.649c-1.688 0-3.66-.445-3.66-1.7s1.972-1.7 3.66-1.7 3.661.445 3.661 1.7-1.972 1.7-3.66 1.7M8.838 3.95a7.3 7.3 0 0 0 3.377 0 7.26 7.26 0 0 0-3.377 0"
    />
    <Path
      fill={props.color}
      d="M5.596 12.483a.75.75 0 0 1-.663-.4l-1.1-2.067a4 4 0 0 1-.285-2.994 3.3 3.3 0 0 1 4.12-2.105.75.75 0 1 1-.37 1.454 1.865 1.865 0 0 0-2.32 1.1 2.5 2.5 0 0 0 .19 1.857l1.087 2.054a.75.75 0 0 1-.66 1.1zM15.467 12.573a.75.75 0 0 1-.556-1.254l4.914-5.428a.75.75 0 0 1 1.112 1.006l-4.914 5.43a.75.75 0 0 1-.556.246"
    />
  </Svg>
);
export default IconlystAftabeOutline;
