import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebsiteKeyOutline = ({
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
      d="M4.223 4.147c.96-1.03 2.326-1.605 3.937-1.605h8.18c1.616 0 2.982.575 3.94 1.605.954 1.024 1.449 2.437 1.449 4.02V12.1a.75.75 0 0 1-1.5 0V8.167c0-1.274-.395-2.299-1.046-2.998-.645-.693-1.598-1.127-2.843-1.127H8.16c-1.24 0-2.193.434-2.84 1.128-.652.7-1.049 1.724-1.049 2.997v7.707c0 1.273.395 2.298 1.046 2.997.645.693 1.598 1.127 2.843 1.127h3.698a.75.75 0 0 1 0 1.5H8.16c-1.615 0-2.982-.575-3.94-1.605-.954-1.024-1.449-2.436-1.449-4.019V8.167c0-1.584.498-2.997 1.452-4.02"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.914 6.733a.75.75 0 0 1 .75-.75h.064a.75.75 0 1 1 0 1.5h-.064a.75.75 0 0 1-.75-.75m2.55 0a.75.75 0 0 1 .75-.75h.064a.75.75 0 1 1 0 1.5h-.064a.75.75 0 0 1-.75-.75m2.55 0a.75.75 0 0 1 .75-.75h.064a.75.75 0 0 1 0 1.5h-.064a.75.75 0 0 1-.75-.75M2.771 9.585a.75.75 0 0 1 .75-.75H20.98a.75.75 0 0 1 0 1.5H3.52a.75.75 0 0 1-.75-.75M13.654 14.201a.75.75 0 0 1 1.06 0l.01.01a.75.75 0 1 1-1.06 1.06l-.01-.01a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.59 12.77a2.386 2.386 0 0 1 2.386 2.386c0 .16-.023.323-.063.508a.75.75 0 0 0 .202.69l2.74 2.742v1.207h-.993v-.375a.75.75 0 0 0-.75-.75H17.7v-.393a.75.75 0 0 0-.75-.75h-.44l-.425-.425a.75.75 0 0 0-.76-.183 2.385 2.385 0 1 1-.735-4.656m2.772 7.908a1.13 1.13 0 0 0 1.131 1.125h1.731c.625 0 1.131-.506 1.131-1.131v-1.73c0-.3-.12-.587-.331-.799L18.45 15.57q.025-.198.026-.413a3.886 3.886 0 1 0-3.15 3.816l.345.344a.75.75 0 0 0 .53.219v.393c0 .414.335.75.75.75z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWebsiteKeyOutline;
