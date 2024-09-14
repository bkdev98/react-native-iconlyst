import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBowlTwoTone = ({
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
      d="M3.583 8.668a4 4 0 0 0-.068.533v.017c-.011.145-.011.274-.011.419 0 4.136 4.03 7.48 8.998 7.48 4.969 0 8.998-3.344 8.998-7.48 0-.145 0-.274-.01-.42v-.016a4 4 0 0 0-.069-.533"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.496 8.942c0 1.138-4.028 2.06-8.998 2.06S3.5 10.08 3.5 8.942s4.028-2.06 8.998-2.06 8.998.923 8.998 2.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBowlTwoTone;
