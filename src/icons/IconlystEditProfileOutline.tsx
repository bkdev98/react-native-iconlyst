import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEditProfileOutline = ({
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
      d="M15.024 20.694a1.59 1.59 0 0 1-1.574-1.764l.082-.772c.057-.53.279-1.029.634-1.426l2.958-3.257a1.77 1.77 0 0 1 1.243-.575 1.75 1.75 0 0 1 1.277.473l.691.64a1.78 1.78 0 0 1 .1 2.513l-2.914 3.21c-.386.428-.906.714-1.476.81l-.75.126q-.135.022-.27.022m3.411-6.3h-.01a.28.28 0 0 0-.2.09l-2.949 3.248a1.04 1.04 0 0 0-.257.582l-.083.775.227.84-.124-.74.751-.127c.235-.04.45-.157.608-.335l2.923-3.218a.283.283 0 0 0-.01-.4l-.69-.64a.28.28 0 0 0-.186-.069zM10.895 12.74a4.746 4.746 0 1 1 .003-9.491 4.746 4.746 0 0 1-.003 9.491m0-7.991a3.245 3.245 0 1 0 .002 6.49 3.245 3.245 0 0 0-.002-6.49M10.894 20.746c-1.733 0-7 0-7-3.321 0-3.3 5.088-3.3 7-3.3a.75.75 0 0 1 0 1.5c-2.511 0-5.5.313-5.5 1.8 0 1.505 2.993 1.821 5.5 1.821a.75.75 0 0 1 0 1.5"
    />
  </Svg>
);
export default IconlystEditProfileOutline;
