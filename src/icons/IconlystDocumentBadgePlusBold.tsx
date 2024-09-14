import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentBadgePlusBold = ({
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
      d="M15.059 15.378H7.83a.75.75 0 0 1 0-1.5h7.229a.75.75 0 0 1 0 1.5M7.83 9.642h3.337a.75.75 0 0 1 0 1.5H7.83a.75.75 0 0 1 0-1.5m6.904-4.262c0-.33.04-.648.106-.958a.206.206 0 0 0-.199-.25H7.227c-3.16 0-5.282 2.222-5.282 5.527v5.616c0 3.305 2.123 5.527 5.282 5.527h8.434c3.16 0 5.284-2.222 5.284-5.527v-4.838a.206.206 0 0 0-.25-.199c-.31.065-.628.106-.957.106a5.004 5.004 0 0 1-5.004-5.004"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.305 5.11h-1.2V3.907a.75.75 0 0 0-1.5 0V5.11h-1.2a.75.75 0 0 0 0 1.5h1.2v1.2a.75.75 0 0 0 1.5 0v-1.2h1.2a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDocumentBadgePlusBold;
