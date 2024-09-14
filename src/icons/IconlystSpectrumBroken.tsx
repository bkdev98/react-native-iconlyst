import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpectrumBroken = ({
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
      d="M11.999 21.383H7.782C4.834 21.383 3 19.302 3 16.356V8.41c0-2.945 1.843-5.026 4.782-5.026h8.435C19.165 3.383 21 5.464 21 8.409v7.947c0 2.946-1.835 5.027-4.784 5.027h-.567"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.865 15.79a8.27 8.27 0 0 0-8.27-8.27l-1.462.013v4.851h1.461A3.405 3.405 0 0 1 12 15.79v1.472h4.865z"
    />
  </Svg>
);
export default IconlystSpectrumBroken;
