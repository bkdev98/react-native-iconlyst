import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMultitaskingBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.896 21h15.208M11.553 3h8.551M4.896 3H8.28M12.5 17.652H7.098a3.13 3.13 0 0 1-3.128-3.129V9.45A3.13 3.13 0 0 1 7.097 6.32h10.808a3.13 3.13 0 0 1 3.129 3.13v5.073a3.13 3.13 0 0 1-3.13 3.129H16.02"
    />
  </Svg>
);
export default IconlystMultitaskingBroken;
