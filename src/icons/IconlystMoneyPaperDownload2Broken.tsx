import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperDownload2Broken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.44 11.93h1.348M17.565 18.41h-1.348M9.947 6.832l2.054 2.054 2.054-2.054M12.002 3.063v5.822M16.423 9.277h1.166c1.883 0 3.064 1.334 3.064 3.223v5.342c0 1.888-1.175 3.222-3.064 3.222H12M8.079 9.277H6.412c-1.889 0-3.065 1.334-3.065 3.223v5.342c0 1.888 1.176 3.222 3.066 3.222H8.46"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 12.969a2.2 2.2 0 1 1-2.2 2.2"
    />
  </Svg>
);
export default IconlystMoneyPaperDownload2Broken;
