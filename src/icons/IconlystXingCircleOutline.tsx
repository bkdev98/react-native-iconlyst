import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystXingCircleOutline = ({
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
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.906 6.649a.75.75 0 0 1 .27 1.026l-3.064 5.253 2.111 3.378a.75.75 0 0 1-1.272.795L11.75 13.58a1.22 1.22 0 0 1-.02-1.261l3.15-5.399a.75.75 0 0 1 1.026-.27M8.78 8.544a.75.75 0 0 1 1.034.238l1.026 1.64c.24.385.247.87.019 1.262l-1.738 2.98a.75.75 0 0 1-1.296-.755l1.653-2.835-.936-1.497a.75.75 0 0 1 .239-1.033"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystXingCircleOutline;
