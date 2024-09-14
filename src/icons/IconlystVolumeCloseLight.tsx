import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeCloseLight = ({
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
      d="M6.434 7.49c.38 0 .826-.106 1.149-.309l2.78-1.738c1.669-1.042 3.706.21 3.823 2.153a60.5 60.5 0 0 1 0 8.81c-.101 1.94-2.154 3.195-3.824 2.152L7.583 16.82c-.323-.202-.763-.31-1.144-.31-1.425-.106-1.882.061-2.668-.587C2.939 15.227 3 13.366 3 12c0-1.364-.064-3.226.77-3.922.78-.65 1.245-.482 2.663-.587"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m20.996 10.327-3.345 3.344m3.349.005-3.35-3.35"
    />
  </Svg>
);
export default IconlystVolumeCloseLight;
