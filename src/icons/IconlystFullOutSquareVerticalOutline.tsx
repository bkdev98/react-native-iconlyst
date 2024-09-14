import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFullOutSquareVerticalOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M20.998 6.459v11.082c0 1.56-.556 2.882-1.553 3.81-.991.924-2.357 1.402-3.886 1.402H8.44c-1.528 0-2.894-.478-3.885-1.401C3.557 20.423 3 19.1 3 17.54V6.459c0-1.56.556-2.882 1.553-3.81.991-.923 2.357-1.401 3.886-1.401h7.12c1.529 0 2.895.48 3.885 1.404.997.929 1.553 2.25 1.553 3.807m-1.5 11.082V6.459c0-1.185-.415-2.094-1.076-2.71-.666-.622-1.645-1.001-2.863-1.001H8.44c-1.218 0-2.197.378-2.863.998-.66.615-1.075 1.523-1.075 2.713v11.08c0 1.191.415 2.1 1.075 2.715.667.62 1.645.999 2.864.999h7.12c1.218 0 2.196-.378 2.863-1 .66-.614 1.075-1.523 1.075-2.712"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.47 6.47a.75.75 0 0 1 1.06 0L12 8.94l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 0-1.06M8.47 17.53a.75.75 0 0 0 1.06 0L12 15.06l2.47 2.47a.75.75 0 1 0 1.06-1.06l-3-3a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFullOutSquareVerticalOutline;
