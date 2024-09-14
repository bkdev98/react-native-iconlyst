import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarRotationTwoTone = ({
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
      d="m10.437 20.87 1.812-1.813-1.812-1.812"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.25 13.962c.566.345.937.936 1 1.595 0 1.473-2.34 2.73-5.65 3.248M4.25 13.962a2.1 2.1 0 0 0-1 1.595c0 1.934 4.03 3.5 9 3.5M14.521 9.038h1.154M8.818 9.038h1.154M6.473 6.35c3.828.542 7.714.542 11.542 0"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.475 12.22a.64.64 0 0 0 .642.643H8.39a.64.64 0 0 0 .643-.642v-.263c0-.355.287-.642.642-.642h5.146c.354 0 .642.287.642.642v.263c0 .355.287.642.642.642h1.28a.64.64 0 0 0 .643-.642V8.864c0-.52-.166-1.028-.474-1.447l-.749-1.005a1.2 1.2 0 0 1-.143-.274l-.674-1.872a1.44 1.44 0 0 0-1.11-.93 16.8 16.8 0 0 0-5.247 0c-.501.084-.937.45-1.104.93l-.674 1.872a1 1 0 0 1-.144.262l-.76 1.048a2.43 2.43 0 0 0-.463 1.428z"
    />
  </Svg>
);
export default IconlystCarRotationTwoTone;
