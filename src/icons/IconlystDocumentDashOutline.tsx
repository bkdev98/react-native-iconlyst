import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentDashOutline = ({
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
      d="M18.755 20.638a.75.75 0 0 1-.53-1.28 3.05 3.05 0 0 0 .9-2.189.749.749 0 1 1 1.5-.01 4.53 4.53 0 0 1-1.338 3.26.74.74 0 0 1-.532.22M16.217 21.75h-3.16a.75.75 0 0 1 0-1.5h3.16a.75.75 0 1 1 0 1.5M10.575 21.748H8.27a4.5 4.5 0 0 1-1.374-.248.75.75 0 0 1 .492-1.417c.297.104.608.16.922.165h2.266zM5.217 20.03a.75.75 0 0 1-.63-.343 4.5 4.5 0 0 1-.715-2.536V16.1a.75.75 0 0 1 1.5 0v1.069a3 3 0 0 0 .475 1.706.749.749 0 0 1-.63 1.156zM4.623 14.226a.75.75 0 0 1-.75-.75v-3.218a.75.75 0 1 1 1.5 0v3.218a.75.75 0 0 1-.75.75M4.621 8.269a.75.75 0 0 1-.75-.75v-.86c.017-.908.31-1.79.841-2.53a.75.75 0 0 1 1.218.873 3 3 0 0 0-.559 1.673v.84a.75.75 0 0 1-.75.754M7.294 3.906a.75.75 0 0 1-.212-1.469c.422-.124.86-.187 1.3-.187H10.5a.75.75 0 0 1 0 1.5H8.37q-.443 0-.868.125a.8.8 0 0 1-.21.031M19.877 14.984a.75.75 0 0 1-.75-.75V9a1.3 1.3 0 0 0-.362-.9l-3.793-3.95a1.3 1.3 0 0 0-.936-.4h-.6a.75.75 0 0 1 0-1.5h.6a2.81 2.81 0 0 1 2.02.861l3.793 3.949c.502.521.782 1.217.78 1.94v5.234a.75.75 0 0 1-.753.75"
    />
    <Path
      fill={props.color}
      d="M19.81 9.266h-2.738a3.314 3.314 0 0 1-3.3-3.311V3.063a.75.75 0 1 1 1.5 0v2.892a1.813 1.813 0 0 0 1.806 1.81h2.736a.75.75 0 1 1 0 1.5z"
    />
  </Svg>
);
export default IconlystDocumentDashOutline;
