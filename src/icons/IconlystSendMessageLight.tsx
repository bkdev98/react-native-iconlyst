import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSendMessageLight = ({
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
      d="m20.933 5.87-4.334 14.824c-.393 1.343-2.186 1.585-2.919.393l-3.781-6.154-6.133-3.793c-1.188-.735-.946-2.535.392-2.93l14.774-4.348c1.224-.36 2.36.78 2 2.008M15.803 8.979 9.94 14.922"
    />
  </Svg>
);
export default IconlystSendMessageLight;
