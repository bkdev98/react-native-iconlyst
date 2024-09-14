import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArtificialIntelligenceConnectionOutline = ({
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
      d="M14.46 2.306a.75.75 0 0 1 .695.067l4.17 2.732a.75.75 0 0 1 .34.627v2.542l1.678.862a.75.75 0 0 1 .407.667v4.393a.75.75 0 0 1-.407.667l-1.678.863v2.545a.75.75 0 0 1-.34.628l-4.17 2.729a.75.75 0 0 1-.695.066l-2.744-1.12a.75.75 0 0 1-.466-.694v-1.755a.75.75 0 0 1 1.5 0v1.25l1.913.782 3.502-2.291v-2.598a.75.75 0 0 1 .407-.667l1.678-.863v-3.477L18.572 9.4a.75.75 0 0 1-.407-.667V6.137l-3.502-2.293-1.913.784v1.248a.75.75 0 0 1-1.5 0V4.125a.75.75 0 0 1 .466-.694z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.002 14.11a.75.75 0 0 1 .75.75v.04a.75.75 0 0 1-1.5 0v-.04a.75.75 0 0 1 .75-.75M15.224 10.981a5.166 5.166 0 0 0-6.448 0 .75.75 0 0 1-.938-1.17 6.666 6.666 0 0 1 8.324 0 .75.75 0 0 1-.938 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.4 13.246a2.17 2.17 0 0 0-2.79.003.75.75 0 1 1-.974-1.142 3.67 3.67 0 0 1 4.731-.008.75.75 0 1 1-.967 1.147"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArtificialIntelligenceConnectionOutline;
