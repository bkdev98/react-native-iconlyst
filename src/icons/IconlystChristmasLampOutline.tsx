import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasLampOutline = ({
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
      d="m11.862 4.199-1.34 2.673-.001.003c-.244.482-.71.815-1.244.89h-.002L6.27 8.2a.138.138 0 0 0-.078.236l2.169 2.082c.393.375.574.923.48 1.46l-.512 2.937a.15.15 0 0 0 .22.153l.006-.003 2.681-1.39a1.67 1.67 0 0 1 1.53 0l2.687 1.392q.046.024.095.016a.15.15 0 0 0 .126-.17l-.512-2.934a1.63 1.63 0 0 1 .48-1.463l2.167-2.08a.138.138 0 0 0-.077-.236l-.01-.002-2.997-.432h-.002c-.534-.076-1-.408-1.244-.893L12.14 4.197a.159.159 0 0 0-.28 0m.902-1.398a1.66 1.66 0 0 0-2.235.71L9.182 6.198a.16.16 0 0 1-.115.082l-2.999.432a1.639 1.639 0 0 0-.918 2.802l.002.002L7.324 11.6v.002a.13.13 0 0 1 .04.117l-.514 2.943-.001.008c-.058.357.003.72.17 1.036v.002a1.65 1.65 0 0 0 2.229.686l2.677-1.388a.17.17 0 0 1 .153 0l2.677 1.387c.315.167.677.227 1.03.17h.001a1.65 1.65 0 0 0 1.368-1.892l-.515-2.952v-.002a.13.13 0 0 1 .038-.115l2.173-2.088a1.64 1.64 0 0 0 .487-.964v-.001a1.64 1.64 0 0 0-1.405-1.837l-2.996-.432h-.002a.15.15 0 0 1-.114-.081l-1.34-2.678-.005-.01a1.65 1.65 0 0 0-.71-.71"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.437 14.169a.75.75 0 0 1 .414.976l-2.412 5.97h5.118l-2.412-5.97a.75.75 0 1 1 1.39-.562l2.552 6.314a1.25 1.25 0 0 1-1.159 1.718h-5.86a1.25 1.25 0 0 1-1.158-1.718l2.55-6.314a.75.75 0 0 1 .977-.414"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChristmasLampOutline;
