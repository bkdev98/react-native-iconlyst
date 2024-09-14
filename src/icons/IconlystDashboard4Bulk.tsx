import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDashboard4Bulk = ({
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
      fillRule="evenodd"
      d="m22.73 11.99.001.01-.002.011q0 .032-.004.064l-.005.075a9.7 9.7 0 0 1-2.14 5.95c-.04.07-.09.13-.16.2a9.73 9.73 0 0 1-7.44 3.45c-2.98 0-5.65-1.34-7.44-3.45-.03-.03-.06-.06-.08-.09-.01-.01-.02-.02-.02-.03-.02-.02-.04-.05-.06-.08A9.72 9.72 0 0 1 3.23 12a9.68 9.68 0 0 1 2.841-6.869l.008-.012q.002-.006.008-.012.006-.005.012-.008l.012-.008A9.68 9.68 0 0 1 12.98 2.25h.001a9.66 9.66 0 0 1 6.779 2.76 1 1 0 0 1 .084.076l.015.01q.009.004.016.011.006.006.008.012l.008.012.029.029a9.67 9.67 0 0 1 2.81 6.83m-2.872 4.548.002.002c.73-1.1 1.21-2.39 1.34-3.79h-1.47a.75.75 0 0 1 0-1.5h1.47a8.26 8.26 0 0 0-1.884-4.524l-1.032 1.032a.74.74 0 0 1-.53.22.749.749 0 0 1-.53-1.28l1.037-1.037-.001-.001a8.26 8.26 0 0 0-4.53-1.88v1.47a.75.75 0 1 1-1.5 0V3.78A8.26 8.26 0 0 0 7.7 5.66l1.038 1.038a.749.749 0 1 1-1.06 1.06L6.64 6.72a8.26 8.26 0 0 0-1.88 4.53h1.696a.75.75 0 0 1 0 1.5H4.76c.13 1.4.61 2.69 1.34 3.79l.003-.003c.074.132 2.14 3.707 6.878 3.707 4.7 0 6.795-3.563 6.877-3.706"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M13.73 13.734c2.31.17 4.48 1.16 6.13 2.8 0 0-2.083 3.71-6.879 3.71-4.827 0-6.88-3.71-6.88-3.71a9.7 9.7 0 0 1 6.13-2.8V9.808a.75.75 0 0 1 1.5 0z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDashboard4Bulk;
