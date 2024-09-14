import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTvStandBulk = ({
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
      d="M6.007 2.988h11.987A3.51 3.51 0 0 1 21.5 6.494v7.501a3.51 3.51 0 0 1-3.506 3.508H6.007A3.51 3.51 0 0 1 2.5 13.995v-7.5a3.51 3.51 0 0 1 3.507-3.507"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m7.579 19.622 3.444-2.12h1.955l3.445 2.12a.75.75 0 0 1-.787 1.278l-3.635-2.237L8.366 20.9a.75.75 0 0 1-.787-1.278"
    />
  </Svg>
);
export default IconlystTvStandBulk;
