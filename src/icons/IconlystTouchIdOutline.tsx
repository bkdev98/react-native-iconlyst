import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTouchIdOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 4.717a5.893 5.893 0 0 0-5.894 5.893v4.685q0 .383.048.754a.75.75 0 1 1-1.489.188 8 8 0 0 1-.059-.942V10.61a7.393 7.393 0 0 1 7.394-7.393 7.394 7.394 0 0 1 7.394 7.393v4.685a7.5 7.5 0 0 1-.113 1.295c-.203.98-.52 1.885-1.009 2.651-.326.52-.716.999-1.159 1.421a.75.75 0 0 1-1.035-1.085c.352-.336.664-.719.925-1.136l.004-.005c.36-.563.623-1.278.802-2.138q.084-.49.085-1.003V10.61a5.894 5.894 0 0 0-5.894-5.893M6.217 18.206a.75.75 0 0 1 1.033.239 5.89 5.89 0 0 0 6.266 2.636.75.75 0 0 1 .322 1.465 7.386 7.386 0 0 1-7.86-3.307.75.75 0 0 1 .239-1.033"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.266 8.22a.75.75 0 0 1 1.06.043 4.18 4.18 0 0 1 1.11 2.84v3.736a4.185 4.185 0 0 1-8.373 0 .75.75 0 0 1 1.5 0 2.685 2.685 0 0 0 5.372 0v-3.737c0-.703-.27-1.342-.712-1.822a.75.75 0 0 1 .043-1.06M8.063 11.098a4.186 4.186 0 0 1 4.186-4.186.75.75 0 0 1 0 1.5 2.686 2.686 0 0 0-2.686 2.686v.938a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.247 10.256a.75.75 0 0 1 .75.75v3.932a.75.75 0 0 1-1.5 0v-3.932a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTouchIdOutline;
