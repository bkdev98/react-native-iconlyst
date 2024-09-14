import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsHorizotalMinimizeOutline = ({
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
      d="M6.137 7.914a.75.75 0 0 1 1.06 0l3.556 3.556a.75.75 0 0 1 0 1.06l-3.556 3.556a.75.75 0 0 1-1.06-1.06l2.275-2.276H4a.75.75 0 1 1 0-1.5h4.412L6.137 8.975a.75.75 0 0 1 0-1.06M17.864 7.914a.75.75 0 0 1 0 1.06l-2.276 2.276H20a.75.75 0 0 1 0 1.5H15.59l2.275 2.275a.75.75 0 1 1-1.06 1.061l-3.556-3.555a.75.75 0 0 1 0-1.061l3.555-3.556a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowsHorizotalMinimizeOutline;
