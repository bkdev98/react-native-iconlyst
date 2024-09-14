import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPetsVerifiedLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.99 7.49c0-1.214.985-2.199 2.199-2.199h1a2.2 2.2 0 0 0 1.55-.639l.7-.7a2.2 2.2 0 0 1 3.112-.009l.008.008.7.7c.412.409.969.64 1.55.64h1.002a2.2 2.2 0 0 1 2.2 2.199v1c0 .58.23 1.138.639 1.55l.7.7a2.2 2.2 0 0 1 .011 3.11v.002l-.01.009-.7.7c-.41.412-.64.968-.64 1.549v1.003a2.2 2.2 0 0 1-2.2 2.196h-1.004c-.581 0-1.139.23-1.55.64l-.7.699a2.2 2.2 0 0 1-3.11.014l-.002-.003-.008-.008-.7-.7a2.2 2.2 0 0 0-1.55-.639H7.19a2.2 2.2 0 0 1-2.199-2.2v-1.004c0-.581-.23-1.138-.64-1.549l-.7-.7a2.197 2.197 0 0 1-.013-3.108l.003-.004.009-.01.7-.7c.409-.41.64-.968.64-1.55v-.996"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.998 8.673v-.051m-.006-.153a.225.225 0 1 0 .003.45.225.225 0 0 0-.003-.45M15.262 10.332v-.052m-.007-.153a.225.225 0 1 0 .003.45.225.225 0 0 0-.003-.45M8.748 10.332v-.052m-.006-.153a.225.225 0 1 0 .003.45.225.225 0 0 0-.003-.45"
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M12.03 15.47c1.368 0 3.102 1.185 3.077-.639-.01-1.368-1.434-2.652-3.077-2.653-1.652 0-3.293 1.395-3.065 2.817.252 1.65 1.853.475 3.065.475Z"
    />
  </Svg>
);
export default IconlystPetsVerifiedLight;
