import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperDownload2Bold = ({
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
      d="M11.47 7.89c.027.028.064.042.096.065.047.035.09.074.144.097q.138.058.29.059c.024 0 .044-.012.067-.014a.8.8 0 0 0 .222-.044.8.8 0 0 0 .245-.165l2.052-2.06a.749.749 0 1 0-1.062-1.057l-.773.774V3.264a.75.75 0 0 0-1.5 0v2.283l-.773-.776a.75.75 0 0 0-1.063 1.058zM11.999 13.752a1.454 1.454 0 1 0 0 2.91 1.454 1.454 0 1 0 0-2.91"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.577 19.202h-1.352a.75.75 0 0 1 0-1.5h1.352a.75.75 0 0 1 0 1.5m-5.578-1.04a2.96 2.96 0 0 1-2.956-2.96 2.956 2.956 0 0 1 5.912 0 2.96 2.96 0 0 1-2.956 2.96m-4.225-5.46H6.422a.75.75 0 0 1 0-1.5h1.352a.75.75 0 0 1 0 1.5m9.83-3.91H6.397c-2.138 0-3.575 1.499-3.575 3.73v5.36c0 2.231 1.438 3.73 3.576 3.73h11.206c2.138 0 3.574-1.499 3.574-3.73v-5.36c0-2.231-1.436-3.73-3.574-3.73"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMoneyPaperDownload2Bold;
