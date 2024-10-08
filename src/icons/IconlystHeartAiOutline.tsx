import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartAiOutline = ({
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
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.336 6.482C10.41 4.708 8.53 4.204 7.085 4.665c-2.825.91-3.947 4.03-3.019 6.934.759 2.357 2.481 4.349 4.213 5.765a15 15 0 0 0 2.403 1.618c.35.184.652.318.894.404.259.092.393.11.425.11h.009l.026-.004q.034-.004.09-.017.118-.026.3-.09c.243-.088.548-.224.9-.41a15 15 0 0 0 2.416-1.632c1.741-1.426 3.46-3.417 4.191-5.74l.002-.004c.928-2.902-.2-6.022-3.026-6.934-1.447-.453-3.293.017-4.245 1.82a.75.75 0 0 1-1.328-.003m.665-1.688c-1.417-1.679-3.617-2.119-5.373-1.558h-.002c-3.839 1.237-5.09 5.373-3.988 8.82v.002c.879 2.73 2.832 4.947 4.692 6.467a16.3 16.3 0 0 0 2.653 1.785c.395.207.765.373 1.09.49.308.109.636.196.928.196s.624-.089.933-.2a9 9 0 0 0 1.094-.496c.794-.42 1.727-1.03 2.665-1.797 1.863-1.526 3.819-3.743 4.67-6.448 1.104-3.449-.16-7.583-3.997-8.819l-.005-.001c-1.754-.551-3.933-.138-5.36 1.559"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.875 14.54a.75.75 0 0 1-.704-.49l-.091-.248a2.65 2.65 0 0 0-1.567-1.569l-.247-.092a.75.75 0 0 1 0-1.406l.247-.092A2.65 2.65 0 0 0 9.08 9.074l.091-.247a.75.75 0 0 1 1.407 0l.092.247c.268.727.84 1.3 1.566 1.57l.247.09a.75.75 0 0 1 0 1.408l-.247.091a2.65 2.65 0 0 0-1.566 1.57l-.092.247a.75.75 0 0 1-.703.49m.74-3.102a4.2 4.2 0 0 1-.74-.74 4.2 4.2 0 0 1-.74.74q.417.323.74.74.323-.416.74-.74M14.679 15.663a.75.75 0 0 1-.718-.532.85.85 0 0 0-.565-.566.75.75 0 0 1 0-1.435.85.85 0 0 0 .565-.567.75.75 0 0 1 1.435 0 .85.85 0 0 0 .566.567.75.75 0 0 1 0 1.435.85.85 0 0 0-.566.566.75.75 0 0 1-.717.532"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHeartAiOutline;
