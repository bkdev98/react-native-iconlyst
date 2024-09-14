import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStar9Bulksharp = ({
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
      d="m10.032 6.654 2.218-5.173v21.038l-2.218-5.173-5.221 2.094 2.093-5.226L1.728 12l5.176-2.214L4.811 4.56z"
    />
    <Path
      fill={props.color}
      d="M14.468 6.654 12.25 1.481v21.038l2.218-5.173 5.221 2.094-2.093-5.226L22.772 12l-5.176-2.214 2.093-5.226z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystStar9Bulksharp;
