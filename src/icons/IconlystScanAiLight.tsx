import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScanAiLight = ({
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
      d="M21 8.47V6.895a3.89 3.89 0 0 0-3.893-3.892H15.85M3 8.47V6.895a3.89 3.89 0 0 1 3.893-3.892h1.289M3 15.53v1.576a3.89 3.89 0 0 0 3.893 3.892H8.15M21 15.53v1.576a3.89 3.89 0 0 1-3.893 3.892h-1.289M10.054 13.979l-.1-.274A3.76 3.76 0 0 0 7.73 11.48l-.273-.101.273-.101a3.76 3.76 0 0 0 2.222-2.225l.101-.273.101.273a3.76 3.76 0 0 0 2.222 2.225l.273.101-.273.101a3.76 3.76 0 0 0-2.222 2.225zM15.365 15.22a1.77 1.77 0 0 0-1.177-1.178 1.77 1.77 0 0 0 1.177-1.178 1.77 1.77 0 0 0 1.176 1.178 1.77 1.77 0 0 0-1.176 1.179"
    />
  </Svg>
);
export default IconlystScanAiLight;
