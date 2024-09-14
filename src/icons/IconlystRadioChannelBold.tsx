import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRadioChannelBold = ({
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
      d="M10.468 11.992h3.065a2.48 2.48 0 0 1 0-2.002h-3.065a2.48 2.48 0 0 1 0 2.002M8.179 11.992a1.002 1.002 0 0 0 0-2.002 1.002 1.002 0 0 0 0 2.002"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.821 13.492H8.179a2.504 2.504 0 0 1-2.501-2.5A2.504 2.504 0 0 1 8.179 8.49h7.641a2.505 2.505 0 0 1 2.502 2.501 2.504 2.504 0 0 1-2.501 2.501m1.567-9.038H6.611C4.044 4.454 2.25 6.324 2.25 9v6.002c0 2.676 1.794 4.545 4.361 4.545h.723l.767-2.117a2.31 2.31 0 0 1 2.173-1.525h3.454c.974 0 1.848.614 2.175 1.528l.765 2.114h.719c2.569 0 4.363-1.869 4.363-4.545V9c0-2.675-1.794-4.545-4.362-4.545"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.728 17.404h-3.454a.8.8 0 0 0-.761.532l-.584 1.61h6.144l-.582-1.606a.8.8 0 0 0-.763-.536M15.821 9.99a1.002 1.002 0 0 0 0 2.002 1.002 1.002 0 0 0 0-2.002"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRadioChannelBold;
