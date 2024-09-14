import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLockBoldsharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.06 9.607H8.44V8.014a3.77 3.77 0 0 1 1.125-2.682 3.78 3.78 0 0 1 2.679-1.102h.016c2.096 0 3.8 1.705 3.8 3.8zm-4.7 8.297h1.5v-3.722h-1.5zm6.2-8.297V8.03a5.306 5.306 0 0 0-5.297-5.301c-1.403-.03-2.748.54-3.753 1.536A5.28 5.28 0 0 0 6.94 8.03v1.576h-2.8V22.48h16.22V9.607z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLockBoldsharp;
