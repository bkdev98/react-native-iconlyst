import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarRunTwoTone = ({
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
      d="m15.345 6.839 1.419 2.835c.14.28.41.472.719.515l3.174.457a.939.939 0 0 1 .529 1.608l-2.295 2.205a.93.93 0 0 0-.276.834l.544 3.115a.952.952 0 0 1-1.387.993l-2.836-1.47a.97.97 0 0 0-.89 0l-2.837 1.471a.953.953 0 0 1-1.387-.994l.543-3.114a.93.93 0 0 0-.274-.834l-2.297-2.206a.94.94 0 0 1 .528-1.607l3.174-.457a.96.96 0 0 0 .72-.515l1.42-2.836a.962.962 0 0 1 1.71 0"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.527 12.886h1.298M3.527 6.758H8.64M3.527 19.075h2.706"
    />
  </Svg>
);
export default IconlystStarRunTwoTone;
