import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDashboard4Light = ({
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
      d="M19.929 17.73c-.009 0 0-.009 0-.009m-13.896 0s.009.01 0 .01M12.98 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18M12.98 3v2.25m6.365.387-1.591 1.59M6.617 5.638l1.591 1.59M3.98 12h2.476m15.525 0h-2.25"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.93 17.722a9.02 9.02 0 0 0-6.95-3.267 9.02 9.02 0 0 0-6.947 3.267M12.98 9.814v4.64"
    />
  </Svg>
);
export default IconlystDashboard4Light;
