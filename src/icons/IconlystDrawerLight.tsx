import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDrawerLight = ({
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
      d="M6.61 4.337h10.778C19.614 4.337 21 5.908 21 8.132v6.002c0 2.223-1.386 3.794-3.613 3.794H6.611C4.385 17.928 3 16.357 3 14.134V8.132c0-2.224 1.391-3.795 3.61-3.795M5.518 19.663v-1.86M18.482 19.663v-1.86M10.97 14.59h2.06M10.97 7.95h2.06M3 11.501h18"
    />
  </Svg>
);
export default IconlystDrawerLight;
