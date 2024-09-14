import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserCheckedLight = ({
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
      d="m16.722 9.74 1.45 1.454 2.99-2.99"
    />
    <Path
      stroke={props.color}
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M5.458 19.877c-1.408 0-2.258-.913-2.318-2.185 0-2.59 2.802-3.482 7.024-3.512 4.23.04 7.039.933 7.024 3.512-.068 1.272-.913 2.185-2.318 2.185zM10.17 11.224a3.55 3.55 0 1 0 0-7.1 3.55 3.55 0 0 0 0 7.1Z"
    />
  </Svg>
);
export default IconlystUserCheckedLight;
