import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBranchRightOutline = ({
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
      d="M15.393 4a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v4a.75.75 0 1 1-1.5 0V5.81l-4.475 4.475a.75.75 0 1 1-1.06-1.06l4.474-4.475h-2.189a.75.75 0 0 1-.75-.75M3.107 12a.75.75 0 0 1 .75-.75h8.287a.75.75 0 0 1 .53.22l6.72 6.72V16a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1 0-1.5h2.189l-6.5-6.5H3.857a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBranchRightOutline;
