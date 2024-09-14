import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPagePlusAddTwoTone = ({
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
      d="M21.495 13.002V8C21.495 5.07 19.67 3 16.738 3H8.347C5.423 3 3.59 5.07 3.59 8v7.905c0 2.93 1.824 5 4.757 5h1.74M17.441 15.234V21M20.322 18.117h-5.765"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.917 6.531H6.86m2.528 0h-.055m2.528 0h-.056M21.495 9.458H3.59"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystWebPagePlusAddTwoTone;
