import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSettingBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.295 20.736 1.099-.823c.24-.18.532-.263.832-.262h.01c.299-.001.592.082.831.262l1.098.823c.36.27.834.335 1.258.183q.436-.157.856-.354c.408-.193.697-.572.76-1.018l.196-1.369a1.33 1.33 0 0 1 .42-.793c.203-.206.467-.34.753-.38l1.369-.195a1.34 1.34 0 0 0 1.018-.761q.198-.419.355-.856a1.34 1.34 0 0 0-.183-1.258l-.83-1.106a1.33 1.33 0 0 1-.263-.793v-.063c-.003-.29.09-.571.264-.803l.829-1.105c.27-.361.335-.833.183-1.258a10 10 0 0 0-.354-.856 1.34 1.34 0 0 0-1.02-.76l-1.36-.195a1.37 1.37 0 0 1-.773-.402l-.007-.007a1.37 1.37 0 0 1-.402-.775l-.194-1.358a1.35 1.35 0 0 0-.76-1.02 10 10 0 0 0-.856-.353 1.34 1.34 0 0 0-1.258.182l-1.1.824a1.37 1.37 0 0 1-.83.263h-.011c-.3 0-.592-.083-.83-.263l-1.1-.824a1.34 1.34 0 0 0-1.258-.182q-.436.156-.855.354a1.34 1.34 0 0 0-.761 1.019l-.195 1.359c-.042.297-.19.562-.401.774l-.007.007a1.38 1.38 0 0 1-.776.403l-1.358.194a1.34 1.34 0 0 0-1.019.76q-.198.42-.354.855c-.152.425-.088.898.182 1.259l.83 1.105c.171.229.262.508.263.794v.064c.003.29-.09.57-.263.801l-.83 1.106"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.596 15.933a4.01 4.01 0 0 0 4.314-.953 4 4 0 0 0 .813-4.35l-1.967 2.029a.77.77 0 0 1-.685.22l-.946-.172a.76.76 0 0 1-.61-.591l-.203-.944a.76.76 0 0 1 .199-.692l1.967-2.028a4 4 0 0 0-4.323.946 4.01 4.01 0 0 0-.818 4.345l-3.456 3.494c-.62.64-.59 1.677.091 2.278.641.564 1.634.462 2.229-.15z"
    />
  </Svg>
);
export default IconlystSettingBroken;
