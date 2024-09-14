import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudConnectedOutline = ({
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
      d="M11.96 18.927a2.57 2.57 0 0 1 2.57-2.572h4.9a2.57 2.57 0 1 1 0 5.14h-4.9a2.57 2.57 0 0 1-2.57-2.568m2.57-1.072a1.07 1.07 0 1 0 0 2.14h4.9a1.07 1.07 0 0 0 0-2.14z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.959 15.286a2.57 2.57 0 0 1 2.57-2.571h4.9a2.57 2.57 0 0 1 0 5.14h-4.9a2.57 2.57 0 0 1-2.57-2.569m2.57-1.071a1.07 1.07 0 1 0 0 2.14h4.9a1.07 1.07 0 1 0 0-2.14zM5.941 3.96C6.556 3.15 7.543 2.5 8.948 2.5s2.393.649 3.007 1.46c.41.54.656 1.155.77 1.706a3.3 3.3 0 0 1 1.679.842c.631.602.992 1.457.992 2.465a3.37 3.37 0 0 1-2.012 3.088c-.481.193-.959.266-1.338.266h-6.2a3.6 3.6 0 0 1-1.362-.281A3.37 3.37 0 0 1 2.5 8.973c0-1.008.361-1.863.993-2.465a3.3 3.3 0 0 1 1.68-.842c.113-.55.36-1.165.768-1.705m1.197.906c-.387.511-.54 1.126-.54 1.486a.75.75 0 0 1-.744.75c-.552.004-1.011.19-1.326.49C4.22 7.888 4 8.338 4 8.973c0 .752.445 1.404 1.089 1.7.284.114.563.155.757.155h6.2c.197 0 .477-.04.766-.152a1.87 1.87 0 0 0 1.084-1.702c0-.636-.22-1.086-.528-1.38-.314-.3-.773-.487-1.325-.492a.75.75 0 0 1-.744-.75c0-.359-.153-.974-.54-1.485C10.395 4.385 9.832 4 8.95 4c-.884 0-1.448.385-1.811.866"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.504 10.828a.75.75 0 0 1 .75.75v5.302c0 .746.604 1.35 1.35 1.35h2.107a.75.75 0 1 1 0 1.5h-2.107a2.85 2.85 0 0 1-2.85-2.85v-5.302a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.762 15.21a.75.75 0 0 1 .75-.75h4.159a.75.75 0 0 1 0 1.5H8.51a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudConnectedOutline;
