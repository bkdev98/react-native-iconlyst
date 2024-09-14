import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAaveBold = ({
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
      d="M15.946 16.62a.753.753 0 0 1-.99-.381L12 9.589l-.87 1.956h.635a.75.75 0 0 1 0 1.5h-1.302l-1.42 3.194a.75.75 0 0 1-.991.38.75.75 0 0 1-.38-.99l1.149-2.584h-.464a.75.75 0 0 1 0-1.5h1.131l1.826-4.106a.752.752 0 0 1 1.371 0l3.642 8.19a.75.75 0 0 1-.381.99m.271-14.115H7.782c-3.159 0-5.282 2.222-5.282 5.53v7.939c0 3.308 2.123 5.53 5.282 5.53h8.434c3.16 0 5.284-2.222 5.284-5.53v-7.94c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAaveBold;
