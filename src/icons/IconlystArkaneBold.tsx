import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArkaneBold = ({
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
      d="M17.244 17.3a.75.75 0 0 1-.99-.381l-3.81-8.57c-.151-.343-.74-.341-.887-.003l-3.81 8.574a.75.75 0 1 1-1.371-.609l3.809-8.571A2.01 2.01 0 0 1 12 6.555c.774 0 1.504.477 1.817 1.188l3.808 8.568a.75.75 0 0 1-.381.99m-4.422-4.045h-1.646a.75.75 0 0 1 0-1.5h1.646a.75.75 0 0 1 0 1.5m3.395-10.75H7.783c-3.16 0-5.283 2.223-5.283 5.53v7.94c0 3.307 2.123 5.53 5.283 5.53h8.433c3.16 0 5.284-2.223 5.284-5.53v-7.94c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArkaneBold;
