import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKitchenHat2TwoTone = ({
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
      d="M8.283 3h8.435C19.666 3 21.5 5.081 21.5 8.026v7.948c0 2.945-1.834 5.026-4.783 5.026H8.283C5.335 21 3.5 18.919 3.5 15.974V8.026C3.5 5.081 5.344 3 8.283 3"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.475 13.583.111 1.527a1.41 1.41 0 0 0 1.407 1.308h3.017a1.41 1.41 0 0 0 1.407-1.308l.111-1.527a2.46 2.46 0 0 0 1.735-2.692c-.124-.961-.883-1.737-1.81-2.026a1.95 1.95 0 0 0-.934-.086 2.3 2.3 0 0 0-2.02-1.198c-.87 0-1.62.484-2.02 1.198-.315-.042-.63-.04-1.094.16-.998.426-1.736 1.37-1.661 2.454a2.46 2.46 0 0 0 1.751 2.19"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystKitchenHat2TwoTone;
