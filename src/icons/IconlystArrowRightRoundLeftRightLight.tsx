import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowRightRoundLeftRightLight = ({
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
      d="M18.363 5.636A8.97 8.97 0 0 1 21 12a8.97 8.97 0 0 1-2.637 6.364m-12.727 0A8.97 8.97 0 0 1 3 12a8.97 8.97 0 0 1 2.636-6.364M8 12h8m0 0-3 3m3-3-3-3"
    />
  </Svg>
);
export default IconlystArrowRightRoundLeftRightLight;
