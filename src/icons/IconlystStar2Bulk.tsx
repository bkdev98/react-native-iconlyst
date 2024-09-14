import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStar2Bulk = ({
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
      d="M7.782 2.5c-1.593 0-2.927.568-3.859 1.568C2.994 5.064 2.5 6.45 2.5 8.026v7.948c0 1.575.492 2.961 1.42 3.958.931 1 2.265 1.568 3.862 1.568h8.434c1.598 0 2.932-.567 3.864-1.568.928-.997 1.42-2.383 1.42-3.958V8.026c0-1.575-.492-2.961-1.42-3.958-.932-1-2.266-1.568-3.863-1.568z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.995 8.234a.75.75 0 0 1 .75.75v2.264l2.063-.731a.75.75 0 1 1 .501 1.414l-2.077.736 1.489 1.883a.75.75 0 0 1-1.177.93l-1.55-1.96-1.538 1.945a.75.75 0 0 1-1.176-.93l1.476-1.867-2.064-.731a.75.75 0 0 1 .501-1.414l2.052.727V8.984a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStar2Bulk;
