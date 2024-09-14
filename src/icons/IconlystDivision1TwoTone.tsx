import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDivision1TwoTone = ({
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
      d="M12.508 15.367v.01m.026-.112a.125.125 0 1 1-.001.25.125.125 0 0 1 0-.25M12.508 8.587v.01m.026-.112a.125.125 0 1 1-.001.25.125.125 0 0 1 0-.25M9.115 12h6.771"
    />
  </Svg>
);
export default IconlystDivision1TwoTone;
