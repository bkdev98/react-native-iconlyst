import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPositionTwoTone = ({
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
      d="M14.676 18.074 12.5 20.25l-2.175-2.176M10.324 6.426 12.5 4.25l2.175 2.176M12.5 20.249V4.25"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.676 14.426 4.5 12.25m0 0 2.176-2.176M4.5 12.25h16m-2.176-2.177L20.5 12.25m0 0-2.176 2.175"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPositionTwoTone;
