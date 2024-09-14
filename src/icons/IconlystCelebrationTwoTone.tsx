import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCelebrationTwoTone = ({
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
      d="m16.45 7.893 2.09 3.267 1.817-4.058"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.627 5.465C7.422 7.025 14.71 9.448 21.5 6.668"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.816 6.219 6.931 10.2l2.336-2.863"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.82 7.836 2.708 5.875 3.628-5.415M9.03 16.845l-1.925 3.496-1.701-4.19"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.319 14.404c-2.796 1.56-10.085 3.983-16.874 1.203"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.88 15.175-1.305 4.181-1.907-3.14"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.225 16.628-2.174 4.717-2.913-4.348"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.683 19.013a1.477 1.477 0 0 1 1.612 1.328M4.76 12.239a1.01 1.01 0 0 0-.876-1.128l-.129-.016a1.14 1.14 0 0 1-.99-1.272M21.026 20.893q.011-.004-.003-.008M11.138 4.57q.012-.005-.003-.01M16.674 4.957a1.434 1.434 0 0 1-1.721-1.072"
    />
  </Svg>
);
export default IconlystCelebrationTwoTone;
