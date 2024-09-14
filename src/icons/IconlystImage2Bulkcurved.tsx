import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImage2Bulkcurved = ({
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
      d="M6.726 15.23c1.185-.556 2.143-.212 3.07.122.699.252 1.423.512 2.424.512.778 0 1.237-.687 1.9-1.82.66-1.128 1.481-2.53 3.139-2.53 2.304 0 3.732 1.452 4.7 2.523.025-.458.041-.932.041-1.433 0-7.199-2.552-9.75-9.75-9.75S2.5 5.405 2.5 12.604c0 2.685.356 4.723 1.176 6.224.516-1.017 1.638-2.935 3.05-3.598"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.482 15.736a17 17 0 0 1-.47-.511c-.884-.985-1.985-2.212-3.753-2.212-.744 0-1.193.676-1.843 1.788-.67 1.143-1.5 2.564-3.196 2.564-1.263 0-2.188-.333-2.932-.602-.876-.316-1.328-.456-1.923-.175-1.132.532-2.268 2.678-2.61 3.46-.02.048-.051.087-.08.129 1.537 1.539 3.975 2.177 7.576 2.177 5.959 0 8.727-1.758 9.506-6.444a.74.74 0 0 1-.275-.174"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M11.35 9.388a2.264 2.264 0 0 0-2.262-2.26 2.264 2.264 0 0 0-2.26 2.26 2.264 2.264 0 0 0 2.26 2.26 2.264 2.264 0 0 0 2.261-2.26"
    />
  </Svg>
);
export default IconlystImage2Bulkcurved;