import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDangerTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G fill="none" fillRule="evenodd">
      <Path
        fill={props.color}
        fillRule="nonzero"
        d="M11.25 16.27c0-.414.336-.756.75-.756s.75.33.75.745v.01a.75.75 0 0 1-1.5 0"
        opacity={0.4}
      />
      <Path
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.796 20.418h14.482a2.08 2.08 0 0 0 1.819-2.86L13.82 4.824a2.078 2.078 0 0 0-3.64 0L2.905 17.559a2.08 2.08 0 0 0 1.819 2.859"
      />
      <Path
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.99 13.396v-3.1"
        opacity={0.4}
      />
    </G>
  </Svg>
);
export default IconlystDangerTwoTone;
