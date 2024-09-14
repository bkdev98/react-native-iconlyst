import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBallAmericanFootballBulk = ({
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
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M21.485 7.61c-.01.1-.01.2-.02.29-.03.41-.07.81-.14 1.2-.97 6.4-6.14 11.47-12.58 12.29-.29.04-.59.07-.89.09-.2.01-.4.02-.61.02h-.1c-1.23 0-2.66-.23-3.55-1.13s-1.11-2.37-1.09-3.61c0-.21 0-.42.02-.62.02-.3.05-.59.09-.88.82-6.45 5.88-11.61 12.28-12.59.39-.07.79-.11 1.2-.14.09-.01.19-.01.29-.02 1.32-.06 2.98.11 3.99 1.11 1 1 1.17 2.66 1.11 3.99"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.745 21.39c-.29.04-.59.07-.89.09-.2.01-.4.02-.61.02a5.95 5.95 0 0 0-4.74-4.74c0-.21 0-.42.02-.62.02-.3.05-.59.09-.88 3.13.51 5.62 2.99 6.13 6.13M13.82 9.117l-.998.999-.727-.727a.749.749 0 1 0-1.06 1.06l.726.727-.94.94-.729-.727a.749.749 0 1 0-1.06 1.06l.727.728-.998.998a.75.75 0 1 0 1.062 1.06l.997-.997.723.723a.747.747 0 0 0 1.06 0 .75.75 0 0 0 0-1.061l-.723-.723.941-.94.725.724a.747.747 0 0 0 1.06 0 .75.75 0 0 0 0-1.061l-.724-.724 1-.998a.75.75 0 1 0-1.062-1.061M21.485 7.61c-.01.1-.01.2-.02.29-.03.41-.07.81-.14 1.2a7.43 7.43 0 0 1-6.43-6.43c.39-.07.79-.11 1.2-.14.09-.01.19-.01.29-.02a5.94 5.94 0 0 0 5.1 5.1"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBallAmericanFootballBulk;
