import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPositionBroken = ({
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
      d="M14.176 18.074 12 20.25l-2.175-2.176M9.824 6.426 12 4.25l2.175 2.176M6.176 14.425 4 12.25l2.176-2.176M17.824 10.074 20 12.25l-2.176 2.175M12 20.249V4.25M20 12.25h-8M8.763 12.25H4"
    />
  </Svg>
);
export default IconlystPositionBroken;
