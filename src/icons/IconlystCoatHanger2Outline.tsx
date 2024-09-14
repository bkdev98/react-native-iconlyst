import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoatHanger2Outline = ({
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
      d="M19.262 19.302H4.741a2.49 2.49 0 0 1-2.49-2.49v-.65A2.48 2.48 0 0 1 3.8 13.856l7.936-3.233a.75.75 0 0 1 .567 0l7.9 3.233a2.48 2.48 0 0 1 1.546 2.3v.653a2.49 2.49 0 0 1-2.487 2.493m-7.243-7.175-7.652 3.118a.99.99 0 0 0-.616.917v.65a.99.99 0 0 0 .99.99h14.521a.99.99 0 0 0 .989-.99v-.652a.98.98 0 0 0-.613-.915z"
    />
    <Path
      fill={props.color}
      d="M12.018 12.067a.75.75 0 0 1-.749-.75v-.487a1.99 1.99 0 0 1 1.281-1.843 1.45 1.45 0 0 0 .856-1.773 1.4 1.4 0 0 0-.976-.96 1.46 1.46 0 0 0-1.287.244 1.44 1.44 0 0 0-.564 1.145.75.75 0 1 1-1.5 0 2.92 2.92 0 0 1 1.15-2.333 2.96 2.96 0 0 1 2.584-.507A2.93 2.93 0 0 1 14.85 6.81a2.96 2.96 0 0 1-1.752 3.573.5.5 0 0 0-.329.451v.485a.75.75 0 0 1-.75.748"
    />
  </Svg>
);
export default IconlystCoatHanger2Outline;
