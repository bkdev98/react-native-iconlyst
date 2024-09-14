import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScaleDashBroken = ({
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
      d="M16.005 21.168a2.1 2.1 0 0 1-2.1-2.1v-3.08c0-1.16.94-2.101 2.099-2.101h3.082c1.16 0 2.1.94 2.1 2.1v3.082a2.1 2.1 0 0 1-2.1 2.1M21.186 10.709V8.45M3.186 8.646v2.063M3.186 13.627v2.247M10.726 3.168H8.469M8.652 21.168h2.073M15.707 3.168h-2.062M5.453 3.809a4.02 4.02 0 0 0-1.683 1.8M20.515 5.445a4.17 4.17 0 0 0-1.751-1.732M3.848 18.88a4.26 4.26 0 0 0 1.751 1.742"
    />
  </Svg>
);
export default IconlystScaleDashBroken;
