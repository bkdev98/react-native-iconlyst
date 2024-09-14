import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArtificialIntelligenceSearchOutline = ({
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
      d="M8.32 16.428c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l1.29-1.29a4.023 4.023 0 1 1 1.06 1.06l-1.29 1.29c-.15.15-.34.22-.53.22m2.3-3.05c.98.98 2.58.98 3.57 0 .98-.98.98-2.58 0-3.57-.98-.98-2.58-.98-3.57 0-.98.98-.98 2.58 0 3.57"
    />
  </Svg>
);
export default IconlystArtificialIntelligenceSearchOutline;
