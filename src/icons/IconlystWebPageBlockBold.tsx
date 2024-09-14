import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageBlockBold = ({
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
      d="M7.783 2.5c-1.594 0-2.927.568-3.86 1.568C2.996 5.064 2.5 6.45 2.5 8.026v.716h19v-.716c0-1.576-.493-2.961-1.42-3.958-.932-1-2.265-1.568-3.863-1.568zM6.289 5.8a.75.75 0 0 0 0 1.5h.056a.75.75 0 0 0 0-1.5zm2.486 0a.75.75 0 0 0 0 1.5h.055a.75.75 0 0 0 0-1.5zm2.486 0a.75.75 0 0 0 0 1.5h.056a.75.75 0 0 0 0-1.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M12.043 18.087c-.337 0-.656-.076-.94-.212l2.93-2.873a2.184 2.184 0 0 1-1.99 3.085M12.043 13.719c.337 0 .656.076.94.212l-2.93 2.873a2.185 2.185 0 0 1 1.99-3.085"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.5 15.973v-5.73h19v5.73c0 1.576-.493 2.961-1.42 3.958-.932 1-2.266 1.568-3.864 1.568H7.783c-1.598 0-2.931-.567-3.863-1.568-.928-.997-1.42-2.382-1.42-3.958m5.859-.07a3.685 3.685 0 1 1 7.37 0 3.685 3.685 0 0 1-7.37 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWebPageBlockBold;
