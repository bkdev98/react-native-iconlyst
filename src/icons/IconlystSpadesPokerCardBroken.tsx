import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpadesPokerCardBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 21a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h3M16 6v.01M8 18v.01"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.75 13.12c.2.49.59.88 1.1 1.03 1.23.34 1.74-.31 2.22-.66m0 0c.38.27 1 .78 1.82.73.74-.05 1.34-.54 1.57-1.24.15-.44.17-.93.03-1.38-.19-.62-.58-1.14-1.08-1.55l-2.1-1.79a.34.34 0 0 0-.23-.11c-.09 0-.17.05-.23.11l-2.19 1.88m2.42 3.36V16"
    />
  </Svg>
);
export default IconlystSpadesPokerCardBroken;
