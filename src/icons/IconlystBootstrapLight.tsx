import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBootstrapLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.725 3.45h8.55a3.8 3.8 0 0 1 3.8 3.8c0 1.896.023 2.872 1.425 4.274v.95c-1.402 1.402-1.425 2.378-1.425 4.275a3.8 3.8 0 0 1-3.8 3.8h-8.55a3.8 3.8 0 0 1-3.8-3.8c0-1.897-.023-2.873-1.425-4.275v-.95c1.402-1.402 1.425-2.378 1.425-4.275a3.8 3.8 0 0 1 3.8-3.8"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.839 12c1.11 0 2.011.85 2.011 1.9s-.9 1.9-2.011 1.9h-3.16a.53.53 0 0 1-.529-.529V12m3.689 0c1.11 0 2.011-.85 2.011-1.9s-.9-1.9-2.011-1.9h-3.16a.53.53 0 0 0-.529.528v3.272m3.689 0H9.15"
    />
  </Svg>
);
export default IconlystBootstrapLight;
