import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPictureInPictureBold = ({
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
      d="M16.21 11.97h-3.304c-1.013 0-1.123.853-1.123 1.22v2.14c0 .764.42 1.22 1.123 1.22h3.304c.704 0 1.124-.456 1.124-1.22v-2.14c0-.367-.109-1.22-1.124-1.22"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.834 15.33c0 1.602-1.079 2.72-2.624 2.72h-3.304c-1.544 0-2.623-1.118-2.623-2.72v-2.141c0-1.601 1.079-2.719 2.623-2.719h3.304c1.545 0 2.624 1.118 2.624 2.719zM17.051 2.5H8.616c-3.159 0-5.282 2.223-5.282 5.53v7.94c0 3.307 2.123 5.53 5.282 5.53h8.434c3.16 0 5.284-2.223 5.284-5.53V8.03c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPictureInPictureBold;
