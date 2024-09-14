import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilterObjectsTwoTone = ({
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
      d="M8.87 13.98H5.75c-1.087 0-1.77.771-1.77 1.86v2.94c0 1.09.68 1.86 1.77 1.86h3.12c1.092 0 1.77-.77 1.77-1.86v-2.94c0-1.089-.678-1.86-1.77-1.86"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.403 13.732a3.577 3.577 0 1 1-.001 7.155 3.577 3.577 0 0 1 0-7.155M9.618 9.844h5.82a.828.828 0 0 0 .719-1.238l-2.891-5.075a.829.829 0 0 0-1.437-.004L8.9 8.602a.828.828 0 0 0 .717 1.242"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFilterObjectsTwoTone;
