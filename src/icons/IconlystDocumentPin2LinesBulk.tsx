import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentPin2LinesBulk = ({
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
      d="M11.895 18.351c0-.869.322-1.707.885-2.353a.22.22 0 0 0 .027-.245 3 3 0 0 1-.142-2.529 2.99 2.99 0 0 1 2.791-1.892h2.498c.322 0 .632.053.925.149.138.045.286-.053.286-.197V6.772a4.4 4.4 0 0 0-4.397-4.397H8.13a4.4 4.4 0 0 0-4.397 4.397v9.234a4.403 4.403 0 0 0 4.397 4.397h4.195c.189 0 .285-.253.165-.4a2.6 2.6 0 0 1-.595-1.652"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.894 9.238a.75.75 0 0 1 0-1.5h3.885a.75.75 0 0 1 0 1.5zm1.585 4.196H7.894a.75.75 0 0 1 0-1.5H9.48a.75.75 0 0 1 0 1.5M16.71 18.24l-.005-.001-.005.001h-2.047a.83.83 0 0 1 .29-.526c.816-.456.968-.764 1.017-.862.222-.44.189-1.184.022-1.571-.038-.089-.15-.357-.702-.765a.252.252 0 0 1 .177-.434h2.497c.105 0 .197.061.237.158a.4.4 0 0 1 .01.216c-.62.467-.734.734-.771.821-.166.39-.2 1.131.02 1.575.052.102.206.408 1.019.862a.83.83 0 0 1 .29.526zm2.626-1.753a1 1 0 0 0-.091-.059 4 4 0 0 1-.446-.284 1.3 1.3 0 0 1 .004-.234c.07-.07.207-.187.37-.316a1.75 1.75 0 0 0 .413-1.905l-.002-.004a1.745 1.745 0 0 0-1.63-1.103h-2.497c-.724 0-1.363.433-1.63 1.104-.263.663-.102 1.412.48 1.969.107.08.23.185.299.252.01.073.014.174.013.232-.1.08-.288.201-.451.29a1 1 0 0 0-.09.058 2.34 2.34 0 0 0-.932 1.864 1.39 1.39 0 0 0 1.386 1.389h1.423v1.135a.75.75 0 0 0 1.5 0V19.74h1.424a1.39 1.39 0 0 0 1.388-1.389c0-.728-.348-1.425-.931-1.864"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDocumentPin2LinesBulk;
