import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingCartRemoveBulk = ({
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
      d="M21.38 6.259c-.36-.48-.91-.72-1.51-.75l-13.52.11-.62-2.64a.76.76 0 0 0-.73-.58H3a.749.749 0 1 0 0 1.5h1.4l2.52 10.65c.32 1.36 1.54 2.3 2.91 2.3.09 0 .18 0 .27-.01l6.94-.64a3.23 3.23 0 0 0 2.8-2.28l1.83-6c.17-.58.07-1.18-.29-1.66"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.83 19.138a1.232 1.232 0 1 0 .003 2.464 1.232 1.232 0 0 0-.003-2.464M18.041 19.138a1.232 1.232 0 1 0 .003 2.464 1.232 1.232 0 0 0-.003-2.464"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M11.86 11.689h3.15c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-3.15c-.41 0-.75.34-.75.75s.34.75.75.75"
    />
  </Svg>
);
export default IconlystShoppingCartRemoveBulk;
