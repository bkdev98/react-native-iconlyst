import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNotificationOutlinesharp = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M5.312 8.938a6.938 6.938 0 1 1 13.875 0v4.445l1.942 5.224H3.37l1.942-5.223zM12.25 3.5a5.44 5.44 0 0 0-5.438 5.438v4.715l-1.284 3.454h13.443l-1.284-3.454V8.938A5.44 5.44 0 0 0 12.25 3.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.334 18.083v-.226h1.5v.226a2.417 2.417 0 0 0 4.833 0v-.226h1.5v.226a3.917 3.917 0 1 1-7.833 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNotificationOutlinesharp;
