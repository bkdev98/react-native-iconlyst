import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAutodeskLight = ({
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.824 19.997-4.985-11.77-3.611 8.068h6.67l-6.844 4.183a1.01 1.01 0 0 1-1.408-.367L3.13 15.638a1.01 1.01 0 0 1-.05-.891L7.65 3.99a1.01 1.01 0 0 1 .93-.616h4.46c.406 0 .773.243.931.617L21 20.613h-4.245a1.01 1.01 0 0 1-.931-.616ZM7.211 16.293h-3.7M8.813 3.46l2.09 4.935"
    />
  </Svg>
);
export default IconlystAutodeskLight;
