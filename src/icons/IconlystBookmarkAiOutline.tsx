import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBookmarkAiOutline = ({
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
      d="M5.552 3.176C6.493 2.5 7.74 2.25 9.04 2.25h5.917c1.343 0 2.6.27 3.536.987.971.743 1.484 1.88 1.484 3.35l.005 13.524a1.634 1.634 0 0 1-2.436 1.424h-.001l-5.52-3.119-5.575 3.125a1.632 1.632 0 0 1-2.431-1.426v-13.7c0-1.441.55-2.535 1.533-3.24m.873 1.22c-.543.388-.907 1.002-.907 2.02v13.702c0 .072.059.132.133.132a.14.14 0 0 0 .066-.017L11.66 16.9a.75.75 0 0 1 .735.002l5.887 3.325a.134.134 0 0 0 .182-.05v-.002a.13.13 0 0 0 .018-.064l-.005-13.525c0-1.094-.362-1.75-.896-2.16-.569-.435-1.447-.677-2.624-.677H9.04c-1.142 0-2.03.227-2.615.645"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.251 12.457a.75.75 0 0 1-.703-.49l-.09-.246a2.63 2.63 0 0 0-1.554-1.556l-.246-.091a.75.75 0 0 1 0-1.407l.246-.09A2.63 2.63 0 0 0 9.457 7.02l.09-.246a.75.75 0 0 1 1.408 0l.09.246c.267.72.835 1.289 1.554 1.556l.246.09a.75.75 0 0 1 0 1.407l-.246.09a2.63 2.63 0 0 0-1.553 1.557l-.091.246a.75.75 0 0 1-.704.49m.727-3.086a4.1 4.1 0 0 1-.727-.728 4.1 4.1 0 0 1-.726.728q.408.317.726.727.319-.41.727-.727M15.024 13.573a.75.75 0 0 1-.718-.532.84.84 0 0 0-.558-.56.75.75 0 0 1 0-1.435.84.84 0 0 0 .558-.56.75.75 0 0 1 1.435 0 .84.84 0 0 0 .559.56.75.75 0 0 1 0 1.435.84.84 0 0 0-.559.56.75.75 0 0 1-.717.532"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBookmarkAiOutline;
