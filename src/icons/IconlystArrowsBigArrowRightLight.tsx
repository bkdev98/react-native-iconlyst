import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsBigArrowRightLight = ({
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
      d="m20.684 12.704-.498-.56zm-6.899 6.132.499.56zm-.783-.352h-.75zm0-3.66h.75a.75.75 0 0 0-.75-.75zm-5.609 0v.75zm-.941-.94h-.75zm0-3.767h.75zm.941-.942v.75zm5.609 0v.75a.75.75 0 0 0 .75-.75zm0-3.659h.75zm.783-.352-.498.56zm6.899 6.132.498-.56zm-.498.847-6.899 6.132.997 1.121 6.898-6.132zm-6.434 6.34v-3.658h-1.5v3.659zm-.75-4.408H7.393v1.5h5.609zm-5.8-.192v-3.766h-1.5v3.766zm.191-3.958h5.609v-1.5H7.393zm6.359-.75V5.516h-1.5v3.66zm-.465-3.45 6.899 6.132.996-1.121-6.898-6.132zm.465-.209a.28.28 0 0 1-.465.209l.997-1.121c-.788-.7-2.032-.141-2.032.912zm-6.55 4.601c0-.106.085-.192.191-.192v-1.5c-.934 0-1.691.758-1.691 1.692zm.191 3.958a.19.19 0 0 1-.191-.192h-1.5c0 .934.757 1.692 1.691 1.692zm5.894 4.2a.28.28 0 0 1 .465.209h-1.5c0 1.053 1.244 1.612 2.032.912zm7.895-5.01a1.69 1.69 0 0 0 0-2.53l-.996 1.122a.192.192 0 0 1 0 .286z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M3 14.807V9.193"
    />
  </Svg>
);
export default IconlystArrowsBigArrowRightLight;
