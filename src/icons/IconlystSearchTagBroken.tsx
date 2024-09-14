import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchTagBroken = ({
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
      d="M4.673 13.907c-.796-.804-1.266-1.773-1.375-2.912-.08-.905-.036-4.28-.036-5.066.01-1.412 1.077-2.686 2.47-2.93.289-.046 3.636-.037 5.03-.037 1.366 0 2.541.488 3.51 1.456q.32.323.643.644M17.346 18.01q-1.074 1.073-2.152 2.14c-1.221 1.203-3.085 1.186-4.306-.027q-1.713-1.71-3.427-3.42"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.971 8.281a1.62 1.62 0 0 0 1.604 1.607 1.616 1.616 0 0 0 1.618-1.592c.004-.89-.711-1.627-1.58-1.63"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.564 7.912a3.112 3.112 0 1 1 0 6.225 3.112 3.112 0 0 1 0-6.225"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.683 13.307 1.567 1.563"
    />
  </Svg>
);
export default IconlystSearchTagBroken;
