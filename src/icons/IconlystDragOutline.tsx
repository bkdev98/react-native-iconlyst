import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDragOutline = ({
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
      d="M10.933 3.75a.93.93 0 0 0-.93.93v9.64a.75.75 0 0 1-1.368.425l-1.202-1.744a1.09 1.09 0 0 0-1.285-.398c-.537.206-.79.767-.61 1.26.586 1.618 1.514 3.417 2.695 4.886.764.949 2.456 1.505 4.385 1.501 1.918-.004 3.71-.562 4.578-1.43.719-.719 1.318-1.857 1.618-3.14.3-1.28.286-2.625-.13-3.747-.352-.95-1.155-1.456-2.308-1.747-.87-.22-1.808-.287-2.742-.355q-.515-.036-1.026-.082a.75.75 0 0 1-.678-.735l-.067-4.348a.93.93 0 0 0-.93-.916m-2.43.93a2.43 2.43 0 0 1 4.86-.037l.056 3.667.21.015c.966.07 2.104.152 3.113.407 1.375.346 2.75 1.063 3.35 2.68.54 1.46.533 3.116.183 4.61-.35 1.492-1.06 2.901-2.018 3.859-1.273 1.272-3.54 1.865-5.636 1.869-2.086.004-4.362-.576-5.557-2.061-1.303-1.621-2.306-3.573-2.937-5.315-.474-1.309.231-2.691 1.484-3.171a2.59 2.59 0 0 1 2.891.732zM6.28 3.47a.75.75 0 0 1 0 1.06l-.97.97.97.97a.75.75 0 0 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06l1.5-1.5a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.75 4.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5m-2.25.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 5.5a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5A.75.75 0 0 1 12 5.5M3.5 5.5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDragOutline;
