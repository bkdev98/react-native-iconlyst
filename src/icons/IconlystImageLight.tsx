import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageLight = ({
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
      d="M21.013 8.028v7.948c0 2.945-1.842 5.022-4.787 5.022H7.791c-2.944 0-4.777-2.077-4.777-5.022V8.028c0-2.944 1.842-5.02 4.777-5.02h8.435c2.945 0 4.787 2.076 4.787 5.02"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.766 20.996c-.653-5.339 6.784-7.997 12.247-8.328"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.842 9.78a1.697 1.697 0 1 1-3.394 0 1.697 1.697 0 0 1 3.394 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystImageLight;
