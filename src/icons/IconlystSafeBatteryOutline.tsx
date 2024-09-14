import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSafeBatteryOutline = ({
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
      d="M10.593 21.747a4.75 4.75 0 0 1-3.45-1.266 4.94 4.94 0 0 1-1.309-3.6V9.56c0-3.006 1.832-4.873 4.78-4.873h3.35a4.513 4.513 0 0 1 4.854 4.874v.7a.75.75 0 0 1-1.5 0v-.7a3.034 3.034 0 0 0-3.354-3.374h-3.35c-2.71 0-3.28 1.835-3.28 3.374v7.319a3.5 3.5 0 0 0 .868 2.537 3.08 3.08 0 0 0 2.41.828h1.092a.75.75 0 0 1 0 1.5h-1.11"
    />
    <Path
      fill={props.color}
      d="M15.262 6.342a.75.75 0 0 1-.75-.75v-.8c0-.61-.1-1.044-1.35-1.044h-1.71c-1.215 0-1.31.433-1.31 1.044v.792a.75.75 0 0 1-1.5 0v-.792c0-1.16.488-2.544 2.81-2.544h1.708c2.356 0 2.85 1.384 2.85 2.544v.8a.75.75 0 0 1-.748.75M15.484 20.323a3.87 3.87 0 0 1-2.387-.861 5.58 5.58 0 0 1-1.987-3.716 11.7 11.7 0 0 1 .206-4.148.75.75 0 0 1 .635-.527 11.7 11.7 0 0 1 4.117.553 5.59 5.59 0 0 1 3.29 2.632 3.88 3.88 0 0 1-1.145 4.992 4.27 4.27 0 0 1-2.729 1.075m-2.837-7.77a11 11 0 0 0-.049 3c.1 1.058.61 2.034 1.418 2.722a2.4 2.4 0 0 0 3.238-.182 2.4 2.4 0 0 0 .771-3.151 4.1 4.1 0 0 0-2.418-1.891 10.9 10.9 0 0 0-2.956-.497z"
    />
    <Path
      fill={props.color}
      d="M19.16 21.121a.75.75 0 0 1-.4-.115 8.74 8.74 0 0 1-3.186-3.81.753.753 0 0 1 1.4-.554 7.3 7.3 0 0 0 2.59 3.094.75.75 0 0 1-.4 1.385z"
    />
  </Svg>
);
export default IconlystSafeBatteryOutline;
