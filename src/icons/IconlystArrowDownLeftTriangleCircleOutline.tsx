import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowDownLeftTriangleCircleOutline = ({
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
      d="M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12c0 5.384-4.365 9.75-9.75 9.75S2.25 17.384 2.25 12M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.113 7.887a.75.75 0 0 1 0 1.06l-3.267 3.267 1.592 1.591a.75.75 0 0 1-.365 1.262l-5.488 1.246a.75.75 0 0 1-.898-.897l1.246-5.49a.75.75 0 0 1 1.262-.364l1.59 1.591 3.267-3.266a.75.75 0 0 1 1.06 0M11.23 12.72l-1.136-1.136-.682 3.003 3.003-.682-1.136-1.136z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowDownLeftTriangleCircleOutline;
