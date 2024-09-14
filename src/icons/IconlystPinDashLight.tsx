import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinDashLight = ({
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
      d="M12.16 16.046c-.541 0-3.384-2.3-3.384-4.709a3.384 3.384 0 1 1 6.769 0c0 2.408-2.843 4.709-3.384 4.709"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.062 6.729a8.8 8.8 0 0 1 1.426-1.526M17.625 18.96a8.8 8.8 0 0 1-4.793 1.857 8.9 8.9 0 0 1-2.6-.19M7.099 19.236a8.87 8.87 0 0 1-3.066-3.716M3.637 9.59a8.8 8.8 0 0 0-.293 2.981M19.672 16.641a8.77 8.77 0 0 0 1.321-4.973 8.85 8.85 0 0 0-9.185-8.505M12.163 11.314v.046m.186-.036a.187.187 0 1 1-.374 0 .187.187 0 0 1 .374 0"
    />
  </Svg>
);
export default IconlystPinDashLight;
