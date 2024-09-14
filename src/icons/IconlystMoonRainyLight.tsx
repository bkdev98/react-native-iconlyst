import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoonRainyLight = ({
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
      d="M12.65 6.768A4.19 4.19 0 0 1 16.478 3C15.236 6.353 17.72 8.81 21 7.518a4.194 4.194 0 0 1-3.655 3.82"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.886 17.813a3.63 3.63 0 0 0 2.138-3.312c0-2.278-1.606-3.632-3.6-3.634 0-1.432-1.124-4.298-4.298-4.298S6.83 9.435 6.83 10.867c-1.992.018-3.6 1.356-3.6 3.634 0 1.474.876 2.743 2.137 3.312M10.49 20.556l.432-1.317m-4.134 1.76.278-1.065M13.922 21l.278-1.067M13.1 18.057l.424-1.424m-4.514 1.424.424-1.424M5.957 4.765l-.027-.007"
    />
  </Svg>
);
export default IconlystMoonRainyLight;
