import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMovieStarBulk = ({
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
      d="M21.05 7.78v8.45c0 3.15-2.03 5.27-5.04 5.27H8c-3.02 0-5.05-2.12-5.05-5.27V7.78c0-.36.03-.71.08-1.05.4-2.54 2.26-4.2 4.89-4.23h8.16c2.63.03 4.49 1.68 4.89 4.23.05.34.08.69.08 1.05"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.92 2.5v4.23H3.03c-.05.34-.08.69-.08 1.05v.45h18.1v-.45c0-.36-.03-.71-.08-1.05h-4.89V2.5h-1.5v4.23H9.42V2.5zM14.583 15.133l.866-.83a1.16 1.16 0 0 0 .361-.7 1.164 1.164 0 0 0-.993-1.298l-1.223-.176-.548-1.097-.02-.036a1.2 1.2 0 0 0-.481-.472c-.569-.3-1.274-.079-1.592.508l-.548 1.097-1.195.172c-.276.03-.53.155-.699.34-.219.221-.34.527-.333.842.008.311.143.61.357.805l.882.846-.208 1.194c-.044.253-.003.508.115.733.207.401.606.631 1.032.631.182 0 .368-.042.547-.13l1.096-.572 1.111.58c.207.101.444.142.725.105a1.18 1.18 0 0 0 .956-1.347zm-2.584-2.838.336.672c.177.336.504.57.874.622l.71.104-.52.498c-.27.272-.391.657-.325 1.025l.123.709-.67-.35a1.2 1.2 0 0 0-.523-.121 1.24 1.24 0 0 0-.547.128l-.654.341.122-.703a1.18 1.18 0 0 0-.34-1.043l-.506-.484.709-.104c.374-.053.703-.287.883-.636z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMovieStarBulk;
