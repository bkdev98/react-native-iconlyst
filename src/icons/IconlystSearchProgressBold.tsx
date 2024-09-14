import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchProgressBold = ({
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
      d="M15.344 11.788h-8.07c-.42 0-.75-.33-.75-.75 0-.41.33-.75.75-.75h8.07c.42 0 .75.34.75.75 0 .42-.33.75-.75.75m-1.14 3h-.37a.749.749 0 1 1 0-1.5h.37a.749.749 0 1 1 0 1.5m-2.56 0h-3.23a.749.749 0 1 1 0-1.5h3.23a.749.749 0 1 1 0 1.5m-3.22-7.5h.37c.42 0 .75.34.75.75 0 .42-.33.75-.75.75h-.37c-.42 0-.75-.33-.75-.75 0-.41.33-.75.75-.75m2.57 0h3.21a.749.749 0 1 1 0 1.5h-3.21a.749.749 0 1 1 0-1.5m.14-4.79a8.42 8.42 0 1 0 0 16.84 8.42 8.42 0 0 0 0-16.84M20.993 19.794l-1.983-1.979a1 1 0 0 0-1.413 1.417l1.984 1.978a1 1 0 1 0 1.412-1.416"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchProgressBold;
