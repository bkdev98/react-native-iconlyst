import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKeyboard3Light = ({
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
      d="M16.229 19.105H7.762c-2.946 0-4.772-1.643-4.762-4.663V9.567c0-3.02 1.824-4.672 4.77-4.672h8.459c2.937 0 4.771 1.68 4.771 4.748v4.8c0 3.02-1.834 4.662-4.771 4.662M14.823 15.395H9.178"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.87 8.863V8.84m0-.117a.116.116 0 1 0 0 .232.116.116 0 0 0 0-.232M13.703 8.863V8.84m0-.117a.116.116 0 1 0 0 .232.116.116 0 0 0 0-.232M10.287 8.863V8.84m0-.117a.116.116 0 1 0 0 .232.116.116 0 0 0 0-.232M17.12 8.863V8.84m0-.117a.116.116 0 1 0-.001.232.116.116 0 0 0 0-.232M11.995 11.741v-.022m0-.117a.116.116 0 1 0 0 .232.116.116 0 0 0 0-.232M8.579 11.741v-.022m0-.117a.116.116 0 1 0 0 .232.116.116 0 0 0 0-.232M15.411 11.741v-.022m0-.117a.116.116 0 1 0 0 .232.116.116 0 0 0 0-.232"
    />
  </Svg>
);
export default IconlystKeyboard3Light;