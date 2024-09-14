import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTicketBoldsharp = ({
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
      d="M13.211 15.087h1.5V9.128h-1.5zm8.289-4.575h.5V4.1h-7.289v2.721h-1.5V4.1H2.5v6.49H3c.863 0 1.513.606 1.513 1.411 0 .82-.679 1.488-1.513 1.488h-.5V19.9h10.711v-2.322h1.5V19.9H22v-6.411h-.5c-.834 0-1.513-.668-1.513-1.488 0-.821.679-1.489 1.513-1.489"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTicketBoldsharp;
