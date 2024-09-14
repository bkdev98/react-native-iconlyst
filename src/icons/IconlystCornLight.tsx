import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCornLight = ({
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
      d="M10.908 7.277c3.704-2.69 8.37-5.51 9.789-3.66 1.152 1.501-1.198 5.71-3.364 8.786M6.691 19.14l-1.094 1.728c-.659.673-3.025-1.97-2.53-2.479l1.702-1.132"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.96 10.474c-.038-1.491-.028-2.844-1.209-3.987-.027-.026-.697 1.752-3.373 4.263-2.302 2.324-2.625 5.702-.72 7.545 1.904 1.843 5.314 1.453 7.616-.871 2.63-2.656 4.008-3.45 4.974-3.993.59-.331-4.348-3.64-8.514.717"
    />
  </Svg>
);
export default IconlystCornLight;
