import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongsWaveScanTwoTone = ({
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
      d="M3.501 15.531v1.577a3.89 3.89 0 0 0 3.893 3.893H8.65"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.445 10.375v3.25M16.555 10.375v3.25M12.5 7.408v9.183"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.5 8.47V6.893A3.89 3.89 0 0 1 7.393 3h1.289M21.498 15.531v1.577a3.89 3.89 0 0 1-3.893 3.893h-1.289M21.499 8.47V6.893A3.89 3.89 0 0 0 17.606 3H16.35"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSongsWaveScanTwoTone;
