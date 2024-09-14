import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScale2Bulk = ({
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
      d="M16.217 2.5H7.782C4.623 2.5 2.5 4.721 2.5 8.026v7.948c0 3.305 2.123 5.526 5.282 5.526h8.434c3.16 0 5.284-2.221 5.284-5.526V8.026c0-3.305-2.123-5.526-5.283-5.526"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.826 12.5h-9.65a.75.75 0 0 1-.75-.75 5.58 5.58 0 0 1 5.575-5.574 5.58 5.58 0 0 1 5.575 5.575.75.75 0 0 1-.75.75m-8.75-1.851a4.08 4.08 0 0 1 3.925-2.973 4.08 4.08 0 0 1 3.924 2.973c.05.18-.092.352-.28.352H12.85a.1.1 0 0 1-.1-.1V9.728a.75.75 0 0 0-1.5 0V10.9a.1.1 0 0 1-.1.1H8.356c-.188 0-.33-.171-.28-.352"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M11.25 21.2v-4.707a.75.75 0 0 1 1.5 0V21.2a.3.3 0 0 0 .3.3h-2.1a.3.3 0 0 0 .3-.3"
    />
  </Svg>
);
export default IconlystScale2Bulk;
