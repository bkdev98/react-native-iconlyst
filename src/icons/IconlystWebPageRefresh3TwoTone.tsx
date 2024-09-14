import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageRefresh3TwoTone = ({
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
      d="M21.232 12.707V7.853c0-2.844-1.77-4.853-4.616-4.853H8.47C5.634 3 3.854 5.01 3.854 7.853v7.672c0 2.844 1.771 4.853 4.617 4.853h1.69"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.527 19.294 1.68.853a3.412 3.412 0 0 1-5.669-2.559"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.371 15.883-1.68-.853a3.412 3.412 0 0 1 5.669 2.559"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.08 6.427h-.053m2.455 0h-.054m2.453 0h-.053M21.231 9.268H3.854"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystWebPageRefresh3TwoTone;
