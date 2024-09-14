import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTvStandBold = ({
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
      d="M17.994 2.988H6.007A3.51 3.51 0 0 0 2.5 6.494v7.501a3.51 3.51 0 0 0 3.507 3.508h5.016l-3.444 2.12a.75.75 0 0 0 .787 1.277l3.635-2.237 3.635 2.237a.75.75 0 0 0 .787-1.278l-3.445-2.119h5.016a3.51 3.51 0 0 0 3.506-3.508v-7.5a3.51 3.51 0 0 0-3.506-3.507"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTvStandBold;
