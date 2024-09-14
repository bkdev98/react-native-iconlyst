import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartFunLightsharp = ({
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
      d="M21.5 9.774c-.01-2.536-1.34-4.92-3.963-5.765-1.801-.582-3.763-.258-5.287 1.93-1.524-2.188-3.486-2.512-5.287-1.93C4.34 4.854 3.01 7.239 3 9.775c-.024 5.044 5.087 8.903 9.249 10.748h.002c4.163-1.845 9.274-5.705 9.249-10.749Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M15.993 11.429c-.77 1.323-2.14 2.393-3.723 2.365-1.584.028-2.954-1.042-3.724-2.365"
    />
  </Svg>
);
export default IconlystHeartFunLightsharp;
