import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwapSquareHorizontalOutline = ({
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
      d="M6.007 4.6c.2 0 .39.079.53.22l2.998 3.006a.75.75 0 1 1-1.063 1.059L6.006 6.41 3.53 8.886a.75.75 0 1 1-1.06-1.061l3.005-3.006a.75.75 0 0 1 .531-.22M14.476 15.124a.75.75 0 0 1 1.06 0l2.467 2.466 2.467-2.466a.75.75 0 1 1 1.06 1.06l-2.996 2.997a.75.75 0 0 1-1.061 0l-2.997-2.997a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.006 4.6a.75.75 0 0 1 .75.75v9.197a3.354 3.354 0 0 0 3.354 3.354H12a.75.75 0 0 1 0 1.5h-1.89a4.854 4.854 0 0 1-4.854-4.854V5.35a.75.75 0 0 1 .75-.75M11.252 5.35a.75.75 0 0 1 .75-.75H13.9a4.854 4.854 0 0 1 4.854 4.853v9.198a.75.75 0 1 1-1.5 0V9.453A3.354 3.354 0 0 0 13.9 6.1h-1.899a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSwapSquareHorizontalOutline;
