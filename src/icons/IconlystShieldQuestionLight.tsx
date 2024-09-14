import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldQuestionLight = ({
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
      d="M12 21.453s7.324-2.218 7.324-8.331.266-6.587-.322-7.18c-.59-.593-6.041-2.49-7.002-2.49s-6.413 1.902-7.002 2.49-.321 1.066-.321 7.18S12 21.452 12 21.452"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.789 15.964v.007M11.787 13.833c-.01-.778.697-1.108 1.223-1.408.642-.354 1.077-.917 1.077-1.698a2.085 2.085 0 0 0-2.086-2.088 2.08 2.08 0 0 0-2.087 2.088"
    />
  </Svg>
);
export default IconlystShieldQuestionLight;
