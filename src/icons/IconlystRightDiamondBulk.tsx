import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRightDiamondBulk = ({
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
      d="m19.978 9.005-4.672-4.672c-1.98-1.979-4.58-2.036-6.473-.143L3.875 9.148c-.942.941-1.417 2.067-1.375 3.256.041 1.155.566 2.267 1.517 3.218l4.672 4.672c1.016 1.016 2.195 1.525 3.358 1.525 1.104 0 2.195-.46 3.116-1.38l4.958-4.96c1.893-1.893 1.836-4.495-.143-6.474"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.327 12.315c0 .2-.08.391-.22.532l-2.804 2.791a.75.75 0 0 1-1.06-.003.75.75 0 0 1 .001-1.06l1.518-1.512H8.416a.75.75 0 0 1 0-1.5h5.344l-1.516-1.51a.75.75 0 1 1 1.06-1.063l2.797 2.79q.11.105.168.246c.02.05.022.103.031.155.01.044.027.085.027.132z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRightDiamondBulk;
