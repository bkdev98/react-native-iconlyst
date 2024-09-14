import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCardSwapLight = ({
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
      d="M10.076 13.098H4.998c-1.227 0-1.998.87-1.998 2.1v3.322c0 1.23.767 2.1 1.998 2.1h5.078c1.232 0 1.999-.87 1.999-2.1v-3.322c0-1.23-.767-2.1-1.999-2.1"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 15.768h9.075"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19 3.379h-5.078c-1.228 0-1.998.87-1.998 2.1v3.322c0 1.231.767 2.1 1.998 2.1H19c1.232 0 1.999-.869 1.999-2.1V5.48c0-1.231-.767-2.101-1.999-2.101"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.924 6.045h9.075M19.64 15.172v2.05a3.397 3.397 0 0 1-3.397 3.397"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.282 16.456 1.358-1.358L21 16.456M4.358 8.827v-2.05a3.397 3.397 0 0 1 3.397-3.398"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.718 7.543 4.359 8.901 3 7.543"
    />
  </Svg>
);
export default IconlystBankCardSwapLight;
