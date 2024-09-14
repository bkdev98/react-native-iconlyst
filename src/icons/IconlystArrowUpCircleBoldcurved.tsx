import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowUpCircleBoldcurved = ({
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
      d="M16.144 14.061a.75.75 0 0 1-1.042-.194c-1.089-1.587-2.436-3.065-2.882-3.162-.387.097-1.733 1.575-2.821 3.162a.748.748 0 1 1-1.236-.848c.975-1.424 2.804-3.812 4.087-3.812 1.284 0 3.113 2.388 4.088 3.812a.75.75 0 0 1-.194 1.042M12.25 2.25C5.052 2.25 2.5 4.802 2.5 12s2.552 9.75 9.75 9.75S22 19.199 22 12s-2.551-9.75-9.75-9.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowUpCircleBoldcurved;
