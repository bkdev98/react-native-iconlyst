import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowUp3Outlinecurved = ({
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
      d="M6.96 9.137c-.188.453-.354.936-.354 1.366 0 .31.085.59.309.813.465.464 2.324.721 4.335.772v8.217a.75.75 0 0 0 1.5 0v-8.218c2.006-.051 3.859-.308 4.323-.772.563-.564.276-1.497-.034-2.25-.651-1.573-3.398-6.12-5.046-6.12-1.701 0-4.436 4.75-5.033 6.192m1.165 1.178c.24-1.296 2.91-5.363 3.87-5.849.996.484 3.69 4.552 3.889 5.825-1.254.413-6.557.406-7.76.024"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowUp3Outlinecurved;
