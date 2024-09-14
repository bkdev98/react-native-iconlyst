import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartLike3Bold = ({
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
      d="M18.385 10.33h-.06a.75.75 0 0 1-.74-.69c-.06-.76-.58-1.41-1.3-1.65a.753.753 0 0 1-.49-.94c.13-.4.56-.61.95-.48 1.31.42 2.22 1.58 2.33 2.95.03.41-.27.77-.69.81m3.1-3.35c-.68-1.68-1.99-2.91-3.69-3.46-.93-.3-1.94-.37-2.92-.2-.89.15-1.7.68-2.38 1.18-.65-.48-1.48-1.02-2.38-1.17a6.4 6.4 0 0 0-2.91.19c-3.73 1.21-4.88 5.29-3.83 8.54 1.62 5.21 8.62 8.52 8.91 8.66a.465.465 0 0 0 .42 0c.3-.13 7.19-3.39 8.91-8.66.55-1.71.5-3.52-.13-5.08"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHeartLike3Bold;
