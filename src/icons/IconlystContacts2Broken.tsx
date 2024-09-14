import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystContacts2Broken = ({
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
      d="M16.418 21.5c2.799 0 4.532-1.563 4.532-4.42V8.41C20.958 5.554 19.225 4 16.426 4H8.383C5.593 4 3.85 5.554 3.85 8.411v8.597c0 2.901 1.741 4.492 4.532 4.492h4.253"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.4 14.85c-1.907 0-3.533.288-3.533 1.443 0 1.154 1.618 1.452 3.533 1.452 1.906 0 3.533-.289 3.533-1.442S14.316 14.85 12.4 14.85"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.159 10.346a2.242 2.242 0 1 0 2.243-2.243M16.243 2.5v3.126M8.567 2.5v3.126"
    />
  </Svg>
);
export default IconlystContacts2Broken;
