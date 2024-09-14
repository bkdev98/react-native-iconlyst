import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGenerateTextAltTwoTone = ({
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
      d="m17.957 20.825-.119-.321a4.41 4.41 0 0 0-2.604-2.608l-.32-.119.32-.119a4.41 4.41 0 0 0 2.605-2.608l.118-.32.118.32a4.41 4.41 0 0 0 2.605 2.608l.32.119-.32.119a4.41 4.41 0 0 0-2.605 2.608z"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.88 3.85c.885-1.205 2.113-.56 3.043.122.93.684 1.91 1.664 1.025 2.868L7.4 19.807c-.27.366-.673.61-1.122.676l-2.26.335a.57.57 0 0 1-.643-.473l-.354-2.256c-.07-.449.04-.907.31-1.273z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.5 20.43h.01M11.42 6.143 15.31 9"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystGenerateTextAltTwoTone;
