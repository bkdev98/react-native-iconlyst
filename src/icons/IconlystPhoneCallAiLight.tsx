import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneCallAiLight = ({
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
      d="M10.63 13.123c3.576 3.574 4.639-.813 6.915 1.462 2.195 2.195 3.457 2.633.677 5.414-.35.279-2.562 3.648-10.34-4.127C.106 8.096 3.47 5.88 3.75 5.532c2.787-2.788 3.22-1.519 5.414.675 2.276 2.276-2.109 3.342 1.467 6.916"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.617 4.614.1.274a3.76 3.76 0 0 0 2.222 2.225l.273.1-.273.102a3.76 3.76 0 0 0-2.221 2.225l-.101.273-.101-.273a3.76 3.76 0 0 0-2.222-2.225l-.273-.101.273-.101a3.76 3.76 0 0 0 2.222-2.225zM13.455 3.037a1.77 1.77 0 0 0 1.177 1.179 1.77 1.77 0 0 0-1.177 1.178 1.77 1.77 0 0 0-1.177-1.178 1.77 1.77 0 0 0 1.177-1.179"
    />
  </Svg>
);
export default IconlystPhoneCallAiLight;
