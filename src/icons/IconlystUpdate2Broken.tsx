import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpdate2Broken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3 15.057 1.881-2.807 2.791 1.87M21 9.441l-1.88 2.807-2.792-1.87"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.912 12.402a7.09 7.09 0 0 0 3.509 5.971M12.001 19.343a7.08 7.08 0 0 0 5.838-3.066M19.089 12.095a7.09 7.09 0 0 0-4.129-6.294M12 5.156a7.08 7.08 0 0 0-5.838 3.065"
    />
  </Svg>
);
export default IconlystUpdate2Broken;
