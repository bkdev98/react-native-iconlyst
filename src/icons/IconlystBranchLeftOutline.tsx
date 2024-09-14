import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBranchLeftOutline = ({
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
      d="M3.107 4a.75.75 0 0 1 .75-.75h4a.75.75 0 1 1 0 1.5H5.668l4.475 4.475a.75.75 0 0 1-1.061 1.06L4.607 5.811V8a.75.75 0 1 1-1.5 0zM11.327 11.47a.75.75 0 0 1 .53-.22h8.286a.75.75 0 0 1 0 1.5h-7.975l-6.5 6.5h2.19a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 1.5 0v2.19z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBranchLeftOutline;
