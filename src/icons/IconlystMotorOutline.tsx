import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMotorOutline = ({
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
      d="M12.407 4.71a.75.75 0 0 1 .75-.75h2.133c.393 0 .76.147 1.047.339s.557.477.706.833l.003.006.797 1.95c.381-.487.938-.878 1.565-1.02a.75.75 0 0 1 .691.195c.56.55.947 1.18 1.11 1.894.164.712.091 1.449-.172 2.188a.75.75 0 0 1-.54.479 2.9 2.9 0 0 1-1.117.023l.528 1.293.05.01c.158.034.376.092.618.187.477.187 1.107.54 1.547 1.2a.75.75 0 0 1-1.248.832c-.202-.302-.512-.5-.818-.624a2 2 0 0 1-.114.25 3.261 3.261 0 1 1-4.904 3.363h-4.146a3.264 3.264 0 0 1-3.208 2.673 3.256 3.256 0 0 1-3.208-2.673H3.5a.75.75 0 0 1-.75-.75v-2.501a3.997 3.997 0 0 1 3.999-4h1.836c1.096 0 2.094.622 2.58 1.607l.656 1.328v.002c.146.29.437.465.742.465h.963c.238 0 .444-.179.473-.429l-.062-4.335v-.003A2.166 2.166 0 0 1 16 6.546l-.342-.836a.46.46 0 0 0-.16-.166.43.43 0 0 0-.21-.083h-2.132a.75.75 0 0 1-.75-.75m5.636 9.103a.8.8 0 0 1 .155-.14l.382-.343a.29.29 0 0 0 .064-.32l-2.03-4.966h-.515c-.366 0-.666.299-.662.68l.062 4.373-.001.063a1.98 1.98 0 0 1-1.972 1.85h-.963a2.34 2.34 0 0 1-2.084-1.297l-.002-.004-.657-1.331a1.38 1.38 0 0 0-1.235-.77H6.749a2.497 2.497 0 0 0-2.499 2.499v1.751h11.417a.3.3 0 0 0 .19-.076h.002l.758-.684a.8.8 0 0 1 .167-.15zm-1.18 3.082.274-.246.546.63a.75.75 0 1 0 1.134-.982l-.566-.652.584-.526a1.77 1.77 0 0 1 1.175 1.66 1.762 1.762 0 0 1-3.486.357 1.8 1.8 0 0 0 .339-.24zM7.686 18.53c-.772 0-1.42-.489-1.661-1.173h3.321a1.76 1.76 0 0 1-1.66 1.173m11.108-9.786c.044.183.192.37.47.505.151.073.32.118.488.134.064-.33.058-.624-.003-.892a2.1 2.1 0 0 0-.38-.796A1.5 1.5 0 0 0 19 8.04c-.198.266-.249.52-.208.704"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M5.84 7.336a.75.75 0 0 0 0 1.5h2.808a.75.75 0 1 0 0-1.5z"
    />
  </Svg>
);
export default IconlystMotorOutline;