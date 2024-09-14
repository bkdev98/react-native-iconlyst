import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRefreshRightOutline = ({
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
      fillRule="evenodd"
      d="M11.084 5.668a6.337 6.337 0 0 0-6.334 6.334 6.33 6.33 0 0 0 6.334 6.333 6.33 6.33 0 0 0 5.222-2.737.75.75 0 0 1 1.235.852 7.83 7.83 0 0 1-6.457 3.385 7.83 7.83 0 0 1-7.834-7.833 7.837 7.837 0 0 1 7.834-7.834 7.844 7.844 0 0 1 7.841 7.627.75.75 0 0 1-1.5.041 6.344 6.344 0 0 0-6.341-6.168"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.292 7.407a.75.75 0 0 1 .4.983l-1.61 3.803a.75.75 0 0 1-.982.399l-3.783-1.6a.75.75 0 1 1 .585-1.38l3.091 1.306 1.317-3.112a.75.75 0 0 1 .982-.4"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRefreshRightOutline;
