import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSlashBulk = ({
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
      d="M15.009 8.04a.75.75 0 0 1 .143 1.05l-5.11 6.727a.75.75 0 1 1-1.194-.908l5.11-6.726a.75.75 0 0 1 1.05-.143"
    />
  </Svg>
);
export default IconlystSlashBulk;
