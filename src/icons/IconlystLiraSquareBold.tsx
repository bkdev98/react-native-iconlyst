import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLiraSquareBold = ({
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
      d="M15.35 16.763h-1.478c-2.076 0-3.762-1.647-3.858-3.7H8.65a.75.75 0 0 1 0-1.5h1.346v-1.01H8.65a.75.75 0 0 1 0-1.5h1.346v-.93a.75.75 0 0 1 1.5 0v.93h2.045a.75.75 0 0 1 0 1.5h-2.045v1.01h2.045a.75.75 0 0 1 0 1.5h-2.027a2.373 2.373 0 0 0 2.358 2.2h1.478a.75.75 0 0 1 0 1.5m.867-14.2H7.782c-3.16 0-5.282 2.222-5.282 5.53v7.95c0 3.302 2.122 5.52 5.282 5.52h8.434c3.16 0 5.284-2.218 5.284-5.52v-7.95c0-3.308-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLiraSquareBold;
