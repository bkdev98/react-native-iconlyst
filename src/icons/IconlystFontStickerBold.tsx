import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFontStickerBold = ({
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
      d="M11.35 12.553h1.3L12 11.064z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.736 15.456a.75.75 0 0 1-.987-.387l-.444-1.016h-2.61l-.444 1.016a.75.75 0 0 1-1.375-.601l2.437-5.577a.751.751 0 0 1 1.375 0l2.436 5.577a.75.75 0 0 1-.388.988m5.969-5.07-.7-.7a1.7 1.7 0 0 1-.494-1.196v-1a2.704 2.704 0 0 0-2.7-2.701h-1.002c-.445 0-.882-.18-1.195-.491l-.711-.71a2.703 2.703 0 0 0-3.818.01l-.698.698a1.7 1.7 0 0 1-1.196.494H7.19a2.705 2.705 0 0 0-2.701 2.7v.997c0 .452-.176.877-.495 1.198l-.713.714a2.7 2.7 0 0 0 .017 3.813l.699.7c.318.32.494.745.494 1.195v1.006a2.7 2.7 0 0 0 2.699 2.699h.997a1.7 1.7 0 0 1 1.197.494l.712.712a2.68 2.68 0 0 0 1.9.78h.01a2.67 2.67 0 0 0 1.904-.796l.702-.698a1.68 1.68 0 0 1 1.195-.494h1.006a2.703 2.703 0 0 0 2.699-2.697v-1.004c0-.45.176-.875.494-1.194l.71-.711a2.705 2.705 0 0 0-.011-3.817"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFontStickerBold;
