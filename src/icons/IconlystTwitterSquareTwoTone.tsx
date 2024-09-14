import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTwitterSquareTwoTone = ({
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
      d="M7.782 3h8.435C19.165 3 21 5.081 21 8.026v7.948C21 18.919 19.165 21 16.216 21H7.782C4.834 21 3 18.919 3 15.974V8.026C3 5.081 4.843 3 7.782 3"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.934 8.54 1.336-.088-.922 1.441c.237 3.762-1.856 6.72-5.619 6.958-1.079.068-3.04-.13-3.999-1.286a5.05 5.05 0 0 0 3.026-.89c-1.846-1.035-3.077-2.853-2.448-6.6a7.73 7.73 0 0 0 4.49 2.244c-.113-.89.378-2.331 1.6-2.703 1.508-.457 2.536.924 2.536.924"
    />
  </Svg>
);
export default IconlystTwitterSquareTwoTone;
