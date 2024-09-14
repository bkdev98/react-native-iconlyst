import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTreeOutline = ({
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
      d="M12.634 2.25a.75.75 0 0 1 .67.414c1.621 3.231 3.43 6.156 5.517 8.602a.75.75 0 0 1-.571 1.237h-1.345a20.7 20.7 0 0 0 2.915 4.057.75.75 0 1 1-1.099 1.021c-1.46-1.571-2.7-3.408-3.727-5.497a.75.75 0 0 1 .673-1.081h1.01c-1.489-1.926-2.824-4.073-4.043-6.368-1.22 2.295-2.555 4.442-4.043 6.368H9.6a.75.75 0 0 1 .672 1.081c-1.028 2.089-2.267 3.926-3.728 5.497a.75.75 0 0 1-1.098-1.021 20.6 20.6 0 0 0 2.915-4.057H7.017a.75.75 0 0 1-.57-1.237c2.087-2.446 3.895-5.37 5.517-8.602a.75.75 0 0 1 .67-.414m0 9.4a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-8.6a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTreeOutline;
