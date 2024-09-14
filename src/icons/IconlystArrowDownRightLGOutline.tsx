import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowDownRightLGOutline = ({
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
      d="M5.106 5.106a.75.75 0 0 1 1.061 0l11.448 11.447v-5.26a.75.75 0 1 1 1.5 0v7.071a.75.75 0 0 1-.75.75h-7.071a.75.75 0 0 1 0-1.5h5.26L5.106 6.167a.75.75 0 0 1 0-1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowDownRightLGOutline;
