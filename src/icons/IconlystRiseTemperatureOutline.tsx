import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRiseTemperatureOutline = ({
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
      d="M9.857 3.75A2.25 2.25 0 0 0 7.607 6v6.022a.75.75 0 0 1-.298.599c-1.033.78-1.703 2-1.703 3.379a4.25 4.25 0 0 0 8.5 0c0-1.38-.668-2.598-1.701-3.38a.75.75 0 0 1-.298-.598V6a2.25 2.25 0 0 0-2.25-2.25M6.107 6a3.75 3.75 0 1 1 7.5 0v5.665a5.71 5.71 0 0 1 2 4.335 5.75 5.75 0 0 1-11.5 0c0-1.743.786-3.287 2-4.335z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.858 15.276a.723.723 0 1 0-.001 1.447.723.723 0 0 0 0-1.447M7.634 16a2.223 2.223 0 1 1 4.446 0 2.223 2.223 0 0 1-4.446 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.856 5.978a.75.75 0 0 1 .75.75v7.799a.75.75 0 1 1-1.5 0v-7.8a.75.75 0 0 1 .75-.75M18.371 4.206c.2 0 .39.079.53.22l2 2a.75.75 0 1 1-1.06 1.06l-.72-.72v3.553a.75.75 0 0 1-1.5 0V6.767l-.72.72a.75.75 0 1 1-1.06-1.06l2-2.002a.75.75 0 0 1 .53-.22"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRiseTemperatureOutline;