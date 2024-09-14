import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTagLight = ({
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
      d="M3.797 10.045c-.932.936-1.064 2.48-.305 3.553.156.221 2.364 2.421 3.277 3.333.903.901 1.997 1.346 3.27 1.348q4.054.003 8.108-.001c1.599-.001 2.838-1.22 2.845-2.816q.016-3.46 0-6.92c-.007-1.595-1.245-2.813-2.845-2.815-2.726-.004-5.452-.008-8.178 0-1.055.003-2.005.333-2.821 1.011-.652.542-2.84 2.794-3.351 3.307"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTagLight;
