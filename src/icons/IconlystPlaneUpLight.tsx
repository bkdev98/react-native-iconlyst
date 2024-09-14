import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneUpLight = ({
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
      d="m10.27 17.662-.28-3.035-5.814-.047c.037-.637.021-1.24.118-1.825.113-.682.62-1.098 1.213-1.385 1.358-.66 2.718-1.315 4.092-1.94.348-.158.457-.353.45-.719-.016-1.055-.03-2.112.027-3.165C10.133 4.462 10.707 3 12 3s1.867 1.462 1.924 2.546c.056 1.053.043 2.11.026 3.165-.006.366.103.56.45.72 1.376.624 2.736 1.28 4.094 1.94.593.287 1.099.702 1.212 1.384.098.585.082 1.188.12 1.825l-5.816.047-.297 3.035 1.89 1.536V21L12 20.099 8.397 21v-1.802z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlaneUpLight;
