import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAntenaTransformBroken = ({
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
      d="m17.096 4.791 1.245-1.245c1.165-1.166 3.159-.34 3.159 1.308v7.148M5.51 16.374l-1.464 1.465C2.88 19.005 3.706 21 5.355 21h14.294a1.85 1.85 0 0 0 1.851-1.851v-3.574M13.792 13.75V8.006m1.589 4.213-1.589 1.532-1.589-1.532M9.055 7.55v5.745m-1.59-4.212 1.589-1.532 1.588 1.532"
    />
  </Svg>
);
export default IconlystAntenaTransformBroken;
