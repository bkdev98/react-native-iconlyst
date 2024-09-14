import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeviantartLight = ({
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
      d="M12.422 6.576a.44.44 0 0 1-.362.19H6.208a.44.44 0 0 0-.44.44v3.253c0 .243.197.44.44.44H9.3c.141 0 .225.158.146.275l-3.526 5.19a.9.9 0 0 0-.152.494v3.468c0 .243.197.44.44.44h2.755a.01.01 0 0 0 .007-.004l2.632-3.807a.44.44 0 0 1 .362-.19h5.853a.44.44 0 0 0 .44-.44v-3.253a.44.44 0 0 0-.44-.44h-3.093a.176.176 0 0 1-.146-.275l3.526-5.19a.9.9 0 0 0 .152-.494V3.206a.44.44 0 0 0-.44-.44h-2.755a.01.01 0 0 0-.007.004z"
    />
  </Svg>
);
export default IconlystDeviantartLight;
