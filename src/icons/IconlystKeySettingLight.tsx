import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKeySettingLight = ({
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
      d="m17.413 7.047-.007-.007a1.37 1.37 0 0 1-.403-.776l-.194-1.358a1.35 1.35 0 0 0-.76-1.018 10 10 0 0 0-.856-.355 1.34 1.34 0 0 0-1.258.182l-1.1.824a1.37 1.37 0 0 1-.83.264h-.01c-.3 0-.592-.084-.83-.264l-1.1-.824a1.34 1.34 0 0 0-1.258-.182 9 9 0 0 0-.856.355 1.34 1.34 0 0 0-.76 1.018l-.195 1.36c-.043.296-.19.562-.402.774l-.007.007a1.38 1.38 0 0 1-.775.403l-1.358.193a1.34 1.34 0 0 0-1.02.76q-.198.42-.353.855c-.152.426-.089.898.182 1.26l.829 1.105c.172.228.262.508.263.794v0l.001.064c.002.289-.09.57-.263.8l-.83 1.107a1.34 1.34 0 0 0-.182 1.257q.156.436.354.856c.193.408.572.697 1.019.761l1.359.195c.297.041.562.19.774.401l.007.007c.211.212.36.478.402.775L7.191 20c.063.445.352.824.76 1.017q.42.198.855.355a1.34 1.34 0 0 0 1.259-.183l1.098-.823c.24-.18.532-.264.832-.263h.01c.3 0 .592.083.832.263l1.097.823c.361.27.834.335 1.258.183q.437-.157.857-.354c.407-.194.696-.572.76-1.019l.196-1.368a1.33 1.33 0 0 1 .42-.793c.203-.206.466-.34.752-.38l1.37-.196a1.34 1.34 0 0 0 1.017-.76q.2-.419.355-.856a1.34 1.34 0 0 0-.183-1.258l-.829-1.106a1.33 1.33 0 0 1-.263-.793l-.001-.064c-.002-.29.09-.57.264-.802l.83-1.106c.27-.36.334-.832.182-1.258a10 10 0 0 0-.354-.855 1.34 1.34 0 0 0-1.018-.76l-1.36-.195a1.37 1.37 0 0 1-.774-.402"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.06 12.45a1.801 1.801 0 1 0 1.801-1.801h-.003a1.8 1.8 0 0 0-1.798 1.802"
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
export default IconlystKeySettingLight;
