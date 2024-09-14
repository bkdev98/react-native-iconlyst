import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLogoutLightcurved = ({
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
      d="M21.791 12.12H9.75M18.864 9.205l2.928 2.916-2.928 2.916M16.36 7.63c-.33-3.58-1.67-4.88-7-4.88-7.101 0-7.101 2.31-7.101 9.25s0 9.25 7.1 9.25c5.33 0 6.67-1.3 7-4.88"
    />
  </Svg>
);
export default IconlystLogoutLightcurved;
