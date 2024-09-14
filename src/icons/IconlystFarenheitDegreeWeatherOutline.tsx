import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFarenheitDegreeWeatherOutline = ({
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
      d="M17.851 8.974a2.81 2.81 0 0 0-2.404 1.353.75.75 0 0 1-1.282-.78 4.311 4.311 0 1 1 6.09 5.817.75.75 0 1 1-.837-1.244 2.811 2.811 0 0 0-1.567-5.147"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.273 10.82c.789-1.042 2.053-1.876 3.869-1.876 1.815 0 3.08.834 3.869 1.876.576.76.902 1.635 1.03 2.387.88.13 1.69.5 2.323 1.104.8.763 1.264 1.85 1.264 3.152a4.31 4.31 0 0 1-2.562 3.945 4.7 4.7 0 0 1-1.717.342h-8.42a4.7 4.7 0 0 1-1.739-.359 4.31 4.31 0 0 1-2.535-3.928c0-1.302.465-2.39 1.264-3.152.633-.604 1.444-.974 2.325-1.104a5.6 5.6 0 0 1 1.029-2.387m1.196.905c-.562.743-.787 1.635-.787 2.18a.75.75 0 0 1-.743.75c-.81.007-1.502.28-1.985.741-.476.455-.8 1.138-.8 2.067a2.81 2.81 0 0 0 1.64 2.555c.422.17.838.232 1.135.232h8.42c.3 0 .718-.06 1.144-.228a2.81 2.81 0 0 0 1.636-2.559c0-.93-.324-1.612-.8-2.067-.483-.46-1.174-.734-1.984-.742a.75.75 0 0 1-.743-.75c0-.544-.225-1.436-.787-2.178-.54-.712-1.38-1.282-2.673-1.282s-2.135.57-2.673 1.281M3.065 3.17a.92.92 0 1 1 1.84 0 .92.92 0 0 1-1.84 0M5.702 4.316c0-.648.525-1.173 1.173-1.173H9.5a.75.75 0 1 1 0 1.5H7.202v5.075a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.702 7.052a.75.75 0 0 1 .75-.75H9.5a.75.75 0 1 1 0 1.5H6.452a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFarenheitDegreeWeatherOutline;
