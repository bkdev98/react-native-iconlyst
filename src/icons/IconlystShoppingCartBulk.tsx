import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingCartBulk = ({
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
      d="M21.38 6.26c-.36-.48-.91-.77-1.51-.75l-13.52.11-.62-2.64A.76.76 0 0 0 5 2.4H3a.749.749 0 1 0 0 1.5h1.4l2.52 10.65c.32 1.36 1.54 2.3 2.91 2.3.09 0 .18 0 .27-.01l6.94-.64a3.23 3.23 0 0 0 2.8-2.28l1.83-6c.17-.58.07-1.18-.29-1.66"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.881 19.138a1.232 1.232 0 0 0 0 2.463 1.232 1.232 0 0 0 0-2.463M18.092 19.138a1.232 1.232 0 0 0 0 2.463 1.232 1.232 0 0 0 0-2.463"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M15.18 12.77c.35 0 .66-.25.73-.61l.51-2.65c.08-.4-.19-.8-.6-.87-.4-.08-.8.19-.87.59l-.51 2.65c-.08.41.19.8.59.88.05.01.1.01.15.01M11.61 12.98c.04 0 .09-.01.14-.01.41-.08.67-.48.6-.88l-.51-2.65a.76.76 0 0 0-.88-.6c-.41.08-.67.47-.6.88l.51 2.65c.07.36.38.61.74.61"
    />
  </Svg>
);
export default IconlystShoppingCartBulk;
