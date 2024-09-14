import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHouseLockTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.996 9.734v8.675a3.063 3.063 0 0 0 3.064 3.063h8.88a3.063 3.063 0 0 0 3.064-3.063V9.734"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.882 17.606h-2.763a1.37 1.37 0 0 1-1.371-1.372v-1.55c0-.757.614-1.371 1.371-1.371h2.763c.757 0 1.37.614 1.37 1.37v1.552a1.37 1.37 0 0 1-1.37 1.37"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.15 13.339v-.984a1.648 1.648 0 0 0-3.296-.007v.99"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m21.5 10.915-7.526-5.957a2.38 2.38 0 0 0-2.948 0L3.5 10.915"
    />
  </Svg>
);
export default IconlystHouseLockTwoTone;
