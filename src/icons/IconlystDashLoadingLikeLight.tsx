import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDashLoadingLikeLight = ({
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
      d="M5.753 6.632A9 9 0 0 1 7.205 5.08M4.301 9.546a9 9 0 0 0-.298 3.034M7.826 19.362a9 9 0 0 1-3.119-3.783M18.537 19.086a9.001 9.001 0 0 1-7.523 1.695M20.62 16.724a8.9 8.9 0 0 0 1.346-5.06 9.01 9.01 0 0 0-9.349-8.657"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.28 12.243c-.435-1.357.072-2.908 1.497-3.366a2.43 2.43 0 0 1 2.199.37 2.45 2.45 0 0 1 2.194-.37c1.425.458 1.937 2.009 1.502 3.366-.677 2.15-3.697 3.807-3.697 3.807S9.98 14.418 9.28 12.243"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDashLoadingLikeLight;
