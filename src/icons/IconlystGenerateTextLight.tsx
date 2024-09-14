import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGenerateTextLight = ({
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
      d="m17.957 20.825-.119-.321a4.41 4.41 0 0 0-2.604-2.608l-.32-.119.32-.119a4.41 4.41 0 0 0 2.605-2.608l.118-.32.118.32a4.41 4.41 0 0 0 2.605 2.608l.32.119-.32.119a4.41 4.41 0 0 0-2.605 2.608zM12.88 3.85c.885-1.205 2.113-.56 3.043.122.93.684 1.91 1.664 1.025 2.868L7.4 19.807c-.27.366-.673.61-1.122.676l-2.26.335a.57.57 0 0 1-.643-.473l-.354-2.256c-.07-.449.04-.907.31-1.273zM11.5 20.43h.01M4.02 8.755c.148-.49.53-.873 1.02-1.021a1.53 1.53 0 0 1-1.02-1.022c-.149.49-.531.873-1.02 1.022.489.148.871.531 1.02 1.02"
    />
  </Svg>
);
export default IconlystGenerateTextLight;
