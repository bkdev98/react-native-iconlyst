import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiSquareSparkAddOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M3.69 4.344c.95-1.021 2.305-1.592 3.903-1.592h5.297a.75.75 0 0 1 0 1.5H7.593c-1.226 0-2.168.43-2.807 1.115-.644.69-1.036 1.704-1.036 2.962v7.633c0 1.26.39 2.272 1.034 2.964.637.685 1.578 1.114 2.809 1.114h8.099c1.23 0 2.173-.43 2.81-1.115.644-.69 1.035-1.704 1.035-2.963v-4.83a.75.75 0 0 1 1.5 0v4.83c0 1.569-.491 2.97-1.437 3.986-.951 1.021-2.306 1.592-3.908 1.592h-8.1c-1.6 0-2.956-.57-3.907-1.593-.945-1.015-1.435-2.416-1.435-3.985V8.329c0-1.57.493-2.97 1.44-3.985"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.664 2.46a.75.75 0 0 1 .75.75v1.587H21a.75.75 0 0 1 0 1.5h-1.586v1.586a.75.75 0 0 1-1.5 0V6.297h-1.586a.75.75 0 0 1 0-1.5h1.586V3.21a.75.75 0 0 1 .75-.75M8.938 14.42a.75.75 0 0 1-.703-.49l-.101-.274a3.01 3.01 0 0 0-1.779-1.781l-.273-.101a.75.75 0 0 1 0-1.407l.273-.101a3.01 3.01 0 0 0 1.779-1.782l.1-.273a.75.75 0 0 1 1.408 0l.101.273a3.01 3.01 0 0 0 1.779 1.782l.273.1a.75.75 0 0 1 0 1.408l-.273.1a3.01 3.01 0 0 0-1.779 1.782l-.101.274a.75.75 0 0 1-.704.49m.95-3.35a4.5 4.5 0 0 1-.95-.95 4.5 4.5 0 0 1-.948.95c.361.268.681.588.948.95.268-.362.587-.682.95-.95M15.152 16.28a.75.75 0 0 1-.718-.533 1.02 1.02 0 0 0-.678-.679.75.75 0 0 1 0-1.435 1.02 1.02 0 0 0 .678-.679.75.75 0 0 1 1.435 0c.1.326.354.58.678.68a.75.75 0 0 1 0 1.434 1.02 1.02 0 0 0-.678.68.75.75 0 0 1-.717.531"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAiSquareSparkAddOutline;
