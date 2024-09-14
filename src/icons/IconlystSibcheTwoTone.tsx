import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSibcheTwoTone = ({
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
      d="M14.264 3.244c.87-.275 1.812-.308 2.707-.147-.324 1.157-1.016 2.26-2.084 2.86-1.016.551-2.232.64-3.358.448.04-.411.24-.782.427-1.142.486-.924 1.302-1.698 2.308-2.019"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.023 8.737c-1.042-.14-2.133-.097-3.12.293-1.65.643-2.97 2.053-3.553 3.72a6.8 6.8 0 0 0-.032 4.061c.425 1.297 1.31 2.422 2.425 3.2 1.614 1.122 3.81 1.285 5.604.51l-1.468-2.87a1 1 0 0 1-.055-.136q-.147.054-.304.079c-.535.079-1.103.055-1.6-.175a2.83 2.83 0 0 1-1.486-1.632 2.9 2.9 0 0 1 .256-2.465c.33-.523.825-.947 1.407-1.161.734-.238 1.576-.189 2.247.206.595.371 1.08.946 1.269 1.63.1.31.108.633.117.956.005.168.01.337.027.504.058.566.18 1.13.408 1.655.312.69.738 1.322 1.202 1.918 1.19-1.237 1.74-3.014 1.583-4.711-.116-2.684-2.266-5.152-4.927-5.582"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSibcheTwoTone;
