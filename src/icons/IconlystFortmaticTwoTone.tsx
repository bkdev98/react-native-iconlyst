import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFortmaticTwoTone = ({
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
      d="M21.5 4a1 1 0 0 0-1-1h-16a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1H7a1 1 0 0 0 1-1V7.5h12.5a1 1 0 0 0 1-1z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.5 12a1 1 0 0 0-1 1v2.5a1 1 0 0 0 1 1H17V21a4.5 4.5 0 0 0 4.5-4.5V13a1 1 0 0 0-1-1z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystFortmaticTwoTone;
