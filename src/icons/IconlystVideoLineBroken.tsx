import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoLineBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.085 21H7.867c-2.948 0-4.783-2.08-4.783-5.026V8.026C3.084 5.081 4.919 3 7.868 3h8.434c2.948 0 4.782 2.08 4.782 5.026v7.948c0 2.945-1.843 5.026-4.782 5.026h-.83M7.516 16.277h3.892M3.09 7.712h17.987m-12.126 0V3m6.266 4.711V5.513"
    />
  </Svg>
);
export default IconlystVideoLineBroken;
