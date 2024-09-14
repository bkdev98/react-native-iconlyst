import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKeyboardCloseDownBold = ({
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
      d="m13.909 18.721-1.917 1.257-1.906-1.25a.749.749 0 1 0-.822 1.254l2.317 1.52a.75.75 0 0 0 .823 0l2.327-1.527a.75.75 0 0 0 .216-1.038.75.75 0 0 0-1.038-.216M16.979 7.573a.864.864 0 1 1 .001-1.723.864.864 0 0 1-.001 1.723m-1.662 2.802a.864.864 0 1 1 .002-1.728.864.864 0 0 1-.002 1.728m-.573 3.463H9.253a.75.75 0 0 1 0-1.5h5.491a.75.75 0 0 1 0 1.5M7.808 9.512a.864.864 0 1 1 1.728.002.864.864 0 0 1-1.728-.002m-.8-1.939a.864.864 0 1 1 .001-1.723.864.864 0 0 1-.001 1.723m3.325-1.725a.864.864 0 1 1-.001 1.727.864.864 0 0 1 .001-1.727m1.662 2.801a.864.864 0 1 1-.002 1.728.864.864 0 0 1 .002-1.728m1.66-2.801a.864.864 0 1 1-.001 1.727.864.864 0 0 1 .001-1.727m2.458-3.473H7.886c-3.219 0-5.141 1.885-5.141 5.045v4.741c-.005 1.524.453 2.792 1.324 3.665.894.898 2.211 1.372 3.808 1.372h8.236c3.22 0 5.142-1.882 5.142-5.035V7.494c0-3.206-1.922-5.119-5.142-5.119"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystKeyboardCloseDownBold;
