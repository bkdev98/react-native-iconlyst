import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVote2Broken = ({
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
      d="M6.5 17.172h12M9.5 17.172l-4.586-4.586a2 2 0 0 1 0-2.828M16 5.672l-2.086-2.086a2 2 0 0 0-2.829 0L7.171 7.5M15.5 17.171l4.586-4.586a2 2 0 0 0 0-2.828M10.334 10.63l2.542 2.542 6.867-6.867M18.5 14.172h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-5.375"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.5 14.172h-1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h5.75"
    />
  </Svg>
);
export default IconlystVote2Broken;
