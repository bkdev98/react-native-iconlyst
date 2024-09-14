import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiscoveryOutlinesharp = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="m16.227 8.493-1.434 6.55-5.355 1.172-1.164.292 1.433-6.55 5.356-1.172zm-5.979 6.009 3.286-.719.718-3.285-3.285.719z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 4a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17m-10 8.5c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDiscoveryOutlinesharp;
