import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingBagRemoveBold = ({
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
      d="M14.58 15.03H9.427a.75.75 0 0 1 0-1.5h5.153a.75.75 0 0 1 0 1.5M9.652 4.83a3.28 3.28 0 0 1 2.323-.955c1.74.027 3.131 1.323 3.281 3.002h-6.55a3.26 3.26 0 0 1 .946-2.047m11.231 11.02-.737-5.7c-.53-2.413-2.088-3.273-3.368-3.273h-.023c-.154-2.505-2.222-4.502-4.762-4.502h-.02a4.76 4.76 0 0 0-3.377 1.39c-.84.833-1.316 1.928-1.39 3.116-1.27.018-2.889.883-3.334 3.313l-.728 5.645c-.292 1.95-.023 3.373.822 4.355.83.963 2.178 1.43 4.122 1.43h7.817c1.766 0 3.162-.534 4.038-1.544.881-1.015 1.196-2.441.94-4.23"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShoppingBagRemoveBold;
