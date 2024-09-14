import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReplyShareDownBulk = ({
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
      d="m8.025 11.784-2.483.001a1.4 1.4 0 0 0-1.275.817 1.4 1.4 0 0 0 .204 1.501l5.845 6.9c.263.31.645.491 1.051.498h.023c.396 0 .774-.168 1.04-.462l6.244-6.909c.378-.417.47-.996.242-1.51a1.39 1.39 0 0 0-1.288-.837h-3.155z"
    />
    <Path
      fill={props.color}
      d="M10.943 4.792c3.347-2.904 8.284-2.237 8.492-2.208a.5.5 0 0 1 .136.951c-3.35 1.516-4.978 4.145-5.099 8.249l-6.446.001C8.122 8.74 9.1 6.39 10.943 4.792"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystReplyShareDownBulk;
