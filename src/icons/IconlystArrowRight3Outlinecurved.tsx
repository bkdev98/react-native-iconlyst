import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowRight3Outlinecurved = ({
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
      d="M14.862 6.96c-.453-.188-.936-.354-1.366-.354-.309 0-.59.085-.813.31-.463.464-.72 2.323-.77 4.334H3.694a.75.75 0 0 0 0 1.5h8.218c.05 2.006.308 3.859.771 4.323.564.563 1.497.276 2.25-.034 1.573-.65 6.12-3.398 6.12-5.046 0-1.7-4.75-4.436-6.192-5.033m-1.178 1.165c1.296.24 5.363 2.911 5.85 3.87-.485.996-4.553 3.691-5.826 3.89-.413-1.255-.406-6.558-.024-7.76"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowRight3Outlinecurved;
