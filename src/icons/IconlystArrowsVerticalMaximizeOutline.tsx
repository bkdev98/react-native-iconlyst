import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsVerticalMaximizeOutline = ({
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
      d="M11.47 3.47a.75.75 0 0 1 1.06 0l3.556 3.555a.75.75 0 1 1-1.06 1.06L12.75 5.812v4.411a.75.75 0 1 1-1.5 0V5.811L8.975 8.086a.75.75 0 0 1-1.061-1.06zM12 13.028a.75.75 0 0 1 .75.75v4.411l2.275-2.275a.75.75 0 0 1 1.06 1.06L12.53 20.53a.75.75 0 0 1-1.06 0l-3.556-3.555a.75.75 0 1 1 1.06-1.06l2.276 2.274v-4.411a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowsVerticalMaximizeOutline;
