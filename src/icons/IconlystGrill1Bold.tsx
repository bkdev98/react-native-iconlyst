import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGrill1Bold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M4 3.432a.75.75 0 0 0-.75.75v2.105a8.75 8.75 0 0 0 5.159 7.982l-1.766 5.312a.75.75 0 0 0 1.424.473l.487-1.467h6.822l.49 1.468a.75.75 0 0 0 1.422-.474l-.643-1.93a1 1 0 0 0-.033-.101l-1.084-3.252a8.76 8.76 0 0 0 5.066-6.357H8.17a.75.75 0 1 1 0-1.5h12.579l.001-.154V4.182a.75.75 0 0 0-.75-.75zm5.053 13.655.771-2.322a8.8 8.8 0 0 0 2.177.273 8.8 8.8 0 0 0 2.107-.256l.768 2.305z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGrill1Bold;
