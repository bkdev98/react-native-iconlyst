import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArtificialIntelligenceBrainOutline = ({
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
      d="M9.54 2.306a.75.75 0 0 0-.694.066L4.675 5.101a.75.75 0 0 0-.34.628v2.545l-1.678.863a.75.75 0 0 0-.407.667v4.393a.75.75 0 0 0 .407.667l1.678.862v2.542a.75.75 0 0 0 .34.627l4.17 2.732a.75.75 0 0 0 .696.067l2.744-1.125a.75.75 0 0 0-.57-1.388l-2.378.975-3.502-2.293v-2.595a.75.75 0 0 0-.407-.667l-1.678-.862V10.26L5.428 9.4a.75.75 0 0 0 .407-.667V6.134l3.502-2.29 2.38.97a.75.75 0 1 0 .566-1.388z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.46 21.694a.75.75 0 0 0 .694-.066l4.171-2.729a.75.75 0 0 0 .34-.628v-2.545l1.678-.863a.75.75 0 0 0 .407-.667V9.803a.75.75 0 0 0-.407-.667l-1.678-.862V5.732a.75.75 0 0 0-.34-.627l-4.17-2.732a.75.75 0 0 0-.696-.067l-2.743 1.125a.75.75 0 0 0-.466.694v1.75a.75.75 0 0 0 1.5 0V4.629l1.913-.784 3.502 2.293v2.595a.75.75 0 0 0 .407.667l1.678.862v3.478l-1.678.862a.75.75 0 0 0-.407.667v2.598l-3.502 2.29-1.913-.78v-1.251a.75.75 0 0 0-1.5 0v1.755c0 .305.184.579.466.694z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.054 14.729a.75.75 0 0 1-.703-.49l-.101-.274a3.01 3.01 0 0 0-1.78-1.781l-.272-.102a.75.75 0 0 1 0-1.406l.273-.101A3.01 3.01 0 0 0 9.25 8.793l.1-.273a.75.75 0 0 1 1.408 0l.1.273a3.01 3.01 0 0 0 1.78 1.782l.273.1a.75.75 0 0 1 0 1.407l-.274.101a3.01 3.01 0 0 0-1.778 1.782l-.101.274a.75.75 0 0 1-.704.49m.949-3.35a4.5 4.5 0 0 1-.949-.95 4.5 4.5 0 0 1-.948.95c.361.267.681.588.948.95.267-.362.587-.683.949-.95M15.365 15.97a.75.75 0 0 1-.718-.531 1.02 1.02 0 0 0-.678-.68.75.75 0 0 1 0-1.434 1.02 1.02 0 0 0 .678-.68.75.75 0 0 1 1.435 0c.1.326.354.58.678.68a.75.75 0 0 1 0 1.435 1.02 1.02 0 0 0-.678.679.75.75 0 0 1-.717.532"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArtificialIntelligenceBrainOutline;
