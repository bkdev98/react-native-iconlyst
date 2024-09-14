import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoonThunderMoonTwoTone = ({
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
      d="M3.114 12.758a9.17 9.17 0 0 1 6.647-8.821c.05-.015.092.04.068.086a8.29 8.29 0 0 0 1.467 9.73 8.27 8.27 0 0 0 9.73 1.457c.046-.024.1.018.086.069a9.22 9.22 0 0 1-5.063 5.85"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.73 7.729 1.492-3.642a.23.23 0 0 1 .218-.152h2c.16 0 .272.158.22.309l-.886 2.077c-.053.15.059.309.219.309h1.89c.199 0 .305.235.174.384l-3.588 4.095c-.161.185-.461.025-.398-.212l.684-2.565a.232.232 0 0 0-.224-.292h-1.584a.232.232 0 0 1-.218-.311M7.101 21.406l.682-2.193H5.779l.675-2.296m-3.34 4.976.317-1.215m7.813 1.215.317-1.215m-1.255-2.14.483-1.621"
    />
  </Svg>
);
export default IconlystMoonThunderMoonTwoTone;
