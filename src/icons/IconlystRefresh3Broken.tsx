import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRefresh3Broken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.977 4.313-.007.006M7.13 5.872l-.008.007M4.59 9.146l-.007.006m-.564 4.091-.007.008m1.566 3.84-.008.007M19.86 4.613l-4.672.064.063 4.648"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.188 4.953c3.967 1.728 5.85 6.326 4.205 10.358M17.26 18.316a8.01 8.01 0 0 1-8.317 1.4"
    />
  </Svg>
);
export default IconlystRefresh3Broken;
