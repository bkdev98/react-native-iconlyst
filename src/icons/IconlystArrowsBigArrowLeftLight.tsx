import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsBigArrowLeftLight = ({
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
      d="m3.316 12.704.498-.56zm6.899 6.132-.499.56zm.783-.352h.75zm0-3.66v-.75a.75.75 0 0 0-.75.75zm5.609 0v.75zm.941-.94h.75zm0-3.767h-.75zm-.941-.942v.75zm-5.609 0h-.75c0 .415.336.75.75.75zm0-3.659h-.75zm-.783-.352.498.56zm-6.899 6.132-.498-.56zm-.498 1.968 6.898 6.132.997-1.12-6.899-6.133zm8.93 5.22v-3.66h-1.5v3.66zm-.75-2.91h5.609v-1.5h-5.609zm7.3-1.69v-3.767h-1.5v3.766zm-1.691-5.459h-5.609v1.5h5.609zm-4.859.75V5.516h-1.5v3.66zM9.716 4.604l-6.898 6.132.996 1.12 6.899-6.131zm2.032.912c0-1.053-1.244-1.612-2.032-.912l.997 1.12a.28.28 0 0 1-.465-.208zm6.55 4.601c0-.934-.757-1.692-1.691-1.692v1.5c.106 0 .191.086.191.192zm-1.691 5.458c.934 0 1.691-.758 1.691-1.692h-1.5a.19.19 0 0 1-.191.192zm-6.89 3.821c.787.7 2.031.141 2.031-.912h-1.5a.28.28 0 0 1 .465-.209zm-5.903-7.253a.192.192 0 0 1 0-.286l-.996-1.121a1.69 1.69 0 0 0 0 2.528z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M21 14.807V9.193"
    />
  </Svg>
);
export default IconlystArrowsBigArrowLeftLight;
