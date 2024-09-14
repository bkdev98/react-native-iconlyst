import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWorkBulksharp = ({
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
      d="m9.667 5.505.576-1.33h4.013l.576 1.33zm6.8 0-1.224-2.83H9.256l-1.224 2.83H2.504v7.287l.247.145c2.402 1.405 5.435 2.223 8.62 2.352v1.297h1.758v-1.297c3.186-.13 6.22-.948 8.618-2.352l.248-.145V5.505z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.398 15.815c-2.46.98-5.27 1.5-8.15 1.5s-5.69-.52-8.14-1.5c-.37-.15-.73-.3-1.08-.47-.17-.08-.34-.16-.51-.26l.22 6.24h19.03l.21-6.24c-.17.1-.34.18-.51.26-.35.17-.71.32-1.07.47"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystWorkBulksharp;
