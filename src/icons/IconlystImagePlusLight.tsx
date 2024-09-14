import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImagePlusLight = ({
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
      d="M10.842 9.78a1.697 1.697 0 1 1-3.394 0 1.697 1.697 0 0 1 3.394 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.859 10.962v4.983c0 2.921-1.829 4.982-4.75 4.982H7.74c-2.921 0-4.74-2.06-4.74-4.982V8.059c0-2.922 1.828-4.98 4.74-4.98h5.467M18.58 3.145v4.837M21 5.564h-4.838"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.702 20.923c-.647-5.297 6.731-7.935 12.15-8.263"
    />
  </Svg>
);
export default IconlystImagePlusLight;