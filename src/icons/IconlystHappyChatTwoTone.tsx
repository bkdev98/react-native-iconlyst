import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHappyChatTwoTone = ({
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
      d="M9.27 9.205v-.052M9.224 9a.225.225 0 1 0 .003.45.225.225 0 0 0-.003-.45M15.73 9.205v-.052M15.725 9a.225.225 0 1 0 .003.45.225.225 0 0 0-.003-.45M9.805 14.14c.656.855 1.622 1.387 2.695 1.387s2.04-.532 2.695-1.386"
    />
  </Svg>
);
export default IconlystHappyChatTwoTone;
