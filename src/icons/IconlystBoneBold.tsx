import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBoneBold = ({
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
      d="M18.758 14.339A.75.75 0 0 0 17.7 15.4l.934.93a.747.747 0 0 0 1.061-.002.75.75 0 0 0-.002-1.06zM21 11.27h-1.777a.75.75 0 0 0 0 1.5H21a.75.75 0 0 0 0-1.5M5.37 7.669A.75.75 0 0 0 4.31 8.73l.935.93a.75.75 0 1 0 1.059-1.062zM5.528 12.02a.75.75 0 0 0-.75-.75H3a.75.75 0 0 0 0 1.5h1.777a.75.75 0 0 0 .75-.75M18.229 9.88a.75.75 0 0 0 .529-.22l.934-.928a.751.751 0 0 0-1.06-1.063l-.932.93a.75.75 0 0 0 .529 1.28M5.245 14.339l-.935.93a.75.75 0 0 0 1.06 1.062l.934-.93a.749.749 0 1 0-1.059-1.062M14.322 6.308V3.58a.499.499 0 0 0-.205-.535.52.52 0 0 0-.395-.086h-3.558a.5.5 0 0 0-.5.5v2.85a2.534 2.534 0 0 0-2.03 2.48 2.53 2.53 0 0 0 2.53 2.531A2.53 2.53 0 0 0 12 10.522c.469.5 1.132.8 1.835.8a2.534 2.534 0 0 0 2.531-2.532 2.534 2.534 0 0 0-2.046-2.48M13.836 12.68c-.7 0-1.364.3-1.836.802a2.53 2.53 0 0 0-1.837-.802 2.533 2.533 0 0 0-2.53 2.53c0 1.224.874 2.248 2.03 2.48v2.86a.5.5 0 0 0 .5.5h3.673a.5.5 0 0 0 .485-.621v-2.735a2.535 2.535 0 0 0 2.046-2.484 2.533 2.533 0 0 0-2.53-2.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBoneBold;
