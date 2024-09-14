import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordCloseBulk = ({
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
      d="M17.163 11.744a5.8 5.8 0 0 1 3.561 1.224c.188.146.473.048.497-.189q.037-.342.037-.703v-4.05c0-3.308-2.123-5.53-5.282-5.53H7.54c-3.159 0-5.282 2.222-5.282 5.53v4.05c0 3.307 2.123 5.53 5.282 5.53h3.467a.32.32 0 0 0 .31-.33c-.054-3.031 2.966-5.532 5.846-5.532"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M6.842 9.975a1.012 1.012 0 0 0 2.022 0 1.011 1.011 0 0 0-2.022 0M11.758 8.965a1.011 1.011 0 1 0 .002 2.022 1.011 1.011 0 0 0-.002-2.022M15.664 8.965a1.011 1.011 0 1 1-.002 2.022 1.011 1.011 0 0 1 .002-2.022M18.771 15.963c.147.146.22.338.22.53a.74.74 0 0 1-.22.53l-.55.55.55.55a.749.749 0 1 1-1.06 1.06l-.55-.549-.55.55a.749.749 0 1 1-1.06-1.06l.55-.55-.55-.55a.749.749 0 1 1 1.06-1.06l.55.55.55-.55a.75.75 0 0 1 1.06 0"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.583 17.574a4.586 4.586 0 0 1 4.58-4.58 4.585 4.585 0 0 1 4.579 4.58 4.585 4.585 0 0 1-4.579 4.58 4.586 4.586 0 0 1-4.58-4.58m1.5 0a3.084 3.084 0 0 0 3.08 3.08 3.083 3.083 0 0 0 3.079-3.08 3.083 3.083 0 0 0-3.079-3.08 3.084 3.084 0 0 0-3.08 3.08"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPasswordCloseBulk;
