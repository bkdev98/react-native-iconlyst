import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordCloseBold = ({
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
      d="M10.748 9.975a1.011 1.011 0 1 1 2.022.002 1.011 1.011 0 0 1-2.022-.002m-2.895 1.011a1.01 1.01 0 0 1-1.011-1.01 1.012 1.012 0 0 1 2.022 0c0 .557-.453 1.01-1.011 1.01m7.81-2.02a1.011 1.011 0 1 1-.001 2.021 1.011 1.011 0 0 1 .002-2.022m1.5 2.778a5.8 5.8 0 0 1 3.56 1.224c.189.146.474.048.498-.189a7 7 0 0 0 .037-.703v-4.05c0-3.308-2.123-5.53-5.282-5.53H7.54c-3.16 0-5.282 2.222-5.282 5.53v4.05c0 3.307 2.123 5.53 5.282 5.53h3.466a.32.32 0 0 0 .311-.33c-.054-3.031 2.966-5.532 5.846-5.532"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.163 20.654a3.084 3.084 0 0 1-3.08-3.08 3.084 3.084 0 0 1 3.08-3.08 3.083 3.083 0 0 1 3.079 3.08 3.083 3.083 0 0 1-3.08 3.08m0-7.66a4.586 4.586 0 0 0-4.58 4.58 4.586 4.586 0 0 0 4.58 4.58 4.585 4.585 0 0 0 4.579-4.58 4.585 4.585 0 0 0-4.58-4.58"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.99 16.494a.749.749 0 0 0-1.28-.53l-.55.55-.55-.55a.749.749 0 1 0-1.06 1.06l.55.55-.55.55a.74.74 0 0 0-.22.53.749.749 0 0 0 1.28.53l.55-.55.55.55c.147.147.339.22.53.22a.749.749 0 0 0 .53-1.28l-.55-.55.55-.55a.74.74 0 0 0 .22-.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPasswordCloseBold;
