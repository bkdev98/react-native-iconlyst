import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaystation5Bold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.735 11.19a2.53 2.53 0 0 0-2.527-2.53H3a1 1 0 1 0 0 2h3.208c.291 0 .527.237.527.53a.526.526 0 0 1-.52.53H4.368a2.37 2.37 0 0 0-2.367 2.37v1.27a1 1 0 1 0 2 0v-1.27c0-.209.161-.37.367-.37h1.86a2.54 2.54 0 0 0 2.507-2.53M14.265 8.68H13.21c-1.75.014-2.893 1.146-2.915 2.89l-.018 1.846c-.01.667-.261.917-.923.923H8.307a1 1 0 1 0 0 2h1.056c1.748-.015 2.89-1.152 2.914-2.9l.018-1.848c.008-.65.269-.907.923-.912h1.047a1 1 0 1 0 0-2M19.765 11.86h-2.032v-1.18H21a1 1 0 1 0 0-2h-4.267a1 1 0 0 0-1 1v2.46c0 .948.77 1.72 1.717 1.72h2.315c.13 0 .235.106.235.24s-.104.24-.238.24h-3.004a1 1 0 1 0 0 2h3.004a2.241 2.241 0 0 0 .003-4.48"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlaystation5Bold;
