import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarRunBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.387 16.85.272 1.558a.952.952 0 0 1-1.387.993l-2.836-1.47a.97.97 0 0 0-.89 0l-2.837 1.471a.953.953 0 0 1-1.387-.994l.543-3.113a.93.93 0 0 0-.274-.834l-2.297-2.206a.94.94 0 0 1 .528-1.607l1.587-.23M18.39 14.46l2.296-2.206a.939.939 0 0 0-.53-1.607l-3.173-.458a.95.95 0 0 1-.72-.515L14.846 6.84a.962.962 0 0 0-1.709 0l-1.42 2.836M3.027 12.886h1.298M3.027 6.758H8.14M3.027 19.075h2.706"
    />
  </Svg>
);
export default IconlystStarRunBroken;
