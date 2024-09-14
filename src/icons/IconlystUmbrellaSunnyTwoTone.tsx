import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUmbrellaSunnyTwoTone = ({
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
      d="m20.224 3.776-.681.682m.681 8.26-.681-.682m-7.578-7.578-.682-.681M12.658 7.65a3.153 3.153 0 1 1 4.192 3.555M15.754 2.5v.015m5.759 5.732h-.027"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.138 7.402a7.42 7.42 0 0 0-7.421 7.42c1.56.071 2.338.294 3.38 1.023 3.187-1.237 4.883-1.215 8.074 0 1.12-.82 1.884-.995 3.387-1.022a7.42 7.42 0 0 0-7.42-7.421"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.138 14.94v5.112a1.448 1.448 0 1 1-2.896 0v-.268"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.138 6.029v1.373"
    />
  </Svg>
);
export default IconlystUmbrellaSunnyTwoTone;
