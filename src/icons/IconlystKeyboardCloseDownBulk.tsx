import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKeyboardCloseDownBulk = ({
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
      d="M16.113 17.201H7.886c-3.219 0-5.141-1.885-5.141-5.045v-4.74C2.74 5.89 3.198 4.623 4.069 3.75c.894-.897 2.211-1.372 3.808-1.372h8.236c3.22 0 5.142 1.882 5.142 5.035v4.67c0 3.205-1.922 5.118-5.142 5.118"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m10.087 18.725 1.907 1.25 1.917-1.257a.749.749 0 1 1 .823 1.254l-2.328 1.527a.75.75 0 0 1-.823 0l-2.318-1.52a.75.75 0 1 1 .822-1.254M16.979 7.52a.864.864 0 1 1 .001-1.723.864.864 0 0 1-.001 1.722m-1.662 2.801a.864.864 0 1 1 .002-1.727.864.864 0 0 1-.002 1.727m-.573 3.463H9.253a.75.75 0 0 1 0-1.5h5.491a.75.75 0 0 1 0 1.5M7.808 9.458a.864.864 0 1 1 1.728.002.864.864 0 0 1-1.728-.002m-.8-1.939a.864.864 0 1 1 .001-1.723.864.864 0 0 1-.001 1.723m3.325-1.725a.864.864 0 1 1-.001 1.728.864.864 0 0 1 .001-1.728m1.662 2.801a.864.864 0 1 1-.002 1.728.864.864 0 0 1 .002-1.728m1.66-2.8a.864.864 0 1 1-.001 1.727.864.864 0 0 1 .001-1.728"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystKeyboardCloseDownBulk;
