import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWindBroken = ({
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
      d="M8.049 3.879a2.36 2.36 0 0 1 4.12 1.572c0 1.304-.961 2.36-2.361 2.36H3.25M11.149 19.869a2.36 2.36 0 0 0 4.316-1.32c0-1.303-.952-2.36-2.36-2.36h-4.58M5.714 16.188H3.25M16.284 7.042a2.88 2.88 0 0 1 4.966 1.987c0 1.59-1.056 2.85-2.88 2.88h-3.78M10.81 11.91H3.25"
    />
  </Svg>
);
export default IconlystWindBroken;
