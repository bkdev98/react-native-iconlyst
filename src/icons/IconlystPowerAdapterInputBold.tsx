import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPowerAdapterInputBold = ({
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
      d="M16.355 15.845c0-.3.24-.54.53-.54h2.07c.3 0 .54.24.54.54v.95h-3.14zm-9.6-.53a.75.75 0 0 1-.65-1.11l1.26-2.33c.2-.37.66-.5 1.02-.3.36.19.5.65.3 1.01l-.66 1.23h1.26c.26 0 .51.14.64.36.14.23.14.51.01.74l-1.26 2.33a.76.76 0 0 1-1.02.3c-.36-.2-.5-.65-.3-1.01l.66-1.22zm12.2-1.51h-.398V7.982c0-3.092-2.515-5.607-5.667-5.607a5.61 5.61 0 0 0-5.582 5.12H6.005a3 3 0 0 0-3 2.99v8.14c0 1.65 1.35 3 3 3h4.03c1.65 0 3-1.35 3-3v-8.14a3 3 0 0 0-3-2.99H8.832a4.12 4.12 0 0 1 4.118-3.62 4.11 4.11 0 0 1 4.107 4.107v5.823h-.172c-1.12 0-2.03.92-2.03 2.04v1.7c0 .42.33.75.75.75h.145v1.343a.5.5 0 0 0 .5.5h3.293a.5.5 0 0 0 .5-.5v-1.343h.202c.41 0 .75-.33.75-.75v-1.7c0-1.12-.92-2.04-2.04-2.04"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPowerAdapterInputBold;
