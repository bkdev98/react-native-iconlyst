import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlayTwoTonecurved = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.75 12.396c0 6.937 2.313 9.25 9.25 9.25s9.25-2.313 9.25-9.25-2.313-9.25-9.25-9.25-9.25 2.313-9.25 9.25"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.416 12.252c0-.905-4.584-3.796-5.104-3.276-.519.52-.57 5.983 0 6.551.571.572 5.104-2.371 5.104-3.275"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlayTwoTonecurved;
