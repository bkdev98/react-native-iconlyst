import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserLoadBold = ({
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
      d="M12.505 11.949a2.87 2.87 0 0 0 2.867-2.867 2.87 2.87 0 0 0-2.867-2.867 2.87 2.87 0 0 0-2.867 2.867 2.87 2.87 0 0 0 2.867 2.867M12.506 12.727c-3.042 0-4.404 1.683-4.404 3.35a.46.46 0 0 0 .458.459l7.892-.011a.46.46 0 0 0 .458-.46c0-1.661-1.362-3.338-4.404-3.338"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="m4.71 15.4.88-.545a.751.751 0 0 1 1.143.709l-.272 2.87a.752.752 0 0 1-.973.645l-2.886-.912a.75.75 0 0 1-.17-1.352l.996-.619c-1.72-3.57-1.11-8.021 1.815-10.969a9.6 9.6 0 0 1 8.518-2.689.75.75 0 1 1-.263 1.476 8.1 8.1 0 0 0-7.19 2.27c-2.43 2.449-2.967 6.128-1.598 9.117M17.919 9.145a.75.75 0 0 0 .79 0l.842-.521c1.355 2.984.814 6.65-1.608 9.092a8.12 8.12 0 0 1-7.192 2.269.75.75 0 0 0-.87.606.75.75 0 0 0 .607.87 9.606 9.606 0 0 0 8.518-2.69c2.919-2.94 3.533-7.377 1.827-10.943l1.035-.643a.75.75 0 0 0-.17-1.353l-2.887-.91a.75.75 0 0 0-.972.644l-.012.126a.8.8 0 0 0-.017.18l-.243 2.565a.75.75 0 0 0 .352.708"
    />
  </Svg>
);
export default IconlystUserLoadBold;
