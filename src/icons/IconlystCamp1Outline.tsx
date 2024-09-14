import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCamp1Outline = ({
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
      fillRule="evenodd"
      d="M10.674 11.94a.75.75 0 0 1 .75-.75h1.652a.75.75 0 0 1 0 1.5h-1.652a.75.75 0 0 1-.75-.75M13.603 2.848a.75.75 0 0 1 .305 1.016L4.791 20.792a.75.75 0 0 1-1.32-.71l9.116-16.93a.75.75 0 0 1 1.016-.304M10.897 15.087a.1.1 0 0 0-.022.06v5.216a.75.75 0 0 1-1.5 0v-5.216c0-.847.67-1.573 1.547-1.573h2.656c.878 0 1.547.727 1.547 1.573v5.216a.75.75 0 1 1-1.5 0v-5.216q-.002-.043-.022-.06-.016-.015-.025-.013h-2.656c-.005 0-.014.001-.025.013"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.895 2.848a.75.75 0 0 1 1.016.304l9.116 16.93a.75.75 0 1 1-1.32.71L10.59 3.864a.75.75 0 0 1 .305-1.016"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.5 20.493a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5h-18a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCamp1Outline;
