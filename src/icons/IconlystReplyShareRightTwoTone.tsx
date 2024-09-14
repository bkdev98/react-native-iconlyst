import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReplyShareRightTwoTone = ({
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
      d="M12.782 10.034V6.372c0-.786.93-1.203 1.513-.676 1.984 1.794 5.392 4.875 6.909 6.244a.905.905 0 0 1-.027 1.363l-6.898 5.844a.907.907 0 0 1-1.495-.69l-.002-2.975"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.782 10.034c-4.18 0-7.415-1.446-9.205-5.397 0 0-1.547 10.846 9.205 10.846"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystReplyShareRightTwoTone;
