import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFullMoonLight = ({
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
      d="M20.808 9.67A9 9 0 1 1 3.42 14.329a9 9 0 0 1 17.387-4.66"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.733 8.487a1.25 1.25 0 1 1-2.415.647 1.25 1.25 0 0 1 2.415-.647M5.964 5.443a1.697 1.697 0 1 1-1.788 2.489M13.773 15.504a1.25 1.25 0 1 1-2.414.647 1.25 1.25 0 0 1 2.414-.647M10.58 8.81h.01M17.732 13.778h.01M7.36 14.578h.01"
    />
  </Svg>
);
export default IconlystFullMoonLight;
