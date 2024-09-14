import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallSilentLightsharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M11.06 14.78c1.546 1.241 3.013 1.643 3.013 1.643l2.854-1.643 4.61 3.4c-.857 1.532-1.938 2.614-3.471 3.472-3.803.174-7.202-1.517-9.809-3.916m-1.952-2.103c-2.427-3.056-3.7-6.615-3.255-8.997.869-1.493 1.982-2.598 3.472-3.472l3.24 4.451L8.12 10.47s.22.922.928 2.058"
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.265 21.948 18.88 6.36"
    />
  </Svg>
);
export default IconlystCallSilentLightsharp;
