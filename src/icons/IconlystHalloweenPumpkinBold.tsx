import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHalloweenPumpkinBold = ({
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
      d="M14.63 3.946h-.003l-.036.012a2.213 2.213 0 0 0-.692.392c-.303.256-.626.672-.704 1.382a3.34 3.34 0 0 1 2.08 1.367c.157-.208.427-.353.646-.469a3.96 3.96 0 0 1 4.362.51c1.666 1.437 2.01 3.978 1.76 6.04-.26 2.176-1.166 4.373-2.634 6.018-1.302 1.447-3.172 2.135-5.077 1.603-.542.313-1.17.48-1.836.48a3.6 3.6 0 0 1-1.817-.48c-1.906.532-3.775-.155-5.076-1.603-1.468-1.645-2.375-3.842-2.645-6.018-.25-2.062.094-4.603 1.76-6.04C5.935 6.1 7.664 5.913 9.09 6.63c.219.116.48.261.636.459a3.44 3.44 0 0 1 1.961-1.328c.08-1.233.645-2.051 1.245-2.557.322-.272.645-.447.887-.554a3 3 0 0 1 .445-.159h.004a.75.75 0 0 1 .362 1.455m-6.803 7.04a.75.75 0 0 1 .95-.47l1.324.448a.75.75 0 0 1-.48 1.42l-1.324-.447a.75.75 0 0 1-.47-.95m8.877.951a.75.75 0 1 0-.48-1.42l-1.324.447a.75.75 0 0 0 .481 1.42zm-6.732 2.625a.75.75 0 0 0-.929 1.177l1.376 1.086a.75.75 0 0 0 .88.035l1.2-.799 1.202.8a.75.75 0 0 0 .88-.036l1.376-1.086a.75.75 0 1 0-.93-1.177l-.948.748-1.164-.774a.75.75 0 0 0-.83 0l-1.164.774z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHalloweenPumpkinBold;
