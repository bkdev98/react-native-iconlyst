import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReplyShareRightBold = ({
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
      d="m21.04 11.57-6.91-6.246a1.39 1.39 0 0 0-1.51-.24 1.39 1.39 0 0 0-.836 1.288v3.154c-4.103-.12-6.732-1.749-8.25-5.096a.5.5 0 0 0-.95.136c-.03.208-.694 5.145 2.209 8.492 1.597 1.841 3.947 2.821 6.99 2.916l.003 2.483c0 .553.314 1.041.816 1.274a1.396 1.396 0 0 0 1.502-.204l6.899-5.843c.31-.264.492-.648.499-1.054a1.4 1.4 0 0 0-.462-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReplyShareRightBold;
