import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCableMouseOutline = ({
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
      d="M10.9 21.756h-.207a6.94 6.94 0 0 1-4.694-2.06 6.93 6.93 0 0 1-2.058-4.695 6.2 6.2 0 0 1 1.8-4.633L9.18 6.924a6.615 6.615 0 0 1 9.329.253 6.613 6.613 0 0 1 .255 9.328l-3.44 3.44a6.2 6.2 0 0 1-4.424 1.81M13.614 6.62a4.72 4.72 0 0 0-3.37 1.366l-3.44 3.443a4.72 4.72 0 0 0-1.364 3.527 5.43 5.43 0 0 0 1.62 3.677c.974.99 2.29 1.57 3.679 1.62a4.82 4.82 0 0 0 3.528-1.367l3.439-3.44a5.113 5.113 0 0 0-.255-7.207 5.45 5.45 0 0 0-3.837-1.619"
    />
    <Path
      fill={props.color}
      d="M17.98 8.459a.75.75 0 0 1-.53-1.281l.369-.368a.874.874 0 0 0-.026-1.224l-.575-.575a1.81 1.81 0 0 1-.403-1.954c.09-.219.221-.417.389-.584a.75.75 0 1 1 1.06 1.06.27.27 0 0 0-.078.2.3.3 0 0 0 .093.22l.576.577a2.38 2.38 0 0 1 .027 3.34l-.372.372a.75.75 0 0 1-.53.217M13.723 12.72a.75.75 0 0 1-.531-1.28l1.287-1.288a.751.751 0 0 1 1.062 1.061l-1.285 1.288a.75.75 0 0 1-.533.22"
    />
  </Svg>
);
export default IconlystCableMouseOutline;
