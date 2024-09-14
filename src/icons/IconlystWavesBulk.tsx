import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWavesBulk = ({
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
      d="M16.716 2.505H8.282C5.122 2.505 3 4.727 3 8.035v7.939c0 3.308 2.122 5.53 5.282 5.53h8.433c3.161 0 5.285-2.222 5.285-5.53v-7.94c0-3.307-2.123-5.53-5.284-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m17.09 12.535-4.06 4.06a.754.754 0 0 1-1.06 0l-4.06-4.06a.75.75 0 0 1 0-1.061l4.06-4.06a.773.773 0 0 1 1.06 0l4.06 4.06a.75.75 0 0 1 0 1.06m-4.59 2.469-2.999-3 3-3 2.997 3z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWavesBulk;
