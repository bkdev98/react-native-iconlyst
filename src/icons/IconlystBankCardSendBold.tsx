import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCardSendBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="m15.468 6.004.937-.944c.17-.171.076-.46-.165-.475a5 5 0 0 0-.322-.01h-9.39c-2.49 0-4.16 1.75-4.16 4.36v.04a.3.3 0 0 0 .3.3h11.974c.248 0 .399-.295.3-.523a2.48 2.48 0 0 1 .526-2.748M9.498 15.654h-2.77c-.39 0-.7-.31-.7-.7 0-.38.31-.7.7-.7h2.77c.38 0 .7.32.7.7 0 .39-.32.7-.7.7m7.06-4.4v-.28a.3.3 0 0 0-.3-.3H2.668a.3.3 0 0 0-.3.3v4.09c0 2.61 1.67 4.36 4.16 4.36h9.39c2.49 0 4.17-1.75 4.17-4.36v-1.071c0-.216-.224-.362-.434-.31q-.285.07-.596.071a2.5 2.5 0 0 1-2.5-2.5M21.414 7.235l-1.823-1.83q-.007-.004-.014-.01a.746.746 0 0 0-1.051.012l-1.821 1.828a.751.751 0 0 0 1.063 1.059l.54-.543v3.504a.75.75 0 1 0 1.5 0V7.749l.544.545a.75.75 0 0 0 1.062-1.059"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBankCardSendBold;
