import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserLoadOutline = ({
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
      d="M2.65 11.998c0-5.343 4.332-9.674 9.674-9.674 1.24 0 2.427.233 3.518.66a.75.75 0 1 1-.547 1.397 8.174 8.174 0 1 0 2.94 1.973.75.75 0 1 1 1.086-1.036 9.64 9.64 0 0 1 2.677 6.68c0 5.343-4.331 9.674-9.674 9.674S2.65 17.341 2.65 11.998"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.087 5.437a.75.75 0 0 1 .9-.562l2.583.597a.75.75 0 1 1-.338 1.462l-1.853-.429-.426 1.839a.75.75 0 1 1-1.46-.339zM12.4 9.156a2.038 2.038 0 1 0 .003 4.077 2.038 2.038 0 0 0-.002-4.077m-3.537 2.039a3.538 3.538 0 1 1 7.077 0 3.538 3.538 0 0 1-7.077 0M9.505 18.134a2.13 2.13 0 0 0-.722 1.58.75.75 0 0 1-1.5 0c0-.908.36-1.916 1.214-2.691.857-.777 2.144-1.261 3.898-1.261 1.757 0 3.046.479 3.904 1.25a3.6 3.6 0 0 1 1.218 2.685.75.75 0 1 1-1.5 0c0-.516-.204-1.104-.721-1.569-.516-.465-1.414-.866-2.9-.866-1.48 0-2.375.404-2.89.872"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserLoadOutline;
