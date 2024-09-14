import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwitchButtonOffBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 12.002a6.454 6.454 0 0 1-6.455 6.454h-5.09a6.455 6.455 0 1 1 0-12.91h5.09a6.45 6.45 0 0 1 5.543 3.145M6.225 12a3.237 3.237 0 1 1 1.351 2.63"
    />
  </Svg>
);
export default IconlystSwitchButtonOffBroken;
