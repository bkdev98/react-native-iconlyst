import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWavesBold = ({
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
      d="m9.001 12.005 3 2.999 2.997-3-2.998-3z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m16.59 12.535-4.06 4.06a.754.754 0 0 1-1.06 0l-4.06-4.06a.75.75 0 0 1 0-1.061l4.06-4.06a.773.773 0 0 1 1.06 0l4.06 4.06a.75.75 0 0 1 0 1.06m-.374-10.03H7.782c-3.16 0-5.282 2.222-5.282 5.53v7.939c0 3.308 2.122 5.53 5.282 5.53h8.433c3.161 0 5.285-2.222 5.285-5.53v-7.94c0-3.307-2.123-5.53-5.284-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWavesBold;
