import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCableKeyboradLight = ({
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
      d="M7.951 2.992a1.25 1.25 0 0 0 1.263 1.239h.976a1.94 1.94 0 0 1 1.954 1.914v.622M16.229 20.984H7.762C4.816 20.984 2.99 19.34 3 16.32v-4.875c0-3.02 1.824-4.673 4.77-4.673h8.459c2.937 0 4.771 1.682 4.771 4.749v4.8c0 3.02-1.834 4.662-4.771 4.662M14.823 17.273H9.178"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.87 10.741v-.022m0-.117a.116.116 0 1 0 0 .232.116.116 0 0 0 0-.232M13.702 10.741v-.022m0-.117a.116.116 0 1 0 0 .232.116.116 0 0 0 0-.232M10.288 10.741v-.022m0-.117a.116.116 0 1 0 0 .232.116.116 0 0 0 0-.232M17.12 10.741v-.022m0-.117a.116.116 0 1 0 0 .232.116.116 0 0 0 0-.232M11.995 13.62v-.022m0-.118a.116.116 0 1 0 0 .233.116.116 0 0 0 0-.232M8.579 13.62v-.022m0-.118a.116.116 0 1 0 0 .233.116.116 0 0 0 0-.232M15.411 13.62v-.022m0-.118a.116.116 0 1 0 0 .233.116.116 0 0 0 0-.232"
    />
  </Svg>
);
export default IconlystCableKeyboradLight;
