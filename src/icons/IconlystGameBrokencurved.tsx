import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGameBrokencurved = ({
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
      d="M9.241 12.835v3.575M11.065 14.622H7.418M15.463 12.943h-.102M17.194 16.355h-.102M8.5 2.988a1.293 1.293 0 0 0 1.306 1.28h1.008a2.006 2.006 0 0 1 2.02 1.978v1.007M12.251 22.081c7.16 0 9.547-1.853 9.547-7.414 0-5.56-2.387-7.414-9.547-7.414-7.162 0-9.549 1.854-9.549 7.414 0 4.135 1.32 6.22 4.94 7.017"
    />
  </Svg>
);
export default IconlystGameBrokencurved;
