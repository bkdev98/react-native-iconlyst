import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDashboard4Broken = ({
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
      d="M12.23 21a9 9 0 1 1 3.203-.587m3.746-2.683c-.009 0 0-.009 0-.009m-13.896 0s.009.01 0 .01M12.23 3v2.25m6.365.387-1.591 1.59M5.867 5.638l1.591 1.59M3.23 12h2.476m15.525 0h-2.25"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.179 17.722a9.02 9.02 0 0 0-6.948-3.267M8.866 15.106a9.1 9.1 0 0 0-3.583 2.617M12.23 9.814v4.64"
    />
  </Svg>
);
export default IconlystDashboard4Broken;
