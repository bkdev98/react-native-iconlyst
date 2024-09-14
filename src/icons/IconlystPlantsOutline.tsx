import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlantsOutline = ({
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
      d="M20.353 11.244a1.77 1.77 0 1 0 .995 3.396l.458 1.428a3.269 3.269 0 1 1-1.837-6.274zM12.555 12.192a2.983 2.983 0 0 0 1.92-3.756l1.427-.462a4.483 4.483 0 0 1-6.855 5.04l.866-1.225a2.98 2.98 0 0 0 2.642.403M11.584 17.633c-.542 0-1.027.242-1.352.627l-1.146-.968a3.269 3.269 0 0 1 5.203 3.944l-1.24-.843a1.769 1.769 0 0 0-1.465-2.76"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.219 8.94a5.655 5.655 0 1 0 0 11.31 5.655 5.655 0 0 0 0-11.31m-7.155 5.655a7.155 7.155 0 1 1 14.31 0 7.155 7.155 0 0 1-14.31 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.864 16.196a.75.75 0 0 1 .75.75v.012a.75.75 0 0 1-1.5 0v-.012a.75.75 0 0 1 .75-.75M7.064 3.75a1.845 1.845 0 1 0 0 3.69 1.845 1.845 0 0 0 0-3.69M3.72 5.595a3.345 3.345 0 1 1 6.69 0 3.345 3.345 0 0 1-6.69 0M4.99 18.978a.636.636 0 1 0 0 1.272.636.636 0 0 0 0-1.272m-2.136.636a2.136 2.136 0 1 1 4.272 0 2.136 2.136 0 0 1-4.272 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlantsOutline;
