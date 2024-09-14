import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWifiControllerBroken = ({
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
      d="M20.997 17.078c.033 1.308-.188 2.736-1.517 3.277-1.251.462-2.273.227-2.947-.272-.728-.541-.807-1.2-1.854-1.785-1.046-.587-4.163-.69-5.358 0-1.195.688-1.125 1.244-1.854 1.785-.673.499-1.696.734-2.947.272-1.328-.54-1.55-1.969-1.517-3.277-.006-.295.241-7.08 3.037-8.542.574-.256 2.118-1.137 4.108.05 1.456.867 2.068 1.02 3.704 0 1.906-1.19 3.535-.306 4.11-.05 1.597.835 2.363 3.41 2.724 5.519M14.572 13.466v-.01M17.441 13.466v-.01M16.002 12.026h.01M16.002 14.896h.01M8.003 12.02v2.87m1.435-1.434h-2.87M10.807 6.513a1.69 1.69 0 0 1 2.386 0M9.615 4.385a3.377 3.377 0 0 1 4.774 0"
    />
  </Svg>
);
export default IconlystWifiControllerBroken;
