import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMacOSFinderCircleLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.645 3c-.441 2.147-1.424 7.744-1.364 9.028.04.652.18.853.823.933.511.07 1.023.12 1.535.12.461 0 .44.25.42.69-.02.532-.02 1.606.101 3.06.09 1.134.261 2.488.562 3.993"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.217 15.332a6.9 6.9 0 0 0 4.631 1.772c1.93 0 3.675-.79 4.939-2.061M7.57 8.281V9.41m8.862-1.128V9.41"
    />
  </Svg>
);
export default IconlystMacOSFinderCircleLight;
