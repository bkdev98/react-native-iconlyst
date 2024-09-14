import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCardSwapTwoTone = ({
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
      d="M10.576 13.098H5.498c-1.227 0-1.998.87-1.998 2.1v3.322c0 1.23.767 2.1 1.998 2.1h5.078c1.232 0 1.999-.87 1.999-2.1v-3.322c0-1.23-.767-2.1-1.999-2.1"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.5 15.768h9.075"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.5 3.379h-5.078c-1.228 0-1.998.87-1.998 2.1v3.322c0 1.231.767 2.1 1.998 2.1H19.5c1.232 0 1.999-.869 1.999-2.1V5.48c0-1.231-.767-2.101-1.999-2.101"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.424 6.045h9.075M20.14 15.172v2.05a3.397 3.397 0 0 1-3.397 3.397"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.782 16.456 1.358-1.358 1.36 1.358"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.858 8.827v-2.05a3.397 3.397 0 0 1 3.397-3.398"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.218 7.543 4.859 8.901 3.5 7.543"
    />
  </Svg>
);
export default IconlystBankCardSwapTwoTone;
