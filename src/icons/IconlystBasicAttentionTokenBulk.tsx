import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBasicAttentionTokenBulk = ({
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
      d="M16.717 2.5H8.282C5.123 2.5 3 4.722 3 8.03v7.94c0 3.308 2.123 5.53 5.282 5.53h8.434c3.161 0 5.284-2.222 5.284-5.53V8.03c0-3.308-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.88 15.051a.75.75 0 0 1-.651.379H8.77a.752.752 0 0 1-.645-1.133l3.729-6.28c.27-.455 1.02-.455 1.29 0l3.729 6.28a.75.75 0 0 1 .007.754m-1.969-1.121h-4.823L12.5 9.869z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBasicAttentionTokenBulk;
