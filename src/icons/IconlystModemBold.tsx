import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystModemBold = ({
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
      d="M9.863 17.273h-.51c-.42 0-.75-.33-.75-.75 0-.41.33-.75.75-.75h.51a.749.749 0 1 1 0 1.5m-3.06 0h-.51a.749.749 0 1 1 0-1.5h.51a.749.749 0 1 1 0 1.5m11.74-4.56h-5.55v-1.21a.749.749 0 1 0-1.5 0v1.21h-5.94c-1.66 0-3.01 1.35-3.01 3.01v1.6c0 1.66 1.35 3.01 3.01 3.01h12.99c1.65 0 3-1.35 3-3.01v-1.6a3.01 3.01 0 0 0-3-3.01M7.344 7.197a6.88 6.88 0 0 1 4.896-2.03 6.88 6.88 0 0 1 4.898 2.03.75.75 0 0 0 1.06 0 .75.75 0 0 0 0-1.06 8.37 8.37 0 0 0-5.958-2.47c-2.25 0-4.366.877-5.957 2.47a.75.75 0 1 0 1.06 1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.24 7.347a4.7 4.7 0 0 0-3.354 1.39.75.75 0 1 0 1.061 1.06 3.22 3.22 0 0 1 2.292-.95c.865 0 1.68.337 2.291.95a.751.751 0 0 0 1.061-1.06 4.7 4.7 0 0 0-3.352-1.39"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystModemBold;
