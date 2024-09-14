import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAndroidBulk = ({
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
      fillRule="evenodd"
      d="M7.866 5.386a.31.31 0 0 0 .054-.402L6.88 3.42a.753.753 0 0 1 .21-1.04c.35-.23.82-.14 1.04.21l1.054 1.59a.31.31 0 0 0 .384.11 6 6 0 0 1 2.412-.51c.848 0 1.647.18 2.376.493a.31.31 0 0 0 .38-.105L15.83 2.58a.75.75 0 0 1 1.24.85l-1.054 1.523a.31.31 0 0 0 .052.407 6.03 6.03 0 0 1 1.963 3.781.288.288 0 0 1-.291.319H6.22a.288.288 0 0 1-.291-.319 6.04 6.04 0 0 1 1.937-3.754"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M17.78 10.959a.3.3 0 0 1 .3.3v6.44c0 .7-.57 1.27-1.26 1.27h-1.75a.3.3 0 0 0-.3.3v1.73c0 .42-.33.75-.75.75-.41 0-.75-.33-.75-.75v-1.73a.3.3 0 0 0-.3-.3h-2.19a.3.3 0 0 0-.3.3v1.73c0 .42-.34.75-.75.75-.42 0-.75-.33-.75-.75v-1.73a.3.3 0 0 0-.3-.3H7.14c-.69 0-1.26-.57-1.26-1.27v-6.44a.3.3 0 0 1 .3-.3zM3.104 9.783a.75.75 0 0 0-.75.75v5.59a.75.75 0 0 0 1.5 0v-5.59a.75.75 0 0 0-.75-.75M20.896 9.783a.75.75 0 0 0-.75.75v5.59a.75.75 0 0 0 1.5 0v-5.59a.75.75 0 0 0-.75-.75" />
    </G>
  </Svg>
);
export default IconlystAndroidBulk;
