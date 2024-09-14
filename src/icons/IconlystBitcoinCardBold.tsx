import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinCardBold = ({
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
      d="M18.615 3.812H8.545c-2.842 0-4.351 2.16-4.459 4.75a.29.29 0 0 0 .294.3h18.4a.29.29 0 0 0 .294-.3c-.108-2.59-1.617-4.75-4.459-4.75M7.84 13.633a3.96 3.96 0 0 1-.25 1.775.32.32 0 0 0 0 .228c.124.321.217.658.25 1.017a4.02 4.02 0 0 1-.612 2.542c-.14.219.007.537.267.537h11.12c2.67 0 4.465-1.877 4.465-4.67v-4.4a.3.3 0 0 0-.3-.3H6.375c-.216 0-.304.347-.13.476.879.659 1.488 1.654 1.596 2.795M4.411 17.548a.75.75 0 0 1-.564.25H2.42v-1.52h1.363c.424 0 .786.3.822.682a.76.76 0 0 1-.194.588m-1.99-4.3h1.362c.424 0 .785.303.822.692a.76.76 0 0 1-.194.588.75.75 0 0 1-.564.25H2.42zm3.677.55c-.102-1.08-1.009-1.93-2.105-2.03v-.16a.75.75 0 0 0-1.5 0v.14H1.67a.75.75 0 0 0-.75.75v6.05c0 .414.336.75.75.75h.823v.14a.75.75 0 1 0 1.5 0v-.155a2.26 2.26 0 0 0 1.528-.727c.428-.47.638-1.104.577-1.738a2.2 2.2 0 0 0-.585-1.274l.008-.008c.428-.47.638-1.104.577-1.738"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBitcoinCardBold;
