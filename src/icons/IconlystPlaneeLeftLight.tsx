import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneeLeftLight = ({
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
      d="m16.784 13.983-2.23-2.68 4.666-4.744c-.545-.485-1.02-.986-1.573-1.381-.643-.46-1.388-.386-2.1-.14a210 210 0 0 0-4.881 1.743c-.409.154-.655.084-.947-.218-.84-.867-1.684-1.732-2.58-2.538-.924-.831-2.572-1.55-3.618-.504s-.328 2.693.503 3.617c.807.896 1.673 1.74 2.54 2.582.301.29.371.537.217.946a203 203 0 0 0-1.742 4.881c-.247.712-.32 1.458.14 2.1.394.552.894 1.029 1.38 1.574l4.744-4.667 2.694 2.216-.286 2.771L15.168 21l2.188-3.645 3.643-2.187-1.457-1.458z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlaneeLeftLight;
