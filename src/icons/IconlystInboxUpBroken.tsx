import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInboxUpBroken = ({
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
      d="M7.81 3.814c-2.37.363-3.818 2.274-3.818 4.864v7.807c0 2.895 1.79 4.94 4.676 4.94h4.919M17.791 3.814c2.372.373 3.82 2.284 3.82 4.864v7.807c0 2.895-1.8 4.94-4.686 4.94M10.057 6.022l2.746-2.659 2.746 2.659M12.8 3.367v7.236"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.603 13.707H17.41c-.869 0-1.661.493-2.047 1.274a2.86 2.86 0 0 1-2.564 1.595 2.86 2.86 0 0 1-2.563-1.595 2.28 2.28 0 0 0-2.047-1.274H6.546"
    />
  </Svg>
);
export default IconlystInboxUpBroken;
