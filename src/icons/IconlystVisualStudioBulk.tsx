import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVisualStudioBulk = ({
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
      d="m9.736 11.262-.018.018L5.16 6.56a.5.5 0 0 0-.607-.085l-1.801 1.03a.5.5 0 0 0-.252.434v8.12c0 .18.096.345.252.434l1.801 1.03a.5.5 0 0 0 .607-.086l4.558-4.718.018.018z"
    />
    <Path
      fill={props.color}
      d="M9.736 12.737v-1.475l7.378-7.64a.5.5 0 0 1 .613-.084l3.526 2.07a.5.5 0 0 1 .247.432v11.92a.5.5 0 0 1-.247.431l-3.526 2.071a.505.505 0 0 1-.613-.084z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystVisualStudioBulk;
