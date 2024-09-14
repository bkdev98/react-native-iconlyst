import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReplaySquare3Bold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="m4.868 13.205.005-.001.011.002a1 1 0 0 0 .707-.293l1.876-1.875a1 1 0 0 0-.704-1.707l-.895-.003v-.371c0-1.838 1.068-2.98 2.787-2.98h6.68c1.72 0 2.788 1.142 2.788 2.98a1 1 0 1 0 2 0c0-2.932-1.969-4.98-4.788-4.98h-6.68c-2.818 0-4.787 2.048-4.787 4.98v.365l-.866-.002H3a1 1 0 0 0-.707 1.707l1.838 1.839a.99.99 0 0 0 .738.339M21.707 13.471l-1.857-1.857a1 1 0 0 0-.357-.246c-.04-.017-.087-.015-.13-.027-.079-.019-.154-.048-.239-.048l-.004.001a1 1 0 0 0-.712.292l-1.876 1.876a1 1 0 0 0-.218 1.089c.155.373.52.617.923.618l.887.002v.37c0 1.839-1.068 2.981-2.789 2.981h-6.68c-1.719 0-2.787-1.142-2.787-2.981a1 1 0 1 0-2 0c0 2.933 1.97 4.981 4.787 4.981h6.68c2.82 0 4.79-2.048 4.79-4.981v-.365l.873.002H21a1 1 0 0 0 .707-1.707"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReplaySquare3Bold;
