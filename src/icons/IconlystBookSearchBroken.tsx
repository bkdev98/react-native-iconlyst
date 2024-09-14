import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBookSearchBroken = ({
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
      d="M4.022 18.513V5.591A2.59 2.59 0 0 1 6.613 3h11.091a1.2 1.2 0 0 1 1.199 1.199v.43"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.111 11.458 1.368 1.366M17.26 6.746a2.719 2.719 0 1 1 .001 5.438 2.719 2.719 0 0 1 0-5.438M18.904 16.025H6.51a2.486 2.486 0 1 0 0 4.974h1.825"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.904 14.98v1.045l.007 3.78a1.2 1.2 0 0 1-1.199 1.194h-5.6M7.826 16.026V5.702"
    />
  </Svg>
);
export default IconlystBookSearchBroken;
