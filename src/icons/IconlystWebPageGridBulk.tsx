import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageGridBulk = ({
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
    <G fill={props.color} opacity={0.4}>
      <Path
        fillRule="evenodd"
        d="M7.783 2.5c-1.593 0-2.926.568-3.859 1.568C2.995 5.064 2.5 6.45 2.5 8.026v.716h19v-.716c0-1.576-.492-2.961-1.42-3.958-.931-1-2.265-1.568-3.862-1.568z"
        clipRule="evenodd"
      />
      <Path d="M2.5 15.973v-5.73h5.555v11.256h-.272c-1.597 0-2.93-.567-3.862-1.568-.928-.997-1.42-2.382-1.42-3.958M9.555 21.5h6.662c1.598 0 2.931-.568 3.863-1.569.922-.99 1.413-2.364 1.42-3.927H9.555zM21.5 14.504v-4.262H9.555v4.262z" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.29 5.8a.75.75 0 0 0 0 1.5h.055a.75.75 0 0 0 0-1.5zm2.485 0a.75.75 0 0 0 0 1.5h.056a.75.75 0 0 0 0-1.5zm2.486 0a.75.75 0 0 0 0 1.5h.056a.75.75 0 0 0 0-1.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWebPageGridBulk;
