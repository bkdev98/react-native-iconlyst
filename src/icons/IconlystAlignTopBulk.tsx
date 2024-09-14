import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAlignTopBulk = ({
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
      d="M16.698 14.25a2.45 2.45 0 0 1-2.448-2.448V5.198a2.45 2.45 0 0 1 2.448-2.448h2.604a2.45 2.45 0 0 1 2.448 2.448v6.604a2.45 2.45 0 0 1-2.448 2.448z"
    />
    <Path
      fill={props.color}
      d="M5.698 21.25a2.45 2.45 0 0 1-2.448-2.448V5.198A2.45 2.45 0 0 1 5.698 2.75h2.604a2.45 2.45 0 0 1 2.448 2.448v13.604a2.45 2.45 0 0 1-2.448 2.448z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystAlignTopBulk;
