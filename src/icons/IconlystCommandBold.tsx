import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCommandBold = ({
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
      d="M6.286 5C5.577 5 5 5.577 5 6.285c0 .709.577 1.286 1.286 1.286h1.286V6.285C7.572 5.577 6.995 5 6.286 5m10.143 2.571h1.286c.708 0 1.285-.577 1.285-1.286C19 5.577 18.423 5 17.715 5c-.709 0-1.286.577-1.286 1.285zm-6.857 6.858h4.857V9.571H9.572zm-3.286 2a1.287 1.287 0 0 0 0 2.571c.709 0 1.286-.577 1.286-1.286v-1.285zm10.143 0v1.285c0 .709.577 1.286 1.286 1.286a1.287 1.287 0 0 0 0-2.571zM17.715 21a3.29 3.29 0 0 1-3.286-3.286v-1.285H9.572v1.285A3.29 3.29 0 0 1 6.286 21 3.29 3.29 0 0 1 3 17.714a3.29 3.29 0 0 1 3.286-3.285h1.286V9.571H6.286A3.29 3.29 0 0 1 3 6.285 3.29 3.29 0 0 1 6.286 3a3.29 3.29 0 0 1 3.286 3.285v1.286h4.857V6.285A3.29 3.29 0 0 1 17.715 3 3.29 3.29 0 0 1 21 6.285a3.29 3.29 0 0 1-3.285 3.286h-1.286v4.858h1.286A3.29 3.29 0 0 1 21 17.714 3.29 3.29 0 0 1 17.715 21"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCommandBold;
