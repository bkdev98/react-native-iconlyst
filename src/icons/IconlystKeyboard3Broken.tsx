import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKeyboard3Broken = ({
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
      d="M16.729 4.895c2.937 0 4.771 1.68 4.771 4.748v4.8c0 3.02-1.834 4.662-4.771 4.662H8.262c-2.946 0-4.772-1.643-4.762-4.663V9.567c0-3.02 1.824-4.672 4.77-4.672h5.388M15.323 15.395H9.678"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.37 8.863V8.84m0-.117a.116.116 0 1 0 0 .232.116.116 0 0 0 0-.232M14.203 8.863V8.84m0-.117a.116.116 0 1 0 0 .232.116.116 0 0 0 0-.232M10.787 8.863V8.84m0-.117a.116.116 0 1 0 0 .232.116.116 0 0 0 0-.232M17.62 8.863V8.84m0-.117a.116.116 0 1 0-.001.232.116.116 0 0 0 0-.232M12.495 11.741v-.022m0-.117a.116.116 0 1 0 0 .232.116.116 0 0 0 0-.232M9.079 11.741v-.022m0-.117a.116.116 0 1 0 0 .232.116.116 0 0 0 0-.232M15.911 11.741v-.022m0-.117a.116.116 0 1 0 0 .232.116.116 0 0 0 0-.232"
    />
  </Svg>
);
export default IconlystKeyboard3Broken;
