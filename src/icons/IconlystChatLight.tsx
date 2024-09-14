import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChatLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.834 18.85 1.422 1.427c.578.58 1.513.58 2.09 0l1.422-1.426a2.15 2.15 0 0 1 1.526-.634h1.068a3.946 3.946 0 0 0 3.939-3.953V7.325a3.945 3.945 0 0 0-3.939-3.952H7.24A3.946 3.946 0 0 0 3.3 7.325v6.94a3.946 3.946 0 0 0 3.94 3.952H8.31c.572 0 1.12.228 1.525.634"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChatLight;
