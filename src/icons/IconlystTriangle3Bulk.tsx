import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTriangle3Bulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M11.957 3.551A2.46 2.46 0 0 0 9.884 4.8L2.837 17.01a2.47 2.47 0 0 0 0 2.494 2.47 2.47 0 0 0 2.16 1.247h14.006c.9 0 1.705-.464 2.156-1.241a2.47 2.47 0 0 0 .011-2.487l-6.96-12.21a2.47 2.47 0 0 0-2.164-1.263h-.004z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M12.746 3.649a2.5 2.5 0 0 0-.7-.1h-.004a2.6 2.6 0 0 0-.796.129v3.126a.75.75 0 0 0 1.5 0zM3.346 20.13a2.5 2.5 0 0 1-.509-.626 2.5 2.5 0 0 1-.266-.658l2.51-1.445a.75.75 0 1 1 .749 1.3zM21.43 18.844q-.085.346-.27.666a2.5 2.5 0 0 1-.505.62l-2.442-1.409a.75.75 0 1 1 .75-1.3zM12.746 10.885a.75.75 0 0 0-1.5 0v2.862l-2.53 1.46a.75.75 0 0 0 .749 1.299l2.532-1.46 2.562 1.48a.75.75 0 0 0 .75-1.3l-2.563-1.48z"
    />
  </Svg>
);
export default IconlystTriangle3Bulk;
