import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBloggerSquareLight = ({
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
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.757 7.002c-.73.008-1.27-.019-2.001.018-.872.073-1.736.49-2.253 1.208-.357.483-.516 1.09-.504 1.686.006 1.389-.01 2.778.008 4.168.064 1.514 1.39 2.84 2.903 2.908 1.332.019 2.665.005 3.997.007 1.223.008 2.39-.794 2.851-1.923.383-.903.19-1.904.236-2.856-.039-.423.13-.942-.21-1.278-.335-.351-1.097-.014-1.438-.352-.264-.27-.241-.679-.265-1.028-.026-.672-.366-1.31-.876-1.742-.672-.575-1.572-.833-2.448-.816M10.038 10.133h1.816M10.038 13.73h3.344"
    />
  </Svg>
);
export default IconlystBloggerSquareLight;
