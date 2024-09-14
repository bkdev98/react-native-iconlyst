import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFortmaticBulk = ({
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
      d="M20.5 2.505h-16c-.827 0-1.5.673-1.5 1.5v16c0 .827.673 1.5 1.5 1.5H7c.827 0 1.5-.673 1.5-1.5v-12h12c.827 0 1.5-.673 1.5-1.5v-2.5c0-.827-.673-1.5-1.5-1.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.5 11.504h-7c-.827 0-1.5.673-1.5 1.5v2.5c0 .827.673 1.5 1.5 1.5h3v4a.5.5 0 0 0 .5.5 4.95 4.95 0 0 0 3.535-1.466A5.02 5.02 0 0 0 22 16.504v-3.5c0-.827-.673-1.5-1.5-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFortmaticBulk;
