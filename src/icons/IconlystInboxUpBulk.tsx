import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInboxUpBulk = ({
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
      d="M7.589 12.498c1.18 0 2.239.658 2.764 1.718a2.16 2.16 0 0 0 1.946 1.214 2.16 2.16 0 0 0 1.947-1.214 3.06 3.06 0 0 1 2.763-1.718H21.6a.2.2 0 0 0 .2-.2V8.407c0-3.315-2.123-5.543-5.282-5.543H8.084c-3.16 0-5.283 2.228-5.283 5.543v3.89c0 .111.09.2.2.2z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m9.015 8.028 2.746-2.66a.7.7 0 0 1 .198-.127c.012-.005.02-.015.032-.02a.75.75 0 0 1 .813.148l2.746 2.659a.75.75 0 1 1-1.043 1.078l-1.476-1.43v4.854a.75.75 0 1 1-1.5 0V7.68l-1.473 1.426a.75.75 0 1 1-1.043-1.078M17.009 13.998c-.605 0-1.15.338-1.418.883a3.65 3.65 0 0 1-3.292 2.049 3.65 3.65 0 0 1-3.291-2.05 1.58 1.58 0 0 0-1.42-.882H3.002a.2.2 0 0 0-.2.2v2.183c0 3.316 2.123 5.544 5.283 5.544h8.434c3.16 0 5.283-2.228 5.283-5.544v-2.183a.2.2 0 0 0-.2-.2z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystInboxUpBulk;
