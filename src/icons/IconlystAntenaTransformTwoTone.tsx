import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAntenaTransformTwoTone = ({
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
      d="m17.095 4.79 1.246-1.244c1.165-1.166 3.159-.34 3.159 1.308V19.15a1.85 1.85 0 0 1-1.85 1.85H5.354c-1.65 0-2.475-1.993-1.309-3.159l1.464-1.465"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.792 13.75V8.006m1.589 4.213-1.589 1.532-1.589-1.532M9.055 7.55v5.745m-1.59-4.212 1.589-1.532 1.588 1.532"
    />
  </Svg>
);
export default IconlystAntenaTransformTwoTone;
