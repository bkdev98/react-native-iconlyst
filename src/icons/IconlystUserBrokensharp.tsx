import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserBrokensharp = ({
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
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M12.232 20.575c-2.398.005-4.645-.443-6.554-1.606.948-2.999 3.52-4.387 6.554-4.379 3.03-.008 5.606 1.384 6.553 4.379-1.019.621-2.134 1.038-3.317 1.291M6.845 13.74c-2.125-.005-3.931.97-4.595 3.07q.545.33 1.137.556M17.656 13.74c2.124-.005 3.93.97 4.594 3.07a7 7 0 0 1-1.225.589M12.983 3.425a4.1 4.1 0 1 1-3.39.913M17.656 5.867a2.88 2.88 0 0 1 0 5.76M6.845 5.867a2.88 2.88 0 1 0 0 5.76"
    />
  </Svg>
);
export default IconlystUserBrokensharp;
