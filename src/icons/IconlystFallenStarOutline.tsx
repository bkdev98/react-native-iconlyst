import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFallenStarOutline = ({
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
      d="M18.88 5.785a.75.75 0 0 1 0 1.061l-1.718 1.719a.75.75 0 0 1-1.061-1.06l1.718-1.72a.75.75 0 0 1 1.06 0M13.7 3.562a.75.75 0 0 1 0 1.06l-1.528 1.529a.75.75 0 1 1-1.06-1.061l1.528-1.528a.75.75 0 0 1 1.06 0m-3.58 3.58a.75.75 0 0 1 .001 1.06l-.872.873a.75.75 0 0 1-1.061-1.06l.872-.873a.75.75 0 0 1 1.06 0M21.1 10.968a.75.75 0 0 1 0 1.06l-.812.814a.75.75 0 0 1-1.061-1.06l.813-.814a.75.75 0 0 1 1.06 0m-2.67 2.671a.75.75 0 0 1 0 1.06l-1.494 1.495a.75.75 0 1 1-1.06-1.061l1.493-1.494a.75.75 0 0 1 1.06 0M3.635 10.72a.75.75 0 0 1 .884-.131 9.06 9.06 0 0 0 8.527.016.75.75 0 0 1 1.015 1.014 9.06 9.06 0 0 0 .015 8.528.75.75 0 0 1-1.014 1.015 9.06 9.06 0 0 0-8.528-.016.75.75 0 0 1-1.014-1.015 9.06 9.06 0 0 0-.016-8.527.75.75 0 0 1 .13-.884m1.937 1.938c.67 2.09.674 4.338.01 6.426a10.56 10.56 0 0 1 6.426.009 10.56 10.56 0 0 1-.01-6.426 10.57 10.57 0 0 1-6.426-.01"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFallenStarOutline;
