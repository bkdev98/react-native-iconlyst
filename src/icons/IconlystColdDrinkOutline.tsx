import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystColdDrinkOutline = ({
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
      fillRule="evenodd"
      d="M14.847 4.217a.57.57 0 0 1 .747-.435zm0 0-.296 1.619h1.955c1.108 0 2.051.874 2.051 2.008l.001 4.153a1 1 0 0 1 0 .104l.002 6.687c0 1.66-1.384 2.962-3.037 2.962H8.98c-1.653 0-3.038-1.301-3.038-2.96l-.001-6.722v-.035L5.94 7.844c0-1.133.943-2.008 2.052-2.008h5.035l.345-1.889c.229-1.25 1.52-2 2.718-1.58l1.968.69a.75.75 0 0 1-.497 1.416l-1.967-.69m-2.842 3.553h-4.76c-.329 0-.551.251-.552.508l.001 2.911c1.477-.593 3.252-.501 4.636.276zm-.968 5.3-.651 3.565a.75.75 0 1 0 1.475.27l.56-3.063a5.55 5.55 0 0 0 3.89-.063l.002 5.444c0 .783-.665 1.461-1.537 1.461H8.98c-.873 0-1.538-.678-1.538-1.46l-.001-6.357c1.273-.812 3.166-.745 4.338.2zm5.274-.968c-1.036.66-2.482.738-3.615.235l.834-4.567h2.229c.329 0 .551.25.551.508zM9.72 13.497a.75.75 0 0 1 .546.91l-.018.07a.75.75 0 0 1-1.455-.365l.018-.07a.75.75 0 0 1 .91-.545m5.54 2.884a.75.75 0 0 1 .545.91l-.017.07a.75.75 0 1 1-1.456-.364l.018-.07a.75.75 0 0 1 .91-.546m-5.015 1.207a.75.75 0 0 1 .545.91l-.017.07a.75.75 0 0 1-1.455-.364l.017-.07a.75.75 0 0 1 .91-.546"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystColdDrinkOutline;
