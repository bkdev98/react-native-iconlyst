import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTicketBulksharp = ({
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
      d="M13.798 6.821h-.587V4.1H2.5v6.49H3c.863 0 1.513.606 1.513 1.411 0 .82-.679 1.488-1.513 1.488h-.5V19.9h10.711v-2.322h.587v-2.491h-.587V9.128h.587z"
    />
    <Path
      fill={props.color}
      d="M13.798 17.578h.913V19.9H22v-6.41h-.5c-.834 0-1.513-.669-1.513-1.49 0-.82.679-1.488 1.513-1.488h.5V4.1h-7.29v2.721h-.912v2.307h.913v5.959h-.913z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystTicketBulksharp;
