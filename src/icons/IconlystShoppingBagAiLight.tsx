import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingBagAiLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.412 12.078V8.155c0-2.849-1.775-4.862-4.627-4.862H7.626C4.783 3.293 3 5.306 3 8.155v7.688c0 2.849 1.773 4.862 4.626 4.862h4.522"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.168 8.924a3.46 3.46 0 0 1-3.463 3.463v0a3.463 3.463 0 0 1-3.463-3.463M17.56 20.705l.111-.3a4.14 4.14 0 0 1 2.441-2.445l.3-.111-.3-.111a4.14 4.14 0 0 1-2.44-2.445l-.112-.3-.11.3a4.14 4.14 0 0 1-2.442 2.445l-.3.11.3.112a4.14 4.14 0 0 1 2.441 2.445z"
    />
  </Svg>
);
export default IconlystShoppingBagAiLight;
