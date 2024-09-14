import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongsSlideOutline = ({
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
      d="M15.195 20.77h-5.94a3.855 3.855 0 0 1-3.85-3.851v-9.8a3.855 3.855 0 0 1 3.85-3.851h5.94a3.855 3.855 0 0 1 3.851 3.85v9.8a3.856 3.856 0 0 1-3.85 3.852m-5.94-16a2.353 2.353 0 0 0-2.35 2.35v9.8a2.353 2.353 0 0 0 2.35 2.352h5.94a2.354 2.354 0 0 0 2.351-2.351v-9.8a2.354 2.354 0 0 0-2.35-2.351z"
    />
    <Path
      fill={props.color}
      d="M11.675 16.224a2.476 2.476 0 1 1 0-4.952 2.476 2.476 0 0 1 0 4.952m0-3.453a.976.976 0 1 0 0 1.956.976.976 0 0 0 0-1.957zM3.25 17.304a.75.75 0 0 1-.75-.75V7.486a.75.75 0 1 1 1.5 0v9.068a.75.75 0 0 1-.75.75M21.25 17.304a.75.75 0 0 1-.75-.75V7.486a.75.75 0 1 1 1.5 0v9.068a.75.75 0 0 1-.75.75"
    />
    <Path
      fill={props.color}
      d="M13.4 14.499a.75.75 0 0 1-.75-.75V8.572a.75.75 0 0 1 1.45-.269 1.66 1.66 0 0 0 1.1.947.75.75 0 0 1-.3 1.47 2.8 2.8 0 0 1-.757-.269v3.3a.75.75 0 0 1-.743.748"
    />
  </Svg>
);
export default IconlystSongsSlideOutline;
