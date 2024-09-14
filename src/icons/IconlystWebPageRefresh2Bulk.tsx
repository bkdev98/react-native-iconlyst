import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageRefresh2Bulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M7.783 2.5c-1.593 0-2.926.568-3.859 1.568C2.995 5.064 2.5 6.45 2.5 8.026v.716h19v-.716c0-1.576-.492-2.961-1.42-3.958-.931-1-2.265-1.568-3.862-1.568zM2.5 15.973v-5.73h19v5.73c0 1.576-.492 2.961-1.42 3.958-.932 1-2.265 1.568-3.863 1.568H7.783c-1.597 0-2.93-.567-3.862-1.568-.928-.997-1.42-2.382-1.42-3.958" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.29 5.8a.75.75 0 0 0 0 1.5h.055a.75.75 0 0 0 0-1.5zm2.485 0a.75.75 0 0 0 0 1.5h.056a.75.75 0 0 0 0-1.5zm2.486 0a.75.75 0 0 0 0 1.5h.056a.75.75 0 0 0 0-1.5zM14.662 12.248a.75.75 0 0 1 .75.75v1.714a.75.75 0 0 1-.864.77h-1.62a.75.75 0 0 1-.314-1.43 2.5 2.5 0 0 0-.77-.122c-.774 0-1.44.413-1.797 1.036a.75.75 0 0 1-1.301-.745 3.56 3.56 0 0 1 3.098-1.791c.847 0 1.538.258 2.068.579v-.011a.75.75 0 0 1 .75-.75M8.587 17.24a.75.75 0 0 1 .75-.75h1.735a.75.75 0 0 1 .215 1.47c.176.063.362.1.557.1.764 0 1.432-.412 1.789-1.03a.75.75 0 0 1 1.299.75 3.56 3.56 0 0 1-3.088 1.78 3.3 3.3 0 0 1-1.775-.542.75.75 0 0 1-1.482-.164z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWebPageRefresh2Bulk;
