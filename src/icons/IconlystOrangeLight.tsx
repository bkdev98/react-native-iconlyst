import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOrangeLight = ({
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
      strokeWidth={1.5}
      d="M4.487 13.93C4.487 17.833 7.851 21 12 21c4.15 0 7.513-3.166 7.513-7.07 0-3.906-3.364-7.072-7.513-7.072-4.15 0-7.513 3.166-7.513 7.071Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.53 8.054c0-1.585 1.142-4.32 3.26-4.66"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.674 6.858C11.18 5.708 12.769 3 6.85 3c.33.986-.109 3.858 4.824 3.858M13.842 9.995l.009.004M16 11.706l.008.005M13.846 12.806l.01.004"
    />
  </Svg>
);
export default IconlystOrangeLight;
