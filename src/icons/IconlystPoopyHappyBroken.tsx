import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPoopyHappyBroken = ({
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
      d="M12.412 20.059c2.88.037 5.676-.12 6.594-.346 1.54-.387 2.982-1.54 2.982-3.43 0-1.69-1.162-3.08-2.694-3.363.019-.152.036-.303.036-.453 0-1.805-1.322-3.28-3.007-3.412a3 3 0 0 0 .093-.506c.23-1.983-1.232-3.298-2.793-4.06-.432-.202-.937-.469-1.406-.551.018.082.645 1.799-1.262 3.094a3.14 3.14 0 0 0-1.247 2.014c-1.711.104-3.08 1.597-3.08 3.42 0 .13.017.25.035.38l.001.008c0 .018.009.046.009.066-1.523.293-2.685 1.681-2.685 3.364 0 1.89 1.477 3.06 3.27 3.43a27 27 0 0 0 2.027.217M10.576 12.277v.01M15.45 12.277v.01"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.377 15.703c.399.452.92.777 1.596.783.706.008 1.214-.327 1.638-.783"
    />
  </Svg>
);
export default IconlystPoopyHappyBroken;
