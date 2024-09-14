import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChangeTempratureLight = ({
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
      d="M3.317 3.171v.048m.189-.038a.196.196 0 1 1-.392 0 .196.196 0 0 1 .392 0M14.677 13.29v.048m.189-.038a.196.196 0 1 1-.391 0 .196.196 0 0 1 .39 0M21.114 14.134h-3.1a.5.5 0 0 0-.5.5v6.38M21.114 17.865h-3.6M17.7 7.86l1.52 1.173 1.175-1.52"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.213 8.86c-.21-3.402-1.902-5.447-4.986-5.447M6.53 16.14l-1.521-1.173-1.175 1.52"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.017 15.14c.21 3.402 1.901 5.447 4.986 5.447M5.787 4.133v6.785M10.683 4.133 5.795 8.2M10.684 10.918 7.277 7.035"
    />
  </Svg>
);
export default IconlystChangeTempratureLight;
