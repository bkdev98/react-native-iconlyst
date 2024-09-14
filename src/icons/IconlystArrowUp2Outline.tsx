import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowUp2Outline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="nonzero"
      d="M19.53 16.03a.75.75 0 0 1-.976.073l-.084-.073L12 9.561l-6.47 6.47a.75.75 0 0 1-.976.072l-.084-.073a.75.75 0 0 1-.073-.976l.073-.084 7-7a.75.75 0 0 1 .976-.073l.084.073 7 7a.75.75 0 0 1 0 1.06"
    />
  </Svg>
);
export default IconlystArrowUp2Outline;