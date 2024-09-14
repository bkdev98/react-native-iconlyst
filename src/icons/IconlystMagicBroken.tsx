import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMagicBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.652 19.185v2.036m0-17.305v2.035m-6.617 6.617H3m17.304 0h-2.035M6.973 17.247l-1.439 1.44M17.771 6.45l-1.44 1.44m-9.358 0L5.534 6.45M21 21.916l-4.67-4.669"
    />
  </Svg>
);
export default IconlystMagicBroken;
