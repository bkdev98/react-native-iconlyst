import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShortcutAppCircleOutline = ({
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
      d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.49 7.589 7.674 10.31a.06.06 0 0 0 0 .099l3.818 2.723a.88.88 0 0 0 1.018 0l3.818-2.722a.06.06 0 0 0 0-.099L12.51 7.589a.88.88 0 0 0-1.018 0m-.87-1.222a2.38 2.38 0 0 1 2.76 0l3.817 2.723a1.56 1.56 0 0 1 0 2.542l-3.817 2.723a2.38 2.38 0 0 1-2.76 0l-3.817-2.723a1.56 1.56 0 0 1 0-2.542z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.49 10.866 7.674 13.59a.06.06 0 0 0 0 .099l3.818 2.723a.88.88 0 0 0 1.018 0l3.818-2.723a.06.06 0 0 0 0-.099l-3.818-2.723a.88.88 0 0 0-1.018 0m-.87-1.221a2.38 2.38 0 0 1 2.76 0l3.817 2.722a1.56 1.56 0 0 1 0 2.542l-3.817 2.723a2.38 2.38 0 0 1-2.76 0l-3.817-2.723a1.56 1.56 0 0 1 0-2.542z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShortcutAppCircleOutline;
