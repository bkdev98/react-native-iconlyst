import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAlignCenterBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M8.698 2.75A2.45 2.45 0 0 0 6.25 5.198v2.604a2.45 2.45 0 0 0 2.448 2.448h6.604a2.45 2.45 0 0 0 2.448-2.448V5.198a2.45 2.45 0 0 0-2.448-2.448zM5.198 13.75a2.45 2.45 0 0 0-2.448 2.448v2.604a2.45 2.45 0 0 0 2.448 2.448h13.604a2.45 2.45 0 0 0 2.448-2.448v-2.604a2.45 2.45 0 0 0-2.448-2.448z"
    />
  </Svg>
);
export default IconlystAlignCenterBold;
