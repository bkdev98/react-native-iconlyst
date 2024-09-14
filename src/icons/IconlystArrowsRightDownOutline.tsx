import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsRightDownOutline = ({
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
      d="M10.57 16.95a.75.75 0 0 1 0 1.06l-3.52 3.52a.75.75 0 0 1-1.06 0l-3.52-3.52a.75.75 0 0 1 1.06-1.06l2.99 2.99 2.989-2.99a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.75 6.52a.75.75 0 0 1-.75.75H10.542a3.27 3.27 0 0 0-3.272 3.272V21a.75.75 0 0 1-1.5 0V10.542a4.77 4.77 0 0 1 4.772-4.772H21a.75.75 0 0 1 .75.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.53 5.99a.75.75 0 0 1 0 1.06l-3.52 3.52a.75.75 0 0 1-1.06-1.061l2.99-2.99-2.99-2.989a.75.75 0 1 1 1.06-1.06z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowsRightDownOutline;
