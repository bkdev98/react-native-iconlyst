import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMeteoriteOutline = ({
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
      d="M7.93 3.425a.75.75 0 0 1 .897.11 5.9 5.9 0 0 0 8.207 0 .75.75 0 0 1 1.25.722 5.9 5.9 0 0 0 4.103 7.107.75.75 0 0 1 0 1.443 5.9 5.9 0 0 0-4.104 7.107.75.75 0 0 1-1.249.721 5.9 5.9 0 0 0-8.207 0 .75.75 0 0 1-1.249-.721 5.9 5.9 0 0 0-4.103-7.107.75.75 0 0 1 0-1.443 5.9 5.9 0 0 0 4.103-7.107.75.75 0 0 1 .353-.832m1.327 2.297a7.41 7.41 0 0 1-3.674 6.363 7.41 7.41 0 0 1 3.674 6.364 7.41 7.41 0 0 1 7.348 0 7.41 7.41 0 0 1 3.674-6.364 7.41 7.41 0 0 1-3.674-6.363 7.41 7.41 0 0 1-7.348 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMeteoriteOutline;
