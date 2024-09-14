import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRemoveUserBold = ({
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
      d="M12.55 15.55c-.1-.2-.3-.2-.5-.2-3.1 0-4.8 1.3-5.5 2.8-1.7-1.6-2.6-3.7-2.6-6 0-1.3.3-2.5.8-3.6.2-.4 0-.8-.3-1-.4-.2-.8 0-1 .3-.7 1.3-1 2.7-1 4.2 0 3.2 1.6 6.2 4.2 8 1.6 1.1 3.5 1.7 5.5 1.7 1.5 0 2.9-.3 4.2-1 .2-.1.4-.3.4-.5s0-.5-.2-.7zM19.55 18.45c1.5-1.8 2.3-4 2.3-6.4 0-5.4-4.4-9.8-9.8-9.8-2.4 0-4.6.8-6.4 2.3l-1.4-1.4c-.3-.3-.8-.3-1.1 0s-.3.8 0 1.1l16.4 16.4c.1.1.3.2.5.2s.4-.1.5-.2c.3-.3.3-.8 0-1.1zm-4.9-5c.9-.7 1.5-1.9 1.5-3.1 0-2.2-1.8-4-4-4-1.2 0-2.4.6-3.1 1.5l-2.1-2.1c1.5-1.2 3.4-1.9 5.3-1.9 4.5 0 8.2 3.7 8.2 8.2 0 1.9-.7 3.8-1.9 5.3z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRemoveUserBold;
