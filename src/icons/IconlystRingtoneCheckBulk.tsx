import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtoneCheckBulk = ({
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
      d="M19.045 11.123c-.4-.69-.78-1.35-.78-2.9 0-2.82-2.52-5.85-6.27-5.85s-6.26 3.03-6.26 5.85c0 1.55-.38 2.21-.78 2.91-.39.67-.79 1.37-.79 2.74v.04c.26 3.12 3.07 3.73 7.83 3.73 4.77 0 7.57-.61 7.84-3.77 0-1.37-.41-2.07-.79-2.75"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m14.735 9.822-2.93 2.92a.75.75 0 0 1-1.06 0l-1.42-1.42a.754.754 0 0 1 0-1.06c.3-.29.77-.29 1.07 0l.88.89 2.4-2.39c.29-.29.76-.29 1.06 0 .29.29.29.77 0 1.06M14.132 19.102H9.93a.752.752 0 0 0-.586 1.219 3.43 3.43 0 0 0 2.682 1.306 3.44 3.44 0 0 0 2.69-1.306.75.75 0 0 0-.585-1.22"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRingtoneCheckBulk;