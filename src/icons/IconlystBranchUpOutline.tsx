import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBranchUpOutline = ({
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
      d="M4.75 5.668v2.19a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75h4a.75.75 0 1 1 0 1.5H5.81l4.475 4.474a.75.75 0 0 1-1.06 1.06zM16 3.107h4a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-2.19l-6.5 6.5v7.976a.75.75 0 0 1-1.5 0v-8.286a.75.75 0 0 1 .22-.53l6.72-6.72H16a.75.75 0 0 1 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBranchUpOutline;
