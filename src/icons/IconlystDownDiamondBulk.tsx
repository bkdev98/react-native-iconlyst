import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownDiamondBulk = ({
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
      d="M11.995 16.643c-.2 0-.39-.08-.532-.22l-2.79-2.804a.75.75 0 0 1 .002-1.06.75.75 0 0 1 1.061.001l1.511 1.518V8.732a.75.75 0 0 1 1.5 0v5.344l1.511-1.516a.75.75 0 0 1 1.062 1.06l-2.789 2.797a.7.7 0 0 1-.247.168c-.049.02-.103.022-.155.031-.044.01-.085.027-.132.027z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDownDiamondBulk;
