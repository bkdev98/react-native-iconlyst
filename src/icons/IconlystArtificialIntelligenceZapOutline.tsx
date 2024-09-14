import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArtificialIntelligenceZapOutline = ({
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
      d="M9.54 2.306a.75.75 0 0 0-.695.066l-4.17 2.729a.75.75 0 0 0-.34.628v2.545l-1.678.863a.75.75 0 0 0-.407.667v4.393a.75.75 0 0 0 .407.667l1.678.862v2.542a.75.75 0 0 0 .34.627l4.17 2.732a.75.75 0 0 0 .695.067l2.744-1.125a.75.75 0 1 0-.569-1.388l-2.378.975-3.502-2.293v-2.595a.75.75 0 0 0-.407-.667l-1.678-.862V10.26L5.428 9.4a.75.75 0 0 0 .407-.667V6.134l3.502-2.29 2.38.97a.75.75 0 0 0 .566-1.388z"
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
      d="M11.947 16.604q-.18 0-.36-.06a1.17 1.17 0 0 1-.81-1.12v-1.73h-1.59c-.44 0-.84-.25-1.05-.64-.2-.4-.17-.87.1-1.22l2.86-3.95c.3-.41.83-.59 1.32-.43s.81.61.81 1.12v1.73h1.59c.44 0 .85.25 1.05.64.2.4.16.87-.1 1.22l-2.86 3.95c-.23.31-.58.49-.95.49zm-2.14-4.4h1.71c.41 0 .75.34.75.75v1.48l1.91-2.62h-1.71c-.41 0-.75-.34-.75-.75v-1.48z"
    />
  </Svg>
);
export default IconlystArtificialIntelligenceZapOutline;
