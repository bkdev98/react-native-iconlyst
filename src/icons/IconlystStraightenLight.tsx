import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStraightenLight = ({
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
      d="m18.883 8.855-1.05-3.918a3.36 3.36 0 0 0-4.115-2.376L5.586 4.739A3.36 3.36 0 0 0 3.21 8.855M20.568 15.145a3.36 3.36 0 0 1-2.376 4.115L10.06 21.44a3.36 3.36 0 0 1-4.116-2.376l-1.05-3.918M15.7 12h-2.097M21 12h-2.097M10.398 12H8.3M5.097 12H3"
    />
  </Svg>
);
export default IconlystStraightenLight;
