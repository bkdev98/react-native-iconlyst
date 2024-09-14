import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTurnLeftSquareBold = ({
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
      d="M12.848 16.637H8.565a.75.75 0 0 1 0-1.5h4.283a2.173 2.173 0 0 0 2.171-2.17c0-1.197-.974-2.17-2.171-2.17h-2.801l.663.663a.749.749 0 1 1-1.06 1.06l-1.933-1.933A.74.74 0 0 1 7.71 9.51l1.94-1.939a.751.751 0 0 1 1.06 1.062l-.664.664h2.802a3.675 3.675 0 0 1 3.671 3.67 3.675 3.675 0 0 1-3.671 3.67M16.217 2.75H7.782C4.622 2.75 2.5 4.97 2.5 8.276v7.948c0 3.305 2.122 5.526 5.282 5.526h8.434c3.16 0 5.284-2.221 5.284-5.526V8.276c0-3.306-2.123-5.526-5.283-5.526"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTurnLeftSquareBold;
