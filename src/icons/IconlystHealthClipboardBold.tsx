import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHealthClipboardBold = ({
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
      fill={props.color}
      d="M11.938 2.82c-.988 0-1.89.557-2.332 1.44a.42.42 0 0 1-.374.232h-.16a1.254 1.254 0 0 0 0 2.509h5.854a1.255 1.255 0 0 0 0-2.51h-.16a.42.42 0 0 1-.374-.23 2.61 2.61 0 0 0-2.332-1.442z"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.445 5.913c.008-.156.171-.268.305-.188 1.195.718 1.869 2.055 1.869 3.645v7.599c0 1.19-.375 2.247-1.088 3.011-.718.768-1.74 1.2-2.954 1.2H8.414c-1.214 0-2.235-.432-2.95-1.2-.711-.765-1.083-1.822-1.083-3.011V9.37c0-1.59.673-2.926 1.868-3.644.134-.08.297.031.305.187.066 1.205 1.085 2.222 2.33 2.222h6.23c1.246 0 2.266-1.017 2.33-2.222M8.885 16.14a.75.75 0 0 0 0 1.5h6.23a.75.75 0 1 0 0-1.5zM12 9.661a.75.75 0 0 1 .75.75v.85h.853a.75.75 0 0 1 0 1.5h-.853v.854a.75.75 0 0 1-1.5 0v-.855H10.4a.75.75 0 0 1 0-1.5h.851v-.85a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHealthClipboardBold;
