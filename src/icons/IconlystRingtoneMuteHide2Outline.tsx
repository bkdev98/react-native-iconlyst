import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtoneMuteHide2Outline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.619 3.75a5.817 5.817 0 0 0-5.814 5.814v1.322c0 .886-.197 1.77-.57 2.568v.002l-.468.996a1.53 1.53 0 0 0 .42 1.844.75.75 0 1 1-.955 1.157 3.03 3.03 0 0 1-.824-3.636v-.002l.468-.994v-.002c.28-.6.43-1.267.43-1.933V9.564a7.317 7.317 0 0 1 7.313-7.314 7.23 7.23 0 0 1 5.387 2.386.75.75 0 0 1-1.116 1.002 5.73 5.73 0 0 0-4.271-1.888M18.97 8.053a.75.75 0 0 1 .871.605c.073.401.102.798.102 1.195v1.034c0 .672.146 1.329.433 1.94v.002l.459.987c.954 2.013-.521 4.316-2.74 4.316h-8.35a.75.75 0 0 1 0-1.5h8.35a1.523 1.523 0 0 0 1.384-2.175l-.003-.007-.459-.987v-.001a6.05 6.05 0 0 1-.574-2.575V9.853c0-.324-.024-.63-.078-.929a.75.75 0 0 1 .605-.87"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.726 16.632a.75.75 0 0 1 .768.732l.021.902a2.33 2.33 0 0 0 2.31 1.983 2.345 2.345 0 0 0 2.346-2.345v-.432a.75.75 0 0 1 1.5 0v.432a3.845 3.845 0 0 1-3.845 3.845 3.83 3.83 0 0 1-3.803-3.325 1 1 0 0 1-.006-.08l-.023-.944a.75.75 0 0 1 .732-.768M19.874 2.707a.75.75 0 0 1 0 1.06L4.65 18.99a.75.75 0 1 1-1.06-1.061L18.813 2.707a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRingtoneMuteHide2Outline;
