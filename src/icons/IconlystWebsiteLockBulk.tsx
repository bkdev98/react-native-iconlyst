import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebsiteLockBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M10.75 7.602h-.063a.75.75 0 1 1 0-1.5c.414 0 .782.336.782.75s-.305.75-.719.75m-2.486 0h-.063a.75.75 0 0 1 0-1.5c.414 0 .781.336.781.75s-.304.75-.718.75m-2.487 0h-.062a.75.75 0 0 1 0-1.5c.414 0 .781.336.781.75s-.305.75-.719.75m15.147.729c0-3.307-2.123-5.53-5.282-5.53H7.207c-3.16 0-5.283 2.223-5.283 5.53v.41a.3.3 0 0 0 .3.3h18.4a.3.3 0 0 0 .3-.3zM20.575 19.568a.78.78 0 0 1-.782.778h-3.087a.78.78 0 0 1-.782-.778V17.83c0-.429.35-.779.782-.779h3.087c.431 0 .782.35.782.779zm-2.334-5.44c.276-.024.563.102.771.303.21.203.327.477.33.76v.36h-2.185v-.356a1.08 1.08 0 0 1 1.084-1.067m2.601 1.69v-.636a2.57 2.57 0 0 0-.787-1.827 2.6 2.6 0 0 0-1.835-.727 2.574 2.574 0 0 0-2.563 2.553v.637a2.27 2.27 0 0 0-1.233 2.012v1.738a2.28 2.28 0 0 0 2.282 2.278h3.087a2.28 2.28 0 0 0 2.282-2.278V17.83c0-.877-.504-1.631-1.233-2.012"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.206 11.173a4 4 0 0 1 2.177.633c.22.142.542-.005.542-.266v-.697a.3.3 0 0 0-.3-.3h-18.4a.3.3 0 0 0-.3.3v5.44c0 3.302 2.123 5.52 5.283 5.52h5.908c.245 0 .393-.283.282-.501a3.54 3.54 0 0 1-.387-1.608v-1.831c0-1.057.466-1.998 1.193-2.657a.33.33 0 0 0 .108-.232c.075-2.077 1.801-3.78 3.894-3.801"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystWebsiteLockBulk;
