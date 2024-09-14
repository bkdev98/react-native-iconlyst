import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTiktokOutline = ({
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
      d="M12.191 3a.75.75 0 0 1 .75-.75h2.713a.75.75 0 0 1 .712.513c.269.809 1.215 2.703 3.543 2.923a.75.75 0 0 1 .68.747v3.24a.75.75 0 0 1-.557.724c-1.2.321-2.389.008-3.213-.329a8 8 0 0 1-.248-.106v5.208a6.576 6.576 0 0 1-6.58 6.58 6.576 6.576 0 0 1-6.58-6.58 6.576 6.576 0 0 1 6.58-6.58.75.75 0 0 1 .75.759l-.004.352-.008.844c-.007.655-.013 1.416-.013 1.857a.75.75 0 0 1-.674.746c-.983.1-1.75.928-1.75 1.94 0 1.08.873 1.95 1.95 1.95s1.95-.87 1.95-1.95zm-2.959 7.146a5.076 5.076 0 0 0-4.32 5.024 5.076 5.076 0 0 0 5.08 5.08 5.076 5.076 0 0 0 5.08-5.08V8.686a.75.75 0 0 1 1.188-.608l.013.009.055.037q.079.053.23.143c.201.12.489.274.829.413.527.215 1.124.37 1.702.35V7.075c-2.316-.491-3.463-2.242-3.946-3.326h-1.452v11.338a3.45 3.45 0 0 1-3.449 3.45 3.45 3.45 0 0 1-3.45-3.45c0-1.552 1.02-2.86 2.426-3.296z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTiktokOutline;
