import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoginBulk = ({
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
      d="M16.76 2.709a4.125 4.125 0 0 1 4.125 4.125v10.83a4.126 4.126 0 0 1-4.126 4.125h-4.677a4.126 4.126 0 0 1-4.125-4.125V6.834a4.125 4.125 0 0 1 4.125-4.125z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m13.77 13-1.48 1.48c-.29.29-.29.76 0 1.06.29.29.77.29 1.06 0l2.77-2.76c.05-.05.09-.1.12-.16.01 0 .01 0 .01-.01.01-.03.03-.05.04-.08.03-.08.05-.17.05-.26v-.04c0-.09-.02-.18-.05-.26-.03-.06-.06-.11-.09-.16-.03-.03-.05-.06-.08-.09l-2.77-2.76a.754.754 0 0 0-1.06 0c-.29.3-.29.77 0 1.07l1.48 1.47H3.866a.75.75 0 0 0 0 1.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLoginBulk;
