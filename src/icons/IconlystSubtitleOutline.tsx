import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSubtitleOutline = ({
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
      d="M3.857 4.413c1.001-.955 2.4-1.405 4.002-1.405h8.46c1.606 0 3.005.45 4.004 1.406 1.004.961 1.508 2.342 1.503 4.003v7.159c0 1.661-.506 3.043-1.51 4.006-1 .959-2.398 1.41-4.006 1.41H7.86c-1.608 0-3.008-.461-4.008-1.434-1.003-.977-1.51-2.376-1.51-4.06V8.417c0-1.663.509-3.042 1.515-4.003m1.036 1.085c-.644.615-1.051 1.564-1.051 2.918V15.5c0 1.381.41 2.354 1.056 2.984.65.632 1.635 1.01 2.961 1.01h8.45c1.336 0 2.32-.373 2.969-.994.643-.616 1.048-1.568 1.048-2.923V8.414c.004-1.355-.4-2.303-1.04-2.917-.646-.618-1.631-.99-2.968-.99H7.86c-1.331 0-2.317.372-2.966.991"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.537 15.832a.75.75 0 0 1 .75-.75h2.21a.75.75 0 0 1 0 1.5h-2.21a.75.75 0 0 1-.75-.75m7.655 0a.75.75 0 0 1 .75-.75h1.939a.75.75 0 0 1 0 1.5h-1.94a.75.75 0 0 1-.75-.75M6.598 12.375a.75.75 0 0 1 .75-.75h1.654a.75.75 0 0 1 0 1.5H7.348a.75.75 0 0 1-.75-.75m4.359 0a.75.75 0 0 1 .75-.75h2.34a.75.75 0 0 1 0 1.5h-2.34a.75.75 0 0 1-.75-.75M11.31 15.832a.75.75 0 0 1 .75-.75h.01a.75.75 0 1 1 0 1.5h-.01a.75.75 0 0 1-.75-.75M16.086 12.375a.75.75 0 0 1 .75-.75h.01a.75.75 0 1 1 0 1.5h-.01a.75.75 0 0 1-.75-.75M2.334 8.574a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5h-18a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSubtitleOutline;
