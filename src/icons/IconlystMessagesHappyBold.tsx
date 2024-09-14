import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesHappyBold = ({
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
      d="M15.806 14.45a4.39 4.39 0 0 1-4.023 2.627 4.39 4.39 0 0 1-4.026-2.628.749.749 0 1 1 1.373-.601 2.89 2.89 0 0 0 2.653 1.728 2.89 2.89 0 0 0 2.65-1.729.749.749 0 1 1 1.373.602m2.914-8.577a9.42 9.42 0 0 0-6.717-2.789H12c-2.54 0-4.925.99-6.719 2.79-2.805 2.814-3.57 7.137-1.913 10.73.191.476.316.81.316 1.09 0 .335-.142.75-.277 1.152-.265.78-.565 1.663.077 2.308.648.648 1.531.345 2.312.073.397-.136.807-.277 1.131-.28.291 0 .657.148 1.081.319a9.517 9.517 0 0 0 10.71-1.915c3.703-3.717 3.703-9.762 0-13.478"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessagesHappyBold;
