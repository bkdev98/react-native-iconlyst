import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArtificialIntelligenceSolutionOutline = ({
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
      d="M14.46 21.694a.75.75 0 0 0 .694-.066l4.171-2.729a.75.75 0 0 0 .34-.628v-2.545l1.678-.863a.75.75 0 0 0 .407-.667V9.803a.75.75 0 0 0-.407-.667l-1.678-.862V5.732a.75.75 0 0 0-.34-.627l-4.17-2.732a.75.75 0 0 0-.696-.067l-2.743 1.125a.75.75 0 0 0-.466.694v2.067a.75.75 0 0 0 1.5 0V4.628l1.913-.784 3.502 2.293v2.595a.75.75 0 0 0 .407.667l1.678.862v3.478l-1.678.862a.75.75 0 0 0-.407.667v2.598l-3.502 2.29-1.913-.78v-1.49a.75.75 0 0 0-1.5 0v1.994c0 .305.184.579.466.694z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.766 7.062a3.62 3.62 0 0 0-4.38 3.534c0 1.49.903 2.768 2.192 3.311a.75.75 0 0 1 .459.691v1.451c0 .53.437.968.966.968.53 0 .968-.437.968-.968v-1.443a.75.75 0 0 1 .458-.691 3.62 3.62 0 0 0 2.105-4.097 3.6 3.6 0 0 0-2.768-2.756m-5.88 3.534a5.12 5.12 0 0 1 6.179-5.004h.001a5.1 5.1 0 0 1 3.936 3.92 5.13 5.13 0 0 1-2.531 5.563v.974a2.47 2.47 0 0 1-2.468 2.468 2.47 2.47 0 0 1-2.466-2.468v-.98a5.09 5.09 0 0 1-2.651-4.473"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.604 14.607a.75.75 0 0 1 .75-.75h3.37a.75.75 0 0 1 0 1.5h-3.37a.75.75 0 0 1-.75-.75M12.363 8.162a.75.75 0 0 1 .3 1.017l-.312.574h.56a.75.75 0 0 1 .659 1.11l-.916 1.681a.75.75 0 1 1-1.318-.717l.313-.574h-.56a.75.75 0 0 1-.658-1.108l.915-1.683a.75.75 0 0 1 1.017-.3"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArtificialIntelligenceSolutionOutline;
