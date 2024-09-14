import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTicketStarBulksharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.5 11.046h.5V4.635H2.5v6.489H3c.863 0 1.513.607 1.513 1.412 0 .82-.679 1.488-1.513 1.488h-.5v6.41H22v-6.41h-.5c-.835 0-1.513-.668-1.513-1.488 0-.822.678-1.49 1.513-1.49"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m12.25 14.71 2.474 1.217-.393-2.73 1.923-1.978-2.717-.47-1.288-2.44-1.287 2.44-2.718.47 1.923 1.978-.393 2.73z"
    />
  </Svg>
);
export default IconlystTicketStarBulksharp;
