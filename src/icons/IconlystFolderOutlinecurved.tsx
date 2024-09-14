import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderOutlinecurved = ({
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
      d="M7.445 15.476h9.593a.75.75 0 0 0 0-1.5H7.445a.75.75 0 0 0 0 1.5"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M1.89 14.015c0 7.49 4.49 8.085 10.36 8.085s10.36-.595 10.36-8.112c0-1.822 0-4.87-1.885-6.904-1.173-1.266-2.695-1.237-3.917-1.213-.737.016-1.435.028-1.898-.235-.582-.33-.78-.7-1.03-1.167-.287-.538-.646-1.207-1.592-1.717-1.68-.906-3.643-1.084-6.177-.563-2.564.526-4.221 2.787-4.221 5.76zM6.413 3.658a11.4 11.4 0 0 1 2.279-.257c1.108 0 2.05.222 2.884.671.55.297.73.636.981 1.104l.001.002c.291.542.653 1.217 1.61 1.762.814.462 1.741.447 2.643.432h.026c1.11-.024 2.072-.04 2.788.731 1.485 1.603 1.485 4.18 1.485 5.912 0 5.936-2.837 6.585-8.86 6.585-6.161 0-8.86-.623-8.86-6.585V7.95c0-1.774.794-3.834 3.023-4.29"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFolderOutlinecurved;
