import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRideBikeOutline = ({
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
      d="M11.964 18.82a.75.75 0 0 1-.7-1.012l.868-2.316a1.26 1.26 0 0 0-.705-1.617l-.675-.274A2.77 2.77 0 0 1 9.7 9.239a2.777 2.777 0 0 1 3.873-.324l1.022.852c.228.19.515.293.81.293h2.9a.75.75 0 1 1 0 1.5h-2.9a2.77 2.77 0 0 1-1.77-.64l-1.022-.852a1.272 1.272 0 0 0-2.046.676 1.266 1.266 0 0 0 .754 1.472l.668.275a2.754 2.754 0 0 1 1.54 3.532l-.868 2.316a.75.75 0 0 1-.698.482M14.315 7.412a2.58 2.58 0 1 1 0-5.161 2.58 2.58 0 0 1 0 5.161m0-3.662a1.081 1.081 0 1 0 0 2.162 1.081 1.081 0 0 0 0-2.162M6.453 21.75a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7m0-5.5a2 2 0 1 0 2 2 2 2 0 0 0-2-1.993zM18.047 21.75a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7m0-5.5a2 2 0 1 0 2 2 2 2 0 0 0-2-1.993z"
    />
  </Svg>
);
export default IconlystRideBikeOutline;
