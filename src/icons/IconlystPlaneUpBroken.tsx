import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneUpBroken = ({
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
      d="m17.197 14.605 3.128-.025c-.037-.637-.021-1.24-.119-1.825-.113-.682-.62-1.098-1.212-1.385a176 176 0 0 0-4.093-1.94c-.348-.158-.457-.353-.45-.719.016-1.055.03-2.112-.027-3.165C14.367 4.462 13.793 3 12.5 3s-1.867 1.462-1.924 2.546c-.056 1.053-.043 2.11-.026 3.165.005.366-.103.56-.45.72a178 178 0 0 0-4.093 1.94c-.593.287-1.1.702-1.213 1.384-.097.585-.081 1.188-.118 1.825l2.634.021M10.49 14.627l.28 3.035-1.874 1.536V21l3.604-.901 3.603.9v-1.801l-1.89-1.536.297-3.035"
    />
  </Svg>
);
export default IconlystPlaneUpBroken;
