import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTicketRemoveBold = ({
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
      d="M14.083 12.75H9.917a.75.75 0 1 1 0-1.5h4.166a.75.75 0 1 1 0 1.5m6.961.913c-.091-.073-.231-.147-.753-.422a1.38 1.38 0 0 1-.752-1.243c0-.529.28-.992.807-1.268.492-.258.611-.32.701-.393.281-.228.357-.354.43-.713.017-.085.023-.229.023-.515 0-1.13 0-1.698-.147-2.209a3.73 3.73 0 0 0-2.55-2.549c-.511-.148-1.078-.148-2.209-.148H7.407c-1.129 0-1.695 0-2.205.148a3.73 3.73 0 0 0-2.553 2.555c-.147.512-.146 1.077-.145 2.232.001.263.007.398.023.487.073.357.149.483.432.711.087.07.211.137.751.422.47.248.75.712.749 1.282-.017.49-.295.94-.726 1.176-.564.31-.701.386-.794.46-.282.236-.348.348-.418.71a3.4 3.4 0 0 0-.021.511c0 1.125 0 1.69.146 2.2a3.72 3.72 0 0 0 2.556 2.554c.508.147 1.073.147 2.199.147h9.193c1.13 0 1.697 0 2.209-.149a3.72 3.72 0 0 0 2.549-2.548c.149-.514.148-1.08.147-2.209 0-.283-.006-.424-.022-.518-.073-.354-.149-.48-.433-.71"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.083 12.75H9.917a.75.75 0 1 1 0-1.5h4.166a.75.75 0 1 1 0 1.5m6.961.913c-.091-.073-.231-.147-.753-.422a1.38 1.38 0 0 1-.752-1.243c0-.529.28-.992.807-1.268.492-.258.611-.32.701-.393.281-.228.357-.354.43-.713.017-.085.023-.229.023-.515 0-1.13 0-1.698-.147-2.209a3.73 3.73 0 0 0-2.55-2.549c-.511-.148-1.078-.148-2.209-.148H7.407c-1.129 0-1.695 0-2.205.148a3.73 3.73 0 0 0-2.553 2.555c-.147.512-.146 1.077-.145 2.232.001.263.007.398.023.487.073.357.149.483.432.711.087.07.211.137.751.422.47.248.75.712.749 1.282-.017.49-.295.94-.726 1.176-.564.31-.701.386-.794.46-.282.236-.348.348-.418.71a3.4 3.4 0 0 0-.021.511c0 1.125 0 1.69.146 2.2a3.72 3.72 0 0 0 2.556 2.554c.508.147 1.073.147 2.199.147h9.193c1.13 0 1.697 0 2.209-.149a3.72 3.72 0 0 0 2.549-2.548c.149-.514.148-1.08.147-2.209 0-.283-.006-.424-.022-.518-.073-.354-.149-.48-.433-.71"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTicketRemoveBold;
