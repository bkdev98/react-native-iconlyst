import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneFlyBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M21.194 11.707c-.851-1.02-2.312-1.204-2.901-1.236-1.034-.055-2.075-.044-3.082-.034l-.436-.037a179 179 0 0 0-2.085-4.395c-.478-.994-1.163-1.57-2.028-1.714-.485-.084-.968-.1-1.435-.115q-.298-.008-.607-.024a.751.751 0 0 0-.794.743l-.045 5.483c-.605-.003-1.318.001-2.03.002-.704.002-1.406.004-1.997.003l.006-.827a.737.737 0 0 0-.744-.74c-.428-.014-.753.345-.756.76-.003.282-.01 1.173-.01 1.407.01 3.084 1.829 4.96 4.864 5.017 3.557.067 7.054.081 11.209.081 1.488 0 3.187-.772 3.404-2.466.092-.72-.093-1.38-.533-1.908M18.756 20.09H5.246a.75.75 0 0 0 0 1.5h13.51a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlaneFlyBold;
