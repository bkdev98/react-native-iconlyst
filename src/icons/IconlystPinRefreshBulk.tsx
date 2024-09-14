import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinRefreshBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M19.009 5.313a.75.75 0 0 0-1.284.433l-.367 3.084a.75.75 0 0 0 .971.801v.003l1.37-.415c1.055 2.901.447 6.294-1.848 8.607a8.21 8.21 0 0 1-7.27 2.295.75.75 0 1 0-.263 1.476 9.71 9.71 0 0 0 8.598-2.715c3.69-3.717 3.732-9.804.093-13.569M5.97 14.291a.74.74 0 0 0-.412.078l-.002-.01-.136.08-.009.005-1.017.611c-1.206-2.979-.602-6.543 1.797-8.926a8.22 8.22 0 0 1 7.29-2.24.75.75 0 0 0 .273-1.475 9.71 9.71 0 0 0-8.619 2.651c-3.717 3.69-3.804 9.778-.193 13.57a.74.74 0 0 0 .777.195.75.75 0 0 0 .51-.619l.39-3.082a.75.75 0 0 0-.65-.838" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 12.13a.939.939 0 1 1-.002-1.882.939.939 0 0 1 .003 1.881m0-4.55c-2.13 0-3.86 1.73-3.86 3.86 0 2.6 3.02 5.17 3.86 5.17s3.86-2.57 3.86-5.17c0-2.13-1.74-3.86-3.86-3.86"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPinRefreshBulk;
