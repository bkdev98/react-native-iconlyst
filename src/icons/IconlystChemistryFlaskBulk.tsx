import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChemistryFlaskBulk = ({
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
      d="M20.796 15.706a1852 1852 0 0 0-3.22-4.639l-.578-.831a1.8 1.8 0 0 1-.319-1.026V3.85c0-.745-.606-1.35-1.351-1.35H8.647a1.35 1.35 0 0 0-1.35 1.35v5.36c0 .367-.11.723-.316 1.024l-2.617 3.777a.5.5 0 0 0-.142.206l-1.018 1.468a3.64 3.64 0 0 0-.237 3.82 3.63 3.63 0 0 0 3.266 1.975l11.521.02a3.69 3.69 0 0 0 3.281-1.984 3.63 3.63 0 0 0-.239-3.81"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.03 19.52a3.69 3.69 0 0 1-3.28 1.98l-11.52-.02c-1.39 0-2.62-.74-3.26-1.97a3.668 3.668 0 0 1 .23-3.82l.36-.52c1.14.63 2.44.94 3.9.94 1.71 0 3.63-.42 5.75-1.26 2.31-.91 4.36-1.27 6.08-1.08.06.01.11.01.17 0 .43.63.89 1.29 1.34 1.94.79 1.14.88 2.57.23 3.81"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChemistryFlaskBulk;
