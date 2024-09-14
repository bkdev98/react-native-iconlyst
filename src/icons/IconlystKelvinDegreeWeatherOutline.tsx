import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKelvinDegreeWeatherOutline = ({
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
      d="M3.065 3.156a.906.906 0 1 1 1.812 0 .906.906 0 0 1-1.812 0M17.852 8.974a2.81 2.81 0 0 0-2.405 1.353.75.75 0 0 1-1.281-.78 4.311 4.311 0 1 1 6.09 5.817.75.75 0 1 1-.837-1.244 2.811 2.811 0 0 0-1.567-5.147"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.272 10.82c.79-1.042 2.054-1.876 3.87-1.876 1.815 0 3.08.834 3.868 1.876a5.6 5.6 0 0 1 1.03 2.387c.881.13 1.692.5 2.324 1.104.8.763 1.264 1.85 1.264 3.152a4.31 4.31 0 0 1-2.562 3.945 4.7 4.7 0 0 1-1.717.342h-8.42a4.7 4.7 0 0 1-1.74-.359 4.31 4.31 0 0 1-2.535-3.928c0-1.302.465-2.39 1.265-3.152.633-.604 1.443-.974 2.324-1.104a5.6 5.6 0 0 1 1.03-2.387m1.197.905c-.562.743-.787 1.635-.787 2.18a.75.75 0 0 1-.744.75c-.81.007-1.5.28-1.984.741-.476.455-.8 1.138-.8 2.067a2.81 2.81 0 0 0 1.64 2.555c.422.17.838.232 1.135.232h8.42c.3 0 .718-.06 1.144-.228a2.81 2.81 0 0 0 1.635-2.559c0-.93-.323-1.612-.8-2.067-.482-.46-1.173-.734-1.983-.742a.75.75 0 0 1-.743-.75c0-.544-.226-1.436-.788-2.178-.538-.712-1.38-1.282-2.673-1.282s-2.134.57-2.672 1.281M5.945 3.584a.75.75 0 0 1 .75.75v4.055a.75.75 0 1 1-1.5 0V4.334a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.454 3.854a.75.75 0 0 1-.098 1.057L6.428 7.34a.75.75 0 0 1-.958-1.153l2.928-2.431a.75.75 0 0 1 1.056.097"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.373 8.952a.75.75 0 0 0 .068-1.059L7.4 5.573a.75.75 0 0 0-1.127.99l2.04 2.321a.75.75 0 0 0 1.06.068"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystKelvinDegreeWeatherOutline;
