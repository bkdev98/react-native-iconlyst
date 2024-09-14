import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRialBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.195 16.803H12.53a1 1 0 1 0 0 2h2.666a1 1 0 1 0 0-2M8.892 5.322a1 1 0 0 0-1 1v8.2a1.946 1.946 0 0 1-3.892 0v-1.349a1 1 0 1 0-2 0v1.35a3.95 3.95 0 0 0 3.948 3.94 3.947 3.947 0 0 0 3.944-3.94v-8.2a1 1 0 0 0-1-1M14.403 15.773h.977a3.076 3.076 0 0 0 3.075-3.07v-1.6a1 1 0 1 0-2 0v1.6c0 .59-.483 1.07-1.075 1.07h-.977a1.074 1.074 0 0 1-1.077-1.07v-6.38a1 1 0 1 0-2 0v6.38a3.077 3.077 0 0 0 3.077 3.07M21 9.822a1 1 0 0 0-1 1v3.5a2.73 2.73 0 0 1-1.811 2.531 1 1 0 1 0 .684 1.88A4.79 4.79 0 0 0 22 14.342v-3.52a1 1 0 0 0-1-1"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRialBold;
