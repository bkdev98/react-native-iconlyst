import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKeySettingTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.413 7.047-.007-.007a1.37 1.37 0 0 1-.403-.775l-.194-1.358a1.35 1.35 0 0 0-.76-1.019 10 10 0 0 0-.856-.354 1.34 1.34 0 0 0-1.258.182l-1.1.824a1.37 1.37 0 0 1-.83.264h-.01c-.3 0-.592-.084-.83-.264l-1.1-.824a1.34 1.34 0 0 0-1.258-.182 9 9 0 0 0-.856.354 1.34 1.34 0 0 0-.76 1.019l-.195 1.359c-.043.297-.19.562-.402.774l-.007.007a1.38 1.38 0 0 1-.775.403l-1.358.194a1.34 1.34 0 0 0-1.02.76q-.198.42-.353.855c-.152.425-.089.898.182 1.259l.829 1.105c.172.229.262.508.263.794v0l.001.064c.002.29-.09.57-.263.801l-.83 1.106a1.34 1.34 0 0 0-.182 1.258q.156.435.354.856c.193.407.572.696 1.019.76l1.359.195c.297.042.562.19.774.402l.007.007c.211.211.36.478.402.774L7.191 20c.063.445.352.825.76 1.017q.42.2.855.355a1.34 1.34 0 0 0 1.259-.183l1.098-.823c.24-.18.532-.263.832-.262h.01c.3-.001.592.082.832.262l1.097.823c.361.271.834.335 1.258.183q.437-.156.857-.354c.407-.193.696-.572.76-1.018l.196-1.368a1.33 1.33 0 0 1 .376-.749l.043-.044c.204-.207.467-.34.753-.38l1.37-.196a1.34 1.34 0 0 0 1.017-.761q.2-.42.355-.855a1.34 1.34 0 0 0-.183-1.259l-.829-1.106a1.33 1.33 0 0 1-.263-.793l-.001-.063c-.002-.29.09-.571.264-.803l.83-1.105c.27-.361.334-.833.182-1.258a10 10 0 0 0-.354-.855 1.34 1.34 0 0 0-1.018-.761l-1.36-.195a1.37 1.37 0 0 1-.774-.402"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.06 12.451a1.801 1.801 0 1 0 1.802-1.802h-.004a1.8 1.8 0 0 0-1.798 1.802"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.012 12.454H7.336v1.802M10.087 14.256v-1.802"
    />
  </Svg>
);
export default IconlystKeySettingTwoTone;
