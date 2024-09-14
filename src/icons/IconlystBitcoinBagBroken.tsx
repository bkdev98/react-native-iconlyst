import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinBagBroken = ({
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
      d="M16.404 21c2.872 0 5.014-1.508 4.483-5.21l-.729-5.657c-.446-2.024-1.697-2.881-2.88-2.881H7.747c-1.166 0-2.499.797-2.88 2.88l-.729 5.658C3.512 19.964 5.718 21 8.588 21h3.908"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.777 14.129H10.58v3.146h2.265c.92 0 1.655-.79 1.566-1.727-.078-.819-.812-1.42-1.634-1.42"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.777 10.982H10.58v3.146h2.265c.92 0 1.655-.79 1.566-1.727-.078-.818-.812-1.419-1.634-1.419M12.217 18.203v-.928M12.217 10.98v-.927M16.533 7.253a4.045 4.045 0 0 0-4.046-4.046 4.046 4.046 0 0 0-4.063 4.028v.018"
    />
  </Svg>
);
export default IconlystBitcoinBagBroken;
