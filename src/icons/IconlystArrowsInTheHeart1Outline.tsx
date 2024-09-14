import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsInTheHeart1Outline = ({
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
      d="M5.12 3.523a.75.75 0 0 1 .747.052l2.706 1.822a.75.75 0 0 1 .329.676l-.159 2.198a.75.75 0 0 1-.45.634l-2.038.885a.75.75 0 0 1-.717-.066L2.83 7.901a.75.75 0 0 1 .12-1.31l1.622-.704.127-1.744a.75.75 0 0 1 .42-.62m.982 2.019-.066.906a.75.75 0 0 1-.449.634l-.783.34 1.23.829 1.246-.54.095-1.312zM5.415 11.212a.75.75 0 0 1 .944.484c.654 2.036 2.422 3.89 4.125 5.274a25 25 0 0 0 2.807 1.966l.14-.085a25 25 0 0 0 1.301-.854.75.75 0 1 1 .862 1.228 26 26 0 0 1-1.786 1.148l-.112.063-.03.017-.009.005-.003.002-.362-.657-.359.658h-.002l-.004-.003-.016-.01-.057-.031-.21-.121a26.181 26.181 0 0 1-3.105-2.162c-1.76-1.43-3.815-3.514-4.608-5.978a.75.75 0 0 1 .484-.944m7.877 8.59-.359.66a.75.75 0 0 0 .72-.002zM17.605 5.676a4.32 4.32 0 0 0-3.866.653.75.75 0 0 1-.897-.002 4.3 4.3 0 0 0-2.226-.841.75.75 0 0 1 .12-1.496 5.8 5.8 0 0 1 2.557.833 5.81 5.81 0 0 1 4.765-.577l.005.001c3.45 1.112 4.576 4.827 3.59 7.909a.75.75 0 0 1-1.428-.457c.81-2.535-.18-5.236-2.62-6.023"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.391 7.775a.75.75 0 0 1 1.048-.162L10.61 9.2a.75.75 0 0 1-.887 1.21L7.553 8.824a.75.75 0 0 1-.162-1.048M19.717 14.016a.75.75 0 0 1 .94.491l.839 2.675a.75.75 0 0 1-.718.975l-2.741-.008a.75.75 0 0 1 .004-1.5l1.717.005-.533-1.698a.75.75 0 0 1 .491-.94"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.404 14.21a.75.75 0 0 1 1.048-.163l3.772 2.754a.75.75 0 1 1-.885 1.211l-3.771-2.754a.75.75 0 0 1-.164-1.048"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowsInTheHeart1Outline;
