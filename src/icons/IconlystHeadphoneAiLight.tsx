import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeadphoneAiLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.78 14.155a3.56 3.56 0 0 0-1.66 4.01 3.53 3.53 0 0 0 3.276 2.617c.942.04 1.652-.855 1.433-1.774l-.943-3.935c-.222-.93-1.28-1.397-2.107-.918M19.22 14.156a3.56 3.56 0 0 1 1.66 4.01 3.53 3.53 0 0 1-3.276 2.616c-.942.04-1.652-.855-1.433-1.773l.943-3.936c.222-.93 1.28-1.396 2.107-.918"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.625 14.425v-1.92A7.6 7.6 0 0 0 18.62 8.72M4.375 14.425v-1.92c0-1.505.436-2.908 1.189-4.09M14.23 9.22v-.01M9.945 3.217l-.096.259a3.57 3.57 0 0 1-2.106 2.109l-.259.096.26.096a3.57 3.57 0 0 1 2.105 2.109l.096.26.096-.26a3.57 3.57 0 0 1 2.106-2.11l.259-.095-.259-.096a3.57 3.57 0 0 1-2.106-2.11zM16.436 3.217a2.11 2.11 0 0 1-1.405 1.407c.673.206 1.2.734 1.405 1.408a2.11 2.11 0 0 1 1.406-1.408 2.11 2.11 0 0 1-1.406-1.407"
    />
  </Svg>
);
export default IconlystHeadphoneAiLight;
