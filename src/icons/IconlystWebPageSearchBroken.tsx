import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageSearchBroken = ({
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
      d="M21 12.082V8.026C21 5.081 19.166 3 16.218 3H7.782C4.842 3 3 5.081 3 8.026V12M3 15.973c0 2.945 1.834 5.026 4.782 5.026h1.75M17.783 9.492H3M6.345 6.55h-.056m2.543 0h-.055m2.54 0h-.055M13.694 14.667a3.239 3.239 0 0 1 4.579 4.579 3.239 3.239 0 0 1-5.527-2.308M18.273 19.246 20.026 21"
    />
  </Svg>
);
export default IconlystWebPageSearchBroken;
