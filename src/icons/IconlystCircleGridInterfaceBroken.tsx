import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCircleGridInterfaceBroken = ({
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
      d="M4.161 13.493a2.11 2.11 0 1 1 2.985 0M20.839 10.51a2.11 2.11 0 1 0 0 2.984M14.667 20.102a3.065 3.065 0 1 0-3.09.756M10.333 3.897a3.065 3.065 0 1 0 2.714-.848"
    />
  </Svg>
);
export default IconlystCircleGridInterfaceBroken;
