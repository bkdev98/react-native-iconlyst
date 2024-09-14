import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageStarBulk = ({
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
      d="M6.333 5.8a.75.75 0 0 0 0 1.5h.055a.75.75 0 0 0 0-1.5zm2.485 0a.75.75 0 0 0 0 1.5h.055a.75.75 0 0 0 0-1.5zm2.487 0a.75.75 0 0 0 0 1.5h.055a.75.75 0 1 0 0-1.5zM14.626 16.94l.937-.901c.184-.175.303-.41.336-.664a1.1 1.1 0 0 0-.222-.828 1.1 1.1 0 0 0-.735-.429l-1.306-.187-.586-1.169a1.13 1.13 0 0 0-2.017.004l-.583 1.164-1.307.188c-.249.036-.481.154-.655.334a1.13 1.13 0 0 0 .031 1.587l.94.901-.223 1.284a1.133 1.133 0 0 0 1.116 1.305c.176 0 .355-.041.52-.13l1.171-.606 1.166.604c.22.116.463.155.706.116a1.13 1.13 0 0 0 .933-1.3zm-2.171-2.266-.412-.82-.412.823c-.168.333-.486.56-.853.61l-.899.13.648.621c.269.256.392.63.326 1l-.154.887.824-.427c.323-.17.714-.171 1.044 0l.82.426-.154-.887c-.066-.364.055-.74.327-1l.646-.62-.903-.13a1.12 1.12 0 0 1-.848-.613"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWebPageStarBulk;
