import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneeLeftBulk = ({
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
      d="m3.225 3.201-.018.018c-1.248 1.248-.625 3.139.479 4.368.828.92 1.738 1.803 2.54 2.582.147.143.149.146.08.334a235 235 0 0 0-1.732 4.85c-.357 1.045-.286 1.895.218 2.598.282.394.614.751.937 1.097l.024.027.01.01q.214.226.43.468a.568.568 0 0 0 .82.027l4.337-4.262 2.028 1.685-.238 2.438a.57.57 0 0 0 .164.455l1.443 1.443a.568.568 0 0 0 .887-.109l2.094-3.49.023-.013z"
    />
    <Path
      fill={props.color}
      d="m3.225 3.2.018-.017c1.247-1.248 3.138-.625 4.367.479.921.828 1.804 1.738 2.583 2.54.143.147.146.149.334.08 1.61-.598 3.225-1.168 4.85-1.732 1.045-.357 1.895-.286 2.598.218.394.282.75.614 1.097.937l.026.024.01.01q.226.214.469.43a.568.568 0 0 1 .027.82l-4.262 4.337 1.685 2.028 2.438-.238a.57.57 0 0 1 .455.164l1.443 1.443a.57.57 0 0 1 .163.47.57.57 0 0 1-.272.416l-3.49 2.095-.013.023z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPlaneeLeftBulk;
