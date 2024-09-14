import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGiftBulk = ({
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
      d="M17.373 6.39H7.628c-2.534 0-4.237 1.857-4.237 4.62v6.118c0 2.764 1.702 4.62 4.236 4.62h9.746c2.494 0 4.236-1.9 4.236-4.62V11.01c0-2.763-1.702-4.62-4.236-4.62"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.921 12.13c.052-.089.187-.053.187.05v2.6a.1.1 0 0 1-.013.049l-3.088 5.367a.1.1 0 0 1-.087.05h-1.499a.1.1 0 0 1-.087-.15zM13.345 9.116a.1.1 0 0 1 .087.15l-6.27 10.88a.1.1 0 0 1-.102.048 2.46 2.46 0 0 1-1.225-.595.1.1 0 0 1-.018-.12l5.942-10.313a.1.1 0 0 1 .087-.05zM8.405 9.116a.1.1 0 0 1 .087.15l-3.417 5.936c-.051.088-.187.052-.187-.05v-2.61a.1.1 0 0 1 .013-.05l1.857-3.23a.1.1 0 0 1 .06-.047c.249-.063.516-.1.81-.1zM18.255 9.238c.06.018.085.087.054.14l-6.232 10.818a.1.1 0 0 1-.087.05h-1.499a.1.1 0 0 1-.087-.15L16.7 9.166a.1.1 0 0 1 .087-.05c.493-.002.994-.023 1.47.122"
      clipRule="evenodd"
    />
    <Path
      fill="#CB6FEB"
      fillRule="evenodd"
      d="m20.09 11.833-.002.006c.01.13.02.258.02.397v-.398c0-.01-.012-.013-.018-.005"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.102 6.392H13.49c.366-1.047 1.162-2.642 2.61-2.642.69 0 1.25.592 1.25 1.321 0 .728-.56 1.321-1.25 1.321m-7.207 0c-.69 0-1.25-.593-1.25-1.321 0-.729.56-1.321 1.25-1.321 1.449 0 2.245 1.595 2.61 2.642zm7.207-4.142c-1.858 0-2.97 1.373-3.604 2.644-.633-1.271-1.745-2.644-3.603-2.644-1.517 0-2.75 1.266-2.75 2.821s1.233 2.821 2.75 2.821h7.207c1.517 0 2.75-1.266 2.75-2.821s-1.233-2.821-2.75-2.821"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGiftBulk;
