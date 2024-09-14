import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSolarSystemOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M13.112 11.398a.594.594 0 1 0 0 1.188.594.594 0 0 0 0-1.188m-2.094.594a2.094 2.094 0 1 1 4.188 0 2.094 2.094 0 0 1-4.188 0M16.59 7.918a.594.594 0 1 0 0 1.188.594.594 0 0 0 0-1.188m-2.093.594a2.094 2.094 0 1 1 4.188 0 2.094 2.094 0 0 1-4.188 0M4.958 13.589a.594.594 0 1 0 0 1.188.594.594 0 0 0 0-1.188m-2.094.594a2.094 2.094 0 1 1 4.188 0 2.094 2.094 0 0 1-4.188 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.102 4.239a7.76 7.76 0 0 0-7.73 8.478.75.75 0 0 1-1.493.137 9.262 9.262 0 1 1 .818 3.043.75.75 0 0 1 1.36-.632 7.762 7.762 0 1 0 7.044-11.026"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.102 7.545a4.455 4.455 0 1 0 3.89 2.281.75.75 0 1 1 1.308-.733 5.955 5.955 0 1 1-2.382-2.34.75.75 0 1 1-.71 1.32 4.43 4.43 0 0 0-2.106-.528"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSolarSystemOutline;
