import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLockHeartBroken = ({
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
      d="M21.121 11.914c1.022-3.186-.165-6.841-3.502-7.916a5.7 5.7 0 0 0-2.674-.189c-.893.152-1.739.769-2.465 1.314-.729-.54-1.573-1.154-2.465-1.305a5.74 5.74 0 0 0-2.672.18c-3.337 1.085-4.534 4.73-3.513 7.916 1.577 5.053 8.65 8.356 8.65 8.356s4.316-2.01 6.97-5.357"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.882 10.857a1.405 1.405 0 1 0-2.81 0 1.405 1.405 0 0 0 2.81 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.477 12.315v2.232"
    />
  </Svg>
);
export default IconlystLockHeartBroken;
