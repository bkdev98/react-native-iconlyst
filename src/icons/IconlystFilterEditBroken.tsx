import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilterEditBroken = ({
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
      d="M14.764 15.738a1.5 1.5 0 0 0-.494 1.11v1.93c0 .611-.372 1.161-.942 1.387l-1.826.727a1.494 1.494 0 0 1-2.046-1.387v-3.13c0-.396-.157-.775-.438-1.056l-4.237-3.773A3.66 3.66 0 0 1 3.71 8.959v-1.99a2.606 2.606 0 0 1 2.606-2.605M18.147 4.363a2.606 2.606 0 0 1 2.606 2.606v1.324c0 1.036-.44 2.024-1.21 2.717l-2.39 2.364"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.935 5.327c.38-.41.355-1.051-.054-1.43l-.678-.628a1.01 1.01 0 0 0-1.43.055L9.562 6.83c-.246.275-.4.62-.44.987l-.082.761a.825.825 0 0 0 .957.903l.737-.123a1.77 1.77 0 0 0 1.025-.566l1.271-1.387"
    />
  </Svg>
);
export default IconlystFilterEditBroken;
