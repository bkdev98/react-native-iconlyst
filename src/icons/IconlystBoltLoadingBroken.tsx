import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBoltLoadingBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.596 6.77A9 9 0 0 1 7.048 5.22M18.379 19.223a9.006 9.006 0 0 1-7.523 1.694M7.666 19.497a9 9 0 0 1-3.12-3.782M4.142 9.68a9 9 0 0 0-.3 3.033M20.462 16.861a8.9 8.9 0 0 0 1.345-5.06M12.8 16.137l2.587-4h-5.143l2.584-4M12.459 3.143a9.01 9.01 0 0 1 8.565 5.31"
    />
  </Svg>
);
export default IconlystBoltLoadingBroken;
