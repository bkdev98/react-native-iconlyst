import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsInTheHeart3Bold = ({
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
      d="M13.163 13.678a2 2 0 1 1 2.364-3.227l3.023 2.214c.13.096.31.07.427-.042.246-.235.552-.412.907-.496.367-.085.732-.06 1.065.05.175.057.376-.02.429-.196.46-1.534.467-3.177-.143-4.682-.642-1.585-1.88-2.741-3.487-3.257a5.8 5.8 0 0 0-2.743-.194c-.839.14-1.594.636-2.23 1.1-.614-.445-1.388-.95-2.23-1.091a5.9 5.9 0 0 0-2.743.186q-.12.039-.234.082c-.207.078-.234.35-.057.48A2 2 0 1 1 5.145 7.83l-.487-.357a.287.287 0 0 0-.444.13c-.494 1.427-.494 3.043-.03 4.484 1.527 4.903 8.1 8.018 8.38 8.148a.5.5 0 0 0 .422 0c.124-.058 1.515-.72 3.151-1.88.128-.09.16-.263.096-.406a1.93 1.93 0 0 1 .028-1.648c.07-.145.04-.324-.09-.419z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.328 6.968a.748.748 0 0 0 .444-1.354l-2.384-1.75A.749.749 0 1 0 3.5 5.072l2.385 1.75a.74.74 0 0 0 .443.146M21.75 16.81v-.01l-.619-2.63a.749.749 0 0 0-1.332-.275l-.593.8-4.418-3.235a.749.749 0 1 0-.886 1.21l4.411 3.232-.597.807a.748.748 0 0 0 .602 1.196l.051-.002 2.702-.183a.75.75 0 0 0 .552-.302.73.73 0 0 0 .13-.39.8.8 0 0 0-.003-.217"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowsInTheHeart3Bold;
