import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystItunesCircleLight = ({
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
      d="M12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.735 9.566c-1.847.376-3.695.743-5.542 1.12"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.732 12.816c-.004.245-.221.327-.42.376-.612.136-1.357.027-1.906.383a1.18 1.18 0 0 0-.532 1.053c.03.462.371.887.817 1.014.642.195 1.526-.11 1.859-.691.162-.293.194-.638.184-.967 0-1.79-.003-4.955-.005-6.325a.543.543 0 0 0-.652-.53l-4.451.902a.544.544 0 0 0-.436.534l.002 6.594c.01.329-.022.673-.184.967-.347.606-1.2.89-1.858.691a1.16 1.16 0 0 1-.818-1.014c-.025-.412.184-.831.533-1.053.548-.356 1.294-.247 1.906-.383.198-.049.416-.131.42-.376"
    />
  </Svg>
);
export default IconlystItunesCircleLight;
