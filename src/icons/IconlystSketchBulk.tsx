import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSketchBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M16.217 2.5H7.782C4.623 2.5 2.5 4.722 2.5 8.03v7.94c0 3.307 2.123 5.53 5.282 5.53h8.434c3.16 0 5.284-2.223 5.284-5.53V8.03c0-3.308-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m16.58 12.283-3.463 3.812a1.52 1.52 0 0 1-1.118.493h-.002c-.424 0-.829-.18-1.114-.492l-3.47-3.818a1.684 1.684 0 0 1-.148-2.079l1.403-2.053a1.67 1.67 0 0 1 1.388-.736h3.89c.563 0 1.084.278 1.394.745l1.394 2.043a1.69 1.69 0 0 1-.154 2.085M13.947 8.91c.06 0 .113.027.15.083l1.396 2.047a.18.18 0 0 1-.014.226l-3.486 3.82-3.473-3.82-.008-.008c-.05-.054-.053-.147-.008-.213L9.91 8.987a.17.17 0 0 1 .146-.077z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSketchBulk;
