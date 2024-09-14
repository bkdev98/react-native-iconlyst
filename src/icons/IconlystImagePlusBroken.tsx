import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImagePlusBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.178 3.041h-5.42c-.184 0-.359.01-.534.02C4.612 3.303 3 5.294 3 8.042v7.915c0 2.748 1.602 4.739 4.224 4.982.175.01.35.02.535.02h8.4c.156 0 .32-.01.467-.02 2.66-.213 4.302-2.205 4.302-4.982v-5.07"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.46 16.332 1.483-1.566a1.36 1.36 0 0 1 1.924-.058l.91.924c.538.549 1.419.558 1.968.02.036-.036 2.267-2.74 2.267-2.74a1.64 1.64 0 0 1 2.306-.224c.046.04 2.154 2.202 2.154 2.202"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.346 9.247a1.704 1.704 0 1 1-3.407 0 1.704 1.704 0 0 1 3.407 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.57 3.116v4.856M21 5.546h-4.856"
    />
  </Svg>
);
export default IconlystImagePlusBroken;
