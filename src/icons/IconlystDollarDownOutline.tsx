import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarDownOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.937 3.813a7.153 7.153 0 0 0-7.153 7.153.75.75 0 1 1-1.5 0 8.653 8.653 0 1 1 13.492 7.175.75.75 0 0 1-.84-1.243 7.153 7.153 0 0 0-4-13.085"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.254 9.513a1.98 1.98 0 0 1 1.98-1.98h2.285a.75.75 0 0 1 0 1.5h-2.284a.48.48 0 1 0 0 .96h1.406a1.98 1.98 0 0 1 0 3.961h-2.285a.75.75 0 0 1 0-1.5h2.285a.48.48 0 0 0 0-.96h-1.406a1.98 1.98 0 0 1-1.981-1.981"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.938 6.494a.75.75 0 0 1 .75.75v1.042a.75.75 0 0 1-1.5 0V7.244a.75.75 0 0 1 .75-.75m0 5.96a.75.75 0 0 1 .75.75v1.033a.75.75 0 0 1-1.5 0v-1.034a.75.75 0 0 1 .75-.75M14.478 18.205a.75.75 0 0 1 .513.928l-.615 2.137a.75.75 0 0 1-.928.513l-2.137-.615a.75.75 0 0 1 .415-1.441l1.416.407.408-1.416a.75.75 0 0 1 .928-.513"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.265 13.34a.75.75 0 0 1 1.033.242l1.95 3.146 4.38-1.31a.75.75 0 0 1 .867.346l2.814 4.926a.75.75 0 1 1-1.302.744l-2.52-4.409L6.13 18.33a.75.75 0 0 1-.853-.323l-2.253-3.635a.75.75 0 0 1 .242-1.033"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDollarDownOutline;
