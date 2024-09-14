import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarrotOffTwoTone = ({
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
      d="m9.835 18.257-1.423-1.423"
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M8.881 8.718c-1.993 1.993-7.175 10.365-5.58 11.96 1.594 1.594 9.966-3.588 11.959-5.581"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3 3 18 18"
    />
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M21 8.714S19.919 7.08 18.154 7.08c-1.333 0-2.845 1.633-2.845 1.633s1.08 1.632 2.845 1.632S21 8.714 21 8.714" />
      <Path d="M15.26 3.022s-1.632 1.081-1.632 2.846c0 1.333 1.633 2.845 1.633 2.845s1.632-1.08 1.632-2.845-1.633-2.846-1.633-2.846" />
      <Path d="M11.357 7.37c1.396-.245 2.814.26 3.903 1.348 1.1 1.1 1.604 2.539 1.34 3.949" />
    </G>
  </Svg>
);
export default IconlystCarrotOffTwoTone;
