import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoChatLight = ({
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
      d="M9.042 20.164c3.332 1.542 7.406.947 10.156-1.804a9 9 0 0 0 0-12.727c-3.511-3.51-9.216-3.51-12.727 0A9.01 9.01 0 0 0 4.668 15.79c.197.492.35.888.35 1.273 0 1.074-1.035 2.404-.345 3.095.691.69 2.021-.346 3.09-.352.383 0 .787.16 1.28.358"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.352 13.093a9.6 9.6 0 0 1-2.801 1.757c-.904.356-1.661-.088-1.773-.979a17.5 17.5 0 0 1 0-3.745c.122-.926.957-1.32 1.773-.975a9.4 9.4 0 0 1 2.801 1.757c.697.631.713 1.528 0 2.185"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVideoChatLight;
