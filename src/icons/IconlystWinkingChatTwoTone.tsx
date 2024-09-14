import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWinkingChatTwoTone = ({
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
      d="M8.708 20.164c3.332 1.542 7.406.947 10.156-1.804a9 9 0 0 0 0-12.727c-3.511-3.51-9.216-3.51-12.727 0a9.01 9.01 0 0 0-1.803 10.156c.197.493.35.89.35 1.274 0 1.074-1.035 2.404-.344 3.095.69.69 2.02-.346 3.089-.353.383.001.787.16 1.28.36"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.26 8.742h1.48M15.53 8.705v-.052m-.006-.153a.225.225 0 1 0 .003.45.225.225 0 0 0-.003-.45"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.589 13.27c0 1.763-1.33 3.19-2.97 3.19-1.639 0-2.968-1.427-2.968-3.19z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWinkingChatTwoTone;
