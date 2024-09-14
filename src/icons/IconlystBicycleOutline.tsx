import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBicycleOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M6.918 13.425a2.918 2.918 0 1 0 0 5.837 2.918 2.918 0 0 0 0-5.837M2.5 16.344a4.418 4.418 0 1 1 8.837 0 4.418 4.418 0 0 1-8.837 0M17.582 13.425a2.918 2.918 0 1 0 0 5.837 2.918 2.918 0 0 0 0-5.837m-4.419 2.919a4.418 4.418 0 1 1 8.837 0 4.418 4.418 0 0 1-8.837 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.07 10.868a.75.75 0 0 1 .75-.75h7.119a.75.75 0 0 1 0 1.5H9.554c-.036.767-.142 1.506-.403 2.241-.35.98-.955 1.9-1.938 2.87a.75.75 0 0 1-1.054-1.067c.86-.849 1.32-1.583 1.578-2.306.261-.732.333-1.508.333-2.488"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.75 5.464a.75.75 0 0 1-.397.984l-1.697.722 2.644 8.81a.75.75 0 1 1-1.437.431l-2.836-9.453a.75.75 0 0 1 .425-.906l2.314-.985a.75.75 0 0 1 .984.397M5.071 8.279a.75.75 0 0 1 .75-.75H8.57a.75.75 0 0 1 0 1.5H5.82a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.491 7.673a.75.75 0 0 1 1.048.163l1.891 2.59a.75.75 0 1 1-1.211.885L6.328 8.72a.75.75 0 0 1 .163-1.048"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBicycleOutline;
