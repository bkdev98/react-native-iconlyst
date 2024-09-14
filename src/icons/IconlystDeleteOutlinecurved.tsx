import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeleteOutlinecurved = ({
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
      d="M7.812 6.17c.043-.694.24-1.686.937-2.487.737-.85 1.831-1.28 3.25-1.28s2.513.43 3.251 1.28c.697.8.894 1.793.937 2.488h3.889a.75.75 0 0 1 0 1.5H3.925a.75.75 0 0 1 0-1.5zm6.872 0c-.038-.451-.17-1.053-.572-1.51-.44-.502-1.15-.756-2.113-.756-.96 0-1.672.254-2.113.756-.401.457-.534 1.059-.572 1.51z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M11.989 22.388c-2.959 0-4.781-.513-5.907-1.66-1.588-1.62-1.536-4.273-1.464-7.945v-.007c.017-.86.035-1.787.035-2.783a.75.75 0 0 1 1.5 0c0 1.006-.018 1.943-.036 2.813-.067 3.433-.111 5.7 1.036 6.87.81.827 2.347 1.212 4.836 1.212 2.494 0 4.034-.387 4.848-1.216 1.154-1.177 1.111-3.457 1.046-6.91l-.002-.097c-.015-.828-.032-1.72-.032-2.672a.75.75 0 0 1 1.5 0c0 .98.017 1.891.034 2.74v.008c.07 3.69.119 6.358-1.476 7.982-1.129 1.151-2.955 1.665-5.918 1.665"
    />
  </Svg>
);
export default IconlystDeleteOutlinecurved;
