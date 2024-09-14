import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArtificialIntelligenceChangeOutline = ({
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
      d="M8.361 13.426a.75.75 0 0 1 .75-.75h1.882a.75.75 0 1 1 0 1.5H9.861v1a.75.75 0 1 1-1.5 0zM14.888 8.074a.75.75 0 0 1 .75.75v1.882a.75.75 0 0 1-.75.75h-1.882a.75.75 0 1 1 0-1.5h1.132V8.824a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.83 9.771c-.863 0-1.606.461-2.003 1.156a.75.75 0 1 1-1.302-.745 3.79 3.79 0 0 1 3.305-1.91c1.243 0 2.171.518 2.774 1.02a4.8 4.8 0 0 1 .855.927l.049.073.015.024.005.008.002.003v.002l-.628.378.63-.377a.75.75 0 0 1-1.285.775l-.003-.004a2 2 0 0 0-.132-.182 3.3 3.3 0 0 0-.467-.474 2.8 2.8 0 0 0-1.815-.674M8.72 12.794a.75.75 0 0 1 1.03.246l.004.006.024.038q.036.054.113.154c.104.133.256.31.45.485.4.36.907.654 1.49.654a2.3 2.3 0 0 0 1.995-1.15.75.75 0 1 1 1.299.751 3.8 3.8 0 0 1-3.294 1.899c-1.102 0-1.954-.553-2.494-1.04a5.3 5.3 0 0 1-.844-.978l-.014-.022-.005-.007-.001-.003-.001-.001.64-.392"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArtificialIntelligenceChangeOutline;
