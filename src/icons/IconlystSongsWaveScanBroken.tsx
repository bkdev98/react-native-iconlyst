import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongsWaveScanBroken = ({
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
      d="M3.251 15.53v1.577A3.89 3.89 0 0 0 7.144 21H8.4M8.195 10.375v3.25M16.305 10.375v3.25M12.25 7.408v4.08M12.25 14.295v2.296M3.25 8.47V6.893A3.89 3.89 0 0 1 7.143 3h1.289M21.248 15.531v1.577a3.89 3.89 0 0 1-3.893 3.893h-1.289M21.249 8.47V6.893A3.89 3.89 0 0 0 17.356 3H16.1"
    />
  </Svg>
);
export default IconlystSongsWaveScanBroken;
