import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSunriseBroken = ({
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
      d="M12.257 3.415v.031M5.913 6.052l.02.02m-2.634 6.324H3.25m18 0h-.043m-2.625-6.324.045-.046M12.249 14.715l2.575 2.574M9.676 17.29l.69-.69M12.253 7.473a4.92 4.92 0 0 0-4.923 4.922M17.175 12.396a4.92 4.92 0 0 0-2.343-4.193M12.25 14.713v5.873"
    />
  </Svg>
);
export default IconlystSunriseBroken;
