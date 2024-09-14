import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCheckSqaureBulk = ({
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
      d="M20.097 5.305c-.843-1.37-2.315-2.186-4.17-2.186H8.073C5.11 3.12 3.12 5.201 3.12 8.301v7.4c0 3.098 1.99 5.18 4.953 5.18h7.854c2.963 0 4.954-2.082 4.954-5.18V8.3c0-.578-.09-1.105-.223-1.605-.132-.5-.271-.828-.562-1.39"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M12.538 15.426a.75.75 0 0 1-.646.397h-.016a.75.75 0 0 1-.646-.366 15.6 15.6 0 0 0-3.365-3.95.75.75 0 1 1 .969-1.146 17.3 17.3 0 0 1 3 3.269c1.36-2.256 4.063-5.9 8.263-8.325.29.562.43.89.561 1.39-4.533 2.685-7.157 6.922-8.12 8.73"
    />
  </Svg>
);
export default IconlystCheckSqaureBulk;
