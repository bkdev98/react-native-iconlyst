import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpadesPokerCardBold = ({
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
      d="m13.86 10.643-1.858-1.596-1.934 1.66c-.367.33-.634.72-.759 1.12a1.55 1.55 0 0 0 .056 1.012 1 1 0 0 0 .624.598c.652.185.915-.026 1.312-.347q.132-.107.256-.2a.9.9 0 0 1 .45-.14.75.75 0 0 1 .498.195l.04.029c.333.24.732.556 1.222.509.422-.028.77-.306.906-.724.106-.313.115-.64.027-.923-.138-.443-.42-.845-.84-1.193"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.75 6.01a.75.75 0 0 1-1.5 0c0-.414.336-.755.75-.755s.75.331.75.745zm-.652 7.222a2.53 2.53 0 0 1-2.23 1.749 2.7 2.7 0 0 1-1.118-.172V16a.75.75 0 0 1-1.5 0v-1.137c-.431.155-.979.212-1.681.015a2.5 2.5 0 0 1-1.593-1.474 3.03 3.03 0 0 1-.1-2.02c.208-.663.624-1.285 1.204-1.804l2.202-1.891q.34-.29.72-.289h.005q.386.003.72.294l2.099 1.803c.629.52 1.084 1.179 1.307 1.896.18.583.167 1.236-.035 1.839M8.75 18.01a.75.75 0 0 1-1.5 0c0-.414.336-.755.75-.755s.75.331.75.745zM15 2.5H9A4.505 4.505 0 0 0 4.5 7v10c0 2.481 2.019 4.5 4.5 4.5h6c2.481 0 4.5-2.019 4.5-4.5V7c0-2.482-2.019-4.5-4.5-4.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSpadesPokerCardBold;
