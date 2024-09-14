import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReviewAiTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.868 14.019c.489.988 1.61 1.682 2.913 1.682s2.424-.694 2.913-1.682"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 3a9 9 0 0 0-8.085 12.958c.516 1.075.022 2.254-.24 3.333-.15.592.442 1.184 1.034 1.034 1.078-.271 2.257-.757 3.333-.24a9 9 0 0 0 12.37-11.293"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.786 4.806-.09.243a3.34 3.34 0 0 1-1.97 1.974l-.243.09.242.09a3.34 3.34 0 0 1 1.971 1.973l.09.243.09-.243a3.34 3.34 0 0 1 1.97-1.974l.243-.09-.242-.09a3.34 3.34 0 0 1-1.971-1.973zM19.824 3a1.77 1.77 0 0 1-1.177 1.178 1.77 1.77 0 0 1 1.177 1.179A1.77 1.77 0 0 1 21 4.178 1.77 1.77 0 0 1 19.823 3"
    />
  </Svg>
);
export default IconlystReviewAiTwoTone;
