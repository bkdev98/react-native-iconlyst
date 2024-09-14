import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPeraBroken = ({
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
      d="M11.318 20.696c-2.704-.85-4.552-3.5-4.395-6.338.065-1.166.179-2.305-.455-3.397C4.17 6.97 7.49 5.188 7.584 5.135c.093-.054 3.298-2.039 5.604 1.946.629 1.095 1.672 1.566 2.714 2.093 2.537 1.283 3.908 4.209 3.291 6.975-.375 1.839-1.518 3.18-2.965 3.957a6 6 0 0 1-2.021.795"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.818 12.47a2.304 2.304 0 1 0 3.147.843M7.584 5.135C6.986 4.2 7.012 3 7.012 3"
    />
  </Svg>
);
export default IconlystPeraBroken;
