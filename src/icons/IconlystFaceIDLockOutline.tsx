import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFaceIDLockOutline = ({
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
      d="M8.399 22.033H7.142a4.65 4.65 0 0 1-4.643-4.642v-1.576a.75.75 0 1 1 1.5 0v1.576a3.146 3.146 0 0 0 3.143 3.142h1.257a.75.75 0 0 1 0 1.5M17.358 22.033H16.07a.75.75 0 0 1 0-1.5h1.29a3.146 3.146 0 0 0 3.142-3.142v-1.576a.75.75 0 1 1 1.5 0v1.576a4.65 4.65 0 0 1-4.643 4.642M3.249 9.502a.75.75 0 0 1-.75-.75V7.175a4.65 4.65 0 0 1 4.643-4.642h1.289a.75.75 0 0 1 0 1.5H7.142a3.146 3.146 0 0 0-3.143 3.142v1.577a.75.75 0 0 1-.75.75M21.249 9.502a.75.75 0 0 1-.75-.75V7.175a3.145 3.145 0 0 0-3.143-3.142h-1.257a.75.75 0 0 1 0-1.5h1.257a4.65 4.65 0 0 1 4.643 4.642v1.577a.75.75 0 0 1-.75.75M14.059 17.543h-3.621a2.55 2.55 0 0 1-2.548-2.547V12.96a2.55 2.55 0 0 1 2.548-2.547h3.62a2.55 2.55 0 0 1 2.548 2.547v2.033a2.55 2.55 0 0 1-2.547 2.551m-3.621-5.627A1.05 1.05 0 0 0 9.39 12.96v2.033a1.05 1.05 0 0 0 1.048 1.047h3.62a1.05 1.05 0 0 0 1.048-1.047V12.96a1.05 1.05 0 0 0-1.047-1.047z"
    />
    <Path
      fill={props.color}
      d="M14.412 11.948a.75.75 0 0 1-.75-.75v-1.29a1.424 1.424 0 0 0-1.43-1.385 1.406 1.406 0 0 0-1.393 1.389v1.285a.75.75 0 1 1-1.5 0v-1.3a2.9 2.9 0 0 1 4.938-2.042c.551.538.87 1.272.885 2.043v1.3a.75.75 0 0 1-.75.75"
    />
  </Svg>
);
export default IconlystFaceIDLockOutline;
