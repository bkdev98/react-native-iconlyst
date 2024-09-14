import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRemoveCloudBulk = ({
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
      fill={props.color}
      d="M3.879 5.282a.75.75 0 0 1 1.06 0l14.067 14.066a.75.75 0 0 1-1.06 1.061l-2.394-2.393H7.605c-.37 0-1.111-.05-1.947-.39a4.92 4.92 0 0 1-2.907-4.472c0-2.296 1.308-4.027 3.306-4.635L3.879 6.343a.75.75 0 0 1 0-1.06"
    />
    <Path
      fill={props.color}
      d="M16.902 5.506a6.3 6.3 0 0 1 1.187 2.808c2.482.32 4.161 2.227 4.161 4.84 0 1.4-.595 2.728-1.632 3.646a.754.754 0 0 1-1.028-.032L8.705 5.883A.75.75 0 0 1 8.72 4.81c.993-.94 2.3-1.438 3.78-1.438 2.313 0 3.671 1.161 4.403 2.135"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystRemoveCloudBulk;
