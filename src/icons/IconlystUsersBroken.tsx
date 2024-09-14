import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUsersBroken = ({
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M9.023 19.85H6.515c-1.348 0-2.162-.97-2.22-2.319 0-2.747 2.684-3.694 6.728-3.726 4.051.042 6.743.99 6.728 3.726-.065 1.35-.874 2.319-2.22 2.319h-2.254M19.194 19.697c1.278 0 2.047-.92 2.108-2.2.008-1.569-.919-2.518-2.5-3.033M7.27 7.666a3.514 3.514 0 1 0 1.193-2.639M16.506 5.018a3.043 3.043 0 0 1 0 5.702"
    />
  </Svg>
);
export default IconlystUsersBroken;
