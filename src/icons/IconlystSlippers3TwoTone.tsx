import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSlippers3TwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.947 7.366a3.85 3.85 0 0 0-3.426 4.228s.819 4.23 1.28 6.494c.349 1.704 1.958 2.717 3.537 2.55 1.58-.164 2.943-1.49 2.93-3.228-.016-2.312-.093-6.619-.093-6.619a3.85 3.85 0 0 0-4.228-3.425"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.791 13.138 2.3-1.298 1.184.952m-1.173-.953-.092-.884"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.228 4.637a3.847 3.847 0 0 1 3.228 4.38s-1.011 4.187-1.577 6.428c-.426 1.686-2.08 2.626-3.65 2.385-1.57-.236-2.871-1.621-2.779-3.358.123-2.31.397-6.608.397-6.608a3.847 3.847 0 0 1 4.38-3.227"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.117 10.456-2.239-1.403-1.226.897m1.216-.899.134-.878"
    />
  </Svg>
);
export default IconlystSlippers3TwoTone;
