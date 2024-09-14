import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsBigArrowUpLight = ({
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
      d="m11.296 3.316.56.498zm-6.132 6.899-.56-.499zm.352.783v-.75zm3.66 0h.75a.75.75 0 0 0-.75-.75zm0 5.609h-.75zm.94.941v.75zm3.767 0v-.75zm.942-.941h-.75zm0-5.609v-.75a.75.75 0 0 0-.75.75zm3.659 0v.75zm.352-.783-.56.498zm-6.132-6.899.56-.498zm-1.968-.498L4.604 9.716l1.12.997 6.133-6.899zm-5.22 8.93h3.66v-1.5h-3.66zm2.91-.75v5.609h1.5v-5.609zm1.69 7.3h3.767v-1.5h-3.766zm5.459-1.691v-5.609h-1.5v5.609zm-.75-4.859h3.659v-1.5h-3.66zm4.571-2.032-6.132-6.898-1.12.996 6.131 6.899zm-.912 2.032c1.053 0 1.612-1.244.912-2.032l-1.12.997a.28.28 0 0 1 .208-.465zm-4.601 6.55c.934 0 1.692-.757 1.692-1.691h-1.5a.19.19 0 0 1-.192.191zm-5.458-1.691c0 .934.758 1.691 1.692 1.691v-1.5a.19.19 0 0 1-.192-.191zm-3.821-6.89c-.7.787-.141 2.031.912 2.031v-1.5a.28.28 0 0 1 .209.465zm7.253-5.903a.192.192 0 0 1 .286 0l1.121-.996a1.69 1.69 0 0 0-2.528 0z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M9.193 21h5.614"
    />
  </Svg>
);
export default IconlystArrowsBigArrowUpLight;
