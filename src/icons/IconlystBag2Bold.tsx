import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBag2Bold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="m10.33 14.759-2.46.04h-.31l-.66.01.05 1.61.53-.01h.44l2.41-.04z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.86 5.053h2.281c.771 0 1.398.599 1.457 1.356H9.403a1.466 1.466 0 0 1 1.457-1.356m-3.9 15.636v-2.82H6.9c-.8 0-1.45-.65-1.45-1.45v-1.66c0-.8.65-1.45 1.45-1.45h.06v-5.4h1.5v5.4h1.92c.8 0 1.45.65 1.45 1.45v1.66c0 .8-.65 1.45-1.45 1.45H8.46v2.82zm8.58 0h1.5V7.909h-1.5zm1.67-14.28h-1.112a2.966 2.966 0 0 0-2.957-2.856H10.86a2.966 2.966 0 0 0-2.957 2.856H6.8c-2.72 0-4.55 1.91-4.55 4.74v6.3c0 2.84 1.83 4.74 4.55 4.74h10.41c2.71 0 4.54-1.9 4.54-4.74v-6.3c0-2.79-1.87-4.74-4.54-4.74"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBag2Bold;
