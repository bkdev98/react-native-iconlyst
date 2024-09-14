import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSadDateTwoTone = ({
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
      d="M16.191 3v3.223M8.367 3v3.223"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.765 4.486-8.964.001c-2.633 0-4.277 1.466-4.277 4.162v8.113C3.524 19.5 5.168 21 7.801 21l8.956-.001c2.641 0 4.277-1.474 4.277-4.17V8.648c.008-2.695-1.628-4.162-4.269-4.162"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.408 17.418a2.38 2.38 0 0 1 1.871-.906c.758 0 1.434.354 1.871.906M15.253 13.138v.636M9.306 13.138v.636M4.186 9.665h16.196"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSadDateTwoTone;
