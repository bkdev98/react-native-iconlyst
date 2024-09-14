import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPumpkinBroken = ({
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
      d="M21.432 13.199c.233-1.93-.088-4.308-1.648-5.653a3.71 3.71 0 0 0-4.082-.477c-.206.108-.459.244-.604.439a3.14 3.14 0 0 0-2.593-1.345 3.2 3.2 0 0 0-2.602 1.335c-.146-.185-.39-.321-.595-.43a3.72 3.72 0 0 0-4.092.478c-1.56 1.345-1.882 3.723-1.647 5.652.253 2.038 1.101 4.094 2.475 5.634 1.218 1.354 2.968 1.997 4.751 1.5a3.35 3.35 0 0 0 1.7.449c.625 0 1.212-.156 1.72-.449 1.783.497 3.533-.146 4.751-1.5a9.7 9.7 0 0 0 1.635-2.58"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.429 6.163c-.058-2.437 2.017-2.944 2.017-2.944"
    />
  </Svg>
);
export default IconlystPumpkinBroken;
