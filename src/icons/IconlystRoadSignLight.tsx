import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRoadSignLight = ({
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
      d="m11.996 21 .002-3M12.004 5V3M12 13l.002-3M6.079 5.333A1 1 0 0 1 6.824 5l10.68.001a1 1 0 0 1 1 1v3.005a1 1 0 0 1-1 1l-10.68-.002a1 1 0 0 1-.745-.333L4.735 8.169a1 1 0 0 1 0-1.334zM17.921 13.33a1 1 0 0 0-.745-.334l-10.68.002a1 1 0 0 0-1 1v3.004a1 1 0 0 0 1 1L17.176 18a1 1 0 0 0 .745-.333l1.344-1.502a1 1 0 0 0 0-1.333z"
    />
  </Svg>
);
export default IconlystRoadSignLight;
