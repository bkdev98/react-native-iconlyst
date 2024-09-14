import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaystation5Bulk = ({
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
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.765 11.35h-2.032v-1.18H21a1 1 0 1 0 0-2h-4.267a1 1 0 0 0-1 1v2.46c0 .949.77 1.72 1.717 1.72h2.315c.13 0 .235.107.235.24 0 .135-.104.24-.238.24h-3.004a1 1 0 1 0 0 2h3.004a2.241 2.241 0 0 0 .003-4.48"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M8.735 10.68a2.53 2.53 0 0 0-2.527-2.53H3a1 1 0 1 0 0 2h3.208c.291 0 .527.238.527.53a.526.526 0 0 1-.52.53H4.368a2.37 2.37 0 0 0-2.367 2.37v1.27a1 1 0 1 0 2 0v-1.27c0-.208.161-.37.367-.37h1.86a2.54 2.54 0 0 0 2.507-2.53M14.265 8.17H13.21c-1.75.016-2.893 1.148-2.915 2.89l-.018 1.848c-.01.667-.261.917-.923.923H8.307a1 1 0 1 0 0 2h1.056c1.748-.015 2.89-1.152 2.914-2.9l.018-1.848c.008-.651.269-.907.923-.912h1.047a1 1 0 1 0 0-2" />
    </G>
  </Svg>
);
export default IconlystPlaystation5Bulk;
