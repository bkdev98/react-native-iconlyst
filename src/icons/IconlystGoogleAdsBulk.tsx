import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleAdsBulk = ({
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
      d="m12.005 13.464-3.13 5.41-.06.11c-.17.3-.38.56-.62.79-.4.38-.88.65-1.42.79-.29.07-.59.11-.88.11-.3 0-.59-.04-.88-.11-.29-.08-.56-.19-.82-.34-.19-.11-.37-.24-.53-.39-.09-.07-.16-.15-.24-.23a3.3 3.3 0 0 1-.81-1.43 3.33 3.33 0 0 1 .34-2.58l6.1-10.58c.38-.66.96-1.16 1.66-1.43-.14.05-.27.12-.4.2-.78.45-1.34 1.17-1.57 2.05-.24.87-.12 1.79.33 2.57z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.385 18.174c-.23.87-.79 1.6-1.58 2.05-.52.3-1.1.45-1.69.45-.29 0-.58-.04-.87-.11-.88-.23-1.61-.79-2.06-1.58l-3.18-5.52-2.93-5.06c-.45-.78-.57-1.7-.33-2.57.23-.88.79-1.6 1.57-2.05.13-.08.26-.15.4-.2.11-.05.22-.09.34-.12.02-.01.04-.01.06-.02a3.36 3.36 0 0 1 1.78 0q.227.068.45.168a3.33 3.33 0 0 1 1.6 1.402l6.1 10.58c.46.79.58 1.7.34 2.58M7.588 14.354a3.36 3.36 0 0 0-2.57-.338 3.38 3.38 0 0 0-2.057 1.58 3.36 3.36 0 0 0-.337 2.577c.235.873.796 1.6 1.576 2.046a3.37 3.37 0 0 0 2.57.343 3.36 3.36 0 0 0 2.058-1.575 3.407 3.407 0 0 0-1.24-4.633"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGoogleAdsBulk;
