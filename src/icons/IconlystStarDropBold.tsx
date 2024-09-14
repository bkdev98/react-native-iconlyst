import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarDropBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m18.334 12.538-3.215-.458a.48.48 0 0 1-.362-.26l-1.44-2.88-.003-.005a1.53 1.53 0 0 0-.638-.639 1.49 1.49 0 0 0-1.989.643l-1.445 2.882a.47.47 0 0 1-.352.257l-3.224.46a1.5 1.5 0 0 0-.853.43 1.45 1.45 0 0 0-.407 1.043c.01.388.168.75.446 1.013l2.334 2.24a.46.46 0 0 1 .134.402l-.555 3.17c-.05.314.003.632.153.922a1.473 1.473 0 0 0 1.98.61l2.886-1.493a.47.47 0 0 1 .441.002l2.871 1.486c.217.116.456.176.684.176q.12 0 .237-.022a1.463 1.463 0 0 0 1.218-1.69l-.55-3.163a.45.45 0 0 1 .131-.4l2.331-2.24a1.46 1.46 0 0 0 .434-.855 1.454 1.454 0 0 0-1.247-1.63M6.268 9.093a.75.75 0 0 0 .75-.75v-3.26a.75.75 0 0 0-1.5 0v3.26c0 .414.336.75.75.75M12 6.163a.75.75 0 0 0 .75-.75v-1.37a.75.75 0 0 0-1.5 0v1.37c0 .414.336.75.75.75M17.733 9.093a.75.75 0 0 0 .75-.75v-3.26a.75.75 0 0 0-1.5 0v3.26c0 .414.336.75.75.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStarDropBold;
