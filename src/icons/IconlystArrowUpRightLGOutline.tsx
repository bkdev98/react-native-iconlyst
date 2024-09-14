import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowUpRightLGOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M11.294 6.386a.75.75 0 0 1 0-1.5h7.07a.75.75 0 0 1 .75.75v7.071a.75.75 0 0 1-1.5 0v-5.26L6.168 18.894a.75.75 0 1 1-1.06-1.06L16.553 6.386z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowUpRightLGOutline;
