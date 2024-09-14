import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaystation5Ps5Outline = ({
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
      d="M3 15.6c-.41 0-.75-.34-.75-.75v-1.27c0-1.17.95-2.12 2.12-2.12h1.85a.781.781 0 0 0-.01-1.56H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.21a2.279 2.279 0 0 1 .02 4.56H4.37c-.34 0-.62.28-.62.62v1.27c0 .41-.34.75-.75.75M8.3 15.584c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.05c.8 0 1.16-.37 1.17-1.17l.02-1.85c.02-1.62 1.04-2.63 2.67-2.64h1.05c.41 0 .75.34.75.75s-.34.75-.75.75h-1.05c-.8 0-1.16.37-1.17 1.16l-.02 1.85c-.02 1.62-1.04 2.64-2.67 2.65zM19.76 15.584h-3.01c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.01c.27 0 .49-.21.49-.49s-.22-.49-.48-.49h-2.32c-.81 0-1.47-.66-1.47-1.47v-2.46c0-.41.34-.75.75-.75H21c.41 0 .75.34.75.75s-.34.75-.75.75h-3.52v1.71l2.28-.03c1.09 0 1.98.89 1.98 1.99s-.89 1.99-1.99 1.99z"
    />
  </Svg>
);
export default IconlystPlaystation5Ps5Outline;
