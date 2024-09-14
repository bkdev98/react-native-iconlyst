import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsVerticalMinimizeOutline = ({
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
      d="M11.47 10.753a.75.75 0 0 0 1.06 0l3.556-3.556a.75.75 0 1 0-1.06-1.06L12.75 8.412V4a.75.75 0 1 0-1.5 0v4.412L8.975 6.137a.75.75 0 0 0-1.061 1.06zM12 20.75a.75.75 0 0 0 .75-.75v-4.411l2.275 2.275a.75.75 0 0 0 1.06-1.061l-3.555-3.556a.75.75 0 0 0-1.06 0l-3.556 3.556a.75.75 0 0 0 1.06 1.06l2.276-2.275V20c0 .414.336.75.75.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowsVerticalMinimizeOutline;
