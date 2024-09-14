import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwitchButtonOffTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.045 19.222h-5.09a6.455 6.455 0 1 1 0-12.91h5.09a6.455 6.455 0 1 1 0 12.91"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.725 12.768a3.237 3.237 0 1 1 6.474 0 3.237 3.237 0 0 1-6.474 0"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSwitchButtonOffTwoTone;
