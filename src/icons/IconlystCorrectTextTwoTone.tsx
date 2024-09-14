import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCorrectTextTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.703 5.973h9.126a2.67 2.67 0 0 1 2.671 2.67v8.245a2.67 2.67 0 0 1-2.67 2.672H9.702a2.07 2.07 0 0 1-1.56-.708l-4.13-4.722a2.074 2.074 0 0 1 0-2.729l4.13-4.721c.394-.45.963-.707 1.56-.707"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.563 12.652 2.033 2.032 3.836-3.836"
    />
  </Svg>
);
export default IconlystCorrectTextTwoTone;
