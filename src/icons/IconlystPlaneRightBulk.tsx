import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneRightBulk = ({
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
      d="m20.823 3.201.018.018c1.248 1.248.625 3.139-.479 4.368-.828.92-1.737 1.803-2.54 2.582-.147.143-.148.146-.08.334.598 1.61 1.168 3.225 1.732 4.85.357 1.045.286 1.895-.218 2.598-.282.394-.614.751-.936 1.097l-.025.027-.01.01q-.214.226-.43.468a.567.567 0 0 1-.82.027l-4.337-4.262-2.028 1.685.238 2.438a.57.57 0 0 1-.164.455L9.301 21.34a.568.568 0 0 1-.887-.109L6.32 17.74l-.023-.013z"
    />
    <Path
      fill={props.color}
      d="m20.823 3.2-.018-.017c-1.248-1.248-3.139-.625-4.368.479-.92.828-1.803 1.738-2.582 2.54-.144.147-.146.149-.334.08a235 235 0 0 0-4.85-1.732c-1.045-.357-1.896-.286-2.599.218-.394.282-.75.614-1.096.937l-.027.024-.01.01q-.226.214-.468.43a.568.568 0 0 0-.027.82l4.262 4.337-1.685 2.028-2.438-.238a.57.57 0 0 0-.455.164l-1.443 1.443a.568.568 0 0 0 .109.886l3.49 2.095.013.023z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPlaneRightBulk;
