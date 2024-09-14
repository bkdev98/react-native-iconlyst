import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMobileCardBankBulk = ({
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
      d="M13.755 15.66c-1.55 0-2.64-1.12-2.64-2.74V9.76c0-1.61 1.09-2.74 2.64-2.74h2.69v-.4c0-2.27-1.85-4.12-4.12-4.12h-4.61c-2.27 0-4.12 1.85-4.12 4.12v10.76a4.12 4.12 0 0 0 4.12 4.12h4.61a4.12 4.12 0 0 0 4.12-4.12v-1.72z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.956 16.477a.94.94 0 0 0-.935.939c0 .518.419.94.935.94a.94.94 0 0 0 0-1.88M13.755 7.02h5c1.56 0 2.65 1.13 2.65 2.74v3.16c0 1.62-1.09 2.74-2.65 2.74h-5c-1.55 0-2.64-1.12-2.64-2.74V9.76c0-1.61 1.09-2.74 2.64-2.74m0 1.5h5c.88 0 1.09.62 1.13 1.03h-7.25c.04-.41.25-1.03 1.12-1.03m6.15 4.4c0 .38-.11 1.24-1.15 1.24h-5c-1.03 0-1.14-.86-1.14-1.24v-1.87h7.29z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMobileCardBankBulk;
