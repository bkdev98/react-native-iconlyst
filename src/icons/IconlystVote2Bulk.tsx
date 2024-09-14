import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVote2Bulk = ({
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
      fill={props.color}
      d="M13.768 3.232a2.5 2.5 0 0 0-3.536 0L4.06 9.404a2.5 2.5 0 0 0 0 3.535l3.483 3.483h8.914l3.482-3.483a2.5 2.5 0 0 0 0-3.535z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M19.773 6.835a.75.75 0 0 0-1.06-1.06l-6.337 6.336-2.012-2.011a.75.75 0 0 0-1.06 1.06l2.541 2.542a.75.75 0 0 0 1.061 0z"
    />
    <Path
      fill={props.color}
      d="M4.575 13.455a2.75 2.75 0 0 0-2.325 2.718v2A2.75 2.75 0 0 0 5 20.923h14a2.75 2.75 0 0 0 2.75-2.75v-2a2.75 2.75 0 0 0-2.326-2.718l-1.466 1.466.042.002h1c.69 0 1.25.56 1.25 1.25v2c0 .69-.56 1.25-1.25 1.25H5c-.69 0-1.25-.56-1.25-1.25v-2c0-.69.56-1.25 1.25-1.25h1q.021 0 .042-.002z"
    />
    <Path
      fill={props.color}
      d="M5.25 17.172a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75"
    />
  </Svg>
);
export default IconlystVote2Bulk;
