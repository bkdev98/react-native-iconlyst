import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTextFieldBroken = ({
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
      d="M9.987 20.078h3.184M9.986 3.914h3.184M11.578 3.914v16.17M8.135 17.374H6.666a3.13 3.13 0 0 1-3.133-3.133V9.757a3.13 3.13 0 0 1 3.133-3.132h1.47M14.732 6.625h3.67a3.13 3.13 0 0 1 3.131 3.133v1.333M21.533 14.234a3.15 3.15 0 0 1-3.142 3.142h-3.659"
    />
  </Svg>
);
export default IconlystTextFieldBroken;
