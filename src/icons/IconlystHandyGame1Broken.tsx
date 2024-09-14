import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHandyGame1Broken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.293 3c2.302 0 3.735 1.625 3.735 3.925v10.15c0 2.3-1.433 3.925-3.736 3.925H8.707c-2.302 0-3.734-1.625-3.734-3.925V6.925C4.973 4.625 6.412 3 8.707 3H12M9.799 14.673v2.611m1.333-1.305H8.467M14.19 15.137h.01M15.719 17.245h.01M7.932 10.405h11.095"
    />
  </Svg>
);
export default IconlystHandyGame1Broken;
