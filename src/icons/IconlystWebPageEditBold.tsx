import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageEditBold = ({
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
      d="M7.826 2.5c-1.593 0-2.926.568-3.859 1.568-.929.996-1.424 2.382-1.424 3.958v.716h19v-.716c0-1.576-.492-2.961-1.42-3.958-.931-1-2.265-1.568-3.862-1.568zM6.333 5.8a.75.75 0 0 0 0 1.5h.055a.75.75 0 0 0 0-1.5zm2.485 0a.75.75 0 0 0 0 1.5h.055a.75.75 0 0 0 0-1.5zm2.487 0a.75.75 0 0 0 0 1.5h.055a.75.75 0 1 0 0-1.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="m10.007 16.765 3.248-3.547a.276.276 0 0 1 .39-.014l.685.635a.275.275 0 0 1 .016.389l-.003.003-3.219 3.512-.006.008c-.157.176-.37.293-.603.332l-.747.126a.087.087 0 0 1-.1-.096l.082-.77a1.04 1.04 0 0 1 .257-.578"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.543 15.973v-5.73h19v5.73c0 1.576-.492 2.961-1.42 3.958-.932 1-2.265 1.568-3.863 1.568H7.826c-1.597 0-2.93-.567-3.863-1.568-.928-.997-1.42-2.382-1.42-3.958m9.612-3.774a1.776 1.776 0 0 1 2.508-.095l.687.635c.718.665.764 1.787.098 2.507l-3.215 3.507c-.384.43-.903.715-1.47.81l-.747.125a1.587 1.587 0 0 1-1.84-1.735l.083-.77a2.54 2.54 0 0 1 .633-1.421l.005-.007 3.254-3.552z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWebPageEditBold;
