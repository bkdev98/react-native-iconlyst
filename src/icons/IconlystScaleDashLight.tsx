import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScaleDashLight = ({
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
      d="M21.186 19.068v-3.081a2.1 2.1 0 0 0-2.1-2.1h-3.082c-1.159 0-2.1.94-2.1 2.1v3.081c0 1.16.941 2.1 2.1 2.1h3.082a2.1 2.1 0 0 0 2.1-2.1"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.186 10.709V8.452M3.186 8.646v2.063M3.186 13.627v2.248M10.726 3.168H8.469M8.652 21.168h2.073M15.707 3.168h-2.062M5.453 3.81a4.02 4.02 0 0 0-1.683 1.8M20.515 5.445a4.17 4.17 0 0 0-1.751-1.732M3.848 18.881a4.25 4.25 0 0 0 1.751 1.742"
    />
  </Svg>
);
export default IconlystScaleDashLight;
