import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGlowLikeBold = ({
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
      d="M6.446 7.05a.75.75 0 0 0 1.061 0 .75.75 0 0 0 0-1.06l-1-1a.75.75 0 1 0-1.06 1.06zM17.977 7.25a.74.74 0 0 0 .53-.22l1-1a.749.749 0 1 0-1.06-1.06l-1 1a.749.749 0 0 0 .53 1.28M6.47 16.99l-1 1a.75.75 0 1 0 1.06 1.06l1-1a.75.75 0 1 0-1.06-1.06M18.529 16.97a.75.75 0 1 0-1.061 1.06l1 1a.751.751 0 0 0 1.06-1.06zM4.522 11.25H3.477a.75.75 0 0 0 0 1.5h1.045a.75.75 0 0 0 0-1.5M12.476 4.75a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-1.5 0v1c0 .414.336.75.75.75M21.477 11.25h-1.045a.75.75 0 0 0 0 1.5h1.045a.75.75 0 0 0 0-1.5M12.476 19.25a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-.75-.75M14.538 8.913a2.65 2.65 0 0 0-2.057.212 2.58 2.58 0 0 0-2.073-.21c-1.406.452-2.12 2.019-1.627 3.568.664 2.058 3.344 3.534 3.458 3.597a.5.5 0 0 0 .479-.001c.114-.062 2.816-1.561 3.457-3.598.492-1.547-.224-3.114-1.637-3.568"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGlowLikeBold;
