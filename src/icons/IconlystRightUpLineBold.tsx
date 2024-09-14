import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRightUpLineBold = ({
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
      fillRule="evenodd"
      d="M7.297 14.656a1.124 1.124 0 0 1-.795-1.92l7.48-7.48-5.047.01h-.002a1.125 1.125 0 0 1-.002-2.25L16.699 3h.002c.298 0 .584.12.796.33l.004.005c.23.232.339.54.325.843l-.013 7.72a1.125 1.125 0 0 1-1.125 1.122h-.002a1.125 1.125 0 0 1-1.123-1.126l.009-5.045-7.48 7.477c-.219.22-.507.33-.795.33M18.652 21H5.348a1.125 1.125 0 0 1 0-2.25h13.304a1.125 1.125 0 0 1 0 2.25"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRightUpLineBold;
