import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEggBulk = ({
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
      d="M13.06 21.986c4.37-.298 7.772-3.963 7.738-7.956-.028-1.715-.284-3.013-.72-4.271-.846-2.456-2.055-4.692-4.099-6.37-2.249-1.846-4.641-1.859-6.91-.046-1.795 1.435-2.944 3.34-3.793 5.437-.784 1.936-1.267 3.935-1.002 6.043.537 4.288 4.437 7.46 8.786 7.163"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.982 7.234a.75.75 0 0 1 .22 1.038 10.8 10.8 0 0 0-1.398 3.124.75.75 0 0 1-1.45-.385c.341-1.283.882-2.464 1.59-3.556a.75.75 0 0 1 1.038-.22"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEggBulk;
