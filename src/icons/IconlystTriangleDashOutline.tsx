import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTriangleDashOutline = ({
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
      fillRule="evenodd"
      d="M4.971 14.592a.75.75 0 0 1 .277 1.024l-1.079 1.875-.001.003c-.474.816.118 1.855 1.08 1.855h2.157a.75.75 0 1 1 0 1.5H5.248c-2.106 0-3.437-2.281-2.378-4.107l1.077-1.874a.75.75 0 0 1 1.024-.276M8.492 8.513a.75.75 0 0 1 .273 1.025l-2.118 3.653a.75.75 0 0 1-1.298-.753l2.118-3.652a.75.75 0 0 1 1.025-.273M9.453 20.1a.75.75 0 0 1 .75-.75h4.167a.75.75 0 0 1 0 1.5h-4.167a.75.75 0 0 1-.75-.75M19.546 14.6a.75.75 0 0 1 1.023.28l1.067 1.874c1.046 1.825-.282 4.095-2.38 4.095h-2.098a.75.75 0 0 1 0-1.5h2.098c.953 0 1.548-1.031 1.079-1.849l-.001-.002-1.069-1.875a.75.75 0 0 1 .28-1.022M16.078 8.51a.75.75 0 0 1 1.023.28l2.079 3.643a.75.75 0 0 1-1.303.744l-2.079-3.643a.75.75 0 0 1 .28-1.023M13.38 5.279a1.243 1.243 0 0 0-2.158-.007l-1.058 1.836a.75.75 0 0 1-1.3-.75l1.059-1.835c1.057-1.833 3.704-1.831 4.759.011v.002l1.04 1.826a.75.75 0 1 1-1.304.742z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTriangleDashOutline;
