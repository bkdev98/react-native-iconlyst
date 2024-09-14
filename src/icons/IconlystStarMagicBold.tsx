import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarMagicBold = ({
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
      d="M20.674 14.43c.28-.36.403-.807.344-1.26a1.67 1.67 0 0 0-.647-1.127l-3.173-2.398a.68.68 0 0 1-.269-.586l.22-4A1.683 1.683 0 0 0 14.496 3.6l-3.319 2.303a.69.69 0 0 1-.64.08l-3.74-1.39-.016-.006a1.7 1.7 0 0 0-1.025-.028 1.7 1.7 0 0 0-1.033.81 1.7 1.7 0 0 0-.154 1.303l1.127 3.828a.7.7 0 0 1-.129.637l-2.53 3.15a1.7 1.7 0 0 0-.38 1.036 1.69 1.69 0 0 0 1.658 1.717l4.002.05a.71.71 0 0 1 .564.303l2.176 3.344c.205.31.513.544.856.655a1.7 1.7 0 0 0 1.3-.072c.408-.199.715-.545.862-.972l1.35-3.789a.7.7 0 0 1 .481-.447l3.872-1.08c.36-.099.67-.309.896-.604M21.143 21.281l-2.535-2.72a.75.75 0 1 0-1.097 1.023l2.534 2.719a.747.747 0 0 0 1.06.038.75.75 0 0 0 .038-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStarMagicBold;
