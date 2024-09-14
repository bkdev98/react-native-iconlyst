import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWcBroken = ({
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
      d="M12 4.174h5.933C20.44 4.174 22 5.944 22 8.447v7.104c0 2.504-1.56 4.274-4.068 4.274H6.067C3.56 19.825 2 18.055 2 15.55V8.447c0-2.503 1.568-4.273 4.067-4.273h2.167"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.794 10.452a2.188 2.188 0 1 0-3.095 3.095c.855.855 2.24.855 3.095 0M6.207 9.926l1.385 4.148 1.573-4.148 1.573 4.148 1.385-4.148"
    />
  </Svg>
);
export default IconlystWcBroken;
