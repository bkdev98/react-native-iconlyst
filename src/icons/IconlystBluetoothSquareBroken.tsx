import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBluetoothSquareBroken = ({
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
      d="M15.817 21c2.949 0 4.783-2.081 4.783-5.026V8.026C20.6 5.081 18.766 3 15.818 3H9.183C6.243 3 4.4 5.081 4.4 8.026v7.948C4.4 18.919 6.235 21 9.183 21H12.5"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.83 9.957 2.67 2.136m0 0 2.67 2.136-2.67 2.136zm0 0V7.82l2.67 2.137zm0 0L9.83 14.23"
    />
  </Svg>
);
export default IconlystBluetoothSquareBroken;
