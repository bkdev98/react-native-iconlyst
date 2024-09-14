import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRadicalBroken = ({
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
      d="M21 4.973h-5.083a3.79 3.79 0 0 0-3.651 2.765l-.75 2.658M3 10.671a3.53 3.53 0 0 1 2.576 2.252l1.985 5.51c.296.82 1.469.778 1.706-.061l1.139-4.038M16.445 12.852 21 19.027M21 12.852l-4.555 6.175"
    />
  </Svg>
);
export default IconlystRadicalBroken;
