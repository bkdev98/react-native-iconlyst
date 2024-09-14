import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserBadgeBroken = ({
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
      d="M4.04 10.41V7.446C4.04 4.838 5.674 3 8.275 3h8.25c2.61 0 4.236 1.838 4.236 4.447v7.039c0 2.608-1.626 4.446-4.236 4.446H14.47L12.4 21l-2.068-2.068H8.276c-2.61 0-4.237-1.837-4.237-4.446v-.844"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.76 18.86v-.813c0-1.514 1.198-3.402 4.636-3.402 3.446 0 4.645 1.872 4.645 3.384v.831M12.399 6.553a2.963 2.963 0 1 0 2.576 1.499"
    />
  </Svg>
);
export default IconlystUserBadgeBroken;
