import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlightTicketTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.5 8.742v-.449c0-.548 0-.822-.036-1.051a3 3 0 0 0-2.502-2.503c-.23-.036-.506-.036-1.058-.036-.141 0-.211 0-.279.005a2 2 0 0 0-1.09.414c-.053.041-.105.088-.21.18-.231.207-.348.31-.46.385a2 2 0 0 1-2.23 0 5 5 0 0 1-.46-.385c-.105-.092-.157-.139-.21-.18a2 2 0 0 0-1.09-.414c-.068-.005-.137-.005-.277-.005H7.541c-.965 0-1.448 0-1.843.11a3 3 0 0 0-2.086 2.088c-.11.395-.109.878-.108 1.843 0 .25 0 .375.012.452.055.345.015.263.251.52.053.057.362.305.982.8.434.347.71.875.71 1.483v.058a1.9 1.9 0 0 1-.675 1.385c-.656.552-.985.828-1.034.884-.239.27-.185.156-.239.513-.011.074-.011.194-.011.435 0 .952 0 1.429.107 1.819a3 3 0 0 0 2.098 2.098c.39.107.867.107 1.82.107h4.073c.14 0 .21 0 .277-.005a2 2 0 0 0 1.09-.414c.053-.041.105-.088.21-.18.231-.207.348-.31.46-.385a2 2 0 0 1 2.23 0c.112.075.229.178.46.385.105.092.157.139.21.18a2 2 0 0 0 1.09.414c.068.005.138.005.279.005.552 0 .828 0 1.057-.036a3 3 0 0 0 2.503-2.503c.036-.23.036-.503.035-1.051v-.45c0-.25 0-.375-.012-.452-.054-.346-.014-.263-.25-.521-.053-.057-.364-.306-.986-.803a1.88 1.88 0 0 1-.712-1.484c0-.609.277-1.136.711-1.481.622-.495.933-.742.986-.8.237-.257.198-.175.252-.521.012-.077.012-.203.012-.454"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.188 12h-6.74l-.637-.926M11.504 14.73l.734-1.023M13.944 11.999l-2.44-2.73"
    />
  </Svg>
);
export default IconlystFlightTicketTwoTone;
