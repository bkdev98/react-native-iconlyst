import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageEditBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M7.826 2.5c-1.593 0-2.926.568-3.859 1.568-.929.996-1.424 2.382-1.424 3.958v.716h19v-.716c0-1.576-.492-2.961-1.42-3.958-.931-1-2.265-1.568-3.862-1.568zM2.543 15.973v-5.73h19v5.73c0 1.576-.492 2.961-1.42 3.958-.932 1-2.265 1.568-3.863 1.568H7.826c-1.597 0-2.93-.567-3.863-1.568-.928-.997-1.42-2.382-1.42-3.958" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.333 5.8a.75.75 0 0 0 0 1.5h.055a.75.75 0 1 0 0-1.5zm2.485 0a.75.75 0 0 0 0 1.5h.055a.75.75 0 1 0 0-1.5zm2.487 0a.75.75 0 0 0 0 1.5h.055a.75.75 0 1 0 0-1.5zM14.663 12.104a1.776 1.776 0 0 0-2.508.095l-.004.004-3.254 3.553-.005.006a2.54 2.54 0 0 0-.633 1.42l-.083.77a1.587 1.587 0 0 0 1.84 1.736l.747-.125a2.54 2.54 0 0 0 1.47-.81l3.215-3.507c.666-.72.62-1.842-.098-2.507zm-4.656 4.661 3.248-3.547a.276.276 0 0 1 .39-.014l.685.635a.275.275 0 0 1 .016.389l-.003.003-3.219 3.512-.006.008c-.157.176-.37.293-.603.332l-.747.126a.087.087 0 0 1-.1-.096l.082-.77a1.04 1.04 0 0 1 .257-.578"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWebPageEditBulk;
