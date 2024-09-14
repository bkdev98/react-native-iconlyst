import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKeyboardOpenUpBold = ({
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
      d="M16.979 11.996a.864.864 0 1 1 .001-1.723.864.864 0 0 1-.001 1.723m-1.662 2.802a.864.864 0 1 1 .002-1.727.864.864 0 0 1-.002 1.727m-.573 3.463H9.253a.75.75 0 0 1 0-1.5h5.491a.75.75 0 0 1 0 1.5m-6.936-4.326a.864.864 0 1 1 1.728.002.864.864 0 0 1-1.728-.002m-.8-1.939a.864.864 0 1 1 .001-1.723.864.864 0 0 1-.001 1.723m3.325-1.725a.864.864 0 1 1-.001 1.727.864.864 0 0 1 .001-1.727m1.662 2.801a.864.864 0 1 1-.002 1.728.864.864 0 0 1 .002-1.728m1.66-2.8a.864.864 0 1 1-.001 1.726.864.864 0 0 1 .001-1.727m2.458-3.474H7.886c-3.219 0-5.141 1.885-5.141 5.045v4.741c-.005 1.524.453 2.791 1.324 3.665.894.897 2.211 1.372 3.808 1.372h8.236c3.22 0 5.142-1.882 5.142-5.035v-4.669c0-3.206-1.922-5.119-5.142-5.119M10.087 5.275l1.907-1.25 1.917 1.257a.749.749 0 1 0 .823-1.254l-2.328-1.527a.75.75 0 0 0-.823-.001L9.265 4.02a.75.75 0 1 0 .822 1.255"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystKeyboardOpenUpBold;
