import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSlippers2Broken = ({
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
      d="M19.89 14.809a841 841 0 0 0 1.566-6.379 3.817 3.817 0 0 0-3.203-4.346 3.817 3.817 0 0 0-4.346 3.203s-.273 4.265-.395 6.555c-.092 1.723 1.2 3.1 2.758 3.333a3.3 3.3 0 0 0 1.983-.323M5.108 17.558a868 868 0 0 1-1.564-6.38 3.817 3.817 0 0 1 3.203-4.346 3.817 3.817 0 0 1 4.347 3.203s.272 4.265.394 6.555c.091 1.724-1.2 3.1-2.758 3.333a3.3 3.3 0 0 1-1.935-.3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.229 12.197c-2.452-.764-4.84-.441-7.153 1.177M7.827 11.803l-.33-1.85M17.174 9.055l.33-1.85M13.772 9.449c2.45-.764 4.84-.441 7.152 1.177"
    />
  </Svg>
);
export default IconlystSlippers2Broken;
