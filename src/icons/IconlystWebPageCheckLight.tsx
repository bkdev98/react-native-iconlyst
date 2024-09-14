import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageCheckLight = ({
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
      d="M20.518 12.059V8.122c0-2.86-1.78-4.88-4.643-4.88H7.686c-2.854 0-4.643 2.02-4.643 4.88v7.715c0 2.86 1.78 4.88 4.643 4.88h1.7M6.292 6.689h-.056m2.47 0H8.65m2.469 0h-.056M20.518 9.545H3.043M13.965 18.44l2.313 2.317 4.765-4.768"
    />
  </Svg>
);
export default IconlystWebPageCheckLight;
