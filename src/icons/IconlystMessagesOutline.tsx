import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M6.719 6.536a8.236 8.236 0 0 1 11.665 0zm11.665 0c3.225 3.238 3.22 8.481 0 11.712a8.23 8.23 0 0 1-9.344 1.644l-.048-.02c-.444-.179-.974-.394-1.513-.394h-.004c-.377.002-.744.094-1.051.188-.157.048-.312.101-.454.15l-.029.01c-.134.046-.255.088-.373.125-.263.083-.436.118-.554.118a.3.3 0 0 1-.082-.01c-.002 0-.004 0-.01-.008-.008-.007-.008-.009-.01-.012a.3.3 0 0 1-.01-.084c0-.12.036-.295.118-.56.036-.116.077-.236.122-.368l.012-.037c.049-.143.101-.298.149-.456.093-.31.183-.679.183-1.059 0-.542-.21-1.067-.39-1.519l-.015-.037-.016-.036c-1.415-3.068-.867-6.817 1.653-9.346m-1.062-1.06c3.805-3.816 9.985-3.816 13.79 0 3.81 3.824 3.803 10.014 0 13.83a9.73 9.73 0 0 1-10.985 1.97c-.519-.21-.774-.298-.98-.299-.156.002-.355.042-.618.123-.13.039-.261.084-.404.133l-.033.012c-.13.044-.27.093-.407.136-.29.091-.646.187-1.005.187-.385 0-.809-.111-1.155-.459-.346-.347-.456-.77-.456-1.155 0-.359.094-.715.185-1.005.042-.137.09-.275.133-.404l.013-.038c.049-.144.093-.276.132-.406.08-.265.12-.468.12-.627 0-.211-.085-.464-.291-.982-1.658-3.614-1.013-8.03 1.96-11.015z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessagesOutline;