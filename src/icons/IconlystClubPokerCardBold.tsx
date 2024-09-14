import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystClubPokerCardBold = ({
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
      d="M14.104 11.705a.97.97 0 0 0-.634-.021.75.75 0 0 1-.794-1.205.95.95 0 0 0 .13-1.048.95.95 0 0 0-1.056-.486.95.95 0 0 0-.68.647.97.97 0 0 0 .2.895c.207.25.23.606.058.881a.75.75 0 0 1-.821.325c-.268-.068-.492-.061-.687.023a.96.96 0 0 0-.514 1.192.955.955 0 0 0 .87.61h.005c.388 0 .903-.081 1.166-.461a1 1 0 0 1 .07-.091v-.001l.056-.055.002-.001a.75.75 0 0 1 .49-.189h.026a.75.75 0 0 1 .473.183q.033.029.063.062l.05.059c.257.339.59.489 1.114.501a.98.98 0 0 0 .912-.523.94.94 0 0 0 .027-.756.94.94 0 0 0-.527-.541"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.75 6.01a.75.75 0 0 1-1.5 0c0-.414.336-.755.75-.755s.75.331.75.745zm-.801 7.654c-.422.863-1.302 1.395-2.304 1.36a3.3 3.3 0 0 1-.921-.145c.001.775.003.989.003.993a.75.75 0 0 1-.744.756h-.006a.75.75 0 0 1-.75-.743s-.002-.216-.003-1.014c-.322.097-.648.114-1.055.147a2.45 2.45 0 0 1-2.267-1.582c-.455-1.203.141-2.594 1.328-3.1q.162-.068.33-.113a2.435 2.435 0 0 1 1.834-2.735 2.45 2.45 0 0 1 2.748 1.259c.236.457.311.975.236 1.472q.14.037.273.089c.627.246 1.13.755 1.378 1.397a2.44 2.44 0 0 1-.08 1.959M8.75 18.01a.75.75 0 0 1-1.5 0c0-.414.336-.755.75-.755s.75.331.75.745zM15 2.5H9A4.505 4.505 0 0 0 4.5 7v10c0 2.481 2.019 4.5 4.5 4.5h6c2.481 0 4.5-2.019 4.5-4.5V7c0-2.482-2.019-4.5-4.5-4.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystClubPokerCardBold;
