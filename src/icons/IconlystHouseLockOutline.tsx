import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHouseLockOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m14.596 3.375 5.573 4.54a3.72 3.72 0 0 1 1.369 2.88v7.172a4.07 4.07 0 0 1-4.072 4.073H7.035a4.07 4.07 0 0 1-4.072-4.073v-7.172c0-1.118.503-2.174 1.368-2.88l5.574-4.54a3.71 3.71 0 0 1 4.69 0m-.948 1.163a2.21 2.21 0 0 0-2.795 0L5.279 9.077a2.22 2.22 0 0 0-.816 1.718v7.172a2.57 2.57 0 0 0 2.572 2.573h10.43a2.57 2.57 0 0 0 2.573-2.573v-7.172a2.22 2.22 0 0 0-.816-1.718z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.804 13.411a.69.69 0 0 0-.687.688v1.625c0 .38.307.687.687.687H13.7c.38 0 .687-.307.687-.687V14.1a.69.69 0 0 0-.687-.688zm-2.187.688c0-1.206.978-2.188 2.187-2.188H13.7c1.21 0 2.187.982 2.187 2.188v1.625a2.187 2.187 0 0 1-2.187 2.187h-2.895a2.187 2.187 0 0 1-2.187-2.187z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.222 9.204a2.48 2.48 0 0 1 2.508 2.448v1.041a.75.75 0 1 1-1.5 0v-1.026a.979.979 0 0 0-1.957-.005v1.031a.75.75 0 1 1-1.5 0v-1.052a2.48 2.48 0 0 1 2.449-2.437m0 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHouseLockOutline;
