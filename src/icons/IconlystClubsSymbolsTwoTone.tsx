import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystClubsSymbolsTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.09 16.666c-.83.39-1.66.47-2.29.49-1.54.06-3.03-.79-3.72-2.19-1-2.02-.02-4.57 2.09-5.4.84-.32 1.78-.35 2.63-.08-1.03-1.2-1.26-2.95-.53-4.37.81-1.59 2.68-2.45 4.42-2.02 1.34.33 2.45 1.38 2.83 2.71.38 1.28.05 2.65-.8 3.67.91-.23 1.83-.24 2.72.14 1.89.81 2.86 3.06 2.13 4.98a3.945 3.945 0 0 1-3.64 2.54c-.67.01-1.61-.07-2.51-.47"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.09 16.666c-.062 1.593-1.034 3.05-1.637 3.806-.166.208-.018.544.248.544h6.094c.268 0 .416-.337.249-.545-.602-.755-1.57-2.207-1.624-3.805"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystClubsSymbolsTwoTone;
