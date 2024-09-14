import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletMenuBroken = ({
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
      d="M21.25 9.345h-3.808a2.532 2.532 0 0 0 0 5.062h1.383M17.247 11.82h-.003"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.828 20.31h2.486a4.935 4.935 0 0 0 4.936-4.935v-6.75a4.935 4.935 0 0 0-4.936-4.936h-.965M3.25 9.73V8.622a4.935 4.935 0 0 1 4.936-4.934h4.064"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.629 13.04H5.196c-1.196 0-1.946.846-1.946 2.044v3.18c0 1.2.746 2.046 1.946 2.046h3.433c1.2 0 1.946-.846 1.946-2.045v-3.18c0-1.2-.747-2.046-1.946-2.046"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.912 20.31v-7.27M3.25 16.677h7.325"
    />
  </Svg>
);
export default IconlystWalletMenuBroken;
