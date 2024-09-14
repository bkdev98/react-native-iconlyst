import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwapSquareVerticalOutline = ({
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
      d="M8.887 14.468a.75.75 0 0 1-.002 1.06l-2.474 2.467 2.475 2.475a.75.75 0 1 1-1.06 1.06l-3.007-3.006a.75.75 0 0 1 .001-1.061l3.006-2.997a.75.75 0 0 1 1.06.002M15.124 2.47a.75.75 0 0 1 1.06 0l2.998 2.997a.75.75 0 0 1 0 1.06l-2.997 2.997a.75.75 0 1 1-1.061-1.06l2.467-2.467-2.467-2.467a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.652 11.25a.75.75 0 0 1 .75.75v1.89a4.854 4.854 0 0 1-4.854 4.854H5.35a.75.75 0 0 1 0-1.5h9.198a3.354 3.354 0 0 0 3.354-3.354V12a.75.75 0 0 1 .75-.75M9.454 6.746A3.354 3.354 0 0 0 6.1 10.1v1.899a.75.75 0 0 1-1.5 0V10.1a4.854 4.854 0 0 1 4.854-4.854h9.198a.75.75 0 0 1 0 1.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSwapSquareVerticalOutline;
