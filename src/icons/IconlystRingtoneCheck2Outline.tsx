import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtoneCheck2Outline = ({
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
      d="M17.722 18.093H6.78a3.033 3.033 0 0 1-2.745-4.323l.467-.99a4.6 4.6 0 0 0 .432-1.937v-1.32a7.317 7.317 0 0 1 14.633 0v1.318c0 .67.149 1.331.433 1.938l.466.99a3.032 3.032 0 0 1-2.745 4.324zm-5.47-14.385a5.823 5.823 0 0 0-5.818 5.816v1.32a6.1 6.1 0 0 1-.575 2.573l-.466.991a1.532 1.532 0 0 0 1.387 2.185h10.942a1.532 1.532 0 0 0 1.387-2.185l-.466-.99a6.1 6.1 0 0 1-.575-2.575V9.524a5.823 5.823 0 0 0-5.817-5.816"
    />
    <Path
      fill={props.color}
      d="M12.252 21.708a3.854 3.854 0 0 1-3.85-3.85.75.75 0 1 1 1.5 0 2.35 2.35 0 1 0 4.7 0 .75.75 0 0 1 1.5 0 3.854 3.854 0 0 1-3.85 3.85M11.472 12.868a.75.75 0 0 1-.53-.22l-1.42-1.422a.751.751 0 0 1 1.063-1.06l.888.891 2.393-2.394a.75.75 0 0 1 1.06 1.06l-2.924 2.925a.75.75 0 0 1-.53.22"
    />
  </Svg>
);
export default IconlystRingtoneCheck2Outline;
