import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtoneCheck2TwoTone = ({
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
      d="M12.5 3a6.566 6.566 0 0 0-6.567 6.566v1.319c0 .78-.173 1.55-.505 2.255l-.466.99c-.712 1.514.392 3.255 2.066 3.255H17.97c1.674 0 2.778-1.74 2.066-3.255l-.466-.99a5.3 5.3 0 0 1-.504-2.255l-.001-1.319A6.566 6.566 0 0 0 12.5 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.4 17.9a3.1 3.1 0 1 0 6.199 0M10.303 10.738l1.418 1.421 2.924-2.925"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystRingtoneCheck2TwoTone;
