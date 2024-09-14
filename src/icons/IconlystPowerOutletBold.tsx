import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPowerOutletBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.589 12.5a4.421 4.421 0 1 1 8.842.002 4.421 4.421 0 0 1-8.842-.002m2.926-.75a.75.75 0 0 0 0 1.5h.073a.75.75 0 0 0 0-1.5zm2.846 0a.75.75 0 0 0 0 1.5h.072a.75.75 0 1 0 0-1.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.934 4.568C4.866 3.568 6.199 3 7.793 3h8.435c1.597 0 2.93.567 3.863 1.568.928.997 1.42 2.383 1.42 3.958v7.948c0 1.575-.492 2.961-1.42 3.958-.932 1-2.266 1.568-3.864 1.568H7.793c-1.598 0-2.931-.567-3.863-1.568-.927-.997-1.42-2.383-1.42-3.958V8.526c0-1.576.495-2.962 1.424-3.958M12.01 6.58a5.921 5.921 0 1 0 0 11.842 5.921 5.921 0 0 0 0-11.842"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPowerOutletBold;
