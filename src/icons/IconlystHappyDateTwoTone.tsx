import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHappyDateTwoTone = ({
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
      d="M15.916 3v3.223M8.091 3v3.223"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.49 4.486-8.964.001c-2.633 0-4.277 1.466-4.277 4.162v8.113C3.249 19.5 4.893 21 7.526 21l8.956-.001c2.64 0 4.277-1.474 4.277-4.17V8.648c.007-2.695-1.629-4.162-4.27-4.162"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.132 16.513a2.38 2.38 0 0 0 1.872.905c.758 0 1.434-.354 1.87-.905M14.978 13.138v.636M9.03 13.138v.636M3.91 9.665h16.197"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystHappyDateTwoTone;
