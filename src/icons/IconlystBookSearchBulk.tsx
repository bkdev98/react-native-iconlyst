import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBookSearchBulk = ({
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
      d="M8.36 16.47a.3.3 0 0 0 .3.3h8.97a.3.3 0 0 1 .3.3l.005 2.72c0 .253-.199.45-.454.45H6.297c-.588 0-.99-.277-1.222-.51a1.72 1.72 0 0 1-.51-1.188l.001-.032v-.06a1.74 1.74 0 0 1 1.731-1.68h.263a.3.3 0 0 0 .3-.3V2.56a.3.3 0 0 0-.3-.3h-.164a3.34 3.34 0 0 0-3.33 3.34v12.91c0 .857.336 1.667.947 2.28.612.613 1.424.95 2.284.95h11.184a1.955 1.955 0 0 0 1.954-1.952l-.002-4.902a.33.33 0 0 0-.184-.288 2 2 0 0 1-.475-.35l-.174-.173a.31.31 0 0 0-.308-.075 4.72 4.72 0 0 1-6.045-4.52 4.725 4.725 0 0 1 4.719-4.72c.774 0 1.505.187 2.15.518.139.072.311-.026.31-.182V4.21a1.95 1.95 0 0 0-1.945-1.95h-8.82a.3.3 0 0 0-.3.3z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.655 13.362a.75.75 0 0 0 1.061-.002.75.75 0 0 0-.002-1.061l-.879-.875c.38-.554.602-1.224.602-1.944a3.475 3.475 0 0 0-3.47-3.47 3.474 3.474 0 0 0-3.47 3.47 3.468 3.468 0 0 0 5.244 2.972zM14.997 9.48c0-1.086.883-1.97 1.97-1.97s1.97.884 1.97 1.97c0 1.08-.884 1.96-1.97 1.96a1.966 1.966 0 0 1-1.97-1.96"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBookSearchBulk;
