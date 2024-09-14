import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMobileCardBankBold = ({
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
      d="M10.395 17.41c0 .52-.42.94-.94.94-.51 0-.93-.42-.93-.94s.42-.94.93-.94c.52 0 .94.42.94.94m8.99-7.86h-7.25c.04-.41.25-1.03 1.12-1.03h5c.88 0 1.09.62 1.13 1.03m.02 3.37c0 .37-.11 1.24-1.15 1.24h-5c-1.03 0-1.14-.87-1.14-1.24v-1.87h7.29zm-1.15-5.9h-2.309v-.4a4.124 4.124 0 0 0-4.118-4.12H7.212a4.123 4.123 0 0 0-4.117 4.12l.001 10.76a4.123 4.123 0 0 0 4.117 4.12h4.615a4.124 4.124 0 0 0 4.12-4.12v-1.72h2.307c1.56 0 2.65-1.13 2.65-2.74V9.76c0-1.61-1.09-2.74-2.65-2.74"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMobileCardBankBold;
