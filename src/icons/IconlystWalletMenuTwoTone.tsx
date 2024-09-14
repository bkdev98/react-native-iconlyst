import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletMenuTwoTone = ({
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
      d="M21.5 14.406h-3.808a2.532 2.532 0 0 1 0-5.062h3.807"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.497 11.819h-.003M3.5 9.73V8.622a4.935 4.935 0 0 1 4.936-4.934h8.128A4.935 4.935 0 0 1 21.5 8.622v6.75a4.935 4.935 0 0 1-4.936 4.936h-2.486"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.879 13.04H5.446c-1.196 0-1.946.846-1.946 2.044v3.18c0 1.2.746 2.046 1.946 2.046h3.433c1.2 0 1.946-.846 1.946-2.045v-3.18c0-1.2-.747-2.046-1.946-2.046"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.162 20.31v-7.27M3.5 16.675h7.325"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystWalletMenuTwoTone;
