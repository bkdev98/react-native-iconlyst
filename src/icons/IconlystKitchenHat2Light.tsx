import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKitchenHat2Light = ({
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
      d="M7.783 3h8.435C19.166 3 21 5.081 21 8.026v7.948C21 18.919 19.166 21 16.217 21H7.783C4.835 21 3 18.919 3 15.974V8.026C3 5.081 4.844 3 7.783 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.975 13.583.111 1.527a1.41 1.41 0 0 0 1.407 1.308h3.017a1.41 1.41 0 0 0 1.407-1.308l.111-1.527a2.46 2.46 0 0 0 1.735-2.692c-.124-.961-.883-1.737-1.81-2.026a1.95 1.95 0 0 0-.934-.086A2.3 2.3 0 0 0 12 7.581c-.87 0-1.62.484-2.02 1.198-.315-.042-.63-.04-1.094.16-.998.426-1.736 1.37-1.661 2.454a2.46 2.46 0 0 0 1.751 2.19"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystKitchenHat2Light;
