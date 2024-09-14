import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeftClickMouseTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.197 14.703C19.197 18.18 16.2 21 12.502 21s-6.695-2.818-6.695-6.294l-.002-5.409C5.804 5.82 8.8 3 12.5 3c3.697 0 6.695 2.818 6.696 6.295z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.503 3.004V8.85a.907.907 0 0 1-.908.906h-5.79"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystLeftClickMouseTwoTone;
