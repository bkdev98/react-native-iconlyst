import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpCircleBulk = ({
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
      d="M12 2.5c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m15.55 10.631-3.021-3.03-.001-.003-.002-.002h-.001l-.002-.003h-.001l-.003-.004h-.002l-.002-.003a.74.74 0 0 0-.496-.206h-.021c-.006 0-.017.002-.017 0h-.003a.75.75 0 0 0-.502.21l-.002.003h-.001l-.007.008-3.017 3.03a.751.751 0 0 0 1.063 1.06l1.736-1.746v5.926a.75.75 0 0 0 1.5 0V9.944l1.74 1.746a.749.749 0 1 0 1.062-1.059"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUpCircleBulk;
