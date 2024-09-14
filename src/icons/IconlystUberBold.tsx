import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUberBold = ({
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
      d="M11.981 3.009c-4.985 0-9.077 3.862-9.462 8.75h6.243v-2.12a.75.75 0 0 1 .75-.75h5.747a.75.75 0 0 1 .75.75v5.74a.75.75 0 0 1-.75.75H9.512a.75.75 0 0 1-.75-.75v-2.12H2.519c.385 4.888 4.477 8.75 9.462 8.75 5.238 0 9.5-4.262 9.5-9.5s-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.262 14.63h4.247v-4.24h-4.247z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUberBold;
