import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudSettingBroken = ({
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
      d="M14.153 16.49a2.153 2.153 0 1 1-4.307.002 2.153 2.153 0 0 1 4.307-.002"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.201 14.875.933.538m3.73 2.154.934.54M9.201 18.106l.933-.54m3.73-2.153.934-.538M12 13.262v1.076m0 4.308v1.077M12 4.29c-3.617 0-4.897 3.264-4.897 4.897C4.833 9.207 3 10.732 3 13.328c0 1.68 1 3.125 2.436 3.774M18.563 17.102A4.14 4.14 0 0 0 21 13.328c0-2.596-1.83-4.14-4.103-4.141 0-1.07-.55-2.84-1.945-3.933"
    />
  </Svg>
);
export default IconlystCloudSettingBroken;
