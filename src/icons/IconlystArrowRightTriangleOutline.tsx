import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowRightTriangleOutline = ({
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
      d="M12.116 6.606a.75.75 0 0 1 .763.022l7.52 4.737a.75.75 0 0 1 0 1.27l-7.52 4.737a.75.75 0 0 1-1.15-.635v-3.986h-7.73a.75.75 0 0 1 0-1.5h7.73V7.262a.75.75 0 0 1 .387-.656m1.113 5.424V8.621L18.592 12l-5.363 3.378z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowRightTriangleOutline;
