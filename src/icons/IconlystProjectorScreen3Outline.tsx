import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystProjectorScreen3Outline = ({
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
      d="M18.631 17.8H5.868A3.29 3.29 0 0 1 2.5 14.3V9.944a3.29 3.29 0 0 1 3.368-3.505h4.8a.75.75 0 1 1 0 1.5h-4.8A1.8 1.8 0 0 0 4 9.944V14.3a1.8 1.8 0 0 0 1.868 2h12.763a1.8 1.8 0 0 0 1.87-2V9.944a1.8 1.8 0 0 0-1.87-2.005h-1.333a.75.75 0 0 1 0-1.5h1.333a3.29 3.29 0 0 1 3.37 3.505V14.3a3.29 3.29 0 0 1-3.37 3.5"
    />
    <Path
      fill={props.color}
      d="M6.482 19.189a.751.751 0 0 1-.722-.955l.393-1.385a.751.751 0 1 1 1.444.41l-.393 1.386a.75.75 0 0 1-.722.544M18.018 19.188a.75.75 0 0 1-.722-.545l-.392-1.386a.75.75 0 0 1 1.444-.408l.392 1.385a.747.747 0 0 1-.722.954M6.65 12.868a.75.75 0 0 1-.75-.75V10.67a.75.75 0 1 1 1.5 0v1.448a.75.75 0 0 1-.75.75M13.984 14.713a4.951 4.951 0 1 1-.002-9.903 4.951 4.951 0 0 1 .002 9.903m0-8.4a3.45 3.45 0 1 0-.002 6.903 3.45 3.45 0 0 0 .002-6.904"
    />
    <Path
      fill={props.color}
      d="M13.985 12.142a2.38 2.38 0 0 1-2.38-2.38.75.75 0 1 1 1.5 0 .88.88 0 1 0 .88-.879.75.75 0 1 1 0-1.5 2.38 2.38 0 1 1 0 4.76"
    />
  </Svg>
);
export default IconlystProjectorScreen3Outline;
