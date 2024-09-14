import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingBasketRemoveBold = ({
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
      d="m8.968 8.744 3.087-4.062c.436-.574 1.385-.574 1.822 0l3.086 4.062zm6.056 7.012h-3.962a.75.75 0 0 1 0-1.5h3.962a.75.75 0 0 1 0 1.5m6.802-5.861c-.606-.764-1.585-1.151-2.91-1.151h-.07l-3.775-4.97a2.62 2.62 0 0 0-2.106-1.044c-.833 0-1.6.381-2.104 1.044l-3.777 4.97h-.07c-1.324 0-2.302.387-2.91 1.151-.655.825-.807 2.016-.455 3.529l.967 4.641c.406 2.214 2.036 3.205 3.47 3.205h9.757c1.437 0 3.066-.991 3.469-3.193l.968-4.642c.354-1.524.202-2.715-.454-3.54"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShoppingBasketRemoveBold;
