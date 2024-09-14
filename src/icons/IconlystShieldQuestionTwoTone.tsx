import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldQuestionTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 21.453s7.324-2.217 7.324-8.33c0-6.114.266-6.587-.322-7.18-.59-.594-6.041-2.49-7.002-2.49s-6.413 1.901-7.002 2.49c-.588.588-.321 1.065-.321 7.18 0 6.114 7.323 8.33 7.323 8.33"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.789 15.965v.007M11.787 13.834c-.01-.778.697-1.108 1.223-1.409.642-.354 1.077-.916 1.077-1.698a2.085 2.085 0 0 0-2.086-2.087 2.08 2.08 0 0 0-2.087 2.087"
    />
  </Svg>
);
export default IconlystShieldQuestionTwoTone;
