import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserHearingBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M19.95 4.6c-.3-.5-.9-.6-1.4-.2-.4.3-.6.9-.2 1.4s.6 1.2.6 1.9-.2 1.4-.6 1.9c-.3.4-.2 1.1.2 1.4.2.1.4.2.6.2.3 0 .6-.1.8-.4.6-.9 1-2 1-3.1s-.3-2.2-1-3.1M6.15 11.001c.4-.3.6-.9.2-1.4s-.6-1.2-.6-1.9.2-1.4.6-1.9c.3-.4.2-1.1-.2-1.4s-1.1-.2-1.4.2c-.6.9-1 2-1 3.1s.4 2.2 1 3.101c.2.3.5.399.8.399.2 0 .4-.1.6-.2M12.351 11.8c2.2 0 4-1.8 4-4 0-2.3-1.8-4.1-4-4.1s-4 1.8-4 4.1c0 2.2 1.8 4 4 4"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.651 14.5c-1.4-.5-3.2-.7-5.3-.8-2.1 0-4 .2-5.3.8-.7.3-1.2.7-1.6 1.2s-.6 1.2-.6 1.9.3 1.4.8 1.9 1.2.8 2 .8h9.4c.8 0 1.5-.3 2-.8s.8-1.2.8-1.9-.2-1.4-.6-1.9-1-.9-1.6-1.2"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystUserHearingBulk;
