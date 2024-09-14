import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpadesPokerCardTwoTone = ({
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
      d="M12.496 13.504c.377.266 1.004.783 1.82.728.74-.05 1.34-.54 1.571-1.238a2.27 2.27 0 0 0 .03-1.378c-.192-.62-.583-1.139-1.079-1.55l-2.104-1.807c-.065-.056-.142-.108-.231-.109-.09 0-.167.052-.232.108L10.08 10.14c-.444.397-.807.89-.986 1.463a2.3 2.3 0 0 0 .077 1.52 1.75 1.75 0 0 0 1.101 1.033c1.228.344 1.742-.309 2.224-.656m.004 0V16"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.5 3h-6a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.5 6v.01M8.5 18v.01"
    />
  </Svg>
);
export default IconlystSpadesPokerCardTwoTone;
