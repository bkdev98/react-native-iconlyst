import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageRefresh3Broken = ({
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
      d="M20.732 12.707V7.853c0-2.844-1.77-4.853-4.617-4.853H7.971C5.133 3 3.354 5.01 3.354 7.853v3.836M3.354 15.525c0 2.844 1.771 4.853 4.617 4.853h1.69M17.027 19.294l1.68.853a3.412 3.412 0 0 1-5.669-2.559M15.871 15.882l-1.68-.853a3.412 3.412 0 0 1 5.669 2.559M6.58 6.428h-.053m2.455 0h-.054m2.453 0h-.053M17.704 9.268H3.354"
    />
  </Svg>
);
export default IconlystWebPageRefresh3Broken;
