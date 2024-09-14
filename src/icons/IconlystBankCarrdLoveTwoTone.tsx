import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCarrdLoveTwoTone = ({
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
      d="M17.53 20.06a13 13 0 0 1-2.257-1.735 4.46 4.46 0 0 1-1.08-1.696c-.41-1.247.05-2.678 1.359-3.11a2.23 2.23 0 0 1 2.027.327 2.23 2.23 0 0 1 2.02-.353c1.315.414 1.795 1.84 1.403 3.092a4.5 4.5 0 0 1-1.057 1.712 13 13 0 0 1-2.236 1.762l-.087.054z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m21.5 10.943-.02-2.92c-.015-2.44-1.545-4.153-3.986-4.136l-10.061.065C4.999 3.968 3.483 5.701 3.5 8.14l.043 6.58c.015 2.44 1.545 4.153 3.987 4.137l3.026-.02"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3.508 9.27 17.981-.116"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystBankCarrdLoveTwoTone;
