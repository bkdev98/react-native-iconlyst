import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBookmarkSearchOutline = ({
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
      d="M5.801 3.176C6.743 2.5 7.99 2.25 9.29 2.25h5.917c1.343 0 2.6.27 3.536.987.971.743 1.484 1.88 1.484 3.35l.005 13.524a1.634 1.634 0 0 1-2.436 1.424h-.002l-5.52-3.119L6.7 21.541h-.001a1.632 1.632 0 0 1-2.431-1.426v-13.7c0-1.441.55-2.535 1.533-3.24m.874 1.22c-.544.388-.907 1.002-.907 2.02v13.702c0 .072.058.132.132.132a.14.14 0 0 0 .067-.017l5.942-3.332a.75.75 0 0 1 .736.002l5.886 3.325a.134.134 0 0 0 .182-.05l.001-.002a.13.13 0 0 0 .018-.064l-.005-13.525c0-1.094-.362-1.75-.896-2.16-.57-.435-1.448-.677-2.624-.677H9.29c-1.142 0-2.031.227-2.615.645m5.139 3.458a1.742 1.742 0 1 0 0 3.484 1.742 1.742 0 0 0 0-3.484m2.71 3.52a3.242 3.242 0 1 0-1.09 1.03l.8.8a.75.75 0 0 0 1.06-1.062z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBookmarkSearchOutline;
