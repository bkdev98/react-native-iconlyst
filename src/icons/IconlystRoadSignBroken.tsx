import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRoadSignBroken = ({
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
      d="m12.246 21 .002-3M12.254 5V3M12.25 13l.002-3M13.814 5h-6.74a1 1 0 0 0-.745.333L4.985 6.835a1 1 0 0 0 0 1.334L6.33 9.67a1 1 0 0 0 .745.333l10.68.002a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-.607M6.746 18.002a1 1 0 0 1-1-1v-3.004a1 1 0 0 1 1-1l10.68-.002a1 1 0 0 1 .745.333l1.344 1.502a1 1 0 0 1 0 1.334l-1.344 1.502a1 1 0 0 1-.745.333l-7.47.001"
    />
  </Svg>
);
export default IconlystRoadSignBroken;
