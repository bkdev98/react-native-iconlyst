import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarCircleBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="m17.734 18.834-.639-3.658c-.067-.38.06-.77.339-1.03l2.693-2.594c.075.445.123.898.123 1.364a8.22 8.22 0 0 1-2.516 5.918m-9.65 1.341 3.368-1.749c.345-.17.754-.17 1.099 0l3.365 1.749a8.2 8.2 0 0 1-3.916.991c-1.416 0-2.75-.36-3.916-.991M3.75 12.916c0-.466.048-.919.122-1.363l2.696 2.593c.277.26.405.65.339 1.03l-.64 3.66a8.22 8.22 0 0 1-2.517-5.92m7.194-8.175L9.192 8.236c-.174.34-.507.58-.889.63l-3.762.547a8.26 8.26 0 0 1 6.403-4.672m8.514 4.672-3.762-.547a1.17 1.17 0 0 1-.888-.63l-1.749-3.495a8.26 8.26 0 0 1 6.399 4.672M12 3.166c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75-4.374-9.75-9.75-9.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStarCircleBold;
