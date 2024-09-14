import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletMenuLight = ({
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
      d="M21 14.406h-3.808a2.532 2.532 0 0 1 0-5.062h3.807M16.997 11.819h-.003"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 9.73V8.622a4.935 4.935 0 0 1 4.936-4.934h8.128A4.935 4.935 0 0 1 21 8.622v6.75a4.935 4.935 0 0 1-4.936 4.936h-2.486"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.379 13.04H4.946C3.75 13.04 3 13.885 3 15.083v3.18c0 1.2.746 2.046 1.946 2.046h3.433c1.2 0 1.946-.846 1.946-2.045v-3.18c0-1.2-.747-2.046-1.946-2.046"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.662 20.31v-7.27M3 16.678h7.325"
    />
  </Svg>
);
export default IconlystWalletMenuLight;
