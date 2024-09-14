import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailSearchBulk = ({
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
      fillRule="evenodd"
      d="M12.575 17.825c0-3.198 2.602-5.8 5.8-5.8.762 0 1.49.151 2.157.42.207.085.443-.062.443-.285V7.925c0-3.2-2.2-5.6-5.1-5.6h-8.9c-2.9 0-5.1 2.4-5.1 5.6v6.2c0 1.6.6 3.1 1.6 4.1.9.9 2.2 1.4 3.5 1.4h5.476c.204 0 .348-.2.299-.397a5.8 5.8 0 0 1-.175-1.403"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m9.575 12.025-4.1-3.3c-.3-.3-.4-.7-.1-1.1.3-.3.7-.4 1.1-.1l4.1 3.3c.5.4 1.2.4 1.7 0l4-3.3c.3-.3.8-.2 1.1.1.2.4.2.9-.2 1.1l-4 3.3c-.5.4-1.2.6-1.8.6q-.9 0-1.8-.6M17.975 15.274c-1.186 0-2.15.965-2.15 2.15s.964 2.151 2.15 2.151 2.15-.965 2.15-2.15-.964-2.15-2.15-2.15m3.4 6.4a.75.75 0 0 1-.53-.219l-.936-.936a3.63 3.63 0 0 1-1.934.556 3.654 3.654 0 0 1-3.65-3.65 3.654 3.654 0 0 1 3.65-3.65 3.654 3.654 0 0 1 3.65 3.65c0 .761-.234 1.468-.634 2.054l.914.915a.75.75 0 0 1-.53 1.28"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEmailSearchBulk;
