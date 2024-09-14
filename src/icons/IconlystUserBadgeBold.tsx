import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserBadgeBold = ({
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
      d="m16.038 18.59-7.775.01a.46.46 0 0 1-.32-.131.46.46 0 0 1-.132-.32c0-1.642 1.342-3.3 4.34-3.3 2.996 0 4.338 1.652 4.338 3.29a.45.45 0 0 1-.45.45M12.15 7.823a2.82 2.82 0 0 1 2.815 2.816 2.82 2.82 0 0 1-2.815 2.815 2.82 2.82 0 0 1-2.815-2.815 2.82 2.82 0 0 1 2.815-2.816m4.1-3.422h-1.8l-1.8-1.9c-.1-.1-.3-.2-.5-.2s-.4.1-.5.2l-1.9 1.9h-1.7c-3 0-5 2.1-5 5.2v7c0 3.1 2 5.1 5 5.1h8.2c3 0 5-2.1 5-5.1v-7c0-3.1-2-5.2-5-5.2"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserBadgeBold;
