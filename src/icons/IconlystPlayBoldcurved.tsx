import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlayBoldcurved = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.003 15.839c-.3.124-.643.241-.963.241a.9.9 0 0 1-.671-.26c-.139-.139-.566-.565-.554-3.379.011-2.799.42-3.207.554-3.342.472-.471 1.253-.15 1.587-.011.824.341 4.05 2.118 4.05 3.372 0 1.274-3.296 3.086-4.003 3.379m.247-12.985c-7.198 0-9.75 2.552-9.75 9.75s2.552 9.75 9.75 9.75S22 19.802 22 12.604s-2.551-9.75-9.75-9.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlayBoldcurved;
