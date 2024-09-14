import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystModemOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.788 6.116a4.3 4.3 0 0 0-1.645-.325.75.75 0 1 1-.003-1.5 5.79 5.79 0 0 1 5.801 5.79.75.75 0 1 1-1.5 0 4.29 4.29 0 0 0-2.654-3.965m-4.52-1.673a.75.75 0 0 1 .75.75v6.396h10.77a3.256 3.256 0 0 1 3.256 3.256v1.607a3.256 3.256 0 0 1-3.256 3.257H5.8a3.256 3.256 0 0 1-3.256-3.257v-1.607A3.257 3.257 0 0 1 5.8 11.589h.719V5.193a.75.75 0 0 1 .75-.75M7.25 13.09H5.8c-.97 0-1.756.786-1.756 1.756v1.607c0 .97.786 1.757 1.756 1.757h12.988c.97 0 1.756-.786 1.756-1.757v-1.607c0-.97-.786-1.756-1.756-1.756H7.249m3.575-4.645a1.8 1.8 0 0 0-.68-.133.75.75 0 0 1-.005-1.5 3.27 3.27 0 0 1 3.282 3.27.75.75 0 0 1-1.5 0 1.77 1.77 0 0 0-1.097-1.637m-.682.848a.75.75 0 0 1 .75.75v.039a.75.75 0 0 1-1.5 0v-.039a.75.75 0 0 1 .75-.75m-4.35 6.357a.75.75 0 0 1 .75-.75h.51a.75.75 0 0 1 0 1.5h-.51a.75.75 0 0 1-.75-.75m3.056 0a.75.75 0 0 1 .75-.75h.508a.75.75 0 1 1 0 1.5h-.508a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystModemOutline;
