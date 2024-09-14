import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCommandBroken = ({
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
      d="M6.536 8.571a2.286 2.286 0 1 1 2.286-2.286v11.429a2.287 2.287 0 1 1-2.286-2.285h11.429a2.285 2.285 0 1 1-2.286 2.285V6.285a2.286 2.286 0 1 1 2.286 2.286z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCommandBroken;
