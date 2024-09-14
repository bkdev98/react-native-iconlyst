import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBranchDownOutline = ({
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
      d="M10.286 13.858a.75.75 0 0 1 0 1.06L5.81 19.393h2.19a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 1.5 0v2.19l4.474-4.475a.75.75 0 0 1 1.06 0M12 3.107a.75.75 0 0 1 .75.75v7.976l6.5 6.5v-2.19a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1 0-1.5h2.19l-6.72-6.72a.75.75 0 0 1-.22-.53V3.857a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBranchDownOutline;
