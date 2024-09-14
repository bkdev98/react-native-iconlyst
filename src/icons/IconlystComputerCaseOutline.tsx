import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystComputerCaseOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.668 6.007A3.757 3.757 0 0 1 9.424 2.25h5.652a3.757 3.757 0 0 1 3.756 3.757v11.987a3.757 3.757 0 0 1-3.757 3.756h-5.65a3.756 3.756 0 0 1-3.757-3.756zM9.424 3.75a2.257 2.257 0 0 0-2.256 2.257v11.987a2.256 2.256 0 0 0 2.256 2.256h5.652a2.257 2.257 0 0 0 2.256-2.256V6.007a2.257 2.257 0 0 0-2.257-2.257z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.146 11.193a.75.75 0 0 1 .75-.75h4.71a.75.75 0 1 1 0 1.5h-4.71a.75.75 0 0 1-.75-.75M9.146 7.68a.75.75 0 0 1 .75-.75h4.71a.75.75 0 1 1 0 1.5h-4.71a.75.75 0 0 1-.75-.75M11.269 17.379a.98.98 0 1 1 1.961 0 .98.98 0 0 1-1.961 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystComputerCaseOutline;
