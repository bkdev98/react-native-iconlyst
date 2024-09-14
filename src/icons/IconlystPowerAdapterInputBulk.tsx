import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPowerAdapterInputBulk = ({
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
      d="M18.557 13.805V7.982c0-3.092-2.515-5.607-5.667-5.607a5.61 5.61 0 0 0-5.582 5.12H6.005a3 3 0 0 0-3 2.99v8.14c0 1.65 1.35 3 3 3h4.03c1.65 0 3-1.35 3-3v-8.14a3 3 0 0 0-3-2.99H8.832a4.12 4.12 0 0 1 4.118-3.62 4.11 4.11 0 0 1 4.107 4.107v5.823z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.955 13.805h-2.07c-1.12 0-2.03.92-2.03 2.04v1.7c0 .42.33.75.75.75h.145v1.343a.5.5 0 0 0 .5.5h3.293a.5.5 0 0 0 .5-.5v-1.343h.202c.41 0 .75-.33.75-.75v-1.7c0-1.12-.92-2.04-2.04-2.04m-2.07 1.5c-.29 0-.53.24-.53.54v.95h3.14v-.95c0-.3-.24-.54-.54-.54z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M6.115 14.945c.14.23.38.37.64.37h1.26l-.66 1.22a.745.745 0 0 0 .66 1.1c.26 0 .52-.14.66-.39l1.26-2.33c.13-.23.13-.51-.01-.74a.75.75 0 0 0-.64-.36h-1.26l.66-1.23c.2-.36.06-.82-.3-1.01a.747.747 0 0 0-1.02.3l-1.26 2.33c-.13.23-.13.51.01.74"
    />
  </Svg>
);
export default IconlystPowerAdapterInputBulk;
