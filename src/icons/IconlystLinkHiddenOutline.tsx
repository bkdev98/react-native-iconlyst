import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLinkHiddenOutline = ({
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
      d="M7.599 10.189a.75.75 0 0 1 0 1.06l-1.027 1.026c-1.76 1.76-1.765 4.65 0 6.416a4.56 4.56 0 0 0 4.674 1.082.75.75 0 1 1 .48 1.422c-2.108.71-4.54.23-6.215-1.444-2.352-2.352-2.344-6.191 0-8.537l1.027-1.026a.75.75 0 0 1 1.061 0M13.274 4.334c2.107-.711 4.54-.231 6.214 1.443 2.352 2.352 2.345 6.192 0 8.537l-1.027 1.026a.75.75 0 0 1-1.06-1.06l1.027-1.026c1.76-1.761 1.765-4.651 0-6.416a4.56 4.56 0 0 0-4.674-1.083.75.75 0 0 1-.48-1.421M8.99 5.085a.75.75 0 0 1 .986.392L16.17 19.84a.75.75 0 1 1-1.378.594L8.6 6.07a.75.75 0 0 1 .391-.986"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLinkHiddenOutline;
