import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAdobeDreamweaverCircleOutline = ({
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
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.88 10.456a.75.75 0 0 0-.956.46l-.526 1.51-.45-1.14a.75.75 0 0 0-1.396 0l-.45 1.14-.527-1.51a.75.75 0 1 0-1.416.495l1.192 3.412a.75.75 0 0 0 1.405.029l.494-1.25.494 1.25a.75.75 0 0 0 1.405-.029l1.192-3.412a.75.75 0 0 0-.461-.955M7.07 10.235h-.002zm.526-.114c.33-.052.74-.08 1.13-.022.393.059.711.198.933.437.213.23.422.645.422 1.43 0 .786-.208 1.212-.429 1.455-.227.251-.551.4-.944.47a3.8 3.8 0 0 1-1.112.01zm-.75 4.4-.207.72a.75.75 0 0 1-.543-.72V9.518a.75.75 0 0 1 .526-.716l.224.716-.224-.716h.003l.004-.002.014-.004a3 3 0 0 1 .194-.053c.126-.03.303-.07.514-.103a5.3 5.3 0 0 1 1.6-.025c.603.09 1.281.333 1.807.9.534.574.823 1.39.823 2.45 0 1.063-.29 1.88-.817 2.462-.52.574-1.192.833-1.795.94a5.3 5.3 0 0 1-1.599.016 6 6 0 0 1-.665-.125l-.044-.012-.014-.004h-.005l-.001-.001H6.64z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAdobeDreamweaverCircleOutline;
