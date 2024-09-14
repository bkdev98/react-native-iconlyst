import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRightTwiceOutline = ({
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
      d="M15.423 11.544a.75.75 0 0 1 1.06 0l3.965 3.964a.75.75 0 0 1 0 1.06l-3.965 3.964a.75.75 0 0 1-1.06-1.06l3.434-3.434-3.434-3.433a.75.75 0 0 1 0-1.061"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.332 16.035a.75.75 0 0 1 .75-.75h15.836a.75.75 0 1 1 0 1.5H4.082a.75.75 0 0 1-.75-.75M8.187 3.47a.75.75 0 0 1 1.06 0l3.586 3.583a.75.75 0 0 1-.03 1.091L9.248 11.7a.75.75 0 0 1-1.06-1.06l2.302-2.303H4.082a.75.75 0 0 1 0-1.5h6.412L8.187 4.53a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRightTwiceOutline;
