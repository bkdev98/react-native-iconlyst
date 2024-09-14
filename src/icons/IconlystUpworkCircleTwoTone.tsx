import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpworkCircleTwoTone = ({
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
      d="M12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M10.727 9.29c.636 1.592 1.831 5.093 4.137 5.093a2.25 2.25 0 0 0 2.228-2.228 2.25 2.25 0 0 0-2.228-2.228c-1.29 0-2.054.955-2.228 1.91-.154.846-.955 5.092-.955 5.092M6.907 9.29v3.183c0 1.04.87 1.91 1.91 1.91s1.91-.87 1.91-1.91V9.29"
    />
  </Svg>
);
export default IconlystUpworkCircleTwoTone;
