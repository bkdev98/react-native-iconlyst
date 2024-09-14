import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGrill1Outline = ({
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
      fillRule="evenodd"
      d="M20 3.18c.414 0 .75.34.75.75v2.11q0 .452-.045.892v.008a.8.8 0 0 1-.021.18 8.76 8.76 0 0 1-5.155 6.929l1.084 3.254a1 1 0 0 1 .032.095l.643 1.932a.75.75 0 0 1-1.423.48l-.49-1.47H8.553l-.485 1.46c-.131.4-.556.61-.949.48a.753.753 0 0 1-.475-.95l1.765-5.31A8.75 8.75 0 0 1 3.25 6.04V3.93c0-.41.336-.75.75-.75zM9.823 14.517l-.772 2.323h5.825l-.768-2.306A8.8 8.8 0 0 1 12 14.79a8.8 8.8 0 0 1-2.177-.273m-.164-1.614a7.256 7.256 0 0 0 9.402-5.213H4.939a7.27 7.27 0 0 0 4.57 5.16 1 1 0 0 1 .15.053M4.751 6.19h14.497q.002-.075.002-.15V4.68H4.75v1.36z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGrill1Outline;
