import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWeightTwoTone = ({
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
      d="M8.177 8.84h8.646a3.09 3.09 0 0 1 3.063 2.697l.765 5.984A3.087 3.087 0 0 1 17.588 21H7.41a3.087 3.087 0 0 1-3.062-3.48l.765-5.983A3.09 3.09 0 0 1 8.177 8.84M19.632 3l-1.149 1.548a2.56 2.56 0 0 1-2.055 1.034H8.57a2.56 2.56 0 0 1-2.054-1.034L5.367 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.543 8.841-.78-3.259M14.457 8.841l.779-3.259"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.662 14.92a3.162 3.162 0 1 0-6.325 0 3.162 3.162 0 0 0 6.325 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 14.258v-2.5"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystWeightTwoTone;
