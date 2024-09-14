import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsLeftDownOutline = ({
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
      d="M2.47 7.05a.75.75 0 0 1 0-1.06l3.52-3.52a.75.75 0 1 1 1.06 1.06L4.06 6.52l2.99 2.989a.75.75 0 0 1-1.06 1.06z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.25 6.52A.75.75 0 0 1 3 5.77h10.458a4.77 4.77 0 0 1 4.772 4.772V21a.75.75 0 1 1-1.5 0V10.542a3.27 3.27 0 0 0-3.272-3.272H3a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.43 16.95a.75.75 0 0 1 1.061 0l2.99 2.99 2.989-2.99a.75.75 0 0 1 1.06 1.06l-3.52 3.52a.75.75 0 0 1-1.06 0l-3.52-3.52a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowsLeftDownOutline;
