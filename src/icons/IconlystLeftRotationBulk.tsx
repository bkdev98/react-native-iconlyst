import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeftRotationBulk = ({
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
      fill={props.color}
      d="M6.215 8.555a9.3 9.3 0 0 1 5.405-1.746c5.172 0 9.38 4.208 9.38 9.38a1 1 0 1 1-2 0c0-4.07-3.311-7.38-7.38-7.38a7.3 7.3 0 0 0-3.972 1.18z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m2.387 12.937.625-5.18a1.078 1.078 0 0 1 1.831-.633l4.555 4.555a1.08 1.08 0 0 1 0 1.524 1.07 1.07 0 0 1-.633.307l-5.18.625a1.075 1.075 0 0 1-1.198-1.198"
    />
  </Svg>
);
export default IconlystLeftRotationBulk;
