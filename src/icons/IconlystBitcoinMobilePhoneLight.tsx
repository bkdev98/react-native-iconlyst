import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinMobilePhoneLight = ({
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
      d="M10.288 3.324H9.29a3.55 3.55 0 0 0-3.552 3.553l.001 10.57A3.553 3.553 0 0 0 9.291 21h5.417a3.553 3.553 0 0 0 3.553-3.553l-.001-5.267"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.842 6.848h-2.074v2.969h2.137c.868 0 1.563-.745 1.478-1.63-.074-.772-.766-1.34-1.541-1.34"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.842 3.879h-2.074v2.97h2.137c.868 0 1.563-.746 1.478-1.631-.074-.772-.766-1.34-1.541-1.34M15.313 10.692v-.876M15.313 3.876V3M11.992 17.446v.019m.182-.022a.182.182 0 1 1-.363 0 .182.182 0 0 1 .363 0"
    />
  </Svg>
);
export default IconlystBitcoinMobilePhoneLight;
