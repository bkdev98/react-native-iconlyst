import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSettingTwoTone = ({
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
    <Circle
      r={2.7}
      stroke={props.color}
      strokeWidth={1.5}
      opacity={0.4}
      transform="matrix(-1 0 0 1 12.501 12)"
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M14.715 3.275c.295.074.486.343.555.639.163.703.606 1.34 1.28 1.73a2.7 2.7 0 0 0 1.97.29c.295-.07.62-.017.817.213A9 9 0 0 1 21 9.033c.112.323-.052.665-.316.882A2.7 2.7 0 0 0 19.7 12c0 .84.384 1.59.985 2.085.264.217.427.56.315.882a9 9 0 0 1-1.662 2.886c-.198.23-.523.283-.818.213a2.7 2.7 0 0 0-1.97.29 2.7 2.7 0 0 0-1.28 1.73c-.069.296-.26.565-.555.64-.708.179-1.45.274-2.215.274a9 9 0 0 1-2.214-.274c-.295-.075-.487-.344-.555-.64a2.7 2.7 0 0 0-1.28-1.73 2.7 2.7 0 0 0-1.97-.29c-.295.07-.62.017-.818-.213a9 9 0 0 1-1.662-2.886c-.113-.322.051-.665.315-.882A2.7 2.7 0 0 0 5.3 12c0-.84-.383-1.59-.984-2.085-.264-.217-.428-.56-.315-.882a9 9 0 0 1 1.662-2.886c.198-.23.523-.283.818-.213a2.7 2.7 0 0 0 1.97-.29 2.7 2.7 0 0 0 1.28-1.73c.068-.296.26-.565.555-.64A9 9 0 0 1 12.5 3c.765 0 1.507.095 2.215.275Z"
    />
  </Svg>
);
export default IconlystSettingTwoTone;
