import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneCallTickBold = ({
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
      d="M19.8 14.62c-.243-.231-.507-.482-.787-.764-1.276-1.273-2.38-.84-3.268-.491-1.06.416-2.064.81-3.893-1.017-1.829-1.828-1.436-2.831-1.02-3.895.346-.888.78-1.992-.499-3.265-.277-.28-.527-.543-.758-.786-.94-.991-1.619-1.708-2.574-1.72h-.025c-.82 0-1.679.525-2.958 1.805-.013.013-.078.078-.089.092-.286.278-1.045 1.02-1.054 2.467-.014 2.263 1.811 5.243 5.424 8.858 3.597 3.595 6.565 5.416 8.824 5.416h.027c1.45-.01 2.192-.77 2.471-1.055l.093-.09c1.288-1.288 1.81-2.151 1.8-2.977-.012-.955-.726-1.636-1.714-2.577M21.906 3.54a.75.75 0 0 0-1.061 0l-3.88 3.88-1.61-1.61a.749.749 0 1 0-1.06 1.06l2.14 2.142a.75.75 0 0 0 1.06 0l4.41-4.41a.75.75 0 0 0 0-1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPhoneCallTickBold;
