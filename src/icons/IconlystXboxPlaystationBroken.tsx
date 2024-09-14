import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystXboxPlaystationBroken = ({
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
      d="M20.997 14.787c.033 1.308-.188 2.736-1.517 3.277-1.251.462-2.273.227-2.947-.272-.728-.541-.807-1.2-1.854-1.786-1.046-.586-4.163-.69-5.359 0-1.194.69-1.124 1.245-1.853 1.786-.673.499-1.696.733-2.947.272-1.328-.54-1.55-1.969-1.517-3.277-.007-.295.241-7.08 3.037-8.542.574-.256 2.118-1.137 4.108.05 1.456.867 2.068 1.02 3.704 0 1.906-1.19 3.535-.306 4.11-.05 1.645.86 2.408 3.567 2.755 5.708M8.001 9.73v2.869m1.437-1.435h-2.87M16.006 12.609v-.01M16.006 9.74v-.01M14.572 11.174v-.01M17.441 11.174v-.01"
    />
  </Svg>
);
export default IconlystXboxPlaystationBroken;
