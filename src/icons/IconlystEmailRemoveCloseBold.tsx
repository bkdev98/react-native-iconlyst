import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailRemoveCloseBold = ({
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
      d="M13.275 12.725q-.75.6-1.8.6-.9 0-1.8-.6l-4-3.3c-.3-.3-.4-.7-.1-1.1s.7-.4 1.1-.1l4 3.2c.5.4 1.2.4 1.6 0l4-3.2c.3-.3.8-.2 1.1.1.3.5.2.9-.1 1.2zm6.3-.2c.385 0 .76.04 1.126.108a.313.313 0 0 0 .374-.301V8.625c0-3.1-2.2-5.5-5.1-5.5h-8.8c-2.9 0-5.1 2.4-5.1 5.5v6.2c0 1.6.6 3.1 1.6 4.1.9.9 2.1 1.4 3.5 1.4H13.2c.197 0 .34-.187.3-.38a6 6 0 0 1-.126-1.22 6.2 6.2 0 0 1 6.2-6.2"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m21.705 19.594-1.47-1.47 1.37-1.369a.749.749 0 1 0-1.06-1.06l-1.37 1.37-1.37-1.37a.75.75 0 0 0-1.06 1.06l1.37 1.37-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 1 0 1.06-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEmailRemoveCloseBold;
