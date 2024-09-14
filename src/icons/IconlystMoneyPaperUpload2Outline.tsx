import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperUpload2Outline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.97 10.69c-.38.407-.623 1.018-.623 1.808v5.342c0 .789.244 1.4.623 1.808.373.4.933.663 1.693.663H17.84c.759 0 1.318-.262 1.691-.663.38-.407.623-1.019.623-1.808v-5.342c0-.789-.245-1.4-.624-1.808-.375-.402-.934-.665-1.69-.665h-1.166a.75.75 0 0 1 0-1.5h1.166c1.127 0 2.1.405 2.787 1.142.681.732 1.027 1.73 1.027 2.83v5.343c0 1.099-.343 2.098-1.025 2.83-.686.737-1.66 1.141-2.79 1.141H6.663c-1.13 0-2.104-.403-2.79-1.141-.682-.732-1.026-1.731-1.026-2.83v-5.342c0-1.1.344-2.099 1.025-2.83.687-.739 1.66-1.143 2.79-1.143H8.33a.75.75 0 0 1 0 1.5H6.662c-.759 0-1.319.263-1.692.665M12.251 2.313a.75.75 0 0 1 .53.22l2.054 2.053a.75.75 0 0 1-1.06 1.06L12.25 4.124l-1.523 1.524a.75.75 0 0 1-1.061-1.061l2.054-2.054a.75.75 0 0 1 .53-.22"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.252 2.313a.75.75 0 0 1 .75.75v5.822a.75.75 0 0 1-1.5 0V3.063a.75.75 0 0 1 .75-.75M5.938 11.928a.75.75 0 0 1 .75-.75h1.348a.75.75 0 0 1 0 1.5H6.688a.75.75 0 0 1-.75-.75M15.715 18.41a.75.75 0 0 1 .75-.75h1.348a.75.75 0 1 1 0 1.5h-1.348a.75.75 0 0 1-.75-.75M12.25 13.719a1.45 1.45 0 1 0 0 2.899 1.45 1.45 0 0 0 0-2.9m-2.95 1.45a2.95 2.95 0 1 1 5.9-.001 2.95 2.95 0 0 1-5.9 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMoneyPaperUpload2Outline;
