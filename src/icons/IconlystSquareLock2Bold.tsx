import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareLock2Bold = ({
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
      d="M13.334 10.65a1.334 1.334 0 0 0-2.67 0c0 .427.2.82.548 1.076a.75.75 0 0 1 .267.84l-.646 1.94a.12.12 0 0 0 .018.118.13.13 0 0 0 .108.055h2.08a.13.13 0 0 0 .11-.055.12.12 0 0 0 .018-.115l-.645-1.943a.75.75 0 0 1 .266-.84c.347-.256.546-.648.546-1.077"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.217 2.5H13.05a.3.3 0 0 0-.3.3l-.001 4.906c0 .135.09.251.217.298a2.82 2.82 0 0 1 1.867 2.645 2.85 2.85 0 0 1-.623 1.772.32.32 0 0 0-.058.299l.437 1.314a1.63 1.63 0 0 1-1.55 2.146c-.16 0-.29.13-.29.289V21.2a.3.3 0 0 0 .3.3h3.166c3.16 0 5.284-2.223 5.284-5.53V8.021c0-3.302-2.123-5.521-5.283-5.521M11.251 16.472a.29.29 0 0 0-.292-.292 1.635 1.635 0 0 1-1.549-2.147l.436-1.313a.32.32 0 0 0-.058-.3 2.85 2.85 0 0 1-.624-1.77c0-1.22.782-2.251 1.868-2.647a.32.32 0 0 0 .218-.297V2.8a.3.3 0 0 0-.3-.3H7.783C4.623 2.5 2.5 4.719 2.5 8.021v7.949c0 3.308 2.123 5.53 5.282 5.53h3.169a.3.3 0 0 0 .3-.3z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSquareLock2Bold;
