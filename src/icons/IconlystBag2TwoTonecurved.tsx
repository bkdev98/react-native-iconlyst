import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBag2TwoTonecurved = ({
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
      d="M15.75 10.472V7.44a3.781 3.781 0 1 0-7.562-.017v3.049"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.95 15.207c0-5.294 2.255-7.059 9.019-7.059s9.019 1.765 9.019 7.06c0 5.292-2.255 7.057-9.019 7.057s-9.02-1.765-9.02-7.058"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBag2TwoTonecurved;
