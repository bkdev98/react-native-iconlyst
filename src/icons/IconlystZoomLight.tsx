import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystZoomLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 7.722v6.357a3.323 3.323 0 0 0 3.324 3.324h7.256a1.12 1.12 0 0 0 1.12-1.12V9.925a3.324 3.324 0 0 0-3.324-3.324H4.12A1.12 1.12 0 0 0 3 7.722M16.927 11.257a.98.98 0 0 1 .32-.72l1.986-1.834c.663-.611 1.767-.16 1.767.72v5.43c0 .882-1.104 1.332-1.767.72l-1.986-1.832"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystZoomLight;
