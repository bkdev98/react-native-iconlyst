import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCrossingDirectionsVerticalUpOutline = ({
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
      d="M18.193 5.194h-2.636a.75.75 0 0 1 0-1.5H20a.75.75 0 0 1 .75.795v4.4a.75.75 0 0 1-1.5 0v-2.63l-4.052 4.05a.75.75 0 0 1-1.06-1.06zM12.533 11.916a.75.75 0 0 1 0 1.06l-7.111 7.111a.75.75 0 0 1-1.06-1.06l7.11-7.112a.75.75 0 0 1 1.061 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.751 6.257v2.634a.75.75 0 0 1-1.5 0V4.446a.75.75 0 0 1 .75-.75h4.444a.75.75 0 0 1 0 1.5H5.812l13.83 13.83a.75.75 0 0 1-1.06 1.061z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCrossingDirectionsVerticalUpOutline;
