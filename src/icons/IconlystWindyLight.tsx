import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWindyLight = ({
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
      d="M11.013 19.869a2.36 2.36 0 0 0 4.316-1.32c0-1.303-.952-2.36-2.36-2.36H3.114M7.913 3.879a2.36 2.36 0 0 1 4.12 1.572c0 1.304-.96 2.36-2.36 2.36h-4.51a2.048 2.048 0 0 0 0 4.098h13.071c1.825-.03 2.88-1.29 2.88-2.88a2.88 2.88 0 0 0-4.966-1.987"
    />
  </Svg>
);
export default IconlystWindyLight;
