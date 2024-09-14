import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGraphBroken = ({
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
      d="M18.416 15.112c-.606 3.92-3.962 6.83-8.009 6.83A8.107 8.107 0 0 1 2.3 13.837c0-3.688 2.802-7.124 5.957-7.9"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.692 9.952c.054-3.038-3.678-7.935-8.225-7.85a.68.68 0 0 0-.653.653c-.114 2.498.04 5.735.127 7.202a.89.89 0 0 0 .84.842c1.509.086 4.864.204 7.326-.168a.695.695 0 0 0 .585-.68"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGraphBroken;
