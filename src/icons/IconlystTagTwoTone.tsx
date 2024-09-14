import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTagTwoTone = ({
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
      d="M3.516 5.966c.003-1.411 1.07-2.677 2.456-2.915.284-.05 3.615-.043 4.995-.042 1.364 0 2.527.491 3.49 1.452q3.068 3.063 6.128 6.13c1.208 1.21 1.224 3.066.022 4.28a806 806 0 0 1-5.229 5.228c-1.212 1.201-3.068 1.186-4.28-.022-2.063-2.058-4.126-4.115-6.181-6.182-.795-.8-1.264-1.766-1.368-2.895-.084-.903-.035-4.26-.033-5.034"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.406 8.315a1.607 1.607 0 0 1-1.61 1.583c-.872-.002-1.599-.73-1.594-1.596a1.604 1.604 0 0 1 1.633-1.607c.864.003 1.575.736 1.571 1.62M16.887 13.803l-2.576 2.576a1.085 1.085 0 0 1-1.534 0l-1.874-1.873a1.086 1.086 0 0 1 0-1.534l2.577-2.576a1.086 1.086 0 0 1 1.534 0l1.873 1.872a1.086 1.086 0 0 1 0 1.535"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTagTwoTone;
