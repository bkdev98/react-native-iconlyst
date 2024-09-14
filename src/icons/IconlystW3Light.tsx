import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystW3Light = ({
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
      d="m3 5.906 3.482 12.188M8.224 5.906l3.482 12.188L15.03 5.906M3 5.906l3.482 12.188 2.551-9.353M15.03 5.906H21l-2.985 5.346c1.648 0 2.985 1.532 2.985 3.421 0 1.89-1.337 3.421-2.985 3.421-1.65 0-2.986-1.531-2.986-3.42"
    />
  </Svg>
);
export default IconlystW3Light;
