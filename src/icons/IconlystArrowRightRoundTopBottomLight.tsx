import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowRightRoundTopBottomLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.364 18.364A8.97 8.97 0 0 1 12 21a8.97 8.97 0 0 1-6.364-2.636m0-12.728A8.97 8.97 0 0 1 12 3a8.97 8.97 0 0 1 6.364 2.636M8 12h8m0 0-3 3m3-3-3-3"
    />
  </Svg>
);
export default IconlystArrowRightRoundTopBottomLight;
