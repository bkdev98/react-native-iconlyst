import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSleighTwoTone = ({
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
      d="M21.25 21.798H4.826c-.96 0-1.795-.658-2.019-1.592-.354-1.478.956-2.86 2.67-2.244M8.06 17.506 5.43 12.28c-.303-.604-.012-1.357.66-1.432 1.122-.127 2.502.155 3.181 1.983.97 2.615 4.374 2.258 5.332-.404 1.893-4.33 4.097-5.252 5.75-5.202.728.022 1.02.855.682 1.498-1.665 3.16-2.137 6.206-2.162 8.066-.01.702-.562 1.34-1.265 1.34H9.072c-.429 0-.82-.242-1.013-.624"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.371 21.798 1.394-3.669M18.447 21.798l-1.394-3.669M9.003 12.19c-.24-1.773 1.185-4.925 6.168-5.476 0 0 .051-2.345 1.284-3.283.96 2.01 2.621.49 3.861 1.748 0 0-1.443 1.14-1.724 2.35"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.248 6.688 1.8 1.75"
    />
  </Svg>
);
export default IconlystSleighTwoTone;
