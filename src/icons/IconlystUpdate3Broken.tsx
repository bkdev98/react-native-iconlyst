import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpdate3Broken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3 9.441 1.881 2.807 2.791-1.87M21 15.053l-1.88-2.807-2.792 1.87"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.912 12.098a7.09 7.09 0 0 1 3.27-5.825M12.001 5.156a7.08 7.08 0 0 1 5.838 3.065M19.089 12.402a7.09 7.09 0 0 1-4.04 6.253M12 19.343a7.08 7.08 0 0 1-5.838-3.066"
    />
  </Svg>
);
export default IconlystUpdate3Broken;
